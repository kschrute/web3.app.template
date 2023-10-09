'use client'

import React, { useEffect, useRef } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { verifyMessage } from 'viem'
import AppAlert from '../common/AppAlert'
import AppExternalLink from '../common/AppExternalLink'
import { useAuthLazyQuery, useSignInMutation } from '../../graphql/client'
import { useAccount, useDisconnect, useSignMessage } from 'wagmi'

export const LoginModal = () => {
  const defaultButtonRef = useRef<any>()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const [executeQuery, { data, error, refetch }] = useAuthLazyQuery()
  const [signin] = useSignInMutation()

  const { signMessage } = useSignMessage({
    async onSuccess(signature, variables) {
      const isValid = await verifyMessage({
        address: address!,
        message: variables.message,
        signature,
      })
      const response = await signin({ variables: { data: { address: address!, signature } } })

      const isAuthenticated = response?.data?.signin?.authenticated
      const token = response?.data?.signin?.token
      token && localStorage.setItem('token', token)

      if (isAuthenticated) {
        refetch && (await refetch())
      }
    },
  })

  const isAuthenticated = data?.auth?.authenticated
  const challenge = data?.auth?.challenge
  const isLoading = isAuthenticated === undefined
  const isModalOpen = !!(address && isAuthenticated !== undefined && !isAuthenticated)

  useEffect(() => {
    if (address) {
      executeQuery({
        variables: { data: { address } },
      })
    }
  }, [address, executeQuery])

  const onLogin = () => challenge && signMessage({ message: challenge })

  const onCancel = () => disconnect()

  return (
    <AlertDialog
      isOpen={isModalOpen}
      blockScrollOnMount={false}
      leastDestructiveRef={defaultButtonRef}
      size="lg"
      onClose={() => null}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent w="xl">
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Welcome
        </AlertDialogHeader>

        <AlertDialogBody>
          {error !== undefined && <AppAlert description={error.toString()} status="error" mt={0} />}

          <VStack alignItems="flex-start" fontSize="sm" spacing={3}>
            <Text>
              By continuing to use this website, you acknowledge you have read and agreed to the{' '}
              <AppExternalLink href="https://strongblock.com/terms-of-service.html">Terms of Service</AppExternalLink>
            </Text>
          </VStack>
        </AlertDialogBody>

        <AlertDialogFooter>
          <Button isDisabled={isLoading} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            ref={defaultButtonRef}
            colorScheme="blue"
            ml={5}
            isDisabled={isLoading}
            onClick={onLogin}
          >
            {isLoading && <Spinner size="sm" mr={2} />} Accept and sign
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

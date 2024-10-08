'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { verifyMessage } from 'viem'
import { useAccount, useDisconnect, useSignMessage } from 'wagmi'
import { useAuthLazyQuery, useSignInMutation } from '../../graphql/client'
import AppAlert from '../common/AppAlert'
import AppExternalLink from '../common/AppExternalLink'

export default function LoginModal() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const defaultButtonRef = useRef<any>()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const [executeQuery, { data, error, refetch }] = useAuthLazyQuery()
  const [signin] = useSignInMutation()

  const { signMessage } = useSignMessage({
    mutation: {
      async onSuccess(signature, variables) {
        await verifyMessage({
          address,
          message: variables.message,
          signature,
        })
        const response = await signin({ variables: { data: { address, signature } } })

        const isAuthenticated = response?.data?.signin?.authenticated
        const token = response?.data?.signin?.token
        token && localStorage.setItem('token', token)

        if (isAuthenticated) {
          refetch && (await refetch())
        }
      },
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
          <Button ref={defaultButtonRef} colorScheme="blue" ml={5} isLoading={isLoading} onClick={onLogin}>
            Accept and sign
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

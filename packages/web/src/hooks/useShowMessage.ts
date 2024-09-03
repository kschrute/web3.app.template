import { type AlertStatus, useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

export const useShowMessage = (status: AlertStatus = 'success') => {
  const toast = useToast()

  return useCallback(
    (title: string, description: string | undefined = undefined) =>
      toast({
        title,
        description,
        status,
        duration: 5_000,
        isClosable: true,
      }),
    [toast, status],
  )
}

export const useShowSuccessMessage = () => useShowMessage('success')

export const useShowErrorMessage = () => useShowMessage('error')

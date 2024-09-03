import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import React from 'react'
import type { Abi, Address, ContractFunctionName } from 'viem'
import { useChainId, useWaitForTransactionReceipt } from 'wagmi'
import { createUseWriteContract } from 'wagmi/codegen'
import type { CreateUseWriteContractParameters } from 'wagmi/src/hooks/codegen/createUseWriteContract'
import { useShowErrorMessage, useShowSuccessMessage } from '../hooks/useShowMessage'

type stateMutability = 'nonpayable' | 'payable'

type Props = {
  description?: string
  handleErrors?: boolean
}

export function useWriteSmartContract<
  const abi extends Abi | readonly unknown[],
  const address extends Address | Record<number, Address> | undefined = undefined,
  functionName extends ContractFunctionName<abi, stateMutability> | undefined = undefined,
>(props: CreateUseWriteContractParameters<abi, address, functionName> & Props) {
  const chainId = useChainId()
  const showErrorMessage = useShowErrorMessage()
  const showSuccessMessage = useShowSuccessMessage()
  const addRecentTransaction = useAddRecentTransaction()
  const { abi, address, functionName, description, handleErrors = true } = props
  const {
    writeContractAsync,
    data: hash,
    error,
    isError,
    isPending,
    isPaused,
    isSuccess,
    isIdle,
  } = createUseWriteContract({
    abi,
    address: address?.[chainId] as `0x${string}` | undefined,
    functionName,
  })()

  // console.log('hash', hash)
  // console.log('isPending', isPending)
  // console.log('isPaused', isPaused)
  // console.log('isSuccess', isSuccess)
  // console.log('isIdle', isIdle)

  const {
    data: receipt,
    isError: isReceiptError,
    isLoading: isReceiptLoading,
    isSuccess: isReceiptSuccess,
    isPending: isReceiptPending,
    isPaused: isReceiptPaused,
    isFetched: isReceiptFetched,
    isFetching: isReceiptFetching,
  } = useWaitForTransactionReceipt({ hash, confirmations: 1 })

  // console.log('isReceiptError', isReceiptError)
  // console.log('isReceiptLoading', isReceiptLoading)
  // console.log('isReceiptSuccess', isReceiptSuccess)
  // console.log('isReceiptPending', isReceiptPending)
  // console.log('isReceiptPaused', isReceiptPaused)
  // console.log('isReceiptFetched', isReceiptFetched)
  // console.log('isReceiptFetching', isReceiptFetching)

  React.useEffect(() => {
    isError && error && handleErrors && showErrorMessage(error.message)
  }, [isError, error, handleErrors, showErrorMessage])

  React.useEffect(() => {
    if (hash) {
      addRecentTransaction({
        hash,
        description: description ?? hash,
      })
    }
  }, [hash, addRecentTransaction, description])

  React.useEffect(() => {
    isSuccess && showSuccessMessage('Transaction successfully submitted', hash)
  }, [isSuccess, showSuccessMessage, hash])

  React.useEffect(() => {
    isReceiptSuccess && showSuccessMessage('Transaction successfully confirmed', receipt?.transactionHash)
  }, [isReceiptSuccess, showSuccessMessage, receipt?.transactionHash])

  const write = React.useCallback(
    async (...args: Parameters<typeof writeContractAsync>) => {
      try {
        // @ts-ignore
        const hash = await writeContractAsync(args[0])
        addRecentTransaction({
          hash,
          description: description ?? hash,
        })
        return hash
      } catch (e) {
        if (handleErrors) {
          console.error(e)
        } else {
          throw e
        }
      }
    },
    [writeContractAsync, description, addRecentTransaction, handleErrors],
  ) as typeof writeContractAsync

  return {
    write,
    hash,
    isSubmitted: isSuccess,
    isConfirmed: isReceiptSuccess,
    isPending,
    isLoading: isReceiptLoading,
    isSuccess,
    isError,
    error,
  }
}

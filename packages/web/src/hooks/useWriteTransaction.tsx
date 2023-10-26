import React, { useCallback } from 'react'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { useShowErrorMessage, useShowSuccessMessage } from './useShowMessage'

type Config = {
  description?: string
}

export function useWriteTransaction(contractWrite: ReturnType<typeof useContractWrite>, config: Config = {}) {
  const showErrorMessage = useShowErrorMessage()
  const showSuccessMessage = useShowSuccessMessage()
  const addRecentTransaction = useAddRecentTransaction()

  const { description } = config

  const {
    writeAsync,
    data,
    error,
    isLoading,
    isError
  } = contractWrite

  const {
    data: receipt,
    isLoading: isPending,
    isSuccess
  } = useWaitForTransaction({ hash: data?.hash })

  React.useEffect(() => {
    isError && error && showErrorMessage(error.message)
  }, [isError, error, showErrorMessage])

  React.useEffect(() => {
    isSuccess && showSuccessMessage('Transaction successfully mined', receipt?.transactionHash)
  }, [isSuccess, showSuccessMessage, receipt?.transactionHash])

  const write = useCallback(async () => {
    const tx = await writeAsync?.()
    tx
    && addRecentTransaction({
      hash: tx.hash,
      description: description ?? tx.hash,
    })
  }, [writeAsync, description, addRecentTransaction])

  return { write, data, isLoading, isPending }
}

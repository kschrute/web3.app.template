import React, { useCallback } from 'react'
import { Config, useEstimateGas, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi'
import { SendTransactionVariables } from 'wagmi/query'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { useShowErrorMessage, useShowSuccessMessage } from '../hooks/useShowMessage'

type TxConfig = {
  description?: string
}

// TODO: Deprecate transaction
export function useWriteTransaction(transaction: SendTransactionVariables<Config, number>, config: TxConfig) {
  const showErrorMessage = useShowErrorMessage()
  const showSuccessMessage = useShowSuccessMessage()
  const addRecentTransaction = useAddRecentTransaction()
  const {
    sendTransactionAsync,
    data: hash,
    error,
    isError,
    isPending,
    isPaused,
    isSuccess,
    isIdle,
  } = useSendTransaction()
  const { data: gasData } = useEstimateGas({
    to: transaction.to,
    value: transaction.value,
  })
  const { description } = config

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

  const write = useCallback(
    async (transaction: SendTransactionVariables<Config, number>) => {
      console.log('[!] write', transaction)
      const hash = await sendTransactionAsync?.(transaction)
      // const hash = await sendTransactionAsync?.({
      //   // gas: gasData,
      //   ...transaction,
      // })
      // console.log('sendTransactionAsync hash', hash)
      addRecentTransaction({
        hash,
        description: description ?? hash,
      })
    },
    [sendTransactionAsync, description, addRecentTransaction],
  )

  // const write = useCallback(async () => {
  //   console.log('[!] write', transaction)
  //   const hash = await sendTransactionAsync?.({
  //     gas: gasData,
  //     ...transaction,
  //   })
  //   // console.log('sendTransactionAsync hash', hash)
  //   addRecentTransaction({
  //     hash,
  //     description: description ?? hash,
  //   })
  // }, [transaction, sendTransactionAsync, description, addRecentTransaction])

  React.useEffect(() => {
    isError && error && showErrorMessage(error.message)
  }, [isError, error, showErrorMessage])

  React.useEffect(() => {
    isSuccess && showSuccessMessage('Transaction successfully submitted', hash)
  }, [isSuccess, showSuccessMessage, hash])

  React.useEffect(() => {
    isReceiptSuccess && showSuccessMessage('Transaction successfully confirmed', receipt?.transactionHash)
  }, [isReceiptSuccess, showSuccessMessage, receipt?.transactionHash])

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

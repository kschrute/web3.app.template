'use client'

import React, { useEffect } from 'react'
import { useBlockNumber, useWaitForTransactionReceipt } from 'wagmi'
import { BaseError } from 'viem'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { stringify } from '../../utils/stringify'
import { useReadCounterNumber, useWriteCounterIncrement, useWriteCounterSetNumber } from '../../wagmi'
import { useQueryClient } from '@tanstack/react-query'

export function Counter() {
  return (
    <div>
      <CounterNumber />
      <CounterIncrease />
    </div>
  )
}

export function CounterNumber() {
  const queryClient = useQueryClient()
  const { data: blockNumber } = useBlockNumber({ watch: true })
  const { data, refetch, queryKey } = useReadCounterNumber()

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey })
  }, [blockNumber, queryClient, queryKey])

  return (
    <div>
      {data?.toString()}
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => refetch()}>refetch</button>
    </div>
  )
}

export function CounterIncrease() {
  const addRecentTransaction = useAddRecentTransaction()
  const { writeContractAsync: writeSetNumber } = useWriteCounterSetNumber()
  const { writeContractAsync: writeIncrement, data: hash, error, isPending, isError } = useWriteCounterIncrement()
  const {
    data: receipt,
    isLoading: isReceiptLoading,
    isSuccess,
  } = useWaitForTransactionReceipt({ hash })

  const onIncrease = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const hash = await writeIncrement({})
    hash && addRecentTransaction({
      hash,
      description: 'Increment counter',
    })
  }

  return (
    <>
      <h3>Increase Counter</h3>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          const number = formData.get('number') as string
          const hash = await writeSetNumber({
            args: [BigInt(number)],
          })
          hash && addRecentTransaction({
            hash,
            description: `Set counter to ${number}`,
          })
        }}
      >
        <input name="number" placeholder="number" />
        {/* eslint-disable-next-line react/button-has-type */}
        <button disabled={isPending} type="submit">
          Set
        </button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button disabled={isPending} onClick={onIncrease}>
          Increase
        </button>
      </form>

      {isPending && <div>Check wallet...</div>}
      {isReceiptLoading && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>
            Transaction Hash:
            {hash}
          </div>
          <div>
            Transaction Receipt:
            {' '}
            <pre>{stringify(receipt, null, 2)}</pre>
          </div>
        </>
      )}
      {isError && <div>{(error as BaseError)?.shortMessage}</div>}
    </>
  )
}

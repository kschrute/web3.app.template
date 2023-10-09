'use client'

import React from 'react'
import { useAccount, useWaitForTransaction } from 'wagmi'
import { BaseError } from 'viem'
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { useCounterIncrement, useCounterNumber, useCounterSetNumber } from '../wagmi'
import { stringify } from '../utils/stringify'

export function Counter() {
  return (
    <div>
      <CounterNumber />
      <CounterIncrease />
    </div>
  )
}

export function CounterNumber() {
  const { data, refetch } = useCounterNumber({
    watch: true,
  })
  const { address } = useAccount()

  return (
    <div>
      {data?.toString()}
      <button onClick={() => refetch()}>refetch</button>
    </div>
  )
}

export function CounterIncrease() {
  const addRecentTransaction = useAddRecentTransaction()
  const { writeAsync: writeSetNumber } = useCounterSetNumber()
  const { writeAsync, data, error, isLoading, isError } = useCounterIncrement()
  const {
    data: receipt,
    isLoading: isPending,
    isSuccess,
  } = useWaitForTransaction({ hash: data?.hash })

  const onIncrease = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const tx = await writeAsync()
    tx && addRecentTransaction({
      hash: tx.hash,
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
          const tx = await writeSetNumber({
            args: [BigInt(number)],
          })
          tx && addRecentTransaction({
            hash: tx.hash,
            description: `Set counter to ${number}`,
          })
        }}
      >
        <input name="number" placeholder="number" />
        <button disabled={isLoading} type="submit">
          Set
        </button>
        <button disabled={isLoading} onClick={onIncrease}>
          Increase
        </button>
      </form>

      {isLoading && <div>Check wallet...</div>}
      {isPending && <div>Transaction pending...</div>}
      {isSuccess && (
        <>
          <div>
            Transaction Hash:
            {data?.hash}
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

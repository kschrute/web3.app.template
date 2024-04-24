'use client'

import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import { useRefreshOnNewBlock } from '../../wagmi'

export function Balance() {
  return (
    <>
      <div>
        <AccountBalance />
      </div>
      <br />
      <div>
        <FindBalance />
      </div>
    </>
  )
}

export function AccountBalance() {
  const { address } = useAccount()
  const { data, refetch, queryKey } = useBalance({ address })
  useRefreshOnNewBlock(queryKey)

  return (
    <div>
      {data?.formatted}
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => refetch()}>refetch</button>
    </div>
  )
}

export function FindBalance() {
  const [address, setAddress] = useState('')
  const { data, isLoading, refetch } = useBalance({
    address: address as `0x${string}`,
  })

  const [value, setValue] = useState('')

  return (
    <div>
      Find balance:
      {' '}
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="wallet address"
        value={value}
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => (value === address ? refetch() : setAddress(value))}
      >
        {isLoading ? 'fetching...' : 'fetch'}
      </button>
      <div>{data?.formatted}</div>
    </div>
  )
}

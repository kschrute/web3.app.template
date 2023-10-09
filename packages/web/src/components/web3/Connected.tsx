'use client'

import React from 'react'
import { useAccount } from 'wagmi'

export function Connected({ children }: { children: React.ReactNode }) {
  const { isConnected } = useAccount()

  if (!isConnected) return null

  return children
}

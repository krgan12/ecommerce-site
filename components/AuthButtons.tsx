'use client'

import { SignInButton } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/server';
import React from 'react'

type Props = {
    user: User | null
}

function AuthButtons({ user }: Props) {
    if (user) return null;
  return (
    <SignInButton mode='modal'>
        <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
            Login
        </button>
    </SignInButton>
  )
}

export default AuthButtons
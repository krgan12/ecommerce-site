import { requiredUser } from '@/hooks/requiredUser';
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  await requiredUser();
  return (
    <div>page</div>
  )
}

export default page
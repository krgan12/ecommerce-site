import { requiredUser } from '@/hooks/requiredUser';
import React from 'react'

async function page() {
  await requiredUser();
  return (
    <div>page</div>
  )
}

export default page
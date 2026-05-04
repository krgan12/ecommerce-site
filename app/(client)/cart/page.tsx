'use client'

import Loading from "@/components/Loading";
import { useEffect, useState } from "react"

function CartPage() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. Set the timer
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 2000);
  }, [])

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  if (!isClient) {
    return <Loading />
  }
  return (
    <div>CartPage</div>
  )
}

export default CartPage
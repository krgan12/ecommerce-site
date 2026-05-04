'use client'

import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import Loading from "@/components/Loading";
import NoAccessToCard from "@/components/NoAccessToCard";
import useCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react"

function CartPage() {
  const [isClient, setIsClient] = useState(false);
  const {isSignedIn} = useAuth();
  const {deleteCartProduct, getTotalPrice, getItemCount, getSubTotalPrice, resetCart, getGroupedItems} = useCartStore();
  const user = useUser();
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
  const cardProducts = getGroupedItems();
  // console.log(cardProducts);
  return (
    <div>
      {isSignedIn ? (
        <Container>
          {cardProducts?.length ? (
            <>
              <p>Products</p>
            </>
          ) : (
            <EmptyCart />
          )}
        </Container>
        // <div></div>
       ) : (
       <NoAccessToCard />
       )
      }
    </div>
  )
}

export default CartPage
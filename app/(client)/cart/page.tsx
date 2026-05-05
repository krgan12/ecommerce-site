'use client'

import Container from "@/components/Container";
import EmptyCart from "@/components/EmptyCart";
import Loading from "@/components/Loading";
import NoAccessToCard from "@/components/NoAccessToCard";
import { urlFor } from "@/sanity/lib/image";
import useCartStore from "@/store";
import { useAuth, useUser } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  const cartProducts = getGroupedItems();
  // console.log(cardProducts);
  return (
    <div className="bg-gray-50 pb-52 md:pb-10">
      {isSignedIn ? (
        <Container className="">
          {cartProducts?.length ? (
            <>
              <div className="flex items-center gap-2 py-5">
                <ShoppingBag />
                <h1 className="text-2xl font-semibold ">Shopping Cart</h1>
              </div>
              <div className="grid lg:grid-cols-3 md:gap-8">
                {/* Products */}
              <div className="lg:col-span-2 rounded-lg">
                <div className="border bg-white rounded-md">
                  {cartProducts?.map(({product}) => {
                    return (
                      <div key={product?._id} className="border-b p-2.5 last:border-b-0 flex items-center justify-between gap-5">
                        <div className="flex flex-1 items-center gap-2 h-36 md:h-44">
                          {product?.images && 
                          <Link href={`/product/${product?.slug?.current}`} className="border p-0.5 md:p-1 mr-2 rounded-md overflow-hidden group">
                            <Image 
                              className="w-32 md:w-45 h-37 md:h-45 object-cover group-hover:scale-105 overflow-hidden hoverEffect"
                              loading="lazy" 
                              width={500} 
                              height={500} 
                              src={urlFor(product?.images[0]).url()} alt="productImage" />
                            </Link>}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* Summary */}
              <div className="lg:col-span-1 ">
                <div className="hidden md:inline-block w-full bg-white p-6 rounded-lg border">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                </div>
              </div>
              </div>
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
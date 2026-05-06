'use client'

import useCartStore from "@/store";
import { Check, Home, Package, ShoppingBag } from "lucide-react";
import { animate, motion } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

function SuccessPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get('orderNumber');
  const sessionId = searchParams.get('session_id');
  const {resetCart} = useCartStore();
  const router = useRouter();
  useEffect(() => {
    if (!orderNumber && !sessionId) {
      router.push('/');
    }
    else {
      resetCart()
    }
    
  }, [orderNumber, sessionId, resetCart, router]);
  return (
    <div className="py-10 bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}
        className="bg-white rounded-2xl shadow-2xl px-8 py-12 max-w-xl w-full text-center"
        >
          <motion.div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Check className="text-white w-12 h-12"/>
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order confirmed!</h1>
          <div className="space-y-4 mb-8 text-left">
            <p className="text-gray-700">Thank you for your purchase. We're processing your order and will ship it soon. A confirmation email with your order details will be sent to your inbox shortly.</p>
            <p className="text-gray-700">Order Number: {" "} <span className="text-black font-semibold">{orderNumber}</span></p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
            <h2 className="font-semibold text-gray-900 mb-2">What's Next?</h2>
         <ul className="text-gray-700 text-sm space-y-2 relative left-20">
          <li className="flex items-start gap-2">
            <span className="mt-[6.5px] h-1.5 w-1.5 bg-gray-700 rounded-full"></span>
            <span>Check your e-mail for order confirmation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6.5px] h-1.5 w-1.5 bg-gray-700 rounded-full"></span>
            <span>We'll notify you when your order ships</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-[6.5px] h-1.5 w-1.5 bg-gray-700 rounded-full"></span>
            <span>Track your order status anytime</span>
          </li>
          </ul>
          </div>
          {/* Order tracker */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href={'/'} className="flex items-center justify-center px-4 py-3 font-semibold
            bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-md">
              <Home className="w-5 h-5 mr-2" /> Home
            </Link>
            <Link href={'/orders'} className="flex items-center justify-center px-4 py-3 font-semibold
            bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md">
              <Package className="w-5 h-5 mr-2" /> Orders
            </Link>
            <Link href={'/'} className="flex items-center justify-center px-4 py-3 font-semibold
            bg-indigo-700 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md">
              <ShoppingBag className="w-5 h-5 mr-2" /> Shop
            </Link>
          </div>
        </motion.div>
    </div>
  )
}

export default SuccessPage
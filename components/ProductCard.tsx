import { Product } from '@/sanity.types'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '@/sanity/lib/image'

interface Props {
    product: Product,

}

function ProductCard({product}: Props) {
  return (
    <div>
        <div>
            {product?.images && <Link href={"/product"}>
            <Image width={500} height={500} alt='productImage' src={urlFor(product?.images[0]).url()}></Image>
            </Link>}
        </div>
    </div>
  )
}

export default ProductCard
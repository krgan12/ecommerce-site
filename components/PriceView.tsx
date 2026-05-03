import React from 'react'
import PriceFormatter from './PriceFormatter';
import { cn } from '@/lib/utils';

interface Props {
    price: number | undefined;
    discount: number | undefined;
    className?:string;
}

function PriceView({price, discount, className}: Props) {
  return (
        <div className='flex items-center gap-2'>
            <PriceFormatter amount={price} className={className} />
            {price && discount && <PriceFormatter className={cn('line-through font-medium text-zinc-500', className)} amount={price + (discount * price) / 100}/>}
        </div>
  )
}

export default PriceView
'use client'
import { CATEGORIES_QUERY_RESULT, Product } from '@/sanity.types'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import ProductCard from './ProductCard';
import NoProductsAvailable from './NoProductsAvailable';

interface Props {
    categories: CATEGORIES_QUERY_RESULT;
    slug: string;
}

function CategoryProduct({categories, slug}: Props) {
    const [currentSlug, setCurrentSlug] = useState(slug);
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    
    const fetchProducts = async(categorySlug: string) => {
        try {
            setLoading(true);
            const query = `*[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)`
            const data = await client.fetch(query, {categorySlug});
            setProducts(data);
            console.log("Data", data);
        }
        catch(err) {
            console.error('Error fetching products: ', err)
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(currentSlug);
    }, [currentSlug]);
  return (
    <div className='py-5 flex flex-col md:flex-row items-start gap-5'>
        <div className='flex flex-col md:min-w-40 border'>
            {categories?.map((category) => (
                <Button key={category?._id}
                onClick={() => setCurrentSlug(category?.slug?.current as string)}
                 className={`bg-transparent border-0 rounded-none text-darkColor 
                    shadow-none hover:bg-darkColor hover:text-white font-semibold hoverEffect border-b 
                    last:border-b-0 ${category?.slug?.current === currentSlug && 'bg-darkColor text-white border-darkColor'}
                `}>
                    {category?.title}
                </Button>
            ))}
        </div>
        <div className='flex-1'>
             {loading ? (
            <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10'>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{repeat: Infinity, duration: 1.5}}  className='flex items-center space-x-2 text-blue-600'>
                    <Loader2 className='animate-spin'/>
                    <span className='text-lg font-semibold'>Product is loading...</span>
                </motion.div>
            </div>
        ) : (
            <>
                {products?.length ? (
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full'>
                    {
            products?.map((product: Product) => (
            <AnimatePresence key={product?._id}>
                <motion.div layout initial={{opacity: 0.2}} 
                animate={{opacity:1}}
                exit={{opacity: 0}}>
                <ProductCard product={product}  />
            </motion.div>
            </AnimatePresence>
                    ))}
                </div>
                )
            : (
                <NoProductsAvailable selectedTab={currentSlug} />
              )}
            </>
                )}
        </div>
    </div>
  )
}

export default CategoryProduct
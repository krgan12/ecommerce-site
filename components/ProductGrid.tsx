'use client'
import React, { useEffect, useState } from 'react'
import HomeTabBar from './ui/HomeTabBar'
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';

function ProductGrid() {
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const query = `*[_type == 'product' && variant == $variant] | order(name asc)`;
    const params = {variant: selectedTab.toLocaleLowerCase()};
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const response = await client.fetch(query, params);
                setProducts(await response);
            }
            catch(error) {
                console.log("Product Fetch error: ", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [selectedTab]);

  return (
    <div className='mt-10 flex flex-col items-center'>
        <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
        {loading ? (
            <div><span>Product is loading...</span></div>
        ) : (products?.map((item: Product) => (
            <p key={item?._id}>{item?.name}</p>)
        ))}
    </div>
  )
}

export default ProductGrid
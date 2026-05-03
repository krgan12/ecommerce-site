'use client'
import React, { useState } from 'react'
import HomeTabBar from './ui/HomeTabBar'
import { productType } from '@/constants';

function ProductGrid() {
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  return (
    <div className='mt-10 flex flex-col items-center'>
        <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  )
}

export default ProductGrid
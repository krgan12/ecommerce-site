'use client';
import headerData from '@/constants'
import { CATEGORIES_QUERY_RESULT } from '@/sanity.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface Props {
  categories: CATEGORIES_QUERY_RESULT
}

const HeaderMenu = ({categories} : Props) => {
  const pathname = usePathname();
  
  return (
    <div className='hidden md:inline-flex w-1/4 items-center gap-5 text-sm capitalize font-semibold whitespace-nowrap'>
      <Link className={`relative group hover:text-darkColor hoverEffect ${pathname === "/" && 'w-1/2'}`} href={'/'}>Home
             <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === '/' && 'w-1/2'}`}/>
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === '/' && "w-1/2"}`}/>
   </Link>
      {categories?.map((category) => (
        <Link key={category?.title} href={`/category/${category?.slug?.current}`} className={`hover:text-darkColor hoverEffect relative group ${pathname === `/category/${category?.slug?.current}` && 'text-darkColor'}`}>
          {category?.title}
          <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${pathname === `/category/${category?.slug?.current}`  && 'w-1/2'}`}/>
          <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${pathname === `/category/${category?.slug?.current}` && "w-1/2"}`}/>
        </Link>

      ))}
    </div>
  )
}

export default HeaderMenu
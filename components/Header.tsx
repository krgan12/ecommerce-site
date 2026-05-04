import React, { use } from 'react'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
// import { ClerkLoaded, SignInButton } from '@clerk/nextjs'
import AuthButtons from './AuthButtons'
import Link from 'next/link'
import { ListOrdered, ShoppingBag } from 'lucide-react'
import { getAllCategories } from '@/sanity/helpers/queries'

async function Header() {
  const user = await currentUser();
  const categories = await getAllCategories();
  console.log(categories);

  return (
    <header className='border-b border-g-gray-400 py-5 sticky top-0 z-50 bg-white'>
        <Container className='flex items-center justify-between gap-7 text-lightColor'>
            <HeaderMenu categories={categories}/>
            <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
            <MobileMenu />
            <Logo className=''>Tulos</Logo>
            </div>
            <div className='w-auto md:w-1/3 flex items-center justify-end gap-5 '>
               <SearchBar />
               <CartIcon />

               {/* {!user && (<SignInButton mode='modal'><button className='text-sm font-semibold hover:text-darkColor hoverEffect'>Login</button></SignInButton>)} */}
               <ClerkLoaded>
                <SignedIn>
                  <Link href={"/orders"} className="group relative">
                   <ListOrdered className='w-5 h-5 group-hover:text-darkColor hoverEffect'/>
                   <span className='absolute -top-1 -right-1 bg-darkColor text-white h-3.5 w-3.5 
                    rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
                  </Link>
                  <UserButton />
                </SignedIn>
                {!user && (<AuthButtons user={user}/>)}
               </ClerkLoaded>
               
      

            </div>
        
        </Container>
    </header>
  )
}

export default Header
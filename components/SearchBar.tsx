'use client'
import { Search, X } from 'lucide-react'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Input } from './ui/input';

function SearchBar() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)}>
      <DialogTrigger onClick={() => setShowSearch(!showSearch)}>
        <Search className="w-5 h-5 hover:text-darkColor hoverEffect" />
      </DialogTrigger>
      <DialogContent className='max-w-5xl h-[90vh] flex flex-col overflow-hidden rounded-md py-5'>
        <DialogHeader>
          <DialogTitle className='mb-1'>Product Searchbar</DialogTitle>
          <form className='relative ' onSubmit={(e) => e.preventDefault()}>
            <Input placeholder='Search your product here...' className='flex-1'
            value={search}
            onChange={(e) => e.target.value}/>
            {search && <X className='w-4 h-4 absolute top-3 right-11 hover:text-red-600 hoverEffect'/>}
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SearchBar
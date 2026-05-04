import CategoryProduct from '@/components/CategoryProduct';
import Container from '@/components/Container'
import Title from '@/components/Title';
import { getAllCategories } from '@/sanity/helpers/queries';
import React from 'react'

interface Props {
    params: Promise<{slug: string}>
}

async function CategoryPage({params}: Props) {
    const {slug} = await params;
    const categories = await getAllCategories();
  return (
    <Container className='py-20'>
        <Title className='text-xl'>Products by Category {" "}</Title>
        <CategoryProduct categories={categories} slug={slug} />
    </Container>
  )
}

export default CategoryPage
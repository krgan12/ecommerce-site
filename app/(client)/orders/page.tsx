import { requiredUser } from '@/hooks/requiredUser';
import { getMyOrders } from '@/sanity/helpers/queries';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import Container from '@/components/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileX } from 'lucide-react';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import OrderComponents from '@/components/OrderComponents';

async function OrdersPage() {
  await requiredUser();
  const {userId} = await auth();
  if (!userId) {
    return redirect('/');
  }
  const orders = await getMyOrders(userId);
  console.log(orders);
  return (
    <Container className='py-10 '>
      {orders?.length ? (
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl font-bold'>Order List</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className='w-full'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-auto'>Order Number</TableHead>
                    <TableHead className='hidden md:table-cell'>Date</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className='hidden sm:table-cell'>E-mail</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className='hidden sm:table-cell'>Invoice Number</TableHead>
                  </TableRow>
                </TableHeader>
                <OrderComponents orders={orders}/>
                <ScrollBar orientation='horizontal'/>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      )
       : (
       <div className='flex flex-col items-center justify-center py-5 md:py-10'>
        <FileX className='h-24 w-24 text-gray-400 text-red-500 mb-4'/>
         <Title><h2 className='text-2xl font-semibold'>No Orders Found.</h2></Title>
         <p className='mt-2 text-sm text-gray-600 text-center max-w-md'>It looks like you haven't placed any orders yet. Start shopping to see your orders here!</p>
         <Button asChild className='mt-6'>
          <Link href={'/'}>Browser Products</Link>
         </Button>
       </div>

       )}
    </Container>
  )
}

export default OrdersPage
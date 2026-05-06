import { requiredUser } from '@/hooks/requiredUser';
import { getMyOrders } from '@/sanity/helpers/queries';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import React from 'react'
import Container from '@/components/Container';
import { Card } from '@/components/ui/card';

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
        <Card>
          <p>Orders</p>
        </Card>
      )
       : (
       <div>
         <h2>No Orders Found.</h2>
       </div>

       )}
    </Container>
  )
}

export default OrdersPage
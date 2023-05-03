import OrderTraking from '@/components/orderTraking/orderTraking'
import HeaderCom from '@/lib/header'
import Navber from '@/navAndFooter/navber'
import React from 'react'

export default function index() {
  return (
    <>
      <HeaderCom title="Order Traking" />

      <main>
        <Navber />

        <OrderTraking />
      </main>
    </>
  )
}

import PaymentOffer from '@/components/home/paymentOffer'
import OrderTraking from '@/components/orderTraking/orderTraking'
import PaymentMethod from '@/components/userProfile/paymentMethod'
import HeaderCom from '@/lib/header'
import Footer from '@/navAndFooter/footer'
import Navber from '@/navAndFooter/navber'
import React from 'react'

export default function index() {
  return (
    <>
      <HeaderCom title="Order Traking" />

      <main>
        <Navber />
        <OrderTraking />
        <PaymentOffer />
        <Footer />
      </main>
    </>
  )
}

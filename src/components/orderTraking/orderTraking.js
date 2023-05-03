import React, { useState } from 'react'
import UserConfirmation from './userConfirmation'
import OrderInfo from './orderInfo';

export default function OrderTraking() {
    const [isShowTraking,  setShowTraking] = useState(false);

    const toggle = () =>{
        if(!isShowTraking){
            setShowTraking(true);
        }else{
            setShowTraking(false)
        }
    }

  return (
    <>
        {!isShowTraking && <UserConfirmation onTtoggle={toggle} />}
        {isShowTraking && <OrderInfo /> }
    </>
  )
}

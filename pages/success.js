import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { runFireworks } from '../lib/utils';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
      localStorage.clear();
      setCartItems([]);
      setTotalPrice(0);
      setCartItems(0);
      setTotalQuantities(0);
      runFireworks();
    }, [])
    

  return (
    <div className="success-wrapper">
      <div className='success'>
        <p className='icon'>
            <BsBagCheckFill />
        </p>
        <h2> Thank you for your order!</h2>
        <p className='email-msg'>Check your inbox for your order receipt.</p>
        <p className='description'>
            if you have any questions, please email us at
            <a className='email' href='mailto:order@example.com'>order@example.com</a>
        </p>
        <Link href='/'>
            <button type='button' width="300px" className='btn'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default Success;
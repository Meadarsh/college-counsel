"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ApplyForm from '../apply/page';

const AutoPopup = () => {
    const EXPIRATION_DAYS = 10;
    const MILLISECONDS_IN_A_DAY = 86400000;
    
    function parseDateString(dateString) {
      return new Date(dateString);
    }
    
    const [showForm, setShowForm] = useState(false);
    
    const isExpired = useCallback((storedDateString, currentDate) => {
      const storedDate = parseDateString(storedDateString);
      const expirationDate = new Date(storedDate.getTime() + EXPIRATION_DAYS * MILLISECONDS_IN_A_DAY);
      return currentDate > expirationDate;
    }, []);
    
    const currentDate = useMemo(() => new Date(), []);
    
    useEffect(() => {
      const checkExpiration = () => {
        if (!showForm) {
          const data = localStorage.getItem('Applied');
  
          if (isExpired(data, currentDate)) {
            setShowForm(true);
          }
        }
      };
    
      const timer = setTimeout(checkExpiration, 30000);
    
      return () => clearTimeout(timer);
    }, [showForm, currentDate, isExpired]);
    
  return (
    <>
    <div className={`${showForm?'block':'hidden'} fixed top-2 flex justify-center w-screen z-[100]`}><ApplyForm handleClose={()=>setShowForm(false)}/></div>
    </>
  )
}

export default AutoPopup
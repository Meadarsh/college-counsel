"use client"
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ApplyForm from '../apply/page';
import Apply from './Apply';
import { usePathname } from 'next/navigation';

const AutoPopup = () => {
    const EXPIRATION_DAYS = 10;
    const MILLISECONDS_IN_A_DAY = 86400000;
    
    function parseDateString(dateString) {
      return new Date(dateString);
    }
    
    const [showForm, setShowForm] = useState(false);
    const location = usePathname();
    const isExpired = useCallback((storedDateString, currentDate) => {
      const storedDate = parseDateString(storedDateString);
      const expirationDate = new Date(storedDate.getTime() + EXPIRATION_DAYS * MILLISECONDS_IN_A_DAY);
      return currentDate > expirationDate;
    }, []);
    
    const currentDate = useMemo(() => new Date(), []);
    
    useEffect(() => {
      if((location === "/apply")){
        setShowForm(false);
      }
      const checkExpiration = () => {
        if (!showForm) {
          const data = localStorage.getItem('Applied');
  
          if (isExpired(data, currentDate)) {
            setShowForm(true);
          }
        }
      };
      let timer;
    if((location !== "/apply")){
       timer = setTimeout(checkExpiration, 20000);}
    
      return () => clearTimeout(timer);
    }, [showForm, currentDate,location, isExpired]);
    
    useEffect(() => {
      const handleRightClick = (e) => {
        e.preventDefault(); 
        if((location !== "/apply")){ setShowForm(true);}
        return;
      };
  
      window.addEventListener('contextmenu', handleRightClick);
  
      return () => {
        window.removeEventListener('contextmenu', handleRightClick);
      };
    }, [location]);

  return (
    <>
    <div className={`${showForm?'block':'hidden'} fixed top-0 flex justify-center items-center h-screen bg-black/20 w-screen z-[50]`}><Apply popup={true}  handleClose={()=>setShowForm(false)}/></div>
    </>
  )
}

export default AutoPopup
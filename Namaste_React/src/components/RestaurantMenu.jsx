import React, { useEffect } from 'react'

const RestaurantMenu = () => {
  
  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch()
  }

  return (
    <div className=' flex justify-center items-center h-screen'>
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
    </div>
  )
}

export default RestaurantMenu
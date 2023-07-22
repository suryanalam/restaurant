import React,{useContext} from 'react'
import './Menu.css'

import FoodItemCard from '../../components/food-item-card/FoodItemCard'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import {CustomContext} from '../../contexts/CustomContext'
import { useFetch } from '../../custom hooks/useFetch'

const Menu = () => {

  useFetch('https://food-api-98fq.onrender.com/api/v1/food/getItems');

  const {menuItems} = useContext(CustomContext);

  return (
    <>
    <Header />
    <section className='menu-bg'>
      {
        menuItems.map((item) =><FoodItemCard key={item._id} item={item} />)
      }
    </section>
    <Footer />
    </>
  )
}

export default Menu

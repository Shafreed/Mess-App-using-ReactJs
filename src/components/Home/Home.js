import React, { useState } from 'react'
import Categories from '../Categories/Categories'
import Menu from '../Menu/Menu'
import Data from '../../staticData/Data'
const allCategory=['all',...new Set(Data.map((item)=>item.category))]

const Home = () => {
    const [menuItems,setMenuItems]=useState(Data)
    const [categories,setCategories]=useState(allCategory)

    const filterItems=(category)=>{
        if(category === 'all'){
            setMenuItems(Data)
            return;
        }
        const newItems=Data.filter((item)=>item.category===category)
        setMenuItems(newItems)
    }
  return (
    <main>
        <section className="menu section">
            <div className="title">
                <h2>Mess App</h2>
                <div className="underline"></div>
            </div>
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
        </section>
    </main>
  )
}

export default Home
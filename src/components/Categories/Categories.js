import React from 'react'

const Categories = ({categories,filterItems}) => {
  return (
    <div className="btn-container">
        {
            categories.map((item,index)=>(
                <button type='button' className="filter-btn" key={index} onClick={()=>filterItems(item)}>{item}</button>
            ))
        }
        
    </div>
  )
}

export default Categories
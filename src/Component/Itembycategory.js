import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ItemContext from '../Context/item/ItemContext'
import Item from './Item'

function Itembycategory() {

  const context=useContext(ItemContext);
  const params=useParams()
  const category=params.category
  const {itembycategory,fetchByCategory}=context;

  const getItem=async ()=>{
    await fetchByCategory(category)
  }
  useEffect(()=>{
    getItem()
  },[])
  return (
    <div className='container'>
      <div className='row my-4'>
          {
            itembycategory.map((item)=>{
              return (
              <Item item={item} key={item.id}/>
              );
            })
          }
      </div>
    </div>
  )
}

export default Itembycategory
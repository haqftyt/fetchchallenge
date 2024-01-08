import React from 'react'
import ListItem from './ListItem'
const Content = ({item}) => {
  return (
   <ul>
   {
      item.map((item)=>(
        <ListItem
        item={item}
        key={item.id}
        />
      ))
   }
   </ul>
  )
}

export default Content
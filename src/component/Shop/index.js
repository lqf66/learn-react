import { useState } from "react"
import Shop from "./shop"
import Total from "./total"


function Shops() {
  const [shops, setShops] = useState([
    {
      id: 1,
      name: '苹果',
      price: 18,
      total: 0,
      totalPrice: 0
    },
    {
      id: 2,
      name: '香蕉',
      price: 16,
      total: 0,
      totalPrice: 0
    }
  ])

  const shopAdd = (id) => {
    console.log('id: ', id)
    setShops(shops.map(item => {
      if (id === item.id) {
        let total = item.total + 1
        return {
          ...item,
          total,
          totalPrice: total * item.price
        }
      }
      return item
    }))
  }

  const shopMius = (id) => {
    setShops(shops.map(item => {
      if (id === item.id && item.total > 0) {
        let total = item.total - 1
        return {
          ...item,
          total,
          totalPrice: total * item.price
        }
      }
      return item
    }))
  }
  return <div>
    {shops.map(item => <Shop key={item.id} {...item} shopAdd={shopAdd} shopMius={shopMius} />)}
    <Total shops={shops} />
    <hr />
  </div>
}
export default Shops

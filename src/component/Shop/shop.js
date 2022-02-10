/*
 * @Author: Lqf
 * @Date: 2021-11-14 20:39:40
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-14 20:59:09
 * @Description: 我添加了修改
 */

const shop = (props) => {
  const { id, name, price, total, totalPrice, shopAdd, shopMius } = props
  return <div>
    {name} - {price}元 - <button onClick={() => {
      shopMius(id)
    }}>-</button>{total}<button onClick={() => {
      shopAdd(id)
    }}>+</button>件, 共{totalPrice}元
  </div>
}
export default shop
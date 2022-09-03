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

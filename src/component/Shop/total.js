/*
 * @Author: Lqf
 * @Date: 2021-11-14 20:59:34
 * @LastEditors: Lqf
 * @LastEditTime: 2021-11-14 21:04:55
 * @Description: 我添加了修改
 */
function Total ({ shops }) {
  let nubs = 0
  let prices = 0
  let maxPrice = 0
  shops.forEach(shop => {
    const { price, total, totalPrice } = shop
    nubs += total
    prices += totalPrice
    if (total > 0) {
      maxPrice = Math.max(price, maxPrice)
    }

  })
  return <p>商品总件数:{nubs},商品总价格{prices},最贵单价,{maxPrice}</p>
}

export default Total
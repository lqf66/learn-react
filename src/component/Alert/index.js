/*
 * @Author: Lqf
 * @Date: 2021-12-05 15:46:26
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-05 15:58:11
 * @Description: 我添加了修改
 */

import { useEffect } from 'react'
import ReactDOM from 'react-dom'
function Alert ({ info, close }) {
  useEffect(() => {
    return () => {
      console.log('组件卸载')
    }
  })
  return <div className="alert-mask">
    <section className="alert">
      <header>
        -----对话框-----
        <div className="alert-close" onClick={() => { close() }}>关闭</div>
      </header>
      {info}
    </section>
  </div>
}

function rc_alert (info) {
  const alertWrap = document.createElement('div')
  document.body.appendChild(alertWrap)
  const close = () => {
    ReactDOM.unmountComponentAtNode(alertWrap)
    document.body.removeChild(alertWrap)
  }
  ReactDOM.render(
    <Alert info={info} close={close} />,
    alertWrap
  )
}
export default rc_alert
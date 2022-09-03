import { Layout } from 'antd'
import { useState } from 'react'
import Popup from '../../../component/Popup'
import rc_alert from '../../../component/Alert'

function APIView() {
  const [showPopup, setShowPopup] = useState(false)
  return <Layout.Content className='page-content'>
    {showPopup ? <Popup
      render={(close) => {
        return <>
          <h2>这是API弹窗</h2>
          <div>弹窗内容</div>
          <div>弹窗内容</div>
          <div>弹窗内容</div>
          <button onClick={() => {
            close()
          }}>关闭弹窗</button>
        </>
      }}
      afterClose={() => {
        setShowPopup(false)
      }}
    /> : ''}
    <button onClick={() => {
      setShowPopup(true)
    }}>显示弹窗</button>
    <button onClick={() => {
      rc_alert('这是api对话框')
    }}>alert</button>
  </Layout.Content>

}
export default APIView

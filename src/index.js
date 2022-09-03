import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.less'
import './assets/css/base.css'
import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)

/**
 *  1. React17 新功能:新增JSX-runtime,可将JSX直接转换成虚拟DOM(因此可不引入React)
 *     如果使用createElement创建,则必须引入React
 *  2. 插值表达式
 *     - 元素内容的插值,必须是ReactNode
 *       + 基本类型: string,number原样输出,null,undefined,boolean,symbol会被忽略
 *       + 复合类型: 数组:展开后依次输出,React构建的DOM,注释
 *     - 属性的写法
 *       + class --> className, 第二个首字母大写
 *       + style 的值不是字符串,是对象
 *  3. 只有一个顶层容器元素 <Fragment></Fragment> 或 <></>
 */

// const title = <h2>这是插值</h2>
// const style = {
//   width: 500,
//   border: '1px solid #000'
// }
// const main = <main style={style}>
//   <header id="header" style={{color: 'red'}}>
//     <h1>hello react</h1>
//     <hr />
//     <p>first class</p>
//     { title }
//     <input type="text" autoFocus />
//   </header>
// </main>
// console.log(main)

/** 
 * 路由模式选取:
 * 基于 history <BrowserRouter></BrowserRouter>
 * 基于 hash <HashRouter></HashRouter>
*/

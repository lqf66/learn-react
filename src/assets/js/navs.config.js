/*
 * @Author: Lqf
 * @Date: 2021-11-27 17:13:34
 * @LastEditors: Lqf
 * @LastEditTime: 2021-12-06 21:56:37
 * @Description: 我添加了修改
 */
const navs = [
  {
    path: "/",
    title: "首页",
    isActive (pathname) {
      return pathname === "/" || pathname === "/index"
    }
  }, {
    path: "/start",
    title: "新手入门"
  }, {
    path: "/api",
    title: "API"
  }, {
    path: "/about",
    title: "关于"
  }, {
    path: "/login",
    title: "登录"
  }
]
const indexNavs = [
  {
    path: "/?tab=all",
    title: "全部"
  }, {
    path: "/?tab=good",
    title: "精华"
  }, {
    path: "/?tab=share",
    title: "分享"
  }, {
    path: "/?tab=ask",
    title: "问答"
  }, {
    path: "/?tab=job",
    title: "招聘"
  }
]
export { navs, indexNavs }

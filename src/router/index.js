import Vue from 'vue'
import Router from 'vue-router'
import news from './news/index'
import product from './product/index'

let err={
  path:"*",
  name:"404",
  component:()=>import(/* webpackChunkName: "Err" */ '@/Err')
}
 
let routes=[{
 path:"/",
 name:"HelloWorld",
 component:()=>import(/* webpackChunkName: "HelloWorld" */ '@/views/HelloWorld')
},...news,...product]
routes.push(err)


Vue.use(Router)
routes.push(err);
export default new Router({
  routes: routes
})

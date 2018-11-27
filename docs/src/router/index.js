import Vue from 'vue'
import Router from 'vue-router'
import NavConf from '../nav.config'
Vue.use(Router)

const routes = [
  {
    path:'/docs',
    component:()=> import('views/docs'),
    children:[{
      path:'/',
      redirect:"intro"
    }]
  },
  {
    path:'/demo',
    component:()=> import('views/demo'),
    children:[{
      path:'/',
      redirect:""
    }]
  },
  {
    path:'/',
    component:()=>import('views/index')
  }
]

NavConf.nav.forEach(item=>{
  if(item.showInMobile){
    item.groups.forEach(group=>{
      group.list.forEach(list=>{
        routes[0].children.push({
          path:list.name,
          component:()=> import(`../../../packages/${list.name}/zh-CN.md`)
        })
        routes[1].children.push({
          path:list.name,
          component:()=> import(`../../../packages/${list.name}/demo/index`)
        })
      })
    })
  }else{
    item.groups.forEach(group=>{
      group.list.forEach(list=>{
        routes[0].children.push({
          path:`${list.name}`,
          component:()=> import(`../../markdown/${list.name}.md`)
        })
      })
    })
  }
})
export default new Router({
  routes
})

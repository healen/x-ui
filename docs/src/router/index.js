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
      component:()=> import('views/demoIndex'),
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
          name:list.name,
          component:()=> import(`../../../packages/${list.name}/zh-CN.md`),
          meta:{
            title:list.title,
            isDemo:true
          }
        })
        routes[1].children.push({
          path:list.name,
          name:list.name,
          component:()=> import(`../../../packages/${list.name}/demo/index`),
          meta:{
            title:list.title,
            isDemo:false
          }
        })
      })
    })
  }else{
    item.groups.forEach(group=>{
      group.list.forEach(list=>{
        routes[0].children.push({
          path:`${list.name}`,
          name:list.name,
          component:()=> import(`../../markdown/${list.name}.md`),
          meta:{
            title:list.title,
            isDemo:false
          }
        })
      })
    })
  }
})
export default new Router({
  routes
})

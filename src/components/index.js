import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// 自动加载 global 目录下的 .js 结尾的文件
 function init(){
const componentsContext = require.context('./global', true, /\.vue$/)

componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component)
  /**
  * 兼容 import export 和 require module.export 两种规范
  */

 // 获取组件的 PascalCase 命名
 const componentStr=component.replace(/^\.\/(.*)\.\w+$/, '$1')
 let componentName;
 if(componentStr.includes('/')){
  const componentArr=componentStr.split("/")
   componentName = componentArr[1]
 }else{
   componentName=componentStr
 }

 

// 全局注册组件
Vue.component(
  componentName,
  // 如果这个组件选项是通过 `export default` 导出的，
  // 那么就会优先使用 `.default`，
  // 否则回退到使用模块的根。
  componentConfig.default || componentConfig
)
})
}

export default init;
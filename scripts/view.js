// template.js
module.exports = {
    vueTemplate: compoenntName => {
      return `<template>
    <div class="${compoenntName}">
      ${compoenntName}页面
    </div>
  </template>
  <script>
  export default {
    
  }
  </script>
  <style lang="scss" scoped>
  .${compoenntName} {
  
  }
  </style>
  `
    },
    entryTemplate: `import Main from './main.vue'
  export default Main`
  }
  
  
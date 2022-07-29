const { pkg2Func, arr } = require('@tycdm/monorepo2')
const axios = require('axios') 

const pkg1Func = () => {
  pkg2Func()
  console.log('我是pkg22223')
  axios.get('http://www.baidu.com').then((res) => {
    console.log('我请求到百度了')
  })
}

pkg1Func()
console.log(arr)

module.exports =  {
  pkg1Func
}
import { pkg2Func, arr } from '@tycdm/monorepo2'
import axios from 'axios'

const pkg1Func = () => {
  pkg2Func()
  console.log('我是pkg22223')
  axios.get('http://www.baidu.com').then((res) => {
    console.log('我请求到百度了')
  })
}

pkg1Func()
console.log(arr)

export {
  pkg1Func
}
const _ = require('lodash')

const pkg2Func = () => {
  console.log('我是pkg2')
}

const arr = _.cloneDeep([1, 2, 3])

pkg2Func()

module.exports =  {
  pkg2Func,
  arr
}
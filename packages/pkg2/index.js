import _ from 'lodash'

const pkg2Func = () => {
  console.log('我是pkg2')
}

const arr = _.cloneDeep([1, 2, 3])

pkg2Func()

export {
  pkg2Func,
  arr
}
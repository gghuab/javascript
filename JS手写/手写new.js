function myNew(constructor, ...args) {
  //1.创建一个新对象，并且将其原型指向构造函数的prototype
  const obj = Object.creat(constructor.prototype)

  //2.绑定构造函数的this指针给obj并执行构造函数
  const result = constructor.apply(obj, args)

  //3.判断构造函数的返回值是否是对象类型
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result //返回构造函数的返回值
  }
  return obj //返回创建的对象本身
}

// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.on('line', function (line) {
//   const tokens = line.split(' ')
//   console.log(parseInt(tokens[0]), parseInt(tokens[1]))
// })

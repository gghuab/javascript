function curry(fn, ...args) {
  return function curried(...restArgs) {
    // 把之前收集的参数和这一次传入的参数合并
    const allArgs = [...args, ...restArgs]

    // fn.length 表示原函数形参的个数
    // 如果参数已经收集够了，就直接执行原函数
    if (allArgs.length >= fn.length) {
      return fn.apply(this, allArgs) //这个this就是调用curried函数时的上下文环境
    }

    // 参数还不够，继续返回一个新函数，等待下次传参
    return curry(fn, ...allArgs)
  }
}

function sum(a, b, c) {
  return a + b + c
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2)(3)) // 6
console.log(curriedSum(1, 2)(3)) // 6
console.log(curriedSum(1)(2, 3)) // 6
console.log(curriedSum(1, 2, 3)) // 6

/*
什么是函数柯里化：
把原本需要一次传入多个参数的函数，
改造成可以分多次传参的函数。

例如：
sum(1, 2, 3)
变成：
curry(sum)(1)(2)(3)

这道题的实现思路：
1. 先定义一个 curry 函数，接收原函数 fn。
2. 每次调用时，都把参数先保存起来。
3. 判断当前参数总数是否已经达到原函数需要的参数个数。
4. 如果够了，就执行原函数。
5. 如果还不够，就继续返回一个函数，等待下一次传参。

面试时可以这样回答：
1. 柯里化的本质就是“参数复用”和“延迟执行”。
2. 每次调用不一定立刻执行，而是先收集参数。
3. 等参数收集完整后，再统一执行原函数。
4. 这里通常用 fn.length 来判断参数是否收集完成。
*/

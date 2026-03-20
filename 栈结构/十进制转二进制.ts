import ArrayStack from './数组实现.js'
const stack1 = new ArrayStack<number>()

function decToBir(num: number): string {
  while (num > 0) {
    let dec = num % 2
    stack1.push(dec)
    num = Math.floor(num / 2)
  }
  let bir = ''
  while (!stack1.isEmpty()) {
    bir += stack1.pop()
  }
  return bir
}
console.log(decToBir(35))
console.log(+'2')

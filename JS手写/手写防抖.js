function debounce(fn, delay) {
  let timer = null //初始化定时器

  return function (...args) {
    if (timer) clearTimeout(timer) //若开启过了，则打断上次开启的重开一个
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

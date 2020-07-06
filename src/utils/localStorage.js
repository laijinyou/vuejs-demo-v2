const ls = localStorage

export default {
  // 创建
  setItem(name, value) {
    ls.setItem(name, JSON.stringify(value)) // stringify将对象转化为json
  },
  // 获取
  getItem(name) {
    try {
      return JSON.parse(ls.getItem(name)) // parse将json转化为对象
    } catch (e) {
      return null
    }
  },
  // 删除
  removeItem(name) {
    ls.removeItem(name)
  }
}
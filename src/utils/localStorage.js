const ls = localStorage

export default {
  // 创建
  setItem(name, value) {
    ls.setItem(name, JSON.stringify(value))
  },
  // 获取
  getItem(name) {
    try {
      return JSON.parse(ls.getItem(name))
    } catch (e) {
      return null
    }
  },
  // 删除
  removeItem(name) {
    ls.removeItem(name)
  }
}
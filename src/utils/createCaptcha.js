export default function(num = 6, letters = 'QWERTYUIOPLKJHGFDSAZXCVBNM1234567890') {
    let tpl = ''
    let captcha = []
  
    try {
      captcha = [...Array(num)].map(() => letters[Math.floor(Math.random() * letters.length)])
    } catch (e) {}
  
    captcha.forEach(item => {
      tpl += `<span class="flex1 hcenter">${item}</span>`
    })
  
    captcha = captcha.join('')
  
    return {
      tpl,
      captcha
    }
  }
  
// 上面的函数用于从指定的字符中，获取指定数量的随机字符作为验证码，最后返回包含验证码模板和验证码的对象。
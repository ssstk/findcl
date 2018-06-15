/*
 * @Author: MR.Wang
 * @Date:   2017-03-07 16:33:11
 * @Last Modified by:   MR.Wang
 * @Last Modified time: 2017-07-04 18:51:26
 */
'use strict'
/**
 * 设置｜获取 | 删除 本地数据
 */
const localData = {
  set: function(k, v) {
    if (!k && !v) {
      return null
    }
    try {
      localStorage.setItem(k, JSON.stringify(v))
    } catch (e) {}
  },
  get: function(k) {
    return JSON.parse(localStorage.getItem(k))
  },
  remove: function(k) {
    localStorage.removeItem(k)
  },
  clear: function() {
    localStorage.clear()
  }
}

/**
 * 设置｜获取 | 删除 session数据
 */
const sessionData = {
  set: function(k, v) {
    if (!k && !v) {
      return null
    }
    try {
      sessionStorage.setItem(k, JSON.stringify(v))
    } catch (e) {}
  },
  get: function(k) {
    return JSON.parse(sessionStorage.getItem(k))
  },
  remove: function(k) {
    sessionStorage.removeItem(k)
  },
  clear: function() {
    sessionStorage.clear()
  }
}

/**
 * 设置｜获取 cookie
 */
const cookieData = {
  get: function(cName) {
    if (document.cookie.length > 0) {
      let cStart = document.cookie.indexOf(cName + '=')
      if (cStart !== -1) {
        cStart = cStart + cName.length + 1
        let cEnd = document.cookie.indexOf(';', cStart)
        if (cEnd === -1) {
          cEnd = document.cookie.length
        }
        return decodeURI(document.cookie.substring(cStart, cEnd))
      }
    }
    return ''
  },
  /**
   * @param cName  String cookie-name
   * @param value String cookie-value
   * @param time  String cookie-time [ s20 | m20 | 1h | 1d ] －> 分别设置为[ 20毫秒 ｜ 20分钟 ｜ 1小时 ｜ 1天 ]
   * @param domian String domain
   * @param path   String domain-path
   */
  set: function(cName, value, time, domain, path) {
    var getSec = function(_t) {
      var str1 = _t.substring(1, _t.length) * 1
      var str2 = _t.substring(0, 1)
      if (str2 === 's') {
        return str1 * 1000
      } else if (str2 === 'm') {
        return str1 * 60 * 1000
      } else if (str2 === 'h') {
        return str1 * 60 * 60 * 1000
      } else if (str2 === 'd') {
        return str1 * 24 * 60 * 60 * 1000
      }
    }
    var expTime = typeof time === 'string' ? getSec(time) : null
    if (expTime) {
      var exdate = new Date()
      exdate.setTime(exdate.getTime() + expTime)
    }
    domain = domain || ''
    path = path || '/'
    document.cookie = cName + '=' + encodeURI(value) + ((expTime === null) ? '' : ';expires=' + exdate.toGMTString()) + ';domain=' + domain + ';path=' + path
  },
  clear: function(cName, domain) {
    domain = domain || ''
    let date = new Date()
    date.setTime(date.getTime() - 10000)
    document.cookie = cName + `=''; expires=` + date.toGMTString() + ';domain=' + domain
  }
}


// 提示
let toastTimer = ''
const Toast = {
  info: (toastInfo, time) => {
    if (document.getElementById('ToastFram')) {
      Toast.hide()
    }
    var fadeTime = time || 2000
    var ToastFram = document.createElement('div')
    ToastFram.id = 'ToastFram'
    ToastFram.style.position = 'fixed'
    ToastFram.style.left = '50%'
    ToastFram.style.top = '50%'
    ToastFram.style.transform = 'translate(-50%)'
    ToastFram.style.transition = 'opacity 0.4s'
    ToastFram.style.marginTop = '-75px'
    ToastFram.style.maxWidth = '80%'
    ToastFram.style.textAlign = 'center'
    ToastFram.style.zIndex = '10000'
    ToastFram.style.color = '#fff'
    ToastFram.style.background = 'rgba(0,0,0,0.5)'
    ToastFram.style.borderRadius = '10px'
    ToastFram.style.fontSize = '15px'
    ToastFram.innerHTML = `<div style="padding:10px 20px">${toastInfo}</div>`
    document.body.appendChild(ToastFram)
    toastTimer = setTimeout(function() {
      document.getElementById('ToastFram').style.opacity = 0
      document.body.removeChild(document.getElementById('ToastFram'))
    }, fadeTime)
  },
  hide: () => {
    document.body.removeChild(document.getElementById('ToastFram'))
    clearTimeout(toastTimer)
    toastTimer = ''
  }
}



export {
  localData,
  cookieData,
  sessionData,
  Toast
}

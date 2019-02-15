function showDate (newyear, newmonth) {
  var nowDate = new Date()
  if ((newyear === 0) && (newmonth === 0)) {
    var year = nowDate.getFullYear()
    var month = nowDate.getMonth() + 1
    var day = nowDate.getDate()
  } else {
    var year = newyear
    var month = newmonth
  }
  // var week = nowDate.getDay()
  var firstday = new Date(year, month - 1, 1).getDay()// 获取当月第一天为周几
  var maxday = new Date(year, month, 0).getDate()// 获取当月有多少天// 通过下个月来判断上个月
  // var finday = new Date(year, month, maxday).getDate()// 获取当月最后一天为周几

  if (firstday > 0) {
    // 添加空格
    return [firstday, maxday, year, month]
  } else if (firstday === 0) {
    // 不作处理
    return [0, maxday, year, month]
  }
}

function prevDate (clicksign) {
  var nowDate = new Date()
  var year = nowDate.getFullYear()
  var month = nowDate.getMonth()
  var day = nowDate.getDate()
  // var week = nowDate.getDay()
  var firstday = new Date(year, month, day).getDay()// 获取当月第一天为周几
  // var maxday = new Date(year, month, 0).getDate()// 获取当月有多少天
  // var finday = new Date(year, month, maxday).getDate()// 获取当月最后一天为周几

  if (clicksign >= month) {
    year = year - ((clicksign - month) / 12 + 1)
    month = month - clicksign % 12
  }

  if (firstday > 0) {
    // 添加空格
  } else if (firstday === 0) {
    // 不作处理
  }
}

function nextDate (clicksign) {
  var nowDate = new Date()
  var year = nowDate.getFullYear()
  var month = nowDate.getMonth()
  var day = nowDate.getDate()
  // var week = nowDate.getDay()
  var firstday = new Date(year, month, day).getDay()// 获取当月第一天为周几
  // var maxday = new Date(year, month, 0).getDate()// 获取当月有多少天
  // var finday = new Date(year, month, maxday).getDate()// 获取当月最后一天为周几

  if (clicksign >= (12 - month)) {
    year = year + ((clicksign + month) / 12 + 1)
    month = month + clicksign % 12
  }

  if (firstday > 0) {
    // 添加空格
  } else if (firstday === 0) {
    // 不作处理
  }
}

export {
  showDate,
  prevDate,
  nextDate
}

export class handleData {
  static switchDate (value) {
    if (value) {
      let date = new Date(value)
      let Y, M, D, h, m, s
      Y = date.getFullYear() + '-'
      M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-'
      D = date.getDay() < 10 ? '0' + date.getDay() : date.getDay()
      h = '  ' + date.getHours() + ':'
      m = date.getSeconds() + ':'
      s = date.getSeconds()
      return Y + M + D + h + m + s
    }
  }
}

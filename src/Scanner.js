export default class Scanner {
  constructor (templateStr) {
    this.templateStr = templateStr
    this.pos = 0
    this.lastStr = templateStr
  }
  scan (endTag) {
    if (this.lastStr.indexOf(endTag) === 0) {
      this.pos += endTag.length
      this.lastStr = this.templateStr.substring(this.pos)
    }
  }
  scanUntil (endTag) {
    // 记录位置
    let index = this.pos
    // pos位置后面的剩余字符串是否存在结束标识
    while (!this.eos() && this.lastStr.indexOf(endTag) !== 0) {
      this.pos++
      this.lastStr = this.templateStr.substring(this.pos)
    }
    // 返回起始位置
    return this.templateStr.substring(index, this.pos)
  }
  eos () {
    return this.pos >= this.templateStr.length
  }
}
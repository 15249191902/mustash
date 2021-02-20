export default class Scanner {
  constructor (templateStr, data) {
    this.templateStr = templateStr
    this.data = data
    this.index = 0
    this.lastStr = templateStr
  }
  scanUtil () {
    let i = 1
    let rStr = this.lastStr
    let index = this.index
    let rArr = []
    while (i < 100 && this.lastStr.length > 0) {
      if (this.templateStr[this.index] === "{") {
        rStr = this.templateStr.substring(index, this.index)
        this.lastStr = this.templateStr.substring(this.index)
        return ["text", rStr]
      } else if (this.templateStr[this.index] === "}") {
        rStr = this.templateStr.substring(index, this.index)
        this.lastStr = this.templateStr.substring(this.index)
        return ["name", rStr]
      }
      this.index++
      i++
    }
    return ["text", rStr]
  }
  scan () {
    if (this.lastStr.length > 0) {
      this.index = this.index + 2
      this.lastStr = this.templateStr.substring(this.index)
    }
  }
}
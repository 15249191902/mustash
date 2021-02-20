import Scanner from "./Scanner"
import nestTokens from "./nestTokens.js"
export default function parseTemplateToTokens (templateStr) {
  let scanObj = new Scanner(templateStr)
  const tokens = []
  while (!scanObj.eos() && scanObj.lastStr !== '') {
    let words = scanObj.scanUntil("{{")
    if (words !== '') {
      tokens.push(['text', words])
    }
    scanObj.scan("{{")
    
    words = scanObj.scanUntil("}}")
    if (words !== '') {
      if (words[0] === "#") {
        tokens.push(['#', words.substring(1)])
      } else if (words[0] === "/") {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(["name", words])
      }
    }
    scanObj.scan("}}")
  }
  return nestTokens(tokens)
}
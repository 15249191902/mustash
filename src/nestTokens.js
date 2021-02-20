export default function nestTokens (tokens) {
  console.log(tokens)
  let nestedTokens = []
  let stack = []
  let p = 0
  let trans = nestedTokens
  // tokens是二维数组
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    console.log(token)
    switch (token[0]) {
      case "#":
        // 入栈
        stack.push([token[0], token[1], []])
        p++
        trans = stack[p][2]
      break;
      case "/":
        // 出栈
        nestedTokens.push(stack.pop())
        p--
        if (p > 0) {
          trans = stack[p][2]
        } else {
          trans = nestedTokens
        }
      break;
      default:
        trans.push(token)
      break
    }
  }
  console.log(nestedTokens)
  return nestedTokens
}
export default function nestTokens (tokens) {
  console.log(tokens)
  let nestedTokens = []
  let stack = []
  let p = 0
  let trans = nestedTokens
  // tokens是二维数组
  for (let i = 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case "#":
        // 入栈
        token[2] = []
        stack.push(token)
        trans = stack[stack.length - 1][2]
      break;
      case "/":
        // 出栈
        let pop = stack.pop()
        trans = stack.length > 0 ?  stack[stack.length - 1][2] : nestedTokens
        trans.push(pop)
      break;
      default:
        trans.push(token)
      break
    }
  }
  console.log(nestedTokens)
  return nestedTokens
}
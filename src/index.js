import parseTemplateToTokens from "./ParseTemplateToTokens.js"
export const SSG_TemplateEngine = {
  render (templateStr, data) {
    let tokens = parseTemplateToTokens(templateStr)
  }
}
window.SSG_TemplateEngine = SSG_TemplateEngine
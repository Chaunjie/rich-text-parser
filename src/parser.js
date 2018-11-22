import ParseJson from './html2json'

class Parser extends ParseJson {
  getRichTextJson (html) {
    return super.getHtmlJson(html)
  }

  definedCustomTag (options) {
    const newOptions = {}
    for (let i in options) {
      newOptions[i] = options[i] ? options[i] : 'div'
    }
    super.definedCustomTag(newOptions)
  }
}

const parser = new Parser()
export default parser

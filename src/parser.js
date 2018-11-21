import ParseJson from './html2json'

class Parser extends ParseJson {
  getRichTextJson (html) {
    return super.getHtmlJson(html)
  }
}

const parser = new Parser()
export default parser

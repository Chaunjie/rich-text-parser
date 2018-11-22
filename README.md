# 在项目中使用该rich-text-parser


**安装**

```bash
$ npm i rich-text-parser -S --production
```

**使用**

```html
  <rich-text nodes="{{nodes}}"></rich-text>
```

```bash
  import parser from 'rich-text-parser'

  parser.definedCustomTag({figure: 'p', figcaption: ''})
  const nodes = parser.getRichTextJson(html)
```
### Api

| 参数 | 说明 | 参数 | 参数类型 | 返回值类型 |
|-----------|----------------------------------|-----------|---------|--------|
| getRichTextJson | 解析html | `html` | `String` | `Object` |
| definedCustomTag | 定义需要解析的特殊标签，value不填默认是div | `options` | `Object` | `-` |


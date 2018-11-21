# 在项目中使用该rich-text-parser


**安装**

```bash
$ npm i rich-text-parser -S --production
```

**使用**

```bash
  import parser from 'rich-text-parser'
  const nodes = parser.getRichTextJson(html)
```

### 参数

| 参数 | 说明 | 类型 |
|-----------|-----------|-----------|
| html | 需要被解析的html | `String` |


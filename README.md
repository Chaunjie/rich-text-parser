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

  Page({
    data: {
          html: `<p>文殊林舍、山房由丽江铂尔曼度假酒店余明金老师设计，是<b>丽江古城的网红民宿</b>，2017年被评为<b>全国100家“最美民宿”</b>，以及2017年<b>最值得睡的“365张床”</b>。</p>
      <p><br></p>
      <p>两家店均位于古城北门坡半山处，背倚青山，<b>可俯瞰古城全景。</b></p>
      <p><br></p>
      <p>文殊·林舍2间房、文殊·山房6间房，共8间房。有可看丽江古城全景的景观房，有落满阳光的大床房，有花园院景的复式房...</p>
      <p><br></p>
      <p>房间<b>按照五星级标准配套</b>，科勒卫浴、鹅绒被、品牌乳胶床垫、高端洗漱用品等，提供免费洗衣机、烘干机、自助厨房等配套服务。</p>
      <p><br></p>
      <p>每个房间距离适中，为所有入住房客营造更私密舒适的空间体验感！另房东可以提供一对一的管家服务，接受所有房客吃喝玩乐咨询以及打折的各种便利活动！</p>
      <p><br></p>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1glier2lsdge1q9irbs1a5u4e.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红民宿大床房</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1glp4b1sml12641ma3b96pnv4j.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红民宿大床房</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1glu4p1q2s1hpm4qu127dhj4o.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红双床房</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gmav71q0b182r1nd7184ufns4t.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红大床房（可观古城全景）</h6>
              </figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gmg28udvhec1s4r1cvl1m2s52.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红大床房（可观古城全景）</h6>
              </figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gmkvj1egf1254le7157quqj57.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红复式星空房（可观古城全景）</h6>
              </figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gmuhq161sf621hu81l7slc85c.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红民宿别墅东院</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gngk76441747omu1on619085h.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>餐厅</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gnlm21gi916okcnf12mp1fh05m.jpg" rate="0.67">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>公共区域</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1go50bftu15c41rbgdoj1e4p5r.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>公共区域</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gonmohor1duu1grv5gd8fu60.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明">公共区域-露台</figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1goslosu2qnn4tn1bdjus965.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红民宿汤池别墅西院</h6></figcaption>
          </figure>
      </div>
      <div class="kai-images">
          <figure contenteditable="false"><img src="http://images.kaishiba.com/o_1cs1gphvmfrgk2momcgko21g6a.jpg" rate="1.50">
              <figcaption contenteditable="true" class="" data-placeholder="请输入图片说明"><h6>丽江文殊设计师网红民宿别墅东院</h6></figcaption>
          </figure>
      </div>
      <p><br></p>
      <p><b>门店信息：</b></p>
      <p>·wifi已覆盖、24小时热水、吹风机、一次性用品</p>
      <p>·电热毯、壁炉、一对一管家服务等</p>
      <p><br></p>
      <p><b>商家联系电话：</b></p>
      <p>·地址：云南省丽江市古城区北门坡玄天巷26号</p>
      <p>·电话：15099128722</p>`,
      nodes: []
    },
    onLoad () {
        const {html} = this.data
        // 定义需要解析的特殊标签，value不填默认是div
        parser.definedCustomTag({figure: 'div', figcaption: ''})
        const nodes = parser.getRichTextJson(html)
        this.setData({
          nodes: nodes.children
        })
      }
  })
```
### Api

| 参数 | 说明 | 参数 | 参数类型 | 返回值类型 |
|-----------|----------------------------------|-----------|---------|--------|
| getRichTextJson | 解析html | `html` | `String` | `Object` |
| definedCustomTag | 定义需要解析的特殊标签，value不填默认是div | `options` | `Object` | `-` |


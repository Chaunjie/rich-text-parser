'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _discode = require('./discode');

var _discode2 = _interopRequireDefault(_discode);

var _htmlparser = require('./htmlparser');

var _htmlparser2 = _interopRequireDefault(_htmlparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HtmlToJson = function () {
  function HtmlToJson() {
    _classCallCheck(this, HtmlToJson);

    this.__placeImgeUrlHttps = 'https';
  }

  _createClass(HtmlToJson, [{
    key: 'removeDoctype',
    value: function removeDoctype(html) {
      return html.replace(/<\?xml.*\?>\n/, '').replace(/<.*!doctype.*\n/, '').replace(/<.*!DOCTYPE.*\n/, '');
    }
  }, {
    key: 'trimHtml',
    value: function trimHtml(html) {
      return html.replace(/\r?\n+/g, '').replace(/<!--.*?-->/ig, '').replace(/\/\*.*?\*\//ig, '').replace(/[ ]+</ig, '<');
    }
  }, {
    key: 'getHtmlJson',
    value: function getHtmlJson(html) {
      html = this.removeDoctype(html);
      html = this.trimHtml(html);
      html = _discode2.default.strDiscode(html);

      var bufArray = [];
      var results = {
        children: []
      };

      (0, _htmlparser2.default)(html, {
        start: function start(tag, attrs, unary) {
          var node = {
            name: tag
          };

          if (attrs.length !== 0) {
            node.attrs = attrs.reduce(function (pre, attr) {
              var name = attr.name;
              var value = attr.value;
              if (pre[name]) {
                if (Array.isArray(pre[name])) {
                  pre[name].push(value);
                } else {
                  pre[name] = [pre[name], value];
                }
              } else {
                pre[name] = value;
              }
              return pre;
            }, {});
          }

          node.attrs = Object.assign({}, node.attrs);
          var hasClass = node.attrs.hasOwnProperty('class');
          node.attrs.class = hasClass ? node.attrs.class + ' rich-' + node.name : 'rich-' + node.name;

          if (node.name === 'img') {
            var imgUrl = node.attrs.src;
            if (imgUrl[0] === '') {
              imgUrl.splice(0, 1);
            }
            imgUrl = _discode2.default.urlToHttpUrl(imgUrl, this.__placeImgeUrlHttps);
            node.attrs.src = imgUrl;
          }

          if (node.name === 'source') {
            results.source = node.attrs.src;
          }

          if (unary) {
            var parent = bufArray[0] || results;
            if (parent.children === undefined) {
              parent.children = [];
            }
            parent.children.push(node);
          } else {
            bufArray.unshift(node);
          }
        },
        end: function end(tag) {
          var node = bufArray.shift();
          if (node.name !== tag) console.error('invalid state: mismatch end tag');

          if (node.name === 'video' && results.source) {
            node.attrs.src = results.source;
            delete results.source;
          }

          if (bufArray.length === 0) {
            results.children.push(node);
          } else {
            var parent = bufArray[0];
            if (parent.children === undefined) {
              parent.children = [];
            }
            parent.children.push(node);
          }
        },
        chars: function chars(text) {
          var node = {
            text: text,
            type: 'text'
          };

          if (bufArray.length === 0) {
            results.children.push(node);
          } else {
            var parent = bufArray[0];
            if (parent.children === undefined) {
              parent.children = [];
            }
            parent.children.push(node);
          }
        },
        comment: function comment(text) {}
      });

      return results;
    }
  }]);

  return HtmlToJson;
}();

exports.default = HtmlToJson;
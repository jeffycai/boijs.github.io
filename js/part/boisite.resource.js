webpackJsonp([2],{77:function(e,exports,i){var a,t;i(78),a=i(80),t=i(82),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),t&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=t)},78:function(e,exports,i){var a=i(79);"string"==typeof a&&(a=[[e.id,a,""]]);i(9)(a,{});a.locals&&(e.exports=a.locals)},79:function(e,exports,i){exports=e.exports=i(7)(),exports.push([e.id,".content{max-width:1024px;margin:0 auto;padding:2rem}.content .head{font-size:2rem;font-weight:600}.content .body{padding:1rem;font-size:1.2rem;line-height:1.5}",""])},80:function(e,exports,i){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=i(11),o=a(t);exports["default"]={data:function(){var e=i(81);return{content:e}},components:{IndexHeader:o["default"]}}},82:function(e,exports){e.exports=" <index-header v-bind:isfix=true></index-header> <div class=content> <div class=head>boi资源汇总</div> <div class=body v-html=content></div> </div> "},81:function(e,exports){e.exports="<h3><a name=github class=anchor href=#github><span class=header-link></span></a>Github</h3><ul> <li><a href=https://github.com/boijs>boijs team</a>;</li> <li><a href=https://github.com/boijs/boi>boi</a>;</li> <li><a href=https://github.com/boijs/boi-kernel>boi-kernel</a>。</li> <li><a href=https://github.com/boijs/boit>boit</a>。</li> </ul> <h3><a name=demo class=anchor href=#demo><span class=header-link></span></a>demo</h3><ul> <li><a href=https://github.com/boijs/boi-example>boi-example</a>。</li> </ul> <h3><a name=boi-cha-jian class=anchor href=#boi-cha-jian><span class=header-link></span></a>boi插件</h3><ul> <li>markdown编译插件<a href=https://github.com/boijs/boi-plugin-loader-md>boi-plugin-loader-md</a>；</li> <li>vue编译插件<a href=https://github.com/boijs/boi-plugin-loader-vue>boi-plugin-loader-vue</a>；</li> <li>svg sprite编译插件<a href=https://github.com/boijs/boi-plugin-loader-svgsprite>boi-plugin-loader-svgsprite</a>。</li> </ul> <h3><a name=webpack-cha-jian class=anchor href=#webpack-cha-jian><span class=header-link></span></a>webpack插件</h3><ul> <li>编译更新url插件<a href=https://github.com/boijs/html-webpack-replaceurl-plugin>html-webpack-replaceurl-plugin</a>；</li> <li>html文档注入内容插件<a href=https://github.com/boijs/webpack-html-inject-plugin>webpack-html-inject-plugin</a>；</li> <li>编译输出static manifest插件<a href=https://github.com/boijs/webpack-srcmap-plugin>webpack-srcmap-plugin</a>。</li> </ul>"}});
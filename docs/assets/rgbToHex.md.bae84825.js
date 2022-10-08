import{_ as s,c as a,o as e,a as n}from"./app.52e0f178.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"rgbToHex \u{1F389} \u{1F4AF}","slug":"rgbtohex","link":"#rgbtohex","children":[]}],"relativePath":"rgbToHex.md"}'),r={name:"rgbToHex.md"},t=n(`<h2 id="rgbtohex" tabindex="-1">rgbToHex \u{1F389} \u{1F4AF} <a class="header-anchor" href="#rgbtohex" aria-hidden="true">#</a></h2><p>\u5C06rgb(a)\u8272\u503C\u8F6C\u4E3A16\u8FDB\u5236hex\u8272\u503C</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li><strong>rgba</strong> <code>string</code> \u5B57\u7B26\u4E32</li></ul><h4 id="td-ts" tabindex="-1">td.ts <a class="header-anchor" href="#td-ts" aria-hidden="true">#</a></h4><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>rgbToHex(rgba: string): string</code></p></div><h4 id="\u8FD4\u56DE" tabindex="-1">\u8FD4\u56DE <a class="header-anchor" href="#\u8FD4\u56DE" aria-hidden="true">#</a></h4><ul><li><code>string</code></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5B57\u7B26\u4E32</p></div><h4 id="\u5F02\u5E38" tabindex="-1">\u5F02\u5E38 <a class="header-anchor" href="#\u5F02\u5E38" aria-hidden="true">#</a></h4><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u65E0\u6CD5\u8BC6\u522B\u6B63\u786E\u7684rgba rgba\u53C2\u6570\u4E0D\u662F\u6B63\u786E\u7684hex\u65F6\u89E6\u53D1</p></div><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">rgbToHex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">170,187,255</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;#aabbff&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>// \u652F\u6301\u900F\u660E\u5EA6</p><div class="language-ts line-numbers-mode"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">rgbToHex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">170,187,255,0.91</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// =&gt; &#39;#aabbffe8&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),o=[t];function l(c,p,i,d,h,b){return e(),a("div",null,o)}const _=s(r,[["render",l]]);export{u as __pageData,_ as default};

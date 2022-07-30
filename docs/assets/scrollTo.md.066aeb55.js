import{_ as s,c as a,o as l,a as n}from"./app.551fc253.js";const A=JSON.parse('{"title":"scrollTo \u{1F389} \u{1F4AF}","description":"","frontmatter":{},"headers":[{"level":2,"title":"scrollTo \u{1F389} \u{1F4AF}","slug":"scrollto-tada-100"}],"relativePath":"scrollTo.md"}'),o={name:"scrollTo.md"},e=n(`<h2 id="scrollto-tada-100" tabindex="-1">scrollTo \u{1F389} \u{1F4AF} <a class="header-anchor" href="#scrollto-tada-100" aria-hidden="true">#</a></h2><p>\u6EDA\u52A8\u81F3\xB7\xB7\xB7</p><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><ul><li>option? <code>\u6620\u5C04</code> \u53EF\u9009\u7684\u5BF9\u8C61 <ul><li>direction? <code>|</code> \u6EDA\u52A8\u7684\u53CD\u5411\uFF0C\u9ED8\u8BA4 &#39;top&#39;, \u652F\u6301 &#39;top&#39; | &#39;left&#39;</li><li>dom? <code>null</code> \u6EDA\u52A8\u7684\u76EE\u6807\u5143\u7D20\uFF0C\u9ED8\u8BA4 document.scrollingElement</li><li>num? <code>number</code> \u6EDA\u52A8\u7684\u76EE\u6807\u503C\uFF0C\u9ED8\u8BA4 0</li><li>rate? <code>number</code> \u6EDA\u52A8\u7684\u6B65\u957F\uFF0C\u9ED8\u8BA4 4</li></ul></li><li>callback? <code>null</code> \u6EDA\u52A8\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570</li></ul><h4 id="\u5B9E\u4F8B" tabindex="-1">\u5B9E\u4F8B <a class="header-anchor" href="#\u5B9E\u4F8B" aria-hidden="true">#</a></h4><p>\u56DE\u5230\u9876\u90E8</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">scrollTo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u56DE\u5230\u9876\u90E8\u540E\u89E6\u53D1\u56DE\u8C03</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">scrollTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5230\u4E86</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u56DE\u5230\u8DDD\u79BB\u9876\u90E8\u7684100\u50CF\u7D20\u7684\u4F4D\u7F6E</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">scrollTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6EDA\u52A8\u5230\u5143\u7D20box\u7684\u6700\u5DE6\u7AEF</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">scrollTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">dom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6EDA\u52A8\u5230\u5143\u7D20box\u8DDD\u79BB\u5DE6\u7AEF100\u50CF\u7D20\u4F4D\u7F6E</p><div class="language-ts line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#82AAFF;">scrollTo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">dom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.box</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,15),p=[e];function c(r,t,i,d,D,y){return l(),a("div",null,p)}var C=s(o,[["render",c]]);export{A as __pageData,C as default};

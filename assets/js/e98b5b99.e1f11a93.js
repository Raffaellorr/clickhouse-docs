"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29729],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97795:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_label:"FORMAT"},l="\u683c\u5f0f\u5316\u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/format",id:"zh/sql-reference/statements/select/format",title:"\u683c\u5f0f\u5316\u5b50\u53e5",description:"format-clause}",source:"@site/docs/zh/sql-reference/statements/select/format.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/format",permalink:"/zh/sql-reference/statements/select/format",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/statements/select/format.md",tags:[],version:"current",frontMatter:{sidebar_label:"FORMAT"},sidebar:"chinese",previous:{title:"DISTINCT",permalink:"/zh/sql-reference/statements/select/distinct"},next:{title:"FROM",permalink:"/zh/sql-reference/statements/select/from"}},p={},u=[{value:"\u9ed8\u8ba4\u683c\u5f0f",id:"default-format",level:2},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"format-clause"},"\u683c\u5f0f\u5316\u5b50\u53e5"),(0,o.kt)("p",null,"ClickHouse\u652f\u6301\u5e7f\u6cdb\u7684 ",(0,o.kt)("a",{parentName:"p",href:"/zh/interfaces/formats"},"\u5e8f\u5217\u5316\u683c\u5f0f")," \u53ef\u7528\u4e8e\u67e5\u8be2\u7ed3\u679c\u7b49\u3002 \u6709\u591a\u79cd\u65b9\u6cd5\u53ef\u4ee5\u9009\u62e9\u683c\u5f0f\u5316 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," \u7684\u8f93\u51fa\uff0c\u5176\u4e2d\u4e4b\u4e00\u662f\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMAT format")," \u5728\u67e5\u8be2\u7ed3\u675f\u65f6\u4ee5\u4efb\u4f55\u7279\u5b9a\u683c\u5f0f\u83b7\u53d6\u7ed3\u679c\u96c6\u3002"),(0,o.kt)("p",null,"\u7279\u5b9a\u7684\u683c\u5f0f\u65b9\u4fbf\u4f7f\u7528\uff0c\u4e0e\u5176\u4ed6\u7cfb\u7edf\u96c6\u6210\u6216\u589e\u5f3a\u6027\u80fd\u3002"),(0,o.kt)("h2",{id:"default-format"},"\u9ed8\u8ba4\u683c\u5f0f"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u88ab\u7701\u7565\u5219\u4f7f\u7528\u9ed8\u8ba4\u683c\u5f0f\uff0c\u8fd9\u53d6\u51b3\u4e8e\u7528\u4e8e\u8bbf\u95eeClickHouse\u670d\u52a1\u5668\u7684\u8bbe\u7f6e\u548c\u63a5\u53e3\u3002 \u4e3a ",(0,o.kt)("a",{parentName:"p",href:"/zh/interfaces/http"},"HTTP\u63a5\u53e3")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/zh/interfaces/cli"},"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef")," \u5728\u6279\u5904\u7406\u6a21\u5f0f\u4e0b\uff0c\u9ed8\u8ba4\u683c\u5f0f\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"TabSeparated"),". \u5bf9\u4e8e\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u7684\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\uff0c\u9ed8\u8ba4\u683c\u5f0f\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"PrettyCompact")," \uff08\u5b83\u751f\u6210\u7d27\u51d1\u7684\u4eba\u7c7b\u53ef\u8bfb\u8868\uff09\u3002"),(0,o.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,o.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u65f6\uff0c\u6570\u636e\u59cb\u7ec8\u4ee5\u5185\u90e8\u9ad8\u6548\u683c\u5f0f\u901a\u8fc7\u7f51\u7edc\u4f20\u9012 (",(0,o.kt)("inlineCode",{parentName:"p"},"Native"),"). \u5ba2\u6237\u7aef\u72ec\u7acb\u89e3\u91ca ",(0,o.kt)("inlineCode",{parentName:"p"},"FORMAT")," \u67e5\u8be2\u5b50\u53e5\u5e76\u683c\u5f0f\u5316\u6570\u636e\u672c\u8eab\uff08\u4ee5\u51cf\u8f7b\u7f51\u7edc\u548c\u670d\u52a1\u5668\u7684\u989d\u5916\u8d1f\u62c5\uff09\u3002"))}m.isMDXComponent=!0}}]);
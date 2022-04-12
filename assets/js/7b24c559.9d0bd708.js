"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70707],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=o(n),d=a,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||u;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<u;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return s}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),l=["components"],c={sidebar_position:46,sidebar_label:"UUID"},i="UUID",o={unversionedId:"zh/sql-reference/data-types/uuid",id:"zh/sql-reference/data-types/uuid",title:"UUID",description:"uuid-data-type}",source:"@site/docs/zh/sql-reference/data-types/uuid.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/uuid",permalink:"/zh/sql-reference/data-types/uuid",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/data-types/uuid.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"UUID"},sidebar:"chinese",previous:{title:"UInt8, UInt16, UInt32, UInt64, UInt128, UInt256, Int8, Int16, Int32, Int64, Int128, Int256",permalink:"/zh/sql-reference/data-types/int-uint"},next:{title:"Date32",permalink:"/zh/sql-reference/data-types/date32"}},p={},s=[{value:"\u5982\u4f55\u751f\u6210",id:"how-to-generate",level:2},{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2},{value:"\u9650\u5236",id:"restrictions",level:2}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"uuid-data-type"},"UUID"),(0,u.kt)("p",null,"\u901a\u7528\u552f\u4e00\u6807\u8bc6\u7b26(UUID)\u662f\u4e00\u4e2a16\u5b57\u8282\u7684\u6570\u5b57\uff0c\u7528\u4e8e\u6807\u8bc6\u8bb0\u5f55\u3002\u6709\u5173UUID\u7684\u8be6\u7ec6\u4fe1\u606f, \u53c2\u89c1",(0,u.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Universally_unique_identifier"},"\u7ef4\u57fa\u767e\u79d1"),"\u3002"),(0,u.kt)("p",null,"UUID\u7c7b\u578b\u503c\u7684\u793a\u4f8b\u5982\u4e0b:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"61f0c404-5cb3-11e7-907b-a6006ad3dba0\n")),(0,u.kt)("p",null,"\u5982\u679c\u5728\u63d2\u5165\u65b0\u8bb0\u5f55\u65f6\u672a\u6307\u5b9aUUID\u5217\u7684\u503c\uff0c\u5219UUID\u503c\u5c06\u7528\u96f6\u586b\u5145:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"00000000-0000-0000-0000-000000000000\n")),(0,u.kt)("h2",{id:"how-to-generate"},"\u5982\u4f55\u751f\u6210"),(0,u.kt)("p",null,"\u8981\u751f\u6210UUID\u503c\uff0cClickHouse\u63d0\u4f9b\u4e86 ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/uuid-functions"},"generateuidv4")," \u51fd\u6570\u3002"),(0,u.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u793a\u4f8b1")),(0,u.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u6f14\u793a\u4e86\u521b\u5efa\u4e00\u4e2a\u5177\u6709UUID\u7c7b\u578b\u5217\u7684\u8868\uff0c\u5e76\u5728\u8868\u4e2d\u63d2\u5165\u4e00\u4e2a\u503c\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_uuid (x UUID, y String) ENGINE=TinyLog\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_uuid SELECT generateUUIDv4(), 'Example 1'\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t_uuid\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 417ddc5d-e556-4d27-95dd-a34d84e46a50 \u2502 Example 1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u793a\u4f8b2")),(0,u.kt)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u63d2\u5165\u65b0\u8bb0\u5f55\u65f6\u672a\u6307\u5b9aUUID\u5217\u7684\u503c\u3002"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_uuid (y) VALUES ('Example 2')\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t_uuid\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u252c\u2500y\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 417ddc5d-e556-4d27-95dd-a34d84e46a50 \u2502 Example 1 \u2502\n\u2502 00000000-0000-0000-0000-000000000000 \u2502 Example 2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,u.kt)("h2",{id:"restrictions"},"\u9650\u5236"),(0,u.kt)("p",null,"UUID\u6570\u636e\u7c7b\u578b\u53ea\u652f\u6301 ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32")," \u6570\u636e\u7c7b\u578b\u4e5f\u652f\u6301\u7684\u51fd\u6570(\u6bd4\u5982, ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/min#agg_function-min"},"min"),", ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/max#agg_function-max"},"max"),", \u548c ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/count#agg_function-count"},"count"),")\u3002"),(0,u.kt)("p",null,"\u7b97\u672f\u8fd0\u7b97\u4e0d\u652f\u6301UUID\u6570\u636e\u7c7b\u578b\uff08\u4f8b\u5982, ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/arithmetic-functions#arithm_func-abs"},"abs"),"\uff09\u6216\u805a\u5408\u51fd\u6570\uff0c\u4f8b\u5982 ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/sum#agg_function-sum"},"sum")," \u548c ",(0,u.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/avg#agg_function-avg"},"avg"),"."))}d.isMDXComponent=!0}}]);
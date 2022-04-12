"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[36042],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},36252:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],p={sidebar_position:61,sidebar_label:"Multiword Type Names"},o="Multiword Types",s={unversionedId:"en/sql-reference/data-types/multiword-types",id:"en/sql-reference/data-types/multiword-types",title:"Multiword Types",description:"multiword-types}",source:"@site/docs/en/sql-reference/data-types/multiword-types.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/multiword-types",permalink:"/en/sql-reference/data-types/multiword-types",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/data-types/multiword-types.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"Multiword Type Names"},sidebar:"english",previous:{title:"IPv6",permalink:"/en/sql-reference/data-types/domains/ipv6"},next:{title:"Geo",permalink:"/en/sql-reference/data-types/geo"}},d={},u=[{value:"Multiword Types Support",id:"multiword-types-support",level:2}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"multiword-types"},"Multiword Types"),(0,l.kt)("p",null,"When creating tables, you can use data types with a name consisting of several words. This is implemented for better SQL compatibility."),(0,l.kt)("h2",{id:"multiword-types-support"},"Multiword Types Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Multiword types"),(0,l.kt)("th",{parentName:"tr",align:null},"Simple types"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE PRECISION"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/float"},"Float64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR LARGE OBJECT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR VARYING"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHARACTER LARGE OBJECT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHARACTER VARYING"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NCHAR LARGE OBJECT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NCHAR VARYING"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER LARGE OBJECT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER VARYING"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NATIONAL CHAR VARYING"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NATIONAL CHARACTER"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NATIONAL CHAR"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY LARGE OBJECT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY VARYING"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/string"},"String"))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/data-types/multiword-types/"},"Original article")," "))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99969],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(t),f=i,b=g["".concat(s,".").concat(f)]||g[f]||u[f]||a;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},40738:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],l={sidebar_position:50,sidebar_label:"Special"},s="Special Table Engines",c={unversionedId:"en/engines/table-engines/special/index",id:"en/engines/table-engines/special/index",title:"Special Table Engines",description:"special-table-engines}",source:"@site/docs/en/engines/table-engines/special/index.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/",permalink:"/en/engines/table-engines/special/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/engines/table-engines/special/index.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"Special"},sidebar:"english",previous:{title:"MaterializedPostgreSQL",permalink:"/en/engines/table-engines/integrations/materialized-postgresql"},next:{title:"Distributed",permalink:"/en/engines/table-engines/special/distributed"}},p={},u=[],g={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"special-table-engines"},"Special Table Engines"),(0,a.kt)("p",null,"There are three main categories of table engines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/engines/table-engines/mergetree-family/"},"MergeTree engine family")," for main production use."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/engines/table-engines/log-family/"},"Log engine family")," for small temporary data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/engines/table-engines/integrations/"},"Table engines for integrations"),".")),(0,a.kt)("p",null,"The remaining engines are unique in their purpose and are not grouped into families yet, thus they are placed in this \u201cspecial\u201d category."))}f.isMDXComponent=!0}}]);
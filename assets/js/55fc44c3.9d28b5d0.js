"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14389],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},p="system.zookeeper",s={unversionedId:"zh/operations/system-tables/zookeeper",id:"zh/operations/system-tables/zookeeper",title:"system.zookeeper",description:"system-zookeeper}",source:"@site/docs/zh/operations/system-tables/zookeeper.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/zookeeper",permalink:"/zh/operations/system-tables/zookeeper",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/system-tables/zookeeper.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.users",permalink:"/zh/operations/system-tables/users"},next:{title:"system.zookeeper_log",permalink:"/zh/operations/system-tables/zookeeper_log"}},c={},m=[],u={toc:m};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-zookeeper"},"system.zookeeper"),(0,i.kt)("p",null,"\u5982\u679c\u672a\u914d\u7f6eZooKeeper\uff0c\u5219\u8be5\u8868\u4e0d\u5b58\u5728\u3002 \u5141\u8bb8\u4ece\u914d\u7f6e\u4e2d\u5b9a\u4e49\u7684ZooKeeper\u96c6\u7fa4\u8bfb\u53d6\u6570\u636e\u3002\n\u67e5\u8be2\u5fc5\u987b\u5177\u6709 \u2018path\u2019 WHERE\u5b50\u53e5\u4e2d\u7684\u76f8\u7b49\u6761\u4ef6\u3002 \u8fd9\u662fZooKeeper\u4e2d\u60a8\u60f3\u8981\u83b7\u53d6\u6570\u636e\u7684\u5b50\u8def\u5f84\u3002"),(0,i.kt)("p",null,"\u67e5\u8be2 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.zookeeper WHERE path = '/clickhouse'")," \u8f93\u51fa",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse"),"\u8282\u70b9\u7684\u5bf9\u6240\u6709\u5b50\u8def\u5f84\u7684\u6570\u636e\u3002\n\u8981\u8f93\u51fa\u6240\u6709\u6839\u8282\u70b9\u7684\u6570\u636e\uff0c\u4f7f\u7528path= \u2018/\u2019.\n\u5982\u679c\u5728\u6307\u5b9a\u7684\u8def\u5f84 \u2018path\u2019 \u4e0d\u5b58\u5728\uff0c\u5c06\u5f15\u53d1\u5f02\u5e38\u3002"),(0,i.kt)("p",null,"\u67e5\u8be2",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT * FROM system.zookeeper WHERE path IN ('/', '/clickhouse')")," \u8f93\u51fa",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"/clickhouse"),"\u8282\u70b9\u4e0a\u6240\u6709\u5b50\u8282\u70b9\u7684\u6570\u636e\u3002\n\u5982\u679c\u5728\u6307\u5b9a\u7684 \u2018path\u2019 \u96c6\u5408\u4e2d\u6709\u4e0d\u5b58\u5728\u7684\u8def\u5f84\uff0c\u5c06\u5f15\u53d1\u5f02\u5e38\u3002\n\u5b83\u53ef\u4ee5\u7528\u6765\u505a\u4e00\u6279ZooKeeper\u8def\u5f84\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (String) \u2014 \u8282\u70b9\u7684\u540d\u5b57\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (String) \u2014 \u8282\u70b9\u7684\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," (String) \u2014 \u8282\u70b9\u7684\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataLength")," (Int32) \u2014 \u8282\u70b9\u7684\u503c\u957f\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numChildren")," (Int32) \u2014 \u5b50\u8282\u70b9\u7684\u4e2a\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"czxid")," (Int64) \u2014 \u521b\u5efa\u8be5\u8282\u70b9\u7684\u4e8b\u52a1ID\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mzxid")," (Int64) \u2014 \u6700\u540e\u4fee\u6539\u8be5\u8282\u70b9\u7684\u4e8b\u52a1ID\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pzxid")," (Int64) \u2014 \u6700\u540e\u5220\u9664\u6216\u8005\u589e\u52a0\u5b50\u8282\u70b9\u7684\u4e8b\u52a1ID\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ctime")," (DateTime) \u2014 \u8282\u70b9\u7684\u521b\u5efa\u65f6\u95f4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mtime")," (DateTime) \u2014 \u8282\u70b9\u7684\u6700\u540e\u4fee\u6539\u65f6\u95f4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," (Int32) \u2014 \u8282\u70b9\u7248\u672c\uff1a\u8282\u70b9\u88ab\u4fee\u6539\u7684\u6b21\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cversion")," (Int32) \u2014 \u589e\u52a0\u6216\u5220\u9664\u5b50\u8282\u70b9\u7684\u4e2a\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aversion")," (Int32) \u2014 ACL\u7684\u4fee\u6539\u6b21\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ephemeralOwner")," (Int64) \u2014 \u9488\u5bf9\u4e34\u65f6\u8282\u70b9\uff0c\u62e5\u6709\u8be5\u8282\u70b9\u7684\u4e8b\u52a1ID\u3002")),(0,i.kt)("p",null,"\u793a\u4f8b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.zookeeper\nWHERE path = '/clickhouse/tables/01-08/visits/replicas'\nFORMAT Vertical\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:           example01-08-1.yandex.ru\nvalue:\nczxid:          932998691229\nmzxid:          932998691229\nctime:          2015-03-27 16:49:51\nmtime:          2015-03-27 16:49:51\nversion:        0\ncversion:       47\naversion:       0\nephemeralOwner: 0\ndataLength:     0\nnumChildren:    7\npzxid:          987021031383\npath:           /clickhouse/tables/01-08/visits/replicas\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nname:           example01-08-2.yandex.ru\nvalue:\nczxid:          933002738135\nmzxid:          933002738135\nctime:          2015-03-27 16:57:01\nmtime:          2015-03-27 16:57:01\nversion:        0\ncversion:       37\naversion:       0\nephemeralOwner: 0\ndataLength:     0\nnumChildren:    7\npzxid:          987021252247\npath:           /clickhouse/tables/01-08/visits/replicas\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/zookeeper"},"\u539f\u6587")," "))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16120],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return c}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return t?r.createElement(f,l(l({ref:n},o),{},{components:t})):r.createElement(f,l({ref:n},o))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=u;var g={};for(var s in n)hasOwnProperty.call(n,s)&&(g[s]=n[s]);g.originalType=e,g.mdxType="string"==typeof e?e:i,l[1]=g;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},26370:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return g},metadata:function(){return p},toc:function(){return m}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],g={},s="\u8868\u5f15\u64ce",p={unversionedId:"zh/engines/table-engines/index",id:"zh/engines/table-engines/index",title:"\u8868\u5f15\u64ce",description:"biao-yin-qing}",source:"@site/docs/zh/engines/table-engines/index.md",sourceDirName:"zh/engines/table-engines",slug:"/zh/engines/table-engines/",permalink:"/zh/engines/table-engines/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/engines/table-engines/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"index",permalink:"/zh/engines/"},next:{title:"\u5408\u5e76\u6811\u5bb6\u65cf",permalink:"/zh/engines/table-engines/mergetree-family/"}},o={},m=[{value:"MergeTree",id:"mergetree",level:2},{value:"\u65e5\u5fd7",id:"log",level:2},{value:"\u96c6\u6210\u5f15\u64ce",id:"integration-engines",level:2},{value:"\u7528\u4e8e\u5176\u4ed6\u7279\u5b9a\u529f\u80fd\u7684\u5f15\u64ce",id:"yong-yu-qi-ta-te-ding-gong-neng-de-yin-qing",level:2}],u={toc:m};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"biao-yin-qing"},"\u8868\u5f15\u64ce"),(0,a.kt)("p",null,"\u8868\u5f15\u64ce\uff08\u5373\u8868\u7684\u7c7b\u578b\uff09\u51b3\u5b9a\u4e86\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7684\u5b58\u50a8\u65b9\u5f0f\u548c\u4f4d\u7f6e\uff0c\u5199\u5230\u54ea\u91cc\u4ee5\u53ca\u4ece\u54ea\u91cc\u8bfb\u53d6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u54ea\u4e9b\u67e5\u8be2\u4ee5\u53ca\u5982\u4f55\u652f\u6301\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u6570\u636e\u8bbf\u95ee\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7d22\u5f15\u7684\u4f7f\u7528\uff08\u5982\u679c\u5b58\u5728\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u53ef\u4ee5\u6267\u884c\u591a\u7ebf\u7a0b\u8bf7\u6c42\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u590d\u5236\u53c2\u6570\u3002")),(0,a.kt)("h1",{id:"yin-qing-lei-xing"},"\u5f15\u64ce\u7c7b\u578b"),(0,a.kt)("h2",{id:"mergetree"},"MergeTree"),(0,a.kt)("p",null,"\u9002\u7528\u4e8e\u9ad8\u8d1f\u8f7d\u4efb\u52a1\u7684\u6700\u901a\u7528\u548c\u529f\u80fd\u6700\u5f3a\u5927\u7684\u8868\u5f15\u64ce\u3002\u8fd9\u4e9b\u5f15\u64ce\u7684\u5171\u540c\u7279\u70b9\u662f\u53ef\u4ee5\u5feb\u901f\u63d2\u5165\u6570\u636e\u5e76\u8fdb\u884c\u540e\u7eed\u7684\u540e\u53f0\u6570\u636e\u5904\u7406\u3002 MergeTree\u7cfb\u5217\u5f15\u64ce\u652f\u6301\u6570\u636e\u590d\u5236\uff08\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/replication#table_engines-replication"},"Replicated","*")," \u7684\u5f15\u64ce\u7248\u672c\uff09\uff0c\u5206\u533a\u548c\u4e00\u4e9b\u5176\u4ed6\u5f15\u64ce\u4e0d\u652f\u6301\u7684\u5176\u4ed6\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u8be5\u7c7b\u578b\u7684\u5f15\u64ce\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/mergetree#mergetree"},"MergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/replacingmergetree#replacingmergetree"},"ReplacingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/summingmergetree#summingmergetree"},"SummingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/aggregatingmergetree#aggregatingmergetree"},"AggregatingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/collapsingmergetree#table_engine-collapsingmergetree"},"CollapsingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/versionedcollapsingmergetree#versionedcollapsingmergetree"},"VersionedCollapsingMergeTree")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/mergetree-family/graphitemergetree#graphitemergetree"},"GraphiteMergeTree"))),(0,a.kt)("h2",{id:"log"},"\u65e5\u5fd7"),(0,a.kt)("p",null,"\u5177\u6709\u6700\u5c0f\u529f\u80fd\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/log-family/"},"\u8f7b\u91cf\u7ea7\u5f15\u64ce"),"\u3002\u5f53\u60a8\u9700\u8981\u5feb\u901f\u5199\u5165\u8bb8\u591a\u5c0f\u8868\uff08\u6700\u591a\u7ea6100\u4e07\u884c\uff09\u5e76\u5728\u4ee5\u540e\u6574\u4f53\u8bfb\u53d6\u5b83\u4eec\u65f6\uff0c\u8be5\u7c7b\u578b\u7684\u5f15\u64ce\u662f\u6700\u6709\u6548\u7684\u3002"),(0,a.kt)("p",null,"\u8be5\u7c7b\u578b\u7684\u5f15\u64ce\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/tinylog#tinylog"},"TinyLog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/stripelog#stripelog"},"StripeLog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/log-family/log#log"},"Log"))),(0,a.kt)("h2",{id:"integration-engines"},"\u96c6\u6210\u5f15\u64ce"),(0,a.kt)("p",null,"\u7528\u4e8e\u4e0e\u5176\u4ed6\u7684\u6570\u636e\u5b58\u50a8\u4e0e\u5904\u7406\u7cfb\u7edf\u96c6\u6210\u7684\u5f15\u64ce\u3002\n\u8be5\u7c7b\u578b\u7684\u5f15\u64ce\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/kafka#kafka"},"Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/mysql#mysql"},"MySQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/odbc#table-engine-odbc"},"ODBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/jdbc#table-engine-jdbc"},"JDBC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/integrations/hdfs#hdfs"},"HDFS"))),(0,a.kt)("h2",{id:"yong-yu-qi-ta-te-ding-gong-neng-de-yin-qing"},"\u7528\u4e8e\u5176\u4ed6\u7279\u5b9a\u529f\u80fd\u7684\u5f15\u64ce"),(0,a.kt)("p",null,"\u8be5\u7c7b\u578b\u7684\u5f15\u64ce\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/distributed#distributed"},"Distributed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/materializedview#materializedview"},"MaterializedView")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/dictionary#dictionary"},"Dictionary")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/merge#merge"},"Merge")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/file#file"},"File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/null#null"},"Null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/set#set"},"Set")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/join#join"},"Join")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/url#table_engines-url"},"URL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/view#table_engines-view"},"View")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/memory#memory"},"Memory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/buffer#buffer"},"Buffer"))),(0,a.kt)("h1",{id:"table_engines-virtual_columns"},"\u865a\u62df\u5217"),(0,a.kt)("p",null,"\u865a\u62df\u5217\u662f\u8868\u5f15\u64ce\u7ec4\u6210\u7684\u4e00\u90e8\u5206\uff0c\u5b83\u5728\u5bf9\u5e94\u7684\u8868\u5f15\u64ce\u7684\u6e90\u4ee3\u7801\u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u60a8\u4e0d\u80fd\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," \u4e2d\u6307\u5b9a\u865a\u62df\u5217\uff0c\u5e76\u4e14\u865a\u62df\u5217\u4e0d\u4f1a\u5305\u542b\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"DESCRIBE TABLE")," \u7684\u67e5\u8be2\u7ed3\u679c\u4e2d\u3002\u865a\u62df\u5217\u662f\u53ea\u8bfb\u7684\uff0c\u6240\u4ee5\u60a8\u4e0d\u80fd\u5411\u865a\u62df\u5217\u4e2d\u5199\u5165\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u67e5\u8be2\u865a\u62df\u5217\u4e2d\u7684\u6570\u636e\uff0c\u60a8\u5fc5\u987b\u5728SELECT\u67e5\u8be2\u4e2d\u5305\u542b\u865a\u62df\u5217\u7684\u540d\u5b57\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT *")," \u4e0d\u4f1a\u8fd4\u56de\u865a\u62df\u5217\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u82e5\u60a8\u521b\u5efa\u7684\u8868\u4e2d\u6709\u4e00\u5217\u4e0e\u865a\u62df\u5217\u7684\u540d\u5b57\u76f8\u540c\uff0c\u90a3\u4e48\u865a\u62df\u5217\u5c06\u4e0d\u80fd\u518d\u88ab\u8bbf\u95ee\u3002\u6211\u4eec\u4e0d\u5efa\u8bae\u60a8\u8fd9\u6837\u505a\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u5217\u540d\u7684\u51b2\u7a81\uff0c\u865a\u62df\u5217\u7684\u540d\u5b57\u4e00\u822c\u90fd\u4ee5\u4e0b\u5212\u7ebf\u5f00\u5934\u3002"))}c.isMDXComponent=!0}}]);
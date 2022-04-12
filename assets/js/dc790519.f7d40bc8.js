"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40482],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46913:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={sidebar_position:46,sidebar_label:"QUOTA"},l="ALTER QUOTA",u={unversionedId:"ru/sql-reference/statements/alter/quota",id:"ru/sql-reference/statements/alter/quota",title:"ALTER QUOTA",description:"alter-quota-statement}",source:"@site/docs/ru/sql-reference/statements/alter/quota.md",sourceDirName:"ru/sql-reference/statements/alter",slug:"/ru/sql-reference/statements/alter/quota",permalink:"/ru/sql-reference/statements/alter/quota",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/alter/quota.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"QUOTA"},sidebar:"russia",previous:{title:"USER",permalink:"/ru/sql-reference/statements/alter/user"},next:{title:"ROLE",permalink:"/ru/sql-reference/statements/alter/role"}},p={},c=[],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"alter-quota-statement"},"ALTER QUOTA"),(0,s.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u044f\u0435\u0442 ",(0,s.kt)("a",{parentName:"p",href:"/ru/operations/access-rights#quotas-management"},"\u043a\u0432\u043e\u0442\u0443"),"."),(0,s.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER QUOTA [IF EXISTS] name [ON CLUSTER cluster_name]\n    [RENAME TO new_name]\n    [KEYED BY {user_name | ip_address | client_key | client_key,user_name | client_key,ip_address} | NOT KEYED]\n    [FOR [RANDOMIZED] INTERVAL number {second | minute | hour | day | week | month | quarter | year}\n        {MAX { {queries | query_selects | query_inserts | errors | result_rows | result_bytes | read_rows | read_bytes | execution_time} = number } [,...] |\n        NO LIMITS | TRACKING ONLY} [,...]]\n    [TO {role [,...] | ALL | ALL EXCEPT role [,...]}]\n")),(0,s.kt)("p",null,"\u041a\u043b\u044e\u0447\u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"user_name"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ip_address"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"client_key"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"client_key, user_name")," \u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"client_key, ip_address")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u043e\u043b\u044f\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,s.kt)("a",{parentName:"p",href:"/ru/operations/system-tables/quotas"},"system.quotas"),"."),(0,s.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b ",(0,s.kt)("inlineCode",{parentName:"p"},"queries"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"query_selects"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"query_inserts"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"errors"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"result_rows"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"result_bytes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"read_rows"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"read_bytes"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"execution_time")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u043e\u043b\u044f\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,s.kt)("a",{parentName:"p",href:"/ru/operations/system-tables/quotas_usage"},"system.quotas_usage"),"."),(0,s.kt)("p",null,"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043a\u0432\u043e\u0442\u0430, \u0441\u043c. ",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/distributed-ddl"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL \u0437\u0430\u043f\u0440\u043e\u0441\u044b"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,s.kt)("p",null,"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u2014 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 123 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 15 \u043c\u0435\u0441\u044f\u0446\u0435\u0432:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER QUOTA IF EXISTS qA FOR INTERVAL 15 month MAX queries = 123 TO CURRENT_USER;\n")),(0,s.kt)("p",null,"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u2014 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u0441\u0435\u043a\u0443\u043d\u0434\u044b \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 30 \u043c\u0438\u043d\u0443\u0442, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u2014 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 321 \u0438 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0448\u0438\u0431\u043e\u043a \u2014 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 \u0437\u0430 \u043a\u0430\u0436\u0434\u044b\u0435 5 \u043a\u0432\u0430\u0440\u0442\u0430\u043b\u043e\u0432:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER QUOTA IF EXISTS qB FOR INTERVAL 30 minute MAX execution_time = 0.5, FOR INTERVAL 5 quarter MAX queries = 321, errors = 10 TO default;\n")))}d.isMDXComponent=!0}}]);
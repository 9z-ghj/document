"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7646],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:1},i="SQL \u5f00\u53d1\u7b80\u4ecb",o={unversionedId:"sqldev/intro_sqldev",id:"sqldev/intro_sqldev",title:"SQL \u5f00\u53d1\u7b80\u4ecb",description:"NineData \u7684 SQL \u5f00\u53d1\u662f\u4e00\u5957\u4e91\u539f\u751f SQL \u5f00\u53d1\u5de5\u5177\uff0c\u652f\u6301\u5728\u7ebf\u67e5\u8be2\u4e0e\u7ba1\u7406\u6570\u636e\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u7c7b\u578b\u3002",source:"@site/docs/sqldev/intro_sqldev.md",sourceDirName:"sqldev",slug:"/sqldev/intro_sqldev",permalink:"/sqldev/intro_sqldev",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6b65\u9aa4\u4e09\uff1a\u7533\u8bf7\u514d\u8d39\u6570\u636e\u6e90\u5e76\u751f\u6210\u6d4b\u8bd5\u6570\u636e",permalink:"/quick_start/demo_datasource"},next:{title:"SQL \u7a97\u53e3",permalink:"/sqldev/sql_console"}},p={},s=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:3},{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",level:3},{value:"\u4ea7\u54c1\u4f18\u52bf",id:"\u4ea7\u54c1\u4f18\u52bf",level:3},{value:"\u5178\u578b\u4f7f\u7528\u573a\u666f",id:"\u5178\u578b\u4f7f\u7528\u573a\u666f",level:3}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql-\u5f00\u53d1\u7b80\u4ecb"},"SQL \u5f00\u53d1\u7b80\u4ecb"),(0,a.kt)("p",null,"NineData \u7684 SQL \u5f00\u53d1\u662f\u4e00\u5957\u4e91\u539f\u751f SQL \u5f00\u53d1\u5de5\u5177\uff0c\u652f\u6301\u5728\u7ebf\u67e5\u8be2\u4e0e\u7ba1\u7406\u6570\u636e\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u5e93\u7c7b\u578b\u3002"),(0,a.kt)("h3",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,a.kt)("p",null,"SQL \u5f00\u53d1\u5177\u6709\u6570\u636e\u8d44\u4ea7\u7ba1\u7406\u3001\u6570\u636e\u67e5\u8be2\u3001SQL \u6267\u884c\u3001\u6570\u636e\u7f16\u8f91\u3001\u6570\u636e\u5bfc\u51fa\u7b49\u529f\u80fd\uff0c\u5177\u5907\u5f3a\u5927\u7684 SQL \u7f16\u8f91\u5668\uff0c\u652f\u6301\u5b8c\u6574\u7684\u8bed\u6cd5\u9ad8\u4eae\u3001\u81ea\u52a8\u8865\u5168\u3001\u5bf9\u8c61\u7c7b\u578b\u8bc6\u522b\u3001\u9519\u8bef\u63d0\u793a\u7b49\u80fd\u529b\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5b8c\u6210\u591a\u79cd\u73af\u5883\u7684\u6570\u636e\u7ba1\u7406\u4efb\u52a1\uff0c\u52a9\u529b\u4f01\u4e1a\u6570\u5b57\u5316\u8f6c\u578b\u3002"),(0,a.kt)("h3",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6d4b\u8bd5",src:r(3063).Z,width:"4740",height:"1902"})),(0,a.kt)("h3",{id:"\u4ea7\u54c1\u4f18\u52bf"},"\u4ea7\u54c1\u4f18\u52bf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u591a\u6570\u636e\u6e90\u8de8\u5e73\u53f0\u652f\u6301",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6570\u636e\u6e90\uff1aMySQL\u3001SQL Server\u3001","Clickhouse \u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u73af\u5883\uff1a\u963f\u91cc\u4e91\u3001AWS\u3001\u534e\u4e3a\u4e91\u3001\u817e\u8baf\u4e91\u3001\u79fb\u52a8\u4e91\u3001\u81ea\u5efa\u6570\u636e\u5e93\u7b49\u3002")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6570\u636e\u5b89\u5168\u4f7f\u7528"),(0,a.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u4f7f\u7528 TLS/SSL \u4f20\u8f93\u52a0\u5bc6\uff0c\u9632\u6b62\u6570\u636e\u6cc4\u9732\u3002\u5b8c\u6574\u7684\u64cd\u4f5c\u4e0e\u67e5\u8be2\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u642d\u914d\u89d2\u8272\u548c\u8d44\u6e90\u6388\u6743\u4f53\u7cfb\u3001\u5de5\u5355\u6d41\u7a0b\u3001\u9884\u68c0\u89c4\u5219\u7b49\u529f\u80fd\uff0c\u5b9e\u73b0\u4f01\u4e1a\u7ea7\u7684\u6570\u636e\u5b89\u5168\u4fdd\u969c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u529f\u80fd\u4e30\u5bcc\u64cd\u4f5c\u7b80\u5355"),(0,a.kt)("p",{parentName:"li"},"\u96f6\u95e8\u69db\u7684\u6570\u636e\u5e93\u7ba1\u7406\u670d\u52a1\uff0c\u901a\u8fc7\u6d4f\u89c8\u5668\u5373\u53ef\u5bf9\u6570\u636e\u5e93\u5bf9\u8c61\u6267\u884c\u7ba1\u7406\u64cd\u4f5c\u3002\u652f\u6301\u8bed\u6cd5\u8865\u5168\u3001\u9ad8\u4eae\u3001\u67e5\u8be2\u7a97\u53e3\u81ea\u52a8\u4fdd\u5b58\u4e0e\u6062\u590d\u3001\u5e38\u7528 SQL \u4fdd\u5b58\u7b49\u529f\u80fd\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u9ad8\u6548\u3001\u51c6\u786e\u5730\u5b8c\u6210 SQL \u64cd\u4f5c\u3002"))),(0,a.kt)("h3",{id:"\u5178\u578b\u4f7f\u7528\u573a\u666f"},"\u5178\u578b\u4f7f\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7edf\u4e00\u6570\u636e\u5e93\u7ba1\u7406\u5e73\u53f0"),(0,a.kt)("p",{parentName:"li"},"\u5728\u65e5\u5e38\u4e1a\u52a1\u7cfb\u7edf\u7814\u53d1\u4e2d\uff0c\u9700\u8981\u8bbf\u95ee\u4e0e\u7ba1\u7406\u591a\u79cd\u4e0d\u540c\u73af\u5883\u3001\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u5e93\uff0c\u6570\u636e\u7ba1\u7406\u6a21\u5757\u652f\u6301\u963f\u91cc\u4e91\u3001\u817e\u8baf\u4e91\u3001\u534e\u4e3a\u4e91\u3001AWS\u3001Azure \u7b49\u591a\u4e2a\u4e91\u5382\u5bb6\u7684 MySQL\u3001SQL Server\u3001ClickHouse \u7b49\u591a\u79cd\u6570\u636e\u5e93\u4ea7\u54c1\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6d4b\u8bd5",src:r(7870).Z,width:"1864",height:"1176"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u5168\u6570\u636e\u5e93\u53d8\u66f4"),(0,a.kt)("p",{parentName:"li"},"NineData \u63d0\u4f9b SQL \u5b89\u5168\u5ba1\u8ba1\uff0c\u7528\u6237\u63d0\u4ea4 SQL \u6570\u636e\u53d8\u66f4\u540e\uff0c\u5bf9 SQL \u8bed\u6cd5\u8fdb\u884c\u5b89\u5168\u5ba1\u8ba1\uff0c\u4fdd\u8bc1 SQL \u8f93\u5165\u7684\u89c4\u8303\u6027\u548c\u5b89\u5168\u6027\u3002\u5bf9\u4e8e\u4f01\u4e1a\u7528\u6237\uff0c\u901a\u8fc7\u5de5\u5355\u7ba1\u7406\uff0c\u89c4\u8303 SQL \u53d8\u66f4\u3001\u6743\u9650\u7533\u8bf7\u7b49\u6d41\u7a0b\uff0c\u8ba9\u4f01\u4e1a\u7684\u6570\u636e\u7ba1\u7406\u66f4\u5b89\u5168\u66f4\u9ad8\u6548\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6d4b\u8bd5",src:r(7752).Z,width:"1666",height:"448"})))}u.isMDXComponent=!0},7870:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/changjing1-4349ebba716407c56d8bed9519af8dff.png"},7752:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/changjing2-aa6623496c0de0a6fe9c0d7d858a400c.png"},3063:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/test-6cfbfe992e57f8f1200daeae58042c70.png"}}]);
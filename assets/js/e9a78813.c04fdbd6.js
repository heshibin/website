"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u7b80\u4ecb",description:"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002",date:new Date("2023-01-30T00:00:00.000Z"),authors:"heshibin",tags:["go"]},l=void 0,i={unversionedId:"go\u8bed\u8a00/01\u7b80\u4ecb",id:"go\u8bed\u8a00/01\u7b80\u4ecb",title:"\u7b80\u4ecb",description:"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002",source:"@site/docs/go\u8bed\u8a00/01\u7b80\u4ecb.md",sourceDirName:"go\u8bed\u8a00",slug:"/go\u8bed\u8a00/01\u7b80\u4ecb",permalink:"/docs/go\u8bed\u8a00/01\u7b80\u4ecb",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/go\u8bed\u8a00/01\u7b80\u4ecb.md",tags:[{label:"go",permalink:"/docs/tags/go"}],version:"current",frontMatter:{title:"\u7b80\u4ecb",description:"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002",date:"2023-01-30T00:00:00.000Z",authors:"heshibin",tags:["go"]},sidebar:"tutorialSidebar",previous:{title:"Mac\u7aef\u53e3\u5360\u7528",permalink:"/docs/MacOs/\u7aef\u53e3\u5360\u7528"},next:{title:"\u73af\u5883\u5b89\u88c5",permalink:"/docs/go\u8bed\u8a00/02\u73af\u5883\u5b89\u88c5"}},c={},p=[{value:"\u7279\u8272",id:"\u7279\u8272",level:2},{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u7b2c\u4e00\u4e2a Go \u7a0b\u5e8f",id:"\u7b2c\u4e00\u4e2a-go-\u7a0b\u5e8f",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Go \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u5b83\u80fd\u8ba9\u6784\u9020\u7b80\u5355\u3001\u53ef\u9760\u4e14\u9ad8\u6548\u7684\u8f6f\u4ef6\u53d8\u5f97\u5bb9\u6613\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","Go\u662f\u4ece2007\u5e74\u672b\u7531Robert Griesemer, Rob Pike, Ken Thompson\u4e3b\u6301\u5f00\u53d1\uff0c\u540e\u6765\u8fd8\u52a0\u5165\u4e86Ian Lance Taylor, Russ Cox\u7b49\u4eba\uff0c\u5e76\u6700\u7ec8\u4e8e2009\u5e7411\u6708\u5f00\u6e90\uff0c\u57282012\u5e74\u65e9\u4e9b\u65f6\u5019\u53d1\u5e03\u4e86Go 1\u7a33\u5b9a\u7248\u672c\u3002\u73b0\u5728Go\u7684\u5f00\u53d1\u5df2\u7ecf\u662f\u5b8c\u5168\u5f00\u653e\u7684\uff0c\u5e76\u4e14\u62e5\u6709\u4e00\u4e2a\u6d3b\u8dc3\u7684\u793e\u533a\u3002  "),(0,o.kt)("h2",{id:"\u7279\u8272"},"\u7279\u8272"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7b80\u6d01\u3001\u5feb\u901f\u3001\u5b89\u5168"),(0,o.kt)("li",{parentName:"ul"},"\u5e76\u884c\u3001\u6709\u8da3\u3001\u5f00\u6e90"),(0,o.kt)("li",{parentName:"ul"},"\u5185\u5b58\u7ba1\u7406\u3001\u6570\u7ec4\u5b89\u5168\u3001\u7f16\u8bd1\u8fc5\u901f")),(0,o.kt)("h2",{id:"\u7528\u9014"},"\u7528\u9014"),(0,o.kt)("p",null,"Go \u8bed\u8a00\u88ab\u8bbe\u8ba1\u6210\u4e00\u95e8\u5e94\u7528\u4e8e\u642d\u8f7d Web \u670d\u52a1\u5668\uff0c\u5b58\u50a8\u96c6\u7fa4\u6216\u7c7b\u4f3c\u7528\u9014\u7684\u5de8\u578b\u4e2d\u592e\u670d\u52a1\u5668\u7684\u7cfb\u7edf\u7f16\u7a0b\u8bed\u8a00\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u7cfb\u7edf\u9886\u57df\u800c\u8a00\uff0cGo \u8bed\u8a00\u65e0\u7591\u6bd4\u5927\u591a\u6570\u5176\u5b83\u8bed\u8a00\u6709\u7740\u66f4\u9ad8\u7684\u5f00\u53d1\u6548\u7387\u3002\u5b83\u63d0\u4f9b\u4e86\u6d77\u91cf\u5e76\u884c\u7684\u652f\u6301\uff0c\u8fd9\u5bf9\u4e8e\u6e38\u620f\u670d\u52a1\u7aef\u7684\u5f00\u53d1\u800c\u8a00\u662f\u518d\u597d\u4e0d\u8fc7\u4e86\u3002"),(0,o.kt)("h2",{id:"\u7b2c\u4e00\u4e2a-go-\u7a0b\u5e8f"},"\u7b2c\u4e00\u4e2a Go \u7a0b\u5e8f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}\n')),(0,o.kt)("p",null,"\u8981\u6267\u884c Go \u8bed\u8a00\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528 go run \u547d\u4ee4\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u6267\u884c\u4ee5\u4e0a\u4ee3\u7801\u8f93\u51fa:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"go run hello.go \nHello, World!\n")),(0,o.kt)("p",null,"\u6b64\u5916\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 go build \u547d\u4ee4\u6765\u751f\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go build hello.go \nls\nhello    hello.go\n./hello \nHello, World!\n")))}u.isMDXComponent=!0}}]);
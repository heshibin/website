"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"\u65e5\u671f\u65f6\u95f4\u76f8\u5173",description:"Unix \u65f6\u95f4\u6233\u662f\u4ece1970\u5e741\u67081\u65e5\uff08UTC/GMT\u7684\u5348\u591c\uff09\u5f00\u59cb\u6240\u7ecf\u8fc7\u7684\u79d2\u6570\uff0c\u4e0d\u8003\u8651\u95f0\u79d2\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fJava 8\u6216\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `Instant` \u7c7b\u5728Java\u4e2d\u83b7\u5f97unix\u65f6\u95f4\u6233\u3002",date:new Date("2023-02-04T00:00:00.000Z"),authors:"heshibin",tags:["java","\u4ee3\u7801","\u5de5\u5177\u7c7b"]},l=void 0,o={unversionedId:"JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233",id:"JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233",title:"\u65e5\u671f\u65f6\u95f4\u76f8\u5173",description:"Unix \u65f6\u95f4\u6233\u662f\u4ece1970\u5e741\u67081\u65e5\uff08UTC/GMT\u7684\u5348\u591c\uff09\u5f00\u59cb\u6240\u7ecf\u8fc7\u7684\u79d2\u6570\uff0c\u4e0d\u8003\u8651\u95f0\u79d2\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fJava 8\u6216\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `Instant` \u7c7b\u5728Java\u4e2d\u83b7\u5f97unix\u65f6\u95f4\u6233\u3002",source:"@site/docs/JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233.md",sourceDirName:"JAVA/\u5de5\u5177\u7c7b",slug:"/JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233",permalink:"/docs/JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6Unix\u65f6\u95f4\u6233.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u4ee3\u7801",permalink:"/docs/tags/\u4ee3\u7801"},{label:"\u5de5\u5177\u7c7b",permalink:"/docs/tags/\u5de5\u5177\u7c7b"}],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1677576458,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"\u65e5\u671f\u65f6\u95f4\u76f8\u5173",description:"Unix \u65f6\u95f4\u6233\u662f\u4ece1970\u5e741\u67081\u65e5\uff08UTC/GMT\u7684\u5348\u591c\uff09\u5f00\u59cb\u6240\u7ecf\u8fc7\u7684\u79d2\u6570\uff0c\u4e0d\u8003\u8651\u95f0\u79d2\u3002\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fJava 8\u6216\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `Instant` \u7c7b\u5728Java\u4e2d\u83b7\u5f97unix\u65f6\u95f4\u6233\u3002",date:"2023-02-04T00:00:00.000Z",authors:"heshibin",tags:["java","\u4ee3\u7801","\u5de5\u5177\u7c7b"]},sidebar:"tutorialSidebar",previous:{title:"\u83b7\u53d6IP\u5730\u5740",permalink:"/docs/JAVA/\u5de5\u5177\u7c7b/\u83b7\u53d6IP\u5730\u5740"},next:{title:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",permalink:"/docs/java/data-structure"}},s={},p=[{value:"\u5728Java\u4e2d\u83b7\u53d6unix\u65f6\u95f4\u6233\u7684\u65b9\u6cd5",id:"\u5728java\u4e2d\u83b7\u53d6unix\u65f6\u95f4\u6233\u7684\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528\u5373\u65f6\u7c7b",id:"\u4f7f\u7528\u5373\u65f6\u7c7b",level:3},{value:"\u4f7f\u7528System.currentTimeMillis()",id:"\u4f7f\u7528systemcurrenttimemillis",level:3},{value:"\u4f7f\u7528Date\u7684getTime()\u65b9\u6cd5",id:"\u4f7f\u7528date\u7684gettime\u65b9\u6cd5",level:3},{value:"\u5728Java\u4e2d\u628aDate\u8f6c\u6362\u4e3aunix\u65f6\u95f4\u6233",id:"\u5728java\u4e2d\u628adate\u8f6c\u6362\u4e3aunix\u65f6\u95f4\u6233",level:2},{value:"\u4f7f\u7528\u5373\u65f6\u7c7b",id:"\u4f7f\u7528\u5373\u65f6\u7c7b-1",level:3},{value:"\u4f7f\u7528Date\u7684getTime()\u65b9\u6cd5",id:"\u4f7f\u7528date\u7684gettime\u65b9\u6cd5-1",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unix \u65f6\u95f4\u6233\u662f\u4ece1970\u5e741\u67081\u65e5\uff08UTC/GMT\u7684\u5348\u591c\uff09\u5f00\u59cb\u6240\u7ecf\u8fc7\u7684\u79d2\u6570\uff0c\u4e0d\u8003\u8651\u95f0\u79d2\u3002"),(0,i.kt)("h2",{id:"\u5728java\u4e2d\u83b7\u53d6unix\u65f6\u95f4\u6233\u7684\u65b9\u6cd5"},"\u5728Java\u4e2d\u83b7\u53d6unix\u65f6\u95f4\u6233\u7684\u65b9\u6cd5"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u5373\u65f6\u7c7b"},"\u4f7f\u7528\u5373\u65f6\u7c7b"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662fJava 8\u6216\u66f4\u9ad8\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Instant")," \u7c7b\u5728Java\u4e2d\u83b7\u5f97unix\u65f6\u95f4\u6233\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.time.Instant;\n\npublic static void main(String[] args) {\n  long unixTimestamp = Instant.now().getEpochSecond();\n  System.out.println("Unix timestamp: "+unixTimestamp);\n}\n\n// Unix timestamp: 1675500015\n')),(0,i.kt)("h3",{id:"\u4f7f\u7528systemcurrenttimemillis"},"\u4f7f\u7528System.currentTimeMillis()"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u907f\u514d\u521b\u5efa\u65e5\u671f/\u5373\u65f6\u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"System.currentTimeMillis()")," \u6765\u83b7\u5f97\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\u7684\u5f53\u524d\u65f6\u95f4\u3002\u4f60\u53ef\u4ee5\u901a\u8fc71000L \uff0c\u5c06\u6beb\u79d2\u8f6c\u6362\u4e3a\u79d2\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n  long unixTimestamp = System.currentTimeMillis()/1000L;\n  System.out.println("Unix timestamp: " + unixTimestamp);\n}\n\n// Unix timestamp: 1675500095\n')),(0,i.kt)("h3",{id:"\u4f7f\u7528date\u7684gettime\u65b9\u6cd5"},"\u4f7f\u7528Date\u7684getTime()\u65b9\u6cd5"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u7684Date\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"getTime()"),"\u65b9\u6cd5\u6765\u83b7\u5f97Java\u4e2d\u7684unix\u65f6\u95f4\u6233\u3002\u4f60\u9700\u8981\u5c06()\u65f6\u95f4\u9664\u4ee51000L \uff0c\u5c06\u6beb\u79d2\u8f6c\u6362\u4e3a\u79d2\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n  long unixTimestamp = new Date().getTime()/1000L;\n  System.out.println("Unix timestamp: " + unixTimestamp);\n}\n\n// Unix timestamp: 1675500240\n')),(0,i.kt)("h2",{id:"\u5728java\u4e2d\u628adate\u8f6c\u6362\u4e3aunix\u65f6\u95f4\u6233"},"\u5728Java\u4e2d\u628aDate\u8f6c\u6362\u4e3aunix\u65f6\u95f4\u6233"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u5373\u65f6\u7c7b-1"},"\u4f7f\u7528\u5373\u65f6\u7c7b"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"toInstant()")," \u65b9\u6cd5\u4eceDate\u5bf9\u8c61\u4e2d\u83b7\u5f97 ",(0,i.kt)("inlineCode",{parentName:"p"},"Instant()")," \uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"getEpochSecond()")," \u83b7\u5f97unix\u65f6\u95f4\u6233\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    Calendar cal = Calendar.getInstance();\n    cal.set(Calendar.DAY_OF_MONTH, 4);\n    cal.set(Calendar.MONTH, 2);\n    cal.set(Calendar.YEAR, 2023);\n\n    Date givenDate = cal.getTime();\n    long unixTimestamp = givenDate.toInstant().getEpochSecond();\n    System.out.println("Unix timestamp: "+unixTimestamp);\n}\n\n// Unix timestamp: 1677919638\n')),(0,i.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDate"),"\u4ee3\u66ff",(0,i.kt)("inlineCode",{parentName:"p"},"java.util.Date")," \u3002\u4f60\u9700\u8981\u5148\u628a",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDate"),"\u8f6c\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Instant"),"\uff0c\u7136\u540e\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"getEpochSecond()")," \uff0c\u5728Java\u4e2d\u628aLocalDate\u8f6c\u6362\u4e3aunix\u65f6\u95f4\u6233\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n  // Get LocalDate object\n  LocalDate localDate = LocalDate.of(2023,2,4);\n\n  // Convert LocalDate to Instant with ZoneOffSet\n  Instant instant = localDate.atStartOfDay().toInstant(ZoneOffset.UTC);\n\n  // Get unix timestamp from Instant\n  long epochSecond = instant.getEpochSecond();\n  System.out.println("Unix timestamp: "+epochSecond);\n}\n\n// Unix timestamp: 1675468800\n')),(0,i.kt)("h3",{id:"\u4f7f\u7528date\u7684gettime\u65b9\u6cd5-1"},"\u4f7f\u7528Date\u7684getTime()\u65b9\u6cd5"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4f20\u7edf\u7684Date\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"getTime()"),"\u65b9\u6cd5\uff0c\u5728Java\u4e2d\u628aDate\u8f6c\u6362\u4e3aunixTimeStamp\u3002\u4f60\u9700\u8981\u5c06()\u65f6\u95f4\u9664\u4ee51000L \uff0c\u5c06\u6beb\u79d2\u8f6c\u6362\u4e3a\u79d2\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n Calendar cal = Calendar.getInstance();\n cal.set(Calendar.DAY_OF_MONTH, 4);\n cal.set(Calendar.MONTH, 2);\n cal.set(Calendar.YEAR, 2023);\n\n Date givenDate = cal.getTime();\n long unixTimestamp = givenDate.getTime()/1000L;\n System.out.println("Unix timestamp: "+unixTimestamp);\n}\n\n// Unix timestamp: 1677919718\n')))}c.isMDXComponent=!0}}]);
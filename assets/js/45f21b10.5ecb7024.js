"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7967],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(l),c=a,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return l?n.createElement(k,i(i({ref:t},p),{},{components:l})):n.createElement(k,i({ref:t},p))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},69351:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=l(87462),a=(l(67294),l(3905));const r={title:"mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",description:"mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",tags:["mysql"],keywords:["mysql\u57fa\u672c\u547d\u4ee4"]},i=void 0,o={unversionedId:"\u6570\u636e\u5e93/mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",id:"\u6570\u636e\u5e93/mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",title:"mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",description:"mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",source:"@site/docs/\u6570\u636e\u5e93/mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4.md",sourceDirName:"\u6570\u636e\u5e93",slug:"/\u6570\u636e\u5e93/mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",permalink:"/docs/\u6570\u636e\u5e93/mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u6570\u636e\u5e93/mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4.md",tags:[{label:"mysql",permalink:"/docs/tags/mysql"}],version:"current",lastUpdatedBy:"heshibin",lastUpdatedAt:1677720056,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{title:"mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",description:"mysql\u57fa\u672c\u8bed\u53e5\u6216\u547d\u4ee4",tags:["mysql"],keywords:["mysql\u57fa\u672c\u547d\u4ee4"]},sidebar:"tutorialSidebar",previous:{title:"groupby\u53d6\u6700\u65b0\u4e00\u6761\u6570\u636e",permalink:"/docs/\u6570\u636e\u5e93/groupby\u53d6\u6700\u65b0\u4e00\u6761\u6570\u636e"},next:{title:"mysql\u7684\u64cd\u4f5c\u8bed\u53e5\u5206\u7c7b",permalink:"/docs/\u6570\u636e\u5e93/mysql\u7684\u64cd\u4f5c\u8bed\u53e5\u5206\u7c7b"}},d={},s=[{value:"\u542f\u52a8\u6216\u505c\u6b62mysql",id:"\u542f\u52a8\u6216\u505c\u6b62mysql",level:4},{value:"\u8fdb\u5165mysql",id:"\u8fdb\u5165mysql",level:4},{value:"\u4fee\u6539mysql\u8d26\u6237\u5bc6\u7801",id:"\u4fee\u6539mysql\u8d26\u6237\u5bc6\u7801",level:4},{value:"\u6570\u636e\u5e93\u76f8\u5173",id:"\u6570\u636e\u5e93\u76f8\u5173",level:4},{value:"1\u3001\u67e5\u8be2\u6240\u6709\u6570\u636e\u5e93",id:"1\u67e5\u8be2\u6240\u6709\u6570\u636e\u5e93",level:5},{value:"2\u3001\u67e5\u8be2\u5f53\u524d\u6240\u5728\u6570\u636e\u5e93",id:"2\u67e5\u8be2\u5f53\u524d\u6240\u5728\u6570\u636e\u5e93",level:5},{value:"3\u3001\u521b\u5efa\u6570\u636e\u5e93",id:"3\u521b\u5efa\u6570\u636e\u5e93",level:5},{value:"4\u3001\u8fdb\u5165\u6570\u636e\u5e93",id:"4\u8fdb\u5165\u6570\u636e\u5e93",level:5},{value:"5\u3001\u5224\u65ad\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728 \u4e0d\u5b58\u5728\u5219\u521b\u5efa",id:"5\u5224\u65ad\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728-\u4e0d\u5b58\u5728\u5219\u521b\u5efa",level:5},{value:"6\u3001\u521b\u5efa\u6570\u636e\u5e93\u5e76\u6307\u5b9a\u5b57\u7b26\u96c6",id:"6\u521b\u5efa\u6570\u636e\u5e93\u5e76\u6307\u5b9a\u5b57\u7b26\u96c6",level:5},{value:"7\u3001\u67e5\u770b\u6570\u636e\u5e93\u5b57\u7b26\u96c6",id:"7\u67e5\u770b\u6570\u636e\u5e93\u5b57\u7b26\u96c6",level:5},{value:"8\u3001\u67e5\u770b\u5f53\u524dmysql\u4f7f\u7528\u7684\u5b57\u7b26\u96c6",id:"8\u67e5\u770b\u5f53\u524dmysql\u4f7f\u7528\u7684\u5b57\u7b26\u96c6",level:5},{value:"\u8868\u76f8\u5173",id:"\u8868\u76f8\u5173",level:4},{value:"9\u3001\u521b\u5efa\u8868",id:"9\u521b\u5efa\u8868",level:5},{value:"10\u3001\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u6709\u54ea\u4e9b\u8868",id:"10\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u6709\u54ea\u4e9b\u8868",level:5},{value:"11\u3001\u67e5\u770b\u8868\u7ed3\u6784\u4fe1\u606f\u3001\u521b\u5efa\u8868\u8bed\u53e5",id:"11\u67e5\u770b\u8868\u7ed3\u6784\u4fe1\u606f\u521b\u5efa\u8868\u8bed\u53e5",level:5},{value:"12\u3001\u590d\u5236\u8868\u7ed3\u6784\u521b\u5efa\u65b0\u8868",id:"12\u590d\u5236\u8868\u7ed3\u6784\u521b\u5efa\u65b0\u8868",level:5},{value:"13\u3001\u4fee\u6539\u8868\u540d",id:"13\u4fee\u6539\u8868\u540d",level:5},{value:"14\u3001\u6dfb\u52a0\u5217",id:"14\u6dfb\u52a0\u5217",level:5},{value:"15\u3001\u4fee\u6539\u5217\u7c7b\u578b",id:"15\u4fee\u6539\u5217\u7c7b\u578b",level:5},{value:"16\u3001\u4fee\u6539\u5217\u540d",id:"16\u4fee\u6539\u5217\u540d",level:5},{value:"17\u3001\u5220\u9664\u5217",id:"17\u5220\u9664\u5217",level:5},{value:"18\u3001\u4fee\u6539\u5b57\u7b26\u96c6",id:"18\u4fee\u6539\u5b57\u7b26\u96c6",level:5},{value:"19\u3001\u5220\u9664\u8868",id:"19\u5220\u9664\u8868",level:5}],p={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u542f\u52a8\u6216\u505c\u6b62mysql"},"\u542f\u52a8\u6216\u505c\u6b62mysql"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"net start/stop mysql")),(0,a.kt)("h4",{id:"\u8fdb\u5165mysql"},"\u8fdb\u5165mysql"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mysql -uroot -p")),(0,a.kt)("h4",{id:"\u4fee\u6539mysql\u8d26\u6237\u5bc6\u7801"},"\u4fee\u6539mysql\u8d26\u6237\u5bc6\u7801"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alter user 'root'@'localhost' identified by 'root1234';")),(0,a.kt)("h4",{id:"\u6570\u636e\u5e93\u76f8\u5173"},"\u6570\u636e\u5e93\u76f8\u5173"),(0,a.kt)("h5",{id:"1\u67e5\u8be2\u6240\u6709\u6570\u636e\u5e93"},"1\u3001\u67e5\u8be2\u6240\u6709\u6570\u636e\u5e93"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"show databases;")),(0,a.kt)("h5",{id:"2\u67e5\u8be2\u5f53\u524d\u6240\u5728\u6570\u636e\u5e93"},"2\u3001\u67e5\u8be2\u5f53\u524d\u6240\u5728\u6570\u636e\u5e93"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"select databases();")),(0,a.kt)("h5",{id:"3\u521b\u5efa\u6570\u636e\u5e93"},"3\u3001\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create database test;")),(0,a.kt)("h5",{id:"4\u8fdb\u5165\u6570\u636e\u5e93"},"4\u3001\u8fdb\u5165\u6570\u636e\u5e93"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"use test;")),(0,a.kt)("h5",{id:"5\u5224\u65ad\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728-\u4e0d\u5b58\u5728\u5219\u521b\u5efa"},"5\u3001\u5224\u65ad\u6570\u636e\u5e93\u662f\u5426\u5b58\u5728 \u4e0d\u5b58\u5728\u5219\u521b\u5efa"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create database if not exists test1;")),(0,a.kt)("h5",{id:"6\u521b\u5efa\u6570\u636e\u5e93\u5e76\u6307\u5b9a\u5b57\u7b26\u96c6"},"6\u3001\u521b\u5efa\u6570\u636e\u5e93\u5e76\u6307\u5b9a\u5b57\u7b26\u96c6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create database test2 default character set gbk;")),(0,a.kt)("h5",{id:"7\u67e5\u770b\u6570\u636e\u5e93\u5b57\u7b26\u96c6"},"7\u3001\u67e5\u770b\u6570\u636e\u5e93\u5b57\u7b26\u96c6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"show create database test2;")),(0,a.kt)("h5",{id:"8\u67e5\u770b\u5f53\u524dmysql\u4f7f\u7528\u7684\u5b57\u7b26\u96c6"},"8\u3001\u67e5\u770b\u5f53\u524dmysql\u4f7f\u7528\u7684\u5b57\u7b26\u96c6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"show variables like 'character%';")),(0,a.kt)("h4",{id:"\u8868\u76f8\u5173"},"\u8868\u76f8\u5173"),(0,a.kt)("h5",{id:"9\u521b\u5efa\u8868"},"9\u3001\u521b\u5efa\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"create table student (\n    id tinyint(5) zerofill auto_increment not null comment '\u5b66\u751f\u5b66\u53f7',\n    name varchar(20) default null comment '\u59d3\u540d',\n    unique key (id)\n);\n\u7ea6\u675f\u6761\u4ef6:\ncomment       --- \u8bf4\u660e\u89e3\u91ca\u5907\u6ce8\nnot null      --- \u4e0d\u4e3a\u7a7a\ndefault       --- \u9ed8\u8ba4\u503c\nunsigned      --- \u65e0\u7b26\u53f7\uff08\u5373\u6b63\u6570\uff09\nauto_increment--- \u81ea\u52a8\u9012\u589e\nzerofill      --- \u81ea\u52a8\u586b\u5145\nunique key    --- \u552f\u4e00\u503c\n")),(0,a.kt)("h5",{id:"10\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u6709\u54ea\u4e9b\u8868"},"10\u3001\u67e5\u770b\u6570\u636e\u5e93\u4e2d\u6709\u54ea\u4e9b\u8868"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"show tables;")),(0,a.kt)("h5",{id:"11\u67e5\u770b\u8868\u7ed3\u6784\u4fe1\u606f\u521b\u5efa\u8868\u8bed\u53e5"},"11\u3001\u67e5\u770b\u8868\u7ed3\u6784\u4fe1\u606f\u3001\u521b\u5efa\u8868\u8bed\u53e5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"desc student;\n\u6216\u8005show table student;\n\u6216\u8005show table student\\G\n\\G: \u6709\u7ed3\u675fsql\u8bed\u53e5\u7684\u4f5c\u7528\uff0c\u8fd8\u6709\u628a\u663e\u793a\u7684\u7ed3\u679c\u7eb5\u5411\u65cb\u8f6c90\xb0\u3002\n")),(0,a.kt)("h5",{id:"12\u590d\u5236\u8868\u7ed3\u6784\u521b\u5efa\u65b0\u8868"},"12\u3001\u590d\u5236\u8868\u7ed3\u6784\u521b\u5efa\u65b0\u8868"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create table teacher as select * from student;")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"create table teacher like student;")),(0,a.kt)("h5",{id:"13\u4fee\u6539\u8868\u540d"},"13\u3001\u4fee\u6539\u8868\u540d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rename table student to stu;")),(0,a.kt)("h5",{id:"14\u6dfb\u52a0\u5217"},"14\u3001\u6dfb\u52a0\u5217"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7ed9\u8868\u6dfb\u52a0\u4e00\u5217\nalter table stu add age int(3) not null comment '\u5e74\u9f84';\n\uff08alter table \u8868\u540d add \u5217\u540d \u7c7b\u578b comment \u8bf4\u660e\uff09\n\u5728\u8868\u6700\u524d\u9762\u6dfb\u52a0\u4e00\u5217\nalter table \u8868\u540d add \u5217\u540d \u7c7b\u578b comment '' first;\n\u5728\u8868\u67d0\u4e00\u5217\u540e\u6dfb\u52a0\u4e00\u5217\nalter table \u8868\u540d add \u5217\u540d \u7c7b\u578b comment '' after \u5217\u540d;\n")),(0,a.kt)("h5",{id:"15\u4fee\u6539\u5217\u7c7b\u578b"},"15\u3001\u4fee\u6539\u5217\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alter table \u8868\u540d modify int(10);")),(0,a.kt)("h5",{id:"16\u4fee\u6539\u5217\u540d"},"16\u3001\u4fee\u6539\u5217\u540d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alter table \u8868\u540d change \u65e7\u5217\u540d \u65b0\u5217\u540d \u7c7b\u578b;")),(0,a.kt)("h5",{id:"17\u5220\u9664\u5217"},"17\u3001\u5220\u9664\u5217"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alter table \u8868\u540d drop \u5217;")),(0,a.kt)("h5",{id:"18\u4fee\u6539\u5b57\u7b26\u96c6"},"18\u3001\u4fee\u6539\u5b57\u7b26\u96c6"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alter table \u8868\u540d character set \u5b57\u7b26\u96c6;")),(0,a.kt)("h5",{id:"19\u5220\u9664\u8868"},"19\u3001\u5220\u9664\u8868"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"drop table if exists \u8868\u540d;")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7920],{88824:(e,t,n)=>{n.d(t,{c:()=>u});var r=n(67294),a=n(52263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),l=n.pluralForms.indexOf(a);return r[Math.min(l,r.length-1)]}(n,t,e)}}},51473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(67294),a=n(52263),l=n(51728),s=n(35742),c=n(39960),o=n(95999),u=n(88824),m=n(16550),h=n(10412);const i=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:n}}=(0,a.Z)(),r=h.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const n=new URLSearchParams(t.search);return e?n.set("q",e):n.delete("q"),n};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const n=o(t);e.replace({search:n.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${n}search?${t.toString()}`}}};var p=n(90022),g=n(98202),d=n(82539),f=n(10726),E=n(91073),y=n(80311),S=n(73926),w=n(61029);const b="searchQueryInput_CFBF",I="searchResultItem_U687",P="searchResultItemPath_uIbk",v="searchResultItemSummary_oZHr";function F(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:n,searchContext:l,searchVersion:c,updateSearchPath:m}=i(),[h,d]=(0,r.useState)(n),[f,E]=(0,r.useState)(),[S,w]=(0,r.useState)(),I=`${e}${c}`,P=(0,r.useMemo)((()=>h?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:h}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[h]);(0,r.useEffect)((()=>{m(h),f&&(h?f(h,(e=>{w(e)})):w(void 0))}),[h,f]);const v=(0,r.useCallback)((e=>{d(e.target.value)}),[]);return(0,r.useEffect)((()=>{n&&n!==h&&d(n)}),[n]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,p.w)(I,l);E((()=>(0,g.v)(e,t,100)))}()}),[l,I]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,P)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,P),r.createElement("input",{type:"search",name:"q",className:b,"aria-label":"Search",onChange:v,value:h,autoComplete:"off",autoFocus:!0}),!f&&h&&r.createElement("div",null,r.createElement(y.Z,null)),S&&(S.length>0?r.createElement("p",null,t(S.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,S&&S.map((e=>r.createElement(R,{key:e.document.i,searchResult:e}))))))}function R(e){let{searchResult:{document:t,type:n,page:a,tokens:l,metadata:s}}=e;const o=0===n,u=2===n,m=(o?t.b:a.b).slice(),h=u?t.s:t.t;o||m.push(a.t);let i="";if(w.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:I},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,d.C)(h,l):(0,f.o)(h,(0,E.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:P},(0,S.e)(m)),u&&r.createElement("p",{className:v,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const _=function(){return r.createElement(l.Z,null,r.createElement(F,null))}}}]);
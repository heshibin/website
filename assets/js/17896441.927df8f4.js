"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7918],{9914:(e,t,a)=>{a.r(t),a.d(t,{default:()=>be});var n=a(7294),l=a(1944),r=a(902);const s=n.createContext(null);function o(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(s.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(s);if(null===e)throw new r.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(7462),b=a(5999),p=a(2244);function h(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(p.Z,(0,u.Z)({},t,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(p.Z,(0,u.Z)({},a,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=c();return n.createElement(h,{previous:e.previous,next:e.next})}var E=a(2263),g=a(9960),f=a(143),Z=a(5281),_=a(373),k=a(4477);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function L(e){const t=N[e.versionMetadata.banner];return n.createElement(t,e)}function T(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(b.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(g.Z,{to:a,onClick:l},n.createElement(b.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function w(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,E.Z)(),{pluginId:r}=(0,f.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,_.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,f.Jo)(r),i=o??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,Z.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(L,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(T,{versionLabel:c.label,to:i.path,onClick:()=>s(c.name)})))}function U(e){let{className:t}=e;const a=(0,k.E)();return a.banner?n.createElement(w,{className:t,versionMetadata:a}):null}function C(e){let{className:t}=e;const a=(0,k.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(b.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function y(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function x(e){let{lastUpdatedBy:t}=e;return n.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:Z.k.common.lastUpdated},n.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(y,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(x,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var I=a(4881),M=a(1526);const B="lastUpdated_vwxv";function D(e){return n.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M.Z,e)))}function P(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,d.Z)(Z.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(I.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",B)},(a||l)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function V(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:r,tags:s}=e,o=s.length>0,i=!!(t||a||r);return o||i?n.createElement("footer",{className:(0,d.Z)(Z.k.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(D,{tags:s}),i&&n.createElement(P,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:l})):null}var H=a(6043),S=a(3743);const R="tocCollapsibleButton_TO0P",z="tocCollapsibleButtonExpanded_MG3E";function F(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",R,!t&&z,a.className)}),n.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const O="tocCollapsible_ETCw",j="tocCollapsibleContent_vkbj",q="tocCollapsibleExpanded_sAul";function G(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:r}=e;const{collapsed:s,toggleCollapsed:o}=(0,H.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(O,!s&&q,a)},n.createElement(F,{collapsed:s,onClick:o}),n.createElement(H.z,{lazy:!0,className:j,collapsed:s},n.createElement(S.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:r})))}const J="tocMobile_ITEo";function Q(){const{toc:e,frontMatter:t}=c();return n.createElement(G,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(Z.k.docs.docTocMobile,J)})}var W=a(9407);function X(){const{toc:e,frontMatter:t}=c();return n.createElement(W.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:Z.k.docs.docTocDesktop})}var $=a(2503),K=a(7432);function Y(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(Z.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement($.Z,{as:"h1"},a)),n.createElement(K.Z,null,t))}var ee=a(2802),te=a(8596),ae=a(4996);function ne(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const le={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function re(e){let{children:t,href:a,isLast:l}=e;const r="breadcrumbs__link";return l?n.createElement("span",{className:r,itemProp:"name"},t):a?n.createElement(g.Z,{className:r,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:r},t)}function se(e){let{children:t,active:a,index:l,addMicrodata:r}=e;return n.createElement("li",(0,u.Z)({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function oe(){const e=(0,ae.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(g.Z,{"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,d.Z)("breadcrumbs__link",le.breadcrumbsItemLink),href:e},n.createElement(ne,{className:le.breadcrumbHomeIcon})))}function ce(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(Z.k.docs.docBreadcrumbs,le.breadcrumbsContainer),"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(oe,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(se,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(re,{href:t.href,isLast:l},t.label))})))):null}const ie="docItemContainer_c0TR",de="docItemCol_z5aJ";var me=a(9117);function ue(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,r=!l&&t.length>0;return{hidden:l,mobile:r?n.createElement(Q,null):void 0,desktop:!r||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(X,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&de)},n.createElement(U,null),n.createElement("div",{className:ie},n.createElement("article",null,n.createElement(ce,null),n.createElement(C,null),a.mobile,n.createElement(Y,null,t),n.createElement(V,null)),n.createElement(v,null),n.createElement(me.Z,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function be(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(o,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ue,null,n.createElement(a,null))))}},4881:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),r=a(5281),s=a(7462),o=a(6010);const c="iconEdit_Z9Sw";function i(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(i,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(6010),r=a(9960);function s(e){const{permalink:t,title:a,subLabel:s,isNext:o}=e;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},3008:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(9960);const s="tag_zVej",o="tagRegular_sFm0",c="tagWithCount_h2kH";function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,i?c:o)},a,i&&n.createElement("span",null,i))}},1526:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010),r=a(5999),s=a(3008);const o="tags_jXut",c="tag_QGVx";function i(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:c},n.createElement(s.Z,{label:t,permalink:a}))}))))}},4477:(e,t,a)=>{a.d(t,{E:()=>o,q:()=>s});var n=a(7294),l=a(902);const r=n.createContext(null);function s(e){let{children:t,version:a}=e;return n.createElement(r.Provider,{value:a},t)}function o(){const e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}},9117:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(1262),r=a(9861);const s=(0,n.forwardRef)(((e,t)=>{const[a,s]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{function e(e){s(!0)}return window.emitter.on("onRouteDidUpdate",e),()=>{window.emitter.off("onRouteDidUpdate",e)}}),[]),a?n.createElement(l.Z,{fallback:n.createElement("div",null,"Loading Comments...")},(()=>n.createElement("div",{ref:t,id:"comment",style:{paddingTop:50}},n.createElement(r.Z,{id:"comments",repo:"heshibin/heshibin.github.io",repoId:"R_kgDOItFCwg",categoryId:"DIC_kwDOItFCws4CT3dS",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:"light",lang:"zh-CN",loading:"lazy"})))):null}))}}]);
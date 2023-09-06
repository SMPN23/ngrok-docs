"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[63100],{6470:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59496),o=n(13352),i=n(7426);function s(e){let{name:t}=e;const n=(0,i.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),s=[];let a=[];for(let i=0;i<n.docs.length;i++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[i];a.push(r.createElement(o.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==a.length||n.docs.length<2||i==n.docs.length-1)&&(s.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},a)),a=[])}return r.createElement(r.Fragment,null,s)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),o=n(45924),i=n(62515);function s(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function a(e){let{size:t,title:n,icon:o}=e;return o?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(s,{size:t,title:n}),o):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(s,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:s="",title:c,img:l="",icon:d=!1,description:g=!1,descriptionLink:m=!1}=e;s=s.toLowerCase();let u=(0,o.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==s,"ngrok--card-lg":"lg"==s,"ngrok--card-xl":"xl"==s});return r.createElement(i.Z,{to:t},r.createElement("div",{className:u},l&&r.createElement("img",{src:l}),r.createElement(a,{size:s,title:c,icon:d}),g&&r.createElement("p",null,g),m&&r.createElement("a",null,m)))}},93969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(51163),o=(n(59496),n(49613)),i=n(6470);const s={name:"xero",title:"Xero Integration Hub",sidebar_label:"Xero",description:"Monitor updates to contacts, invoices, and subscriptions with Xero webhooks.\nAll with security and access from ngrok.\n",excerpt:"Securely integrate your apps with Xero using ngrok.\n"},a=void 0,c={unversionedId:"integrations/xero/index",id:"integrations/xero/index",title:"Xero Integration Hub",description:"Monitor updates to contacts, invoices, and subscriptions with Xero webhooks.\nAll with security and access from ngrok.\n",source:"@site/docs/integrations/xero/index.mdx",sourceDirName:"integrations/xero",slug:"/integrations/xero/",permalink:"/docs/integrations/xero/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/xero/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"xero",title:"Xero Integration Hub",sidebar_label:"Xero",description:"Monitor updates to contacts, invoices, and subscriptions with Xero webhooks.\nAll with security and access from ngrok.\n",excerpt:"Securely integrate your apps with Xero using ngrok.\n"},sidebar:"docs",previous:{title:"Worldline Webhooks",permalink:"/docs/integrations/worldline/webhooks"},next:{title:"Xero Webhooks",permalink:"/docs/integrations/xero/webhooks"}},l={},d=[],g={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,s.description),(0,o.kt)(i.Z,{name:s.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);
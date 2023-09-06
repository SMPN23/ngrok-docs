"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[72126],{6470:(e,t,o)=>{o.d(t,{Z:()=>s});var n=o(59496),r=o(13352),a=o(7426);function s(e){let{name:t}=e;const o=(0,a.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),s=[];let i=[];for(let a=0;a<o.docs.length;a++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=o.docs[a];i.push(n.createElement(r.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==i.length||o.docs.length<2||a==o.docs.length-1)&&(s.push(n.createElement("div",{className:"ngrok--cards ngrok--cards-row"},i)),i=[])}return n.createElement(n.Fragment,null,s)}},13352:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(59496),r=o(45924),a=o(62515);function s(e){let{size:t,title:o}=e;switch(t){case"xs":case"sm":return n.createElement("h4",{className:"fw-600"},o);case"xl":return n.createElement("h2",{className:"fw-600"},o);default:return n.createElement("h3",{className:"fw-600"},o)}}function i(e){let{size:t,title:o,icon:r}=e;return r?n.createElement("div",{className:"ngrok--card-heading jc-space-between"},o&&n.createElement(s,{size:t,title:o}),r):o?n.createElement("div",{className:"ngrok--card-heading"},n.createElement(s,{size:t,title:o})):null}function c(e){let{to:t,note:o=!1,size:s="",title:c,img:l="",icon:d=!1,description:m=!1,descriptionLink:g=!1}=e;s=s.toLowerCase();let u=(0,r.W)("ngrok--card",{"ngrok--card-note":o,"ngrok--card-sm":"sm"==s,"ngrok--card-lg":"lg"==s,"ngrok--card-xl":"xl"==s});return n.createElement(a.Z,{to:t},n.createElement("div",{className:u},l&&n.createElement("img",{src:l}),n.createElement(i,{size:s,title:c,icon:d}),m&&n.createElement("p",null,m),g&&n.createElement("a",null,g)))}},89878:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=o(51163),r=(o(59496),o(49613)),a=o(6470);const s={name:"zoom",title:"Zoom Integration Hub",sidebar_label:"Zoom",description:"Build Zoom apps, chatbots, and webhooks from localhost.\nNo firewalls, dynamic DNS, port forwarding, or VPNs required.\n",excerpt:"Securely integrate your apps with Zoom using ngrok.\n"},i=void 0,c={unversionedId:"integrations/zoom/index",id:"integrations/zoom/index",title:"Zoom Integration Hub",description:"Build Zoom apps, chatbots, and webhooks from localhost.\nNo firewalls, dynamic DNS, port forwarding, or VPNs required.\n",source:"@site/docs/integrations/zoom/index.mdx",sourceDirName:"integrations/zoom",slug:"/integrations/zoom/",permalink:"/docs/integrations/zoom/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/zoom/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"zoom",title:"Zoom Integration Hub",sidebar_label:"Zoom",description:"Build Zoom apps, chatbots, and webhooks from localhost.\nNo firewalls, dynamic DNS, port forwarding, or VPNs required.\n",excerpt:"Securely integrate your apps with Zoom using ngrok.\n"},sidebar:"docs",previous:{title:"Zendesk Webhooks",permalink:"/docs/integrations/zendesk/webhooks"},next:{title:"Zoom Webhooks",permalink:"/docs/integrations/zoom/webhooks"}},l={},d=[],m={toc:d},g="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(g,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,s.description),(0,r.kt)(a.Z,{name:s.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);
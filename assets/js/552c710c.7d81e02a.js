"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[42475],{6470:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(59496),a=n(13352),i=n(7426);function s(e){let{name:t}=e;const n=(0,i.eZ)("ngrok-parse-integrations").find((e=>e.name===t)),s=[];let o=[];for(let i=0;i<n.docs.length;i++){const{contentTitle:e,excerpt:t,path:c,frontMatter:l}=n.docs[i];o.push(r.createElement(a.Z,{to:c,size:"sm",title:l?.title||e,description:l?.description||t})),(2==o.length||n.docs.length<2||i==n.docs.length-1)&&(s.push(r.createElement("div",{className:"ngrok--cards ngrok--cards-row"},o)),o=[])}return r.createElement(r.Fragment,null,s)}},13352:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(59496),a=n(45924),i=n(62515);function s(e){let{size:t,title:n}=e;switch(t){case"xs":case"sm":return r.createElement("h4",{className:"fw-600"},n);case"xl":return r.createElement("h2",{className:"fw-600"},n);default:return r.createElement("h3",{className:"fw-600"},n)}}function o(e){let{size:t,title:n,icon:a}=e;return a?r.createElement("div",{className:"ngrok--card-heading jc-space-between"},n&&r.createElement(s,{size:t,title:n}),a):n?r.createElement("div",{className:"ngrok--card-heading"},r.createElement(s,{size:t,title:n})):null}function c(e){let{to:t,note:n=!1,size:s="",title:c,img:l="",icon:d=!1,description:m=!1,descriptionLink:g=!1}=e;s=s.toLowerCase();let u=(0,a.W)("ngrok--card",{"ngrok--card-note":n,"ngrok--card-sm":"sm"==s,"ngrok--card-lg":"lg"==s,"ngrok--card-xl":"xl"==s});return r.createElement(i.Z,{to:t},r.createElement("div",{className:u},l&&r.createElement("img",{src:l}),r.createElement(o,{size:s,title:c,icon:d}),m&&r.createElement("p",null,m),g&&r.createElement("a",null,g)))}},32888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(51163),a=(n(59496),n(49613)),i=n(6470);const s={name:"vmware",title:"VMware Integration Hub",sidebar_label:"VMware",description:"Monitor business critical events like changes in device enrollment or\ncompliance status. No firewalls, dynamic DNS, port forwarding, or VPNs\nrequired.\n",excerpt:"Securely integrate your apps with VMware using ngrok.\n"},o=void 0,c={unversionedId:"integrations/vmware/index",id:"integrations/vmware/index",title:"VMware Integration Hub",description:"Monitor business critical events like changes in device enrollment or\ncompliance status. No firewalls, dynamic DNS, port forwarding, or VPNs\nrequired.\n",source:"@site/docs/integrations/vmware/index.mdx",sourceDirName:"integrations/vmware",slug:"/integrations/vmware/",permalink:"/docs/integrations/vmware/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/vmware/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{name:"vmware",title:"VMware Integration Hub",sidebar_label:"VMware",description:"Monitor business critical events like changes in device enrollment or\ncompliance status. No firewalls, dynamic DNS, port forwarding, or VPNs\nrequired.\n",excerpt:"Securely integrate your apps with VMware using ngrok.\n"},sidebar:"docs",previous:{title:"Typeform Webhooks",permalink:"/docs/integrations/typeform/webhooks"},next:{title:"VMware Workspace ONE Webhooks",permalink:"/docs/integrations/vmware/webhooks"}},l={},d=[],m={toc:d},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,s.description),(0,a.kt)(i.Z,{name:s.name,mdxType:"IntegrationPageList"}))}u.isMDXComponent=!0}}]);
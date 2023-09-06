"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[22470],{86530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>D,contentTitle:()=>L,default:()=>P,frontMatter:()=>w,metadata:()=>E,toc:()=>F});var a=n(51163),r=(n(59496),n(49613));const s={toc:[{value:"Example Request",id:"example-request",level:4}]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-request"},"Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X POST \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Content-Type: application/json" \\\n-H "Ngrok-Version: 2" \\\n-d \'{"description":"acme devices","domain":"connect.acme.com"}\' \\\nhttps://api.ngrok.com/agent_ingresses\n')))}i.isMDXComponent=!0;const o={toc:[{value:"Example Response",id:"example-response",level:4}]},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-response"},"Example Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n    "uri": "https://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n    "description": "acme devices",\n    "domain": "connect.acme.com",\n    "ns_targets": [\n        "1.kube-dns.kube-system.svc.cluster.local.",\n        "2.kube-dns.kube-system.svc.cluster.local.",\n        "3.kube-dns.kube-system.svc.cluster.local.",\n        "4.kube-dns.kube-system.svc.cluster.local."\n    ],\n    "region_domains": ["tunnel.us.connect.acme.com"],\n    "created_at": "2023-07-31T23:17:40Z"\n}\n')))}p.isMDXComponent=!0;const m={toc:[{value:"Example Request",id:"example-request",level:4}]},g="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-request"},"Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X DELETE \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7\n')))}u.isMDXComponent=!0;const k={toc:[{value:"Example Request",id:"example-request",level:4}]},N="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(N,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-request"},"Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X GET \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7\n')))}c.isMDXComponent=!0;const h={toc:[{value:"Example Response",id:"example-response",level:4}]},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-response"},"Example Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n    "uri": "https://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n    "description": "ACME Co. Device Ingress",\n    "metadata": "{\\"device_sku\\": \\"824JS4RZ1F8X\\"}",\n    "domain": "connect.acme.com",\n    "ns_targets": [\n        "1.kube-dns.kube-system.svc.cluster.local.",\n        "2.kube-dns.kube-system.svc.cluster.local.",\n        "3.kube-dns.kube-system.svc.cluster.local.",\n        "4.kube-dns.kube-system.svc.cluster.local."\n    ],\n    "region_domains": ["tunnel.us.connect.acme.com"],\n    "created_at": "2023-07-31T23:17:40Z"\n}\n')))}y.isMDXComponent=!0;const v={toc:[{value:"Example Request",id:"example-request",level:4}]},f="wrapper";function x(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-request"},"Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X GET \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/agent_ingresses\n')))}x.isMDXComponent=!0;const A={toc:[{value:"Example Response",id:"example-response",level:4}]},I="wrapper";function C(e){let{components:t,...n}=e;return(0,r.kt)(I,(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-response"},"Example Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ingresses": [\n        {\n            "id": "agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n            "uri": "https://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n            "description": "acme devices",\n            "domain": "connect.acme.com",\n            "ns_targets": [\n                "1.kube-dns.kube-system.svc.cluster.local.",\n                "2.kube-dns.kube-system.svc.cluster.local.",\n                "3.kube-dns.kube-system.svc.cluster.local.",\n                "4.kube-dns.kube-system.svc.cluster.local."\n            ],\n            "region_domains": ["tunnel.us.connect.acme.com"],\n            "created_at": "2023-07-31T23:17:40Z"\n        }\n    ],\n    "uri": "https://api.ngrok.com/agent_ingresses",\n    "next_page_uri": null\n}\n')))}C.isMDXComponent=!0;const T={toc:[{value:"Example Request",id:"example-request",level:4}]},R="wrapper";function _(e){let{components:t,...n}=e;return(0,r.kt)(R,(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-request"},"Example Request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X PATCH \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Content-Type: application/json" \\\n-H "Ngrok-Version: 2" \\\n-d \'{"description":"ACME Co. Device Ingress","metadata":"{\\"device_sku\\": \\"824JS4RZ1F8X\\"}"}\' \\\nhttps://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7\n')))}_.isMDXComponent=!0;const X={toc:[{value:"Example Response",id:"example-response",level:4}]},M="wrapper";function q(e){let{components:t,...n}=e;return(0,r.kt)(M,(0,a.Z)({},X,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"example-response"},"Example Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n    "uri": "https://api.ngrok.com/agent_ingresses/agin_2TMGJ5XTkNXxX2o9kiFMMLhTHw7",\n    "description": "ACME Co. Device Ingress",\n    "metadata": "{\\"device_sku\\": \\"824JS4RZ1F8X\\"}",\n    "domain": "connect.acme.com",\n    "ns_targets": [\n        "1.kube-dns.kube-system.svc.cluster.local.",\n        "2.kube-dns.kube-system.svc.cluster.local.",\n        "3.kube-dns.kube-system.svc.cluster.local.",\n        "4.kube-dns.kube-system.svc.cluster.local."\n    ],\n    "region_domains": ["tunnel.us.connect.acme.com"],\n    "created_at": "2023-07-31T23:17:40Z"\n}\n')))}q.isMDXComponent=!0;const w={},L="Agent Ingresses",E={unversionedId:"api/resources/agent-ingresses",id:"api/resources/agent-ingresses",title:"Agent Ingresses",description:"---",source:"@site/docs/api/resources/agent-ingresses.mdx",sourceDirName:"api/resources",slug:"/api/resources/agent-ingresses",permalink:"/docs/api/resources/agent-ingresses",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/api/resources/agent-ingresses.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Abuse Reports",permalink:"/docs/api/resources/abuse-reports"},next:{title:"Tunnels",permalink:"/docs/api/resources/tunnels"}},D={},F=[{value:"Create Agent Ingress",id:"create-agent-ingress",level:2},{value:"Request",id:"request",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:3},{value:"Fields",id:"fields",level:4},{value:"Delete Agent Ingress",id:"delete-agent-ingress",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Get Agent Ingress",id:"get-agent-ingress",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Fields",id:"fields-1",level:4},{value:"List Agent Ingresses",id:"list-agent-ingresses",level:2},{value:"Request",id:"request-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Fields",id:"fields-2",level:4},{value:"AgentIngress fields",id:"agentingress-fields",level:4},{value:"Update Agent Ingress",id:"update-agent-ingress",level:2},{value:"Request",id:"request-4",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Response",id:"response-4",level:3},{value:"Fields",id:"fields-3",level:4}],H={toc:F},G="wrapper";function P(e){let{components:t,...n}=e;return(0,r.kt)(G,(0,a.Z)({},H,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agent-ingresses"},"Agent Ingresses"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"create-agent-ingress"},"Create Agent Ingress"),(0,r.kt)("p",null,"Create a new Agent Ingress. The ngrok agent can be configured to connect to ngrok via the new set of addresses on the returned Agent Ingress."),(0,r.kt)("h3",{id:"request"},"Request"),(0,r.kt)("p",null,"POST /agent_ingresses"),(0,r.kt)(i,{mdxType:"AgentIngressesCreateRequest"}),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable description of the use of this Agent Ingress. optional, max 255 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the domain that you own to be used as the base domain name to generate regional agent ingress domains.")))),(0,r.kt)("h3",{id:"response"},"Response"),(0,r.kt)("p",null,"Returns a 201 response on success"),(0,r.kt)(p,{mdxType:"AgentIngressesCreateResponse"}),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"unique Agent Ingress resource identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to the API resource of this Agent ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable description of the use of this Agent Ingress. optional, max 255 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the domain that you own to be used as the base domain name to generate regional agent ingress domains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ns_targets")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region_domains")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp when the Agent Ingress was created, RFC 3339 format")))),(0,r.kt)("h2",{id:"delete-agent-ingress"},"Delete Agent Ingress"),(0,r.kt)("p",null,"Delete an Agent Ingress by ID"),(0,r.kt)("h3",{id:"request-1"},"Request"),(0,r.kt)("p",null,"DELETE /agent_ingresses/{id}"),(0,r.kt)(u,{mdxType:"AgentIngressesDeleteRequest"}),(0,r.kt)("h3",{id:"response-1"},"Response"),(0,r.kt)("p",null,"Returns a 204 response with no body on success"),(0,r.kt)("h2",{id:"get-agent-ingress"},"Get Agent Ingress"),(0,r.kt)("p",null,"Get the details of an Agent Ingress by ID."),(0,r.kt)("h3",{id:"request-2"},"Request"),(0,r.kt)("p",null,"GET /agent_ingresses/{id}"),(0,r.kt)(c,{mdxType:"AgentIngressesGetRequest"}),(0,r.kt)("h3",{id:"response-2"},"Response"),(0,r.kt)("p",null,"Returns a 200 response on success"),(0,r.kt)(y,{mdxType:"AgentIngressesGetResponse"}),(0,r.kt)("h4",{id:"fields-1"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"unique Agent Ingress resource identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to the API resource of this Agent ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable description of the use of this Agent Ingress. optional, max 255 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the domain that you own to be used as the base domain name to generate regional agent ingress domains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ns_targets")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region_domains")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp when the Agent Ingress was created, RFC 3339 format")))),(0,r.kt)("h2",{id:"list-agent-ingresses"},"List Agent Ingresses"),(0,r.kt)("p",null,"List all Agent Ingresses owned by this account"),(0,r.kt)("h3",{id:"request-3"},"Request"),(0,r.kt)("p",null,"GET /agent_ingresses"),(0,r.kt)(x,{mdxType:"AgentIngressesListRequest"}),(0,r.kt)("h3",{id:"response-3"},"Response"),(0,r.kt)("p",null,"Returns a 200 response on success"),(0,r.kt)(C,{mdxType:"AgentIngressesListResponse"}),(0,r.kt)("h4",{id:"fields-2"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ingresses")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#agentingress-fields"},"AgentIngress")),(0,r.kt)("td",{parentName:"tr",align:null},"the list of Agent Ingresses owned by this account")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the Agent Ingress list API resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"next_page_uri")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the next page, or null if there is no next page")))),(0,r.kt)("h4",{id:"agentingress-fields"},"AgentIngress fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"unique Agent Ingress resource identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to the API resource of this Agent ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable description of the use of this Agent Ingress. optional, max 255 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the domain that you own to be used as the base domain name to generate regional agent ingress domains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ns_targets")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region_domains")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp when the Agent Ingress was created, RFC 3339 format")))),(0,r.kt)("h2",{id:"update-agent-ingress"},"Update Agent Ingress"),(0,r.kt)("p",null,"Update attributes of an Agent Ingress by ID."),(0,r.kt)("h3",{id:"request-4"},"Request"),(0,r.kt)("p",null,"PATCH /agent_ingresses/{id}"),(0,r.kt)(_,{mdxType:"AgentIngressesUpdateRequest"}),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable description of the use of this Agent Ingress. optional, max 255 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes")))),(0,r.kt)("h3",{id:"response-4"},"Response"),(0,r.kt)("p",null,"Returns a 200 response on success"),(0,r.kt)(q,{mdxType:"AgentIngressesUpdateResponse"}),(0,r.kt)("h4",{id:"fields-3"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"unique Agent Ingress resource identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to the API resource of this Agent ingress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable description of the use of this Agent Ingress. optional, max 255 bytes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined machine-readable data of this Agent Ingress. optional, max 4096 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"domain")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"the domain that you own to be used as the base domain name to generate regional agent ingress domains.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ns_targets")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of target values to use as the values of NS records for the domain property these values will delegate control over the domain to ngrok")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"region_domains")),(0,r.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,r.kt)("td",{parentName:"tr",align:null},"a list of regional agent ingress domains that are subdomains of the value of domain this value may increase over time as ngrok adds more regions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp when the Agent Ingress was created, RFC 3339 format")))))}P.isMDXComponent=!0}}]);
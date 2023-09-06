"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[24551],{77485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>_,default:()=>X,frontMatter:()=>q,metadata:()=>w,toc:()=>M});var a=n(51163),l=(n(59496),n(49613));const r={toc:[{value:"Example Request",id:"example-request",level:4}]},s="wrapper";function i(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-request"},"Example Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X GET \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/tunnel_sessions\n')))}i.isMDXComponent=!0;const o={toc:[{value:"Example Response",id:"example-response",level:4}]},p="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-response"},"Example Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tunnel_sessions": [\n        {\n            "agent_version": "3.1000.0-development",\n            "credential": {\n                "id": "cr_2TMGHUIT05DZp00MDukw6el2AXH",\n                "uri": "https://api.ngrok.com/credentials/cr_2TMGHUIT05DZp00MDukw6el2AXH"\n            },\n            "id": "ts_2TMGHdV3GP4glVpLYiyhFyhduiN",\n            "ip": "10.110.2.2",\n            "os": "linux",\n            "region": "us",\n            "started_at": "2023-07-31T23:17:29Z",\n            "transport": "ngrok/2",\n            "uri": "https://api.ngrok.com/tunnel_sessions/ts_2TMGHdV3GP4glVpLYiyhFyhduiN"\n        }\n    ],\n    "uri": "https://api.ngrok.com/tunnel_sessions",\n    "next_page_uri": null\n}\n')))}u.isMDXComponent=!0;const d={toc:[{value:"Example Request",id:"example-request",level:4}]},m="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-request"},"Example Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X GET \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/tunnel_sessions/ts_2TMGHdV3GP4glVpLYiyhFyhduiN\n')))}k.isMDXComponent=!0;const g={toc:[{value:"Example Response",id:"example-response",level:4}]},N="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(N,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-response"},"Example Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "agent_version": "3.1000.0-development",\n    "credential": {\n        "id": "cr_2TMGHUIT05DZp00MDukw6el2AXH",\n        "uri": "https://api.ngrok.com/credentials/cr_2TMGHUIT05DZp00MDukw6el2AXH"\n    },\n    "id": "ts_2TMGHdV3GP4glVpLYiyhFyhduiN",\n    "ip": "10.110.2.2",\n    "os": "linux",\n    "region": "us",\n    "started_at": "2023-07-31T23:17:29Z",\n    "transport": "ngrok/2",\n    "uri": "https://api.ngrok.com/tunnel_sessions/ts_2TMGHdV3GP4glVpLYiyhFyhduiN"\n}\n')))}h.isMDXComponent=!0;const c={toc:[{value:"Example Request",id:"example-request",level:4}]},f="wrapper";function y(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-request"},"Example Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X POST \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Content-Type: application/json" \\\n-H "Ngrok-Version: 2" \\\n-d \'{}\' \\\nhttps://api.ngrok.com/tunnel_sessions/ts_1vcl4fYZxXY0zNFbpCloylDCG0S/restart\n')))}y.isMDXComponent=!0;const b={toc:[{value:"Example Request",id:"example-request",level:4}]},v="wrapper";function T(e){let{components:t,...n}=e;return(0,l.kt)(v,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-request"},"Example Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X POST \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Content-Type: application/json" \\\n-H "Ngrok-Version: 2" \\\n-d \'{}\' \\\nhttps://api.ngrok.com/tunnel_sessions/ts_1vcl4fYZxXY0zNFbpCloylDCG0S/stop\n')))}T.isMDXComponent=!0;const R={toc:[{value:"Example Request",id:"example-request",level:4}]},x="wrapper";function C(e){let{components:t,...n}=e;return(0,l.kt)(x,(0,a.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"example-request"},"Example Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X POST \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Content-Type: application/json" \\\n-H "Ngrok-Version: 2" \\\n-d \'{}\' \\\nhttps://api.ngrok.com/tunnel_sessions/ts_1vcl4fYZxXY0zNFbpCloylDCG0S/update\n')))}C.isMDXComponent=!0;const q={},_="Tunnel Sessions",w={unversionedId:"api/resources/tunnel-sessions",id:"api/resources/tunnel-sessions",title:"Tunnel Sessions",description:"---",source:"@site/docs/api/resources/tunnel-sessions.mdx",sourceDirName:"api/resources",slug:"/api/resources/tunnel-sessions",permalink:"/docs/api/resources/tunnel-sessions",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/api/resources/tunnel-sessions.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Tunnels",permalink:"/docs/api/resources/tunnels"},next:{title:"Application Users",permalink:"/docs/api/resources/application-users"}},S={},M=[{value:"List Tunnel Sessions",id:"list-tunnel-sessions",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Fields",id:"fields",level:4},{value:"TunnelSession fields",id:"tunnelsession-fields",level:4},{value:"Ref fields",id:"ref-fields",level:4},{value:"Get Tunnel Session",id:"get-tunnel-session",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Fields",id:"fields-1",level:4},{value:"Ref fields",id:"ref-fields-1",level:4},{value:"Restart Tunnel Agent",id:"restart-tunnel-agent",level:2},{value:"Request",id:"request-2",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response-2",level:3},{value:"Stop Tunnel Agent",id:"stop-tunnel-agent",level:2},{value:"Request",id:"request-3",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Response",id:"response-3",level:3},{value:"Update Tunnel Agent",id:"update-tunnel-agent",level:2},{value:"Request",id:"request-4",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Response",id:"response-4",level:3}],D={toc:M},A="wrapper";function X(e){let{components:t,...n}=e;return(0,l.kt)(A,(0,a.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tunnel-sessions"},"Tunnel Sessions"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"list-tunnel-sessions"},"List Tunnel Sessions"),(0,l.kt)("p",null,"List all online tunnel sessions running on this account."),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("p",null,"GET /tunnel_sessions"),(0,l.kt)(i,{mdxType:"TunnelSessionsListRequest"}),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"Returns a 200 response on success"),(0,l.kt)(u,{mdxType:"TunnelSessionsListResponse"}),(0,l.kt)("h4",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tunnel_sessions")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tunnelsession-fields"},"TunnelSession")),(0,l.kt)("td",{parentName:"tr",align:null},"list of all tunnel sessions on this account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"URI to the API resource of the tunnel session list")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"next_page_uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the next page, or null if there is no next page")))),(0,l.kt)("h4",{id:"tunnelsession-fields"},"TunnelSession fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"agent_version")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"version of the ngrok agent that started this ngrok tunnel session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"credential")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ref-fields"},"Ref")),(0,l.kt)("td",{parentName:"tr",align:null},"reference to the tunnel credential or ssh credential used by the ngrok agent to start this tunnel session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"unique tunnel session resource identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ip")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"source ip address of the tunnel session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"os")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"operating system of the host the ngrok agent is running on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"region")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the ngrok region identifier in which this tunnel session was started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"started_at")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"time when the tunnel session first connected to the ngrok servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transport")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the transport protocol used to start the tunnel session. Either ",(0,l.kt)("inlineCode",{parentName:"td"},"ngrok/v2")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ssh"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"URI to the API resource of the tunnel session")))),(0,l.kt)("h4",{id:"ref-fields"},"Ref fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a resource identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a uri for locating a resource")))),(0,l.kt)("h2",{id:"get-tunnel-session"},"Get Tunnel Session"),(0,l.kt)("p",null,"Get the detailed status of a tunnel session by ID"),(0,l.kt)("h3",{id:"request-1"},"Request"),(0,l.kt)("p",null,"GET /tunnel_sessions/{id}"),(0,l.kt)(k,{mdxType:"TunnelSessionsGetRequest"}),(0,l.kt)("h3",{id:"response-1"},"Response"),(0,l.kt)("p",null,"Returns a 200 response on success"),(0,l.kt)(h,{mdxType:"TunnelSessionsGetResponse"}),(0,l.kt)("h4",{id:"fields-1"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"agent_version")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"version of the ngrok agent that started this ngrok tunnel session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"credential")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#ref-fields"},"Ref")),(0,l.kt)("td",{parentName:"tr",align:null},"reference to the tunnel credential or ssh credential used by the ngrok agent to start this tunnel session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"unique tunnel session resource identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ip")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"source ip address of the tunnel session")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"metadata")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"arbitrary user-defined data specified in the metadata property in the ngrok configuration file. See the metadata configuration option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"os")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"operating system of the host the ngrok agent is running on")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"region")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the ngrok region identifier in which this tunnel session was started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"started_at")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"time when the tunnel session first connected to the ngrok servers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"transport")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"the transport protocol used to start the tunnel session. Either ",(0,l.kt)("inlineCode",{parentName:"td"},"ngrok/v2")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ssh"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"URI to the API resource of the tunnel session")))),(0,l.kt)("h4",{id:"ref-fields-1"},"Ref fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a resource identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a uri for locating a resource")))),(0,l.kt)("h2",{id:"restart-tunnel-agent"},"Restart Tunnel Agent"),(0,l.kt)("p",null,"Issues a command instructing the ngrok agent to restart. The agent restarts itself by calling exec() on platforms that support it. This operation is notably not supported on Windows. When an agent restarts, it reconnects with a new tunnel session ID."),(0,l.kt)("h3",{id:"request-2"},"Request"),(0,l.kt)("p",null,"POST /tunnel_sessions/{id}/restart"),(0,l.kt)(y,{mdxType:"TunnelSessionsRestartRequest"}),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a resource identifier")))),(0,l.kt)("h3",{id:"response-2"},"Response"),(0,l.kt)("p",null,"Returns a 204 response with no body on success"),(0,l.kt)("h2",{id:"stop-tunnel-agent"},"Stop Tunnel Agent"),(0,l.kt)("p",null,"Issues a command instructing the ngrok agent that started this tunnel session to exit."),(0,l.kt)("h3",{id:"request-3"},"Request"),(0,l.kt)("p",null,"POST /tunnel_sessions/{id}/stop"),(0,l.kt)(T,{mdxType:"TunnelSessionsStopRequest"}),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"a resource identifier")))),(0,l.kt)("h3",{id:"response-3"},"Response"),(0,l.kt)("p",null,"Returns a 204 response with no body on success"),(0,l.kt)("h2",{id:"update-tunnel-agent"},"Update Tunnel Agent"),(0,l.kt)("p",null,"Issues a command instructing the ngrok agent to update itself to the latest version. After this call completes successfully, the ngrok agent will be in the update process. A caller should wait some amount of time to allow the update to complete (at least 10 seconds) before making a call to the Restart endpoint to request that the agent restart itself to start using the new code. This call will never update an ngrok agent to a new major version which could cause breaking compatibility issues. If you wish to update to a new major version, that must be done manually. Still, please be aware that updating your ngrok agent could break your integration. This call will fail in any of the following circumstances: there is no update available the ngrok agent's configuration disabled update checks the agent is currently in process of updating the agent has already successfully updated but has not yet been restarted"),(0,l.kt)("h3",{id:"request-4"},"Request"),(0,l.kt)("p",null,"POST /tunnel_sessions/{id}/update"),(0,l.kt)(C,{mdxType:"TunnelSessionsUpdateRequest"}),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"response-4"},"Response"),(0,l.kt)("p",null,"Returns a 204 response with no body on success"))}X.isMDXComponent=!0}}]);
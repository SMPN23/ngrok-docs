"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[92423],{26039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=t(51163),r=(t(59496),t(49613));const i={title:"Corporate Firewall"},a="Running ngrok Behind a Corporate Firewall",s={unversionedId:"guides/running-behind-firewalls",id:"guides/running-behind-firewalls",title:"Corporate Firewall",description:"---",source:"@site/docs/guides/running-behind-firewalls.md",sourceDirName:"guides",slug:"/guides/running-behind-firewalls",permalink:"/docs/guides/running-behind-firewalls",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/guides/running-behind-firewalls.md",tags:[],version:"current",lastUpdatedBy:"Alan Shreve",lastUpdatedAt:1689038185,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"Corporate Firewall"},sidebar:"docs",previous:{title:"Load Balancing with ngrok Cloud Edges",permalink:"/docs/guides/load-balancing-with-cloud-edges"},next:{title:"Securing your applications with OAuth 2.0",permalink:"/docs/guides/securing-with-oauth"}},l={},u=[],d={toc:u},c="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-ngrok-behind-a-corporate-firewall"},"Running ngrok Behind a Corporate Firewall"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"When you need to deploy ngrok behind a corporate firewall, there may be additional steps that you will need to take to make sure ngrok is working properly."),(0,r.kt)("p",null,"As background, this is usually not an issue. Firewalls usually allow outbound connections, which is what an ngrok Agent makes in order to establish a session with the ngrok service and subsequently your tunnel."),(0,r.kt)("p",null,"However, certain corporate firewalls have more restrictions around outbound connections. For example, we've seen that ngrok may be blocked on Fortinet firewalls."),(0,r.kt)("p",null,"If you're having trouble using the ngrok agent to start a tunnel, the first step is to run ",(0,r.kt)("inlineCode",{parentName:"p"},"ngrok diagnose")," which will produce a report that will help you identify connection issues."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    $ ngrok diagnose\n    Testing ngrok connectivity...\n\n    Internet Connectivity\n      Name Resolution                           [ OK ]\n      TCP                                       [ OK ]\n      TLS                                       [ OK ]\n    Ngrok Connectivity\n      Name Resolution                           [ OK ]\n      TCP                                       [ OK ]\n      TLS                                       [ OK ]\n    Tunnel Protocol                           [ OK ]\n\n  Successfully established ngrok connection! (region: 'us', latency: 54.895145ms)\n")),(0,r.kt)("p",null,"To resolve these issues, you have a couple options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Work with the network team in charge of the corporate firewall to provide exceptions that allow ngrok to make the necessary outbound connections."),(0,r.kt)("li",{parentName:"ul"},"Set up a custom ingress domain.")),(0,r.kt)("p",null,"When working with the network team, you'll want to set up the following exceptions and allow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tunnel ingress domains (our default is connect.ngrok-agent.com, but there is one for each region), so that the ngrok agent can connect with our servers"),(0,r.kt)("li",{parentName:"ul"},"Our update URL (the default is update.equinox.io), so that the ngrok agent can quickly update itself")),(0,r.kt)("p",null,"Setting up a custom ingress domain can be useful because it ensures that no one can bring their own ngrok account. In this case, the network admins could continue to block traffic to our normal ingress domains and only allow the custom branded ingress domains. For this, you'll need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a ",(0,r.kt)("a",{parentName:"li",href:"https://dashboard.ngrok.com/tunnels/ingress"},"custom ingress domain in your ngrok Dashboard")),(0,r.kt)("li",{parentName:"ul"},"Edit your ngrok agent configuration file with a ",(0,r.kt)("a",{parentName:"li",href:"/secure-tunnels/ngrok-agent/reference/config#config-server-addr"},(0,r.kt)("inlineCode",{parentName:"a"},"server_addr"))," parameter, set to the custom ingress domain of your choosing")))}g.isMDXComponent=!0}}]);
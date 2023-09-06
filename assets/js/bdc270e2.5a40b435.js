"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[14433],{33745:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(51163),o=(a(59496),a(49613));const l={description:"Use JumpCloud SAML to secure access to ngrok tunnels"},r="JumpCloud SSO (SAML)",p={unversionedId:"integrations/jumpcloud/sso-saml",id:"integrations/jumpcloud/sso-saml",title:"JumpCloud SSO (SAML)",description:"Use JumpCloud SAML to secure access to ngrok tunnels",source:"@site/docs/integrations/jumpcloud/sso-saml.md",sourceDirName:"integrations/jumpcloud",slug:"/integrations/jumpcloud/sso-saml",permalink:"/docs/integrations/jumpcloud/sso-saml",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/jumpcloud/sso-saml.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1693002758,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{description:"Use JumpCloud SAML to secure access to ngrok tunnels"},sidebar:"docs",previous:{title:"JumpCloud SSO (OpenID Connect)",permalink:"/docs/integrations/jumpcloud/sso-oidc"},next:{title:"LaunchDarkly",permalink:"/docs/integrations/launchdarkly/"}},i={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration Steps",id:"configuration-steps",level:2},{value:"<strong>Step 1</strong>: Configure JumpCloud",id:"configure-jumpcloud",level:2},{value:"<strong>Step 2</strong>: Download the IdP metadata",id:"idp-metadata",level:3},{value:"<strong>Step 3</strong>: Configure ngrok",id:"configure-ngrok",level:3},{value:"<strong>Step 4</strong>: Download the SP metadata",id:"sp-metadata",level:3},{value:"<strong>Step 5</strong>: Link JumpCloud with ngrok",id:"sp-metadata",level:3},{value:"<strong>Step 6</strong>: Start a Tunnel",id:"start-tunnel",level:3},{value:"Grant access to JumpCloud users",id:"users",level:2},{value:"Test the integration",id:"test-sso",level:2}],u={toc:s},m="wrapper";function d(t){let{components:e,...l}=t;return(0,o.kt)(m,(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jumpcloud-sso-saml"},"JumpCloud SSO (SAML)"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"TL;DR",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To secure access to ngrok with JumpCloud Single Sign-On using SAML:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#configure-jumpcloud"},"Configure JumpCloud SSO")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#configure-ngrok"},"Configure ngrok")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#test-sso"},"Test access to ngrok with JumpCloud SSO")))),(0,o.kt)("p",null,"This article details how to configure JumpCloud as the primary Identity Provider for ngrok tunnels.\nBy integrating JumpCloud SSO with ngrok, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Restrict access to ngrok tunnels")," only to users authenticated via JumpCloud"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use JumpCloud security policies and MFA authenticators"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use JumpCloud's Dashboard to facilitate access to ngrok apps"),".")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To configure ngrok tunnels with JumpCloud, you must have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an JumpCloud account with administrative rights to create apps"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("a",{parentName:"li",href:"https://ngrok.com/pricing"},"ngrok Enterprise Account")," with an authtoken or admin access to configure edges with SAML.")),(0,o.kt)("h2",{id:"configuration-steps"},"Configuration Steps"),(0,o.kt)("p",null,"To integrate ngrok with JumpCloud SSO, you will need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Configure JumpCloud with the ngrok app"),(0,o.kt)("li",{parentName:"ol"},"Configure ngrok with the SSO settings provided by JumpCloud")),(0,o.kt)("h2",{id:"configure-jumpcloud"},(0,o.kt)("strong",{parentName:"h2"},"Step 1"),": Configure JumpCloud"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://console.jumpcloud.com/"},"JumpCloud Console"),", and sign in using your JumpCloud administrator account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left menu, click ",(0,o.kt)("strong",{parentName:"p"},"SSO"),", click ",(0,o.kt)("strong",{parentName:"p"},"Get Started")," or ",(0,o.kt)("strong",{parentName:"p"},"+ Add New Application"),", and then click ",(0,o.kt)("strong",{parentName:"p"},"Custom SAML App"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"New Application")," popup, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"ngrok saml")," in the ",(0,o.kt)("strong",{parentName:"p"},"Display Label")," field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"SSO")," tab, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"https://ngrok-jumpcloud")," in the ",(0,o.kt)("strong",{parentName:"p"},"IdP Entity ID")," field, enter temporary values (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"https://temporary"),") in both the ",(0,o.kt)("strong",{parentName:"p"},"SP Entity ID")," and the ",(0,o.kt)("strong",{parentName:"p"},"ACS URL")," fields, and then click ",(0,o.kt)("strong",{parentName:"p"},"activate"),"."))),(0,o.kt)("h3",{id:"idp-metadata"},(0,o.kt)("strong",{parentName:"h3"},"Step 2"),": Download the IdP metadata"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"SSO")," page of the ",(0,o.kt)("a",{parentName:"li",href:"https://console.jumpcloud.com/"},"JumpCloud Console"),", click your ",(0,o.kt)("strong",{parentName:"li"},"Custom SAML App"),", click the ",(0,o.kt)("strong",{parentName:"li"},"SSO")," tab, click ",(0,o.kt)("strong",{parentName:"li"},"Export Metadata"),", and then save the XML file on your desktop.")),(0,o.kt)("h3",{id:"configure-ngrok"},(0,o.kt)("strong",{parentName:"h3"},"Step 3"),": Configure ngrok"),(0,o.kt)("p",null,"To configure an edge with JumpCloud:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/"},"ngrok Dashboard")," and sign in using your ngrok account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left menu, click ",(0,o.kt)("strong",{parentName:"p"},"Cloud Edge")," and then click ",(0,o.kt)("strong",{parentName:"p"},"Edges"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you don't have an edge already set to add JumpCloud SSO, create a test edge:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"+ New Edge"),"."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create HTTPS Edge"),"."),(0,o.kt)("li",{parentName:"ul"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"pencil icon"),' next to "no description", enter ',(0,o.kt)("inlineCode",{parentName:"li"},"Edge with JumpCloud SSO SAML")," as the edge name, and click ",(0,o.kt)("strong",{parentName:"li"},"Save"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the edge settings menu, click ",(0,o.kt)("strong",{parentName:"p"},"SAML"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"SAML")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Begin setup"),", click ",(0,o.kt)("strong",{parentName:"p"},"Upload XML"),", and then open the XML metadata file you downloaded from JumpCloud (See ",(0,o.kt)("a",{parentName:"p",href:"#idp-metadata"},"Download the IdP metadata"),").\n",(0,o.kt)("img",{alt:"JumpCloud config in ngrok",src:a(31008).Z,width:"1358",height:"568"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save")," at the top."))),(0,o.kt)("h3",{id:"sp-metadata"},(0,o.kt)("strong",{parentName:"h3"},"Step 4"),": Download the SP metadata"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"SAML")," page of your ",(0,o.kt)("a",{parentName:"li",href:"https://dashboard.ngrok.com/cloud-edge/edges"},"ngrok edge"),", click the three dots close to the ",(0,o.kt)("strong",{parentName:"li"},"SP Metadata")," field, click ",(0,o.kt)("strong",{parentName:"li"},"Download XML File"),", and then save the XML file on your desktop.")),(0,o.kt)("h3",{id:"sp-metadata"},(0,o.kt)("strong",{parentName:"h3"},"Step 5"),": Link JumpCloud with ngrok"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://console.jumpcloud.com/"},"JumpCloud Console"),", click ",(0,o.kt)("strong",{parentName:"p"},"SSO"),", click your ",(0,o.kt)("strong",{parentName:"p"},"Custom SAML App"),", click the ",(0,o.kt)("strong",{parentName:"p"},"SSO")," tab, click ",(0,o.kt)("strong",{parentName:"p"},"Upload Metadata"),", and then open the XML metadata file you downloaded from ngrok (See ",(0,o.kt)("a",{parentName:"p",href:"#sp-metadata"},"Download the SP metadata"),").\n",(0,o.kt)("img",{alt:"JumpCloud config in ngrok",src:a(81042).Z,width:"1354",height:"564"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("h3",{id:"start-tunnel"},(0,o.kt)("strong",{parentName:"h3"},"Step 6"),": Start a Tunnel"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("a",{parentName:"li",href:"https://dashboard.ngrok.com/cloud-edge/edges"},"ngrok edges page"),", click your edge, and then click ",(0,o.kt)("strong",{parentName:"li"},"Start a tunnel"),".")),(0,o.kt)("admonition",{title:"Note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"copy icon")," next to the tunnel command.\n",(0,o.kt)("img",{alt:"tunnel config",src:a(95529).Z,width:"474",height:"188"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch a tunnel:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Launch a terminal."),(0,o.kt)("li",{parentName:"ul"},"Paste the command but replace ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:80")," with your localhost app address (i.e., ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),")."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Enter")," and an ngrok tunnel associated with your edge configuration will launch."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To confirm that the tunnel is connected to your edge:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Return to the ngrok dashboard"),(0,o.kt)("li",{parentName:"ul"},"Close the ",(0,o.kt)("strong",{parentName:"li"},"Start a tunnel")," and the ",(0,o.kt)("strong",{parentName:"li"},"Tunnel group")," tabs"),(0,o.kt)("li",{parentName:"ul"},"Refresh the test edge page. Under traffic, You will see the message ",(0,o.kt)("em",{parentName:"li"},"You have 1 tunnel online. Start additional tunnels to begin load balancing."),(0,o.kt)("img",{alt:"tunnel confirmed",src:a(49094).Z,width:"1662",height:"394"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the test edge, copy the ",(0,o.kt)("strong",{parentName:"p"},"endpoint URL"),". (You use this URL to test the JumpCloud Authentication)\n",(0,o.kt)("img",{alt:"tunnel url",src:a(90005).Z,width:"1110",height:"469"})))),(0,o.kt)("h2",{id:"users"},"Grant access to JumpCloud users"),(0,o.kt)("p",null,"JumpCloud allows administrators to restrict access to SSO apps \u2014 such as ngrok \u2014 via user group assignments. By default, apps created in JumpCloud have no group assignments \u2014 in other words, nobody can use JumpCloud SSO to access ngrok until you assign a group to the app."),(0,o.kt)("p",null,"To assign JumpCloud groups to the ngrok app:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left menu of the ",(0,o.kt)("a",{parentName:"p",href:"https://console.jumpcloud.com/"},"JumpCloud Console"),", click ",(0,o.kt)("strong",{parentName:"p"},"SOO")," and click the ngrok custom SAML app you created.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the app popup, click the ",(0,o.kt)("strong",{parentName:"p"},"User Groups")," tab, click the checkbox of the ",(0,o.kt)("strong",{parentName:"p"},"All Users")," group, and then click ",(0,o.kt)("strong",{parentName:"p"},"Save"),".\n",(0,o.kt)("strong",{parentName:"p"},"Tip"),": Make sure to add JumpCloud users to this group when you create or manage users that need access to the ngrok app."))),(0,o.kt)("h2",{id:"test-sso"},"Test the integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your browser, launch an incognito window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access your ngrok tunnel (i.e., ",(0,o.kt)("inlineCode",{parentName:"p"},"https://jumpcloud-sso-test.ngrok.io")," or using the copied endpoint URL).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should be prompted to log in with your JumpCloud credentials.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After logging in, you should be able to see your web app."))))}d.isMDXComponent=!0},95529:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jumpcloud-2-e47d25ef789523cf0d514e12a527e533.png"},49094:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jumpcloud-3-32c1cd6f4f851d88c953fd6a30bf1d35.png"},90005:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jumpcloud-4-82fc96420fdd647bdbb4808d23998693.png"},31008:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jumpcloud-5-94ea2e18e8c6dbb4870b01e0ba9ec33c.png"},81042:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/jumpcloud-6-5ea98e9147766645b4a52b1a7505405f.png"}}]);
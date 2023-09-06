"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[34989],{57896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(51163),l=(a(59496),a(49613));const r={description:"Use Wallix Trustelem SAML to secure access to ngrok tunnels"},i="Wallix Trustelem SSO (SAML)",o={unversionedId:"integrations/trustelem/sso-saml",id:"integrations/trustelem/sso-saml",title:"Wallix Trustelem SSO (SAML)",description:"Use Wallix Trustelem SAML to secure access to ngrok tunnels",source:"@site/docs/integrations/trustelem/sso-saml.md",sourceDirName:"integrations/trustelem",slug:"/integrations/trustelem/sso-saml",permalink:"/docs/integrations/trustelem/sso-saml",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/trustelem/sso-saml.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1693002758,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{description:"Use Wallix Trustelem SAML to secure access to ngrok tunnels"},sidebar:"docs",previous:{title:"Wallix Trustelem SSO (OpenID Connect)",permalink:"/docs/integrations/trustelem/sso-oidc"},next:{title:"Twilio",permalink:"/docs/integrations/twilio/"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration Steps",id:"configuration-steps",level:2},{value:"<strong>Step 1</strong>: Configure Wallix Trustelem",id:"configure-wallix",level:3},{value:"<strong>Step 2</strong>: Configure ngrok",id:"configure-ngrok",level:3},{value:"<strong>Step 3</strong>: Link Wallix Trustelem with ngrok",id:"sp-metadata",level:3},{value:"<strong>Step 4</strong>: Start a Tunnel",id:"start-tunnel",level:3},{value:"Grant access to Wallix Trustelem users",id:"users",level:2},{value:"Test the integration",id:"test-sso",level:2}],m={toc:p},k="wrapper";function u(e){let{components:t,...r}=e;return(0,l.kt)(k,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallix-trustelem-sso-saml"},"Wallix Trustelem SSO (SAML)"),(0,l.kt)("hr",null),(0,l.kt)("admonition",{title:"TL;DR",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To secure access to ngrok with Wallix Trustelem Single Sign-On using SAML:"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#configure-wallix"},"Configure Wallix Trustelem SSO")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#configure-ngrok"},"Configure ngrok")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#test-sso"},"Test access to ngrok with Wallix Trustelem SSO")))),(0,l.kt)("p",null,"This article details how to configure Wallix Trustelem as the primary Identity Provider for ngrok tunnels.\nBy integrating Wallix Trustelem SSO with ngrok, you can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Restrict access to ngrok tunnels")," only to users authenticated via Wallix Trustelem."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Use Wallix Trustelem security policies and MFA authenticators"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Use Wallix Trustelem's Dashboard to facilitate access to ngrok apps"),".")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"To configure ngrok tunnels with Wallix Trustelem, you must have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a Wallix Trustelem account with administrative rights to create apps."),(0,l.kt)("li",{parentName:"ul"},"an ",(0,l.kt)("a",{parentName:"li",href:"https://ngrok.com/pricing"},"ngrok Enterprise Account")," with an authtoken or admin access to configure edges with SAML.")),(0,l.kt)("h2",{id:"configuration-steps"},"Configuration Steps"),(0,l.kt)("p",null,"To integrate ngrok with Wallix Trustelem SSO, you will need to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Configure Wallix Trustelem with the ngrok app."),(0,l.kt)("li",{parentName:"ol"},"Configure ngrok with the SSO settings provided by Wallix Trustelem.")),(0,l.kt)("h3",{id:"configure-wallix"},(0,l.kt)("strong",{parentName:"h3"},"Step 1"),": Configure Wallix Trustelem"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Access the ",(0,l.kt)("a",{parentName:"p",href:"https://admin.trustelem.com/login"},"WALLIX Trustelem administration console"),", and sign in using your Trustelem account.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("strong",{parentName:"p"},"Dashboard")," page, click ",(0,l.kt)("strong",{parentName:"p"},"Apps")," on the left menu, click ",(0,l.kt)("strong",{parentName:"p"},"Add an application")," and click the ",(0,l.kt)("strong",{parentName:"p"},"SAML 2 application")," tile in the ",(0,l.kt)("strong",{parentName:"p"},"Generic models")," section.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("strong",{parentName:"p"},"Settings")," popup, enter ",(0,l.kt)("inlineCode",{parentName:"p"},"ngrok saml")," in the ",(0,l.kt)("strong",{parentName:"p"},"Name")," field, click ",(0,l.kt)("strong",{parentName:"p"},"Save"),", click ",(0,l.kt)("strong",{parentName:"p"},"Download metadata files"),", save the XML file on your desktop, and then click ",(0,l.kt)("strong",{parentName:"p"},"Close"),"."))),(0,l.kt)("h3",{id:"configure-ngrok"},(0,l.kt)("strong",{parentName:"h3"},"Step 2"),": Configure ngrok"),(0,l.kt)("p",null,"To configure an edge with Wallix Trustelem:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Access the ",(0,l.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/"},"ngrok Dashboard")," and sign in using your ngrok account.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the left menu, click ",(0,l.kt)("strong",{parentName:"p"},"Cloud Edge")," and then click ",(0,l.kt)("strong",{parentName:"p"},"Edges"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you don't have an edge already set to add Wallix Trustelem SSO, create a test edge:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"+ New Edge"),"."),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create HTTPS Edge"),"."),(0,l.kt)("li",{parentName:"ul"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"pencil icon"),' next to "no description", enter ',(0,l.kt)("inlineCode",{parentName:"li"},"Edge with Trustelem SSO SAML")," as the edge name, and click ",(0,l.kt)("strong",{parentName:"li"},"Save"),"."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the edge settings menu, click ",(0,l.kt)("strong",{parentName:"p"},"SAML"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("strong",{parentName:"p"},"SAML")," page, click ",(0,l.kt)("strong",{parentName:"p"},"Begin setup"),", click ",(0,l.kt)("strong",{parentName:"p"},"Upload XML"),", and then open the XML metadata file you downloaded from Wallix Trustelem (See ",(0,l.kt)("a",{parentName:"p",href:"#idp-metadata"},"Download the IdP metadata"),").\n",(0,l.kt)("img",{alt:"Wallix Trustelem configuration",src:a(39108).Z,width:"1029",height:"553"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," at the top.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("strong",{parentName:"p"},"SAML")," page of your ",(0,l.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/cloud-edge/edges"},"ngrok edge"),", make note of the URL of both the ",(0,l.kt)("strong",{parentName:"p"},"Entity ID")," and ",(0,l.kt)("strong",{parentName:"p"},"ACS URL")," fields."))),(0,l.kt)("h3",{id:"sp-metadata"},(0,l.kt)("strong",{parentName:"h3"},"Step 3"),": Link Wallix Trustelem with ngrok"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("a",{parentName:"p",href:"https://admin.trustelem.com/login"},"WALLIX Trustelem administration console"),", click ",(0,l.kt)("strong",{parentName:"p"},"Apps")," on the left menu, and then click your application.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("strong",{parentName:"p"},"Settings")," popup, click ",(0,l.kt)("strong",{parentName:"p"},"Edit"),", paste the ",(0,l.kt)("strong",{parentName:"p"},"Entity ID")," URL in the ",(0,l.kt)("strong",{parentName:"p"},"EntityID")," field and the ",(0,l.kt)("strong",{parentName:"p"},"ACS URL")," URL in the ",(0,l.kt)("strong",{parentName:"p"},"Assertion Consumer Service")," field.\n",(0,l.kt)("strong",{parentName:"p"},"Tip"),": You copied both URLs from the previous step.\n",(0,l.kt)("img",{alt:"Wallix Trustelem config in ngrok",src:a(40499).Z,width:"1042",height:"470"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save"),"."))),(0,l.kt)("h3",{id:"start-tunnel"},(0,l.kt)("strong",{parentName:"h3"},"Step 4"),": Start a Tunnel"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Access the ",(0,l.kt)("a",{parentName:"li",href:"https://dashboard.ngrok.com/cloud-edge/edges"},"ngrok edges page"),", click your edge, and then click ",(0,l.kt)("strong",{parentName:"li"},"Start a tunnel"),".")),(0,l.kt)("admonition",{title:"Note",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click the ",(0,l.kt)("strong",{parentName:"p"},"copy icon")," next to the tunnel command.\n",(0,l.kt)("img",{alt:"tunnel config",src:a(99186).Z,width:"474",height:"188"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launch a tunnel:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Launch a terminal."),(0,l.kt)("li",{parentName:"ul"},"Paste the command but replace ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:80")," with your localhost app address (i.e., ",(0,l.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),")."),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Enter")," and an ngrok tunnel associated with your edge configuration will launch."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To confirm that the tunnel is connected to your edge:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Return to the ngrok dashboard"),(0,l.kt)("li",{parentName:"ul"},"Close the ",(0,l.kt)("strong",{parentName:"li"},"Start a tunnel")," and the ",(0,l.kt)("strong",{parentName:"li"},"Tunnel group")," tabs"),(0,l.kt)("li",{parentName:"ul"},"Refresh the test edge page. Under traffic, You will see the message ",(0,l.kt)("em",{parentName:"li"},"You have 1 tunnel online. Start additional tunnels to begin load balancing."),(0,l.kt)("img",{alt:"tunnel confirmed",src:a(16617).Z,width:"1662",height:"394"})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In the test edge, copy the ",(0,l.kt)("strong",{parentName:"p"},"endpoint URL"),". (You use this URL to test the Wallix Trustelem Authentication)\n",(0,l.kt)("img",{alt:"tunnel url",src:a(8483).Z,width:"1160",height:"321"})))),(0,l.kt)("h2",{id:"users"},"Grant access to Wallix Trustelem users"),(0,l.kt)("p",null,"Wallix Trustelem allows their users to access SAML-integrated apps.\nTo create a user follow the instructions below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the left menu the ",(0,l.kt)("a",{parentName:"p",href:"https://admin.trustelem.com/login"},"WALLIX Trustelem administration console"),", click ",(0,l.kt)("strong",{parentName:"p"},"Users")," and then click ",(0,l.kt)("strong",{parentName:"p"},"Create User"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter values for ",(0,l.kt)("strong",{parentName:"p"},"First Name"),", ",(0,l.kt)("strong",{parentName:"p"},"Last Name"),", and ",(0,l.kt)("strong",{parentName:"p"},"Primary Email")," fields, and then click ",(0,l.kt)("strong",{parentName:"p"},"Save"),"."))),(0,l.kt)("h2",{id:"test-sso"},"Test the integration"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In your browser, launch an incognito window.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Access your ngrok tunnel (i.e., ",(0,l.kt)("inlineCode",{parentName:"p"},"https://trustelem-sso-test.ngrok.io")," or using the copied endpoint URL).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You should be prompted to log in with your Wallix Trustelem credentials.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After logging in, you should be able to see your web app."))))}u.isMDXComponent=!0},99186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trustelem-2-e47d25ef789523cf0d514e12a527e533.png"},16617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trustelem-3-32c1cd6f4f851d88c953fd6a30bf1d35.png"},8483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trustelem-4-da7accb2a8f6ec86b3ed2de1be3dd605.png"},39108:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trustelem-5-56e806a9a853f2ca5b4fc43b1d59c985.png"},40499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trustelem-6-bb70efa05676dc1ee53b7a8357e1493b.png"}}]);
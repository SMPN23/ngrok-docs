"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[1105],{47423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(51163),i=(n(59496),n(49613));const r={description:"Use miniOrange OIDC to secure access to ngrok tunnels"},o="miniOrange SSO (OpenID Connect)",l={unversionedId:"integrations/miniorange/sso-oidc",id:"integrations/miniorange/sso-oidc",title:"miniOrange SSO (OpenID Connect)",description:"Use miniOrange OIDC to secure access to ngrok tunnels",source:"@site/docs/integrations/miniorange/sso-oidc.md",sourceDirName:"integrations/miniorange",slug:"/integrations/miniorange/sso-oidc",permalink:"/docs/integrations/miniorange/sso-oidc",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/miniorange/sso-oidc.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1693002758,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{description:"Use miniOrange OIDC to secure access to ngrok tunnels"},sidebar:"docs",previous:{title:"miniOrange",permalink:"/docs/integrations/miniorange/"},next:{title:"miniOrange SSO (SAML)",permalink:"/docs/integrations/miniorange/sso-saml"}},p={},s=[{value:"Supported Features",id:"supported-features",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Configuration Steps",id:"configuration-steps",level:2},{value:"<strong>Step 1</strong>: Configure miniOrange",id:"configure-miniorange",level:3},{value:"<strong>Step 2</strong>: Grant access to miniOrange users",id:"step-2-grant-access-to-miniorange-users",level:3},{value:"<strong>Step 3</strong>: Configure ngrok",id:"configure-ngrok",level:3},{value:"<strong>Option 1</strong>: ngrok CLI",id:"option-1-ngrok-cli",level:3},{value:"<strong>Option 2</strong>: ngrok Edge",id:"option-2-ngrok-edge",level:3},{value:"<strong>Step 4</strong>: Start a Tunnel",id:"start-tunnel",level:3},{value:"Test the integration",id:"test-sso",level:2}],m={toc:s},g="wrapper";function k(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"miniorange-sso-openid-connect"},"miniOrange SSO (OpenID Connect)"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"TL;DR",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To secure access to ngrok with miniOrange Single Sign-On using OpenID Connect:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-miniorange"},"Configure miniOrange SSO")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#configure-ngrok"},"Configure ngrok")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#test-sso"},"Test access to ngrok with miniOrange SSO")))),(0,i.kt)("p",null,"This article details how to configure miniOrange as the primary Identity Provider for ngrok tunnels.\nBy integrating miniOrange SSO with ngrok, you can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Restrict access to ngrok tunnels")," only to users authenticated via miniOrange."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use miniOrange security policies and MFA authenticators"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Use miniOrange's Dashboard to facilitate access to ngrok apps"),".")),(0,i.kt)("h2",{id:"supported-features"},"Supported Features"),(0,i.kt)("p",null,"The ngrok integration with miniOrange supports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SP-Initiated SSO"),": In this mode, users access ngrok edges and tunnels and are redirected to miniOrange for authentication.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To configure ngrok tunnels with miniOrange, you must have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a miniOrange account with administrative rights to create apps."),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("a",{parentName:"li",href:"https://ngrok.com/pricing"},"ngrok Enterprise Account")," with an authtoken or admin access to configure edges with OpenID Connect.")),(0,i.kt)("h2",{id:"configuration-steps"},"Configuration Steps"),(0,i.kt)("p",null,"To integrate ngrok with miniOrange SSO, you will need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure miniOrange with the ngrok app."),(0,i.kt)("li",{parentName:"ol"},"Configure ngrok with the SSO settings provided by miniOrange.")),(0,i.kt)("h3",{id:"configure-miniorange"},(0,i.kt)("strong",{parentName:"h3"},"Step 1"),": Configure miniOrange"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access ",(0,i.kt)("a",{parentName:"p",href:"https://www.miniorange.com/"},"miniOrange"),", and sign in using your miniOrange administrator account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Dashboard")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Apps")," on the left menu, click ",(0,i.kt)("strong",{parentName:"p"},"Add Application"),", click the ",(0,i.kt)("strong",{parentName:"p"},"OAUTH/OIDC")," tile, and then click the ",(0,i.kt)("strong",{parentName:"p"},"OAuth2/OpenID Connect")," tile.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Add App")," page, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"ngrok OIDC")," in the ",(0,i.kt)("strong",{parentName:"p"},"Client Name")," field, enter ",(0,i.kt)("inlineCode",{parentName:"p"},"https://idp.ngrok.com/oauth2/callback")," in the ",(0,i.kt)("strong",{parentName:"p"},"Redirect-URL")," field, and then click ",(0,i.kt)("strong",{parentName:"p"},"Save"),".\n",(0,i.kt)("img",{alt:"miniOrange configuration",src:n(12274).Z,width:"1132",height:"423"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"View Apps")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Select")," in the ",(0,i.kt)("strong",{parentName:"p"},"ngrok OIDC")," app line, and then click ",(0,i.kt)("strong",{parentName:"p"},"Edit"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Edit Application")," page, make note of the value of the ",(0,i.kt)("strong",{parentName:"p"},"Client ID")," field, click the ",(0,i.kt)("strong",{parentName:"p"},"Click to reveal client secret")," link, and then make note of the value of the ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"View Apps")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Select")," in the ",(0,i.kt)("strong",{parentName:"p"},"ngrok")," app line, and then click ",(0,i.kt)("strong",{parentName:"p"},"OAuth Endpoints"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"OAuth Endpoints")," page, make note of the URL of the ",(0,i.kt)("strong",{parentName:"p"},"Discovery Endpoints")," field."))),(0,i.kt)("h3",{id:"step-2-grant-access-to-miniorange-users"},(0,i.kt)("strong",{parentName:"h3"},"Step 2"),": Grant access to miniOrange users"),(0,i.kt)("p",null,"miniOrange allows its users to access OIDC-integrated apps. To create a user follow the instructions below."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left menu of the ",(0,i.kt)("a",{parentName:"p",href:"https://login.xecurify.com/moas/admin/customer/home"},"miniOrange Dashboard"),", click ",(0,i.kt)("strong",{parentName:"p"},"Users")," and then click ",(0,i.kt)("strong",{parentName:"p"},"User List"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Users")," page, click the ",(0,i.kt)("strong",{parentName:"p"},"Add User"),", enter values for the ",(0,i.kt)("strong",{parentName:"p"},"Email"),", ",(0,i.kt)("strong",{parentName:"p"},"Username"),", ",(0,i.kt)("strong",{parentName:"p"},"First Name"),", ",(0,i.kt)("strong",{parentName:"p"},"Last Name"),", and ",(0,i.kt)("strong",{parentName:"p"},"Password")," field, and then click ",(0,i.kt)("strong",{parentName:"p"},"Create User"),"."))),(0,i.kt)("h3",{id:"configure-ngrok"},(0,i.kt)("strong",{parentName:"h3"},"Step 3"),": Configure ngrok"),(0,i.kt)("p",null,"ngrok can leverage miniOrange SSO in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From the ngrok CLI (using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--oidc")," parameter)"),(0,i.kt)("li",{parentName:"ul"},"From the ngrok dashboard")),(0,i.kt)("h3",{id:"option-1-ngrok-cli"},(0,i.kt)("strong",{parentName:"h3"},"Option 1"),": ngrok CLI"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," For this tutorial, we assume you have an app running locally (i.e., on localhost:3000) with the ngrok client installed.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch a terminal")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter the following command to launch an ngrok tunnel with miniOrange SSO:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --oidc=MINIORANGE_OAUTH_URL \\\n--oidc-client-id=MINIORANGE_CLIENT_ID \\\n--oidc-client-secret=MINIORANGE_CLIENT_SECRET \\\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": Replace the following with values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MINIORANGE_OAUTH_URL: The ",(0,i.kt)("strong",{parentName:"li"},"Discovery Endpoint")," URL you copied from miniOrange, without the ",(0,i.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")," sufix (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://login.xecurify.com/moas/discovery/v2.0/abcd1234"),")."),(0,i.kt)("li",{parentName:"ul"},"MINIORANGE_CLIENT_ID: The client id you copied from miniOrange."),(0,i.kt)("li",{parentName:"ul"},"MINIORANGE_CLIENT_SECRET: The client secret you copied from miniOrange.")),(0,i.kt)("p",{parentName:"li"},"Alternatively, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--domain YOUR_DOMAIN")," argument to get your a custom URL, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_DOMAIN")," with your URL of preference.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the URL available next to ",(0,i.kt)("strong",{parentName:"p"},"Forwarding")," (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"https://miniOrange-sso-test.ngrok.io"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Skip to ",(0,i.kt)("strong",{parentName:"p"},"Step 3")))),(0,i.kt)("h3",{id:"option-2-ngrok-edge"},(0,i.kt)("strong",{parentName:"h3"},"Option 2"),": ngrok Edge"),(0,i.kt)("p",null,"To configure an edge with miniOrange:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/"},"ngrok Dashboard")," and sign in using your ngrok account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the left menu, click ",(0,i.kt)("strong",{parentName:"p"},"Cloud Edge")," and then click ",(0,i.kt)("strong",{parentName:"p"},"Edges"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't have an edge already set to add miniOrange SSO, create a test edge:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"+ New Edge"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create HTTPS Edge"),"."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"pencil icon"),' next to "no description", enter ',(0,i.kt)("inlineCode",{parentName:"li"},"Edge with miniOrange SSO OIDC")," as the edge name and click ",(0,i.kt)("strong",{parentName:"li"},"Save"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the edge settings menu, click ",(0,i.kt)("strong",{parentName:"p"},"OIDC"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Begin setup")," and enter the following values into the fields:\n",(0,i.kt)("img",{alt:"miniOrange config in ngrok",src:n(77105).Z,width:"1132",height:"508"})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Issuer URL"),": The ",(0,i.kt)("strong",{parentName:"li"},"Discovery Endpoint")," URL you copied from miniOrange, without the ",(0,i.kt)("inlineCode",{parentName:"li"},"/.well-known/openid-configuration")," sufix (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://login.xecurify.com/moas/discovery/v2.0/abcd1234efG"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client ID"),": The client id you copied from miniOrange."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client Secret"),": The client secret you copied from miniOrange."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save")," at the top, and then click the left arrow to go back to the ",(0,i.kt)("strong",{parentName:"p"},"Edges")," page."))),(0,i.kt)("h3",{id:"start-tunnel"},(0,i.kt)("strong",{parentName:"h3"},"Step 4"),": Start a Tunnel"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Launch a tunnel connected to your miniOrange edge:")),(0,i.kt)("admonition",{title:"Note",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For this step, we assume you have an app running locally (i.e. on localhost:3000) with the ngrok client installed.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Start a tunnel"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click the ",(0,i.kt)("strong",{parentName:"p"},"copy icon")," next to the tunnel command.\n",(0,i.kt)("img",{alt:"tunnel config",src:n(21917).Z,width:"474",height:"188"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Launch a tunnel:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Launch a terminal."),(0,i.kt)("li",{parentName:"ul"},"Paste the command but replace ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:80")," with your localhost app address (i.e., ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"),")."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Enter")," and an ngrok tunnel associated with your edge configuration will launch."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To confirm that the tunnel is connected to your edge:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Return to the ngrok dashboard"),(0,i.kt)("li",{parentName:"ul"},"Close the ",(0,i.kt)("strong",{parentName:"li"},"Start a tunnel")," and the ",(0,i.kt)("strong",{parentName:"li"},"Tunnel group")," tabs"),(0,i.kt)("li",{parentName:"ul"},"Refresh the test edge page. Under traffic, You will see the message ",(0,i.kt)("em",{parentName:"li"},"You have 1 tunnel online. Start additional tunnels to begin load balancing."),(0,i.kt)("img",{alt:"tunnel confirmed",src:n(77346).Z,width:"499",height:"119"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the test edge, copy the ",(0,i.kt)("strong",{parentName:"p"},"endpoint URL"),". (You use this URL to test the miniOrange Authentication)\n",(0,i.kt)("img",{alt:"tunnel url",src:n(54016).Z,width:"1132",height:"377"})))),(0,i.kt)("h2",{id:"test-sso"},"Test the integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your browser, launch an incognito window.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Access your ngrok tunnel using the copied endpoint URL (i.e., ",(0,i.kt)("inlineCode",{parentName:"p"},"https://miniorange-sso-test.ngrok.io"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You should be prompted to log in with your miniOrange credentials.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After logging in, you should be able to see your web app."))))}k.isMDXComponent=!0},77105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniorange-1-55846c4f4a425ea82949ae2fc485b057.png"},21917:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniorange-2-e47d25ef789523cf0d514e12a527e533.png"},77346:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniorange-3-bf6677abb9534bedcf2b58fc0a23998a.png"},54016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/miniorange-4-1106a1ba959cf6e91c648121e78c342f.png"},12274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_url_configuration_miniorange-2660dfe3dc76dabe98ecc7603e677f1d.png"}}]);
"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[27171],{38303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=a(51163),o=(a(59496),a(49613));const r={description:"Develop and test VMware webhooks from localhost"},p="VMware Workspace ONE Webhooks",i={unversionedId:"integrations/vmware/webhooks",id:"integrations/vmware/webhooks",title:"VMware Workspace ONE Webhooks",description:"Develop and test VMware webhooks from localhost",source:"@site/docs/integrations/vmware/webhooks.md",sourceDirName:"integrations/vmware",slug:"/integrations/vmware/webhooks",permalink:"/docs/integrations/vmware/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/vmware/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test VMware webhooks from localhost"},sidebar:"docs",previous:{title:"VMware",permalink:"/docs/integrations/vmware/"},next:{title:"Webex",permalink:"/docs/integrations/webex/"}},s={},l=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate VMware Workspace ONE",id:"setup-webhook",level:2},{value:"Run Webhooks with VMware Workspace ONE and ngrok",id:"run-webhooks-with-vmware-workspace-one-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"vmware-workspace-one-webhooks"},"VMware Workspace ONE Webhooks"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"TL;DR",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To integrate VMware Workspace ONE webhooks with ngrok:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure VMware Workspace ONE webhooks with your ngrok URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,o.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with VMware Workspace ONE by using Webhooks.\nVMware Workspace ONE webhooks can be used to notify an external application whenever specific events occur in your VMware Workspace ONE account."),(0,o.kt)("p",null,"By integrating ngrok with VMware Workspace ONE, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Develop and test VMware Workspace ONE webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from VMware Workspace ONE")," in real-time via the inspection UI and API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify and Replay VMware Workspace ONE Webhook requests")," with a single click and without spending time reproducing events manually in your VMware Workspace ONE account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secure your app with VMware Workspace ONE validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,o.kt)("h2",{id:"start-your-app"},(0,o.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,o.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,o.kt)("p",null,"This will get the project installed locally."),(0,o.kt)("p",null,"Now you can launch the app by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"The app runs by default on port 3000."),(0,o.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,o.kt)("h2",{id:"start-ngrok"},(0,o.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,o.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with VMware Workspace ONE).\n",(0,o.kt)("img",{alt:"ngrok agent running",src:a(84162).Z,width:"962",height:"479"})))),(0,o.kt)("h2",{id:"setup-webhook"},(0,o.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate VMware Workspace ONE"),(0,o.kt)("p",null,"To register a webhook on your VMware Workspace ONE account follow the instructions below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.vmware.com/"},"VMware Workspace ONE")," and sign in using your VMware account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Services")," page, click ",(0,o.kt)("strong",{parentName:"p"},"LAUNCH SERVICE")," in the ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE")," tile.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Workspace ONE ",(0,o.kt)("strong",{parentName:"p"},"Home")," page, click ",(0,o.kt)("strong",{parentName:"p"},"MANAGE")," in the ",(0,o.kt)("strong",{parentName:"p"},"Unified Endpoint Management")," tile.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE UEM")," page, click ",(0,o.kt)("strong",{parentName:"p"},"GROUPS & SETTINGS")," on the left menu, click ",(0,o.kt)("strong",{parentName:"p"},"All Settings"),", click ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," in the ",(0,o.kt)("strong",{parentName:"p"},"System")," section, click ",(0,o.kt)("strong",{parentName:"p"},"API"),", and then click ",(0,o.kt)("strong",{parentName:"p"},"Event Notifications"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Event Notifications")," page, click the ",(0,o.kt)("strong",{parentName:"p"},"Override")," radio button and then click ",(0,o.kt)("strong",{parentName:"p"},"ADD RULE"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Add Event Notification")," popup, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"My Webhook")," in the ",(0,o.kt)("strong",{parentName:"p"},"Target Name")," field and enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,o.kt)("strong",{parentName:"p"},"Target URL")," field (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,o.kt)("img",{alt:"Target URL",src:a(58398).Z,width:"1352",height:"754"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"JSON")," as the ",(0,o.kt)("strong",{parentName:"p"},"Format")," and then click ",(0,o.kt)("strong",{parentName:"p"},"TEST CONNECTION"),"."),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives a request and logs both headers and body in the terminal, and the message ",(0,o.kt)("strong",{parentName:"p"},"Test is successful")," appears on the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Events")," section, click ",(0,o.kt)("strong",{parentName:"p"},"ENABLED")," for all events and then click ",(0,o.kt)("strong",{parentName:"p"},"SAVE"),"."))),(0,o.kt)("h3",{id:"run-webhooks-with-vmware-workspace-one-and-ngrok"},"Run Webhooks with VMware Workspace ONE and ngrok"),(0,o.kt)("p",null,"You can trigger new calls from VMware Workspace ONE to your application by following the instructions below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.vmware.com/"},"VMware Workspace ONE"),", click ",(0,o.kt)("strong",{parentName:"p"},"LAUNCH SERVICE")," in the ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE")," tile, and then click ",(0,o.kt)("strong",{parentName:"p"},"MANAGE")," in the ",(0,o.kt)("strong",{parentName:"p"},"Unified Endpoint Management")," tile.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE UEM")," page, click ",(0,o.kt)("strong",{parentName:"p"},"DEVICES")," on the left menu, click ",(0,o.kt)("strong",{parentName:"p"},"List View")," and then click ",(0,o.kt)("strong",{parentName:"p"},"ADD DEVICE"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Add Device")," popup, select a user, enter a valid email address in the ",(0,o.kt)("strong",{parentName:"p"},"Email address")," field in the ",(0,o.kt)("strong",{parentName:"p"},"Messaging")," section, and then click ",(0,o.kt)("strong",{parentName:"p"},"SAVE"),".\n",(0,o.kt)("strong",{parentName:"p"},"Note"),": If you don't have any users click the ",(0,o.kt)("strong",{parentName:"p"},"Create New User")," link and enter values for all the required fields.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The email address you entered in the ",(0,o.kt)("strong",{parentName:"p"},"Email address")," field receives an email with the subject ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE UEM Device Activation"),". Use a mobile device to open the email and click the link to enroll the device using the ",(0,o.kt)("strong",{parentName:"p"},"Username")," and ",(0,o.kt)("strong",{parentName:"p"},"Password")," of the selected user."),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives a notification and logs both headers and body in the terminal."))),(0,o.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,o.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,o.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,o.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,o.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,o.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,o.kt)("p",null,"To inspect VMware Workspace ONE's webhooks call, launch the ngrok web interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by VMware Workspace ONE."),(0,o.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ngrok Request Inspector",src:a(44637).Z,width:"1188",height:"582"})),(0,o.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,o.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from VMware Workspace ONE. To replay a request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from VMware Workspace ONE.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you choose to ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,o.kt)("strong",{parentName:"p"},"riskLevel")," field inside the body of the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,o.kt)("h2",{id:"security"},"Secure webhook requests"),(0,o.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your VMware Workspace ONE webhook are the only traffic allowed to make calls to your localhost app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,o.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.vmware.com/"},"VMware Workspace ONE")," and sign in using your VMware account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Services")," page, click ",(0,o.kt)("strong",{parentName:"p"},"LAUNCH SERVICE")," in the ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE")," tile.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the Workspace ONE ",(0,o.kt)("strong",{parentName:"p"},"Home")," page, click ",(0,o.kt)("strong",{parentName:"p"},"MANAGE")," in the ",(0,o.kt)("strong",{parentName:"p"},"Unified Endpoint Management")," tile.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Workspace ONE UEM")," page, click ",(0,o.kt)("strong",{parentName:"p"},"GROUPS & SETTINGS")," on the left menu, click ",(0,o.kt)("strong",{parentName:"p"},"All Settings"),", click ",(0,o.kt)("strong",{parentName:"p"},"Advanced")," in the ",(0,o.kt)("strong",{parentName:"p"},"System")," section, click ",(0,o.kt)("strong",{parentName:"p"},"API"),", and then click ",(0,o.kt)("strong",{parentName:"p"},"Event Notifications"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Event Notifications")," page, click the radio button of your webhook and then click ",(0,o.kt)("strong",{parentName:"p"},"EDIT"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Edit Event Notification")," page, enter a username in the ",(0,o.kt)("strong",{parentName:"p"},"Username")," field, enter a password in the ",(0,o.kt)("strong",{parentName:"p"},"Password"),", enter the same password in the ",(0,o.kt)("strong",{parentName:"p"},"Confirm Password")," field, and then click ",(0,o.kt)("strong",{parentName:"p"},"SAVE"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"{username}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{password}")," with the corresponding values you provided before:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook vmware_workspace --verify-webhook-secret {username}::{password}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.vmware.com/"},"VMware Workspace ONE"),", register a new user to your device, and ask the user to enroll the device."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}m.isMDXComponent=!0},44637:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ngrok_introspection_vmware_webhooks-e37917fe269d44ba7fe4aa4508cb159d.png"},58398:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ngrok_url_configuration_vmware-325d029e669b32bdd7bfcb5ca8c4f0d9.png"},84162:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
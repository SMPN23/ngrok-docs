"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[53175],{45367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(51163),a=(n(59496),n(49613));const r={description:"Develop and test DocuSign webhooks from localhost"},i="DocuSign Webhooks",l={unversionedId:"integrations/docusign/webhooks",id:"integrations/docusign/webhooks",title:"DocuSign Webhooks",description:"Develop and test DocuSign webhooks from localhost",source:"@site/docs/integrations/docusign/webhooks.md",sourceDirName:"integrations/docusign",slug:"/integrations/docusign/webhooks",permalink:"/docs/integrations/docusign/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/docusign/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test DocuSign webhooks from localhost"},sidebar:"docs",previous:{title:"DocuSign",permalink:"/docs/integrations/docusign/"},next:{title:"Dropbox",permalink:"/docs/integrations/dropbox/"}},p={},s=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate DocuSign",id:"setup-webhook",level:2},{value:"Run Webhooks with DocuSign and ngrok",id:"run-webhooks-with-docusign-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],c={toc:s},u="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docusign-webhooks"},"DocuSign Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate DocuSign webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure DocuSign webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with DocuSign by using Webhooks.\nDocuSign webhooks can be used to notify an external application whenever specific events occur in your DocuSign account."),(0,a.kt)("p",null,"By integrating ngrok with DocuSign, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test DocuSign webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from DocuSign")," in real-time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay DocuSign Webhook requests")," with a single click and without spending time reproducing events manually in your DocuSign account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with DocuSign validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with DocuSign).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate DocuSign"),(0,a.kt)("p",null,"To register a webhook on your DocuSign account follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access ",(0,a.kt)("a",{parentName:"p",href:"https://docusign.com/"},"DocuSign")," and sign in using your DocuSign account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the top menu, click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Connect")," under the ",(0,a.kt)("strong",{parentName:"p"},"INTEGRATIONS")," section of the left menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Connect")," page, click ",(0,a.kt)("strong",{parentName:"p"},"ADD CONFIGURATION")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Custom"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Add Custom Configuration")," page, enter a name in the ",(0,a.kt)("strong",{parentName:"p"},"Name")," field, and in the ",(0,a.kt)("strong",{parentName:"p"},"URL to Publish")," field enter the URL provided by the ngrok agent to expose your application to the internet (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"URL to Publish",src:n(10592).Z,width:"1468",height:"737"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Trigger Events")," sections, expand ",(0,a.kt)("strong",{parentName:"p"},"Envelope and Recipients"),", click ",(0,a.kt)("strong",{parentName:"p"},"Envelope Sent"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"ADD CONFIGURATION")," at the bottom of the page."))),(0,a.kt)("h3",{id:"run-webhooks-with-docusign-and-ngrok"},"Run Webhooks with DocuSign and ngrok"),(0,a.kt)("p",null,"DocuSign sends different request body contents depending on the event that is being triggered.\nYou can trigger new calls from DocuSign to your application by following the instructions below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the same browser, access your DocuSign inbox by clicking ",(0,a.kt)("strong",{parentName:"p"},"Manage")," on the top menu and then clicking ",(0,a.kt)("strong",{parentName:"p"},"START NOW"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Upload a Document and Add Envelope Recipients")," page, click ",(0,a.kt)("strong",{parentName:"p"},"UPLOAD")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Desktop"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a document from your desktop, expand the ",(0,a.kt)("strong",{parentName:"p"},"Add recipients")," section and then click ",(0,a.kt)("strong",{parentName:"p"},"I'm the only signer"),".\n",(0,a.kt)("strong",{parentName:"p"},"Tip"),": Optionally, you can select a user from the ",(0,a.kt)("strong",{parentName:"p"},"Name")," list.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"SIGN")," at the bottom right of the page."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives the create-envelop event notification and logs both headers and body in the terminal."))),(0,a.kt)("p",null,"Optionally, you can verify the log of the webhook call in DocuSign:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access your DocuSign account home page, and click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," on the top menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left menu, click ",(0,a.kt)("strong",{parentName:"p"},"Connect"),", click the ",(0,a.kt)("strong",{parentName:"p"},"LOGS")," tab, and then click the most recent entry in the log list.\n",(0,a.kt)("img",{alt:"Logs",src:n(91134).Z,width:"1589",height:"527"})))),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect DocuSign's webhooks call, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by DocuSign."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:n(88060).Z,width:"1183",height:"579"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from DocuSign. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from DocuSign.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"summary")," field inside the body of the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your DocuSign webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access your DocuSign account home page and click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," on the top menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left menu, click ",(0,a.kt)("strong",{parentName:"p"},"Connect"),", click the ",(0,a.kt)("strong",{parentName:"p"},"CONNECT KEYS")," tab, click ",(0,a.kt)("strong",{parentName:"p"},"ADD SECRET KEY"),", and then copy the key value generated by DocuSign.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Connect")," page, click the ",(0,a.kt)("strong",{parentName:"p"},"APPLICATIONS")," tab, click your webhook, and then in the ",(0,a.kt)("strong",{parentName:"p"},"Integration and Security Settings")," section click ",(0,a.kt)("strong",{parentName:"p"},"Include HMAC Signature"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your connect key}")," with the value you copied before:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook docusign --verify-webhook-secret {your connect key}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access ",(0,a.kt)("a",{parentName:"p",href:"https://app.docusign.com/home"},"DocuSign")," and create a new envelope."),(0,a.kt)("p",{parentName:"li"},"Verify that your local application receives the request and logs information to the terminal."))))}k.isMDXComponent=!0},88060:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_introspection_docusign_webhooks-e33c2475a126b8587c42097b766e92e1.png"},91134:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_logs_docusign-d42144576074810fecfa9980ad66e7b9.png"},10592:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_url_configuration_docusign-25e96ba33fea7edbb9a22ed964345b23.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
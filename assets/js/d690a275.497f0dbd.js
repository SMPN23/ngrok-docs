"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[61495],{69238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(51163),a=(n(59496),n(49613));const r={description:"Develop and test Plivo webhooks from localhost"},i="Plivo Webhooks",l={unversionedId:"integrations/plivo/webhooks",id:"integrations/plivo/webhooks",title:"Plivo Webhooks",description:"Develop and test Plivo webhooks from localhost",source:"@site/docs/integrations/plivo/webhooks.md",sourceDirName:"integrations/plivo",slug:"/integrations/plivo/webhooks",permalink:"/docs/integrations/plivo/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/plivo/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Plivo webhooks from localhost"},sidebar:"docs",previous:{title:"Plivo",permalink:"/docs/integrations/plivo/"},next:{title:"Pusher",permalink:"/docs/integrations/pusher/"}},p={},s=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Plivo",id:"setup-webhook",level:2},{value:"Run Webhooks with Plivo and ngrok",id:"run-webhooks-with-plivo-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"<strong>Bonus</strong>: Secure webhook requests",id:"security",level:2}],k={toc:s},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plivo-webhooks"},"Plivo Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate Plivo webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Plivo webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Bonus!")," ",(0,a.kt)("a",{parentName:"li",href:"#security"},"Use ngrok like a PRO.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Plivo by using Webhooks.\nPlivo webhooks can be used to notify an external application whenever SMS and MMS messages are sent to your Plivo numbers."),(0,a.kt)("p",null,"By integrating ngrok with Plivo, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test Plivo webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Plivo")," in real time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay Plivo Webhook requests")," with a single click and without spending time reproducing events manually in your Plivo account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with Plivo validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Plivo).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Plivo"),(0,a.kt)("p",null,"To register a webhook on your Plivo account follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://console.plivo.com/"},"Plivo Console")," and sign in using your Plivo account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Overview")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Messaging")," at the left menu, and then click ",(0,a.kt)("strong",{parentName:"p"},"PHLO")," under ",(0,a.kt)("strong",{parentName:"p"},"Applications"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Your PHLOs")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Create New PHLO")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Build My Own")," on the ",(0,a.kt)("strong",{parentName:"p"},"Choose your use case")," popup.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the PHLO page, click the ",(0,a.kt)("strong",{parentName:"p"},"pencil icon")," next to the ",(0,a.kt)("inlineCode",{parentName:"p"},"untitled PHLO")," message at the top left, replace the text with ",(0,a.kt)("inlineCode",{parentName:"p"},"Webhook PHLO"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag the function ",(0,a.kt)("strong",{parentName:"p"},"HTTP Request")," from the left panel to the center of the screen and then click the ",(0,a.kt)("strong",{parentName:"p"},"HTTP Request")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the right panel, select ",(0,a.kt)("strong",{parentName:"p"},"POST")," instead of ",(0,a.kt)("strong",{parentName:"p"},"GET")," in the ",(0,a.kt)("strong",{parentName:"p"},"HTTP Method"),", and enter the URL provided by the ngrok agent to expose your application to the internet in the field next to ",(0,a.kt)("strong",{parentName:"p"},"POST")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"Plivo URL to Publish",src:n(47113).Z,width:"1458",height:"742"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"FETCH RESPONSE")," in the right panel, verify that your webook responds to the call with a message in the ",(0,a.kt)("strong",{parentName:"p"},"Response")," field, and then click ",(0,a.kt)("strong",{parentName:"p"},"VALIDATE"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the PHLO page, drag a line from the ",(0,a.kt)("strong",{parentName:"p"},"Incoming Message")," of the ",(0,a.kt)("strong",{parentName:"p"},"Start")," component to the triangle on the top of the ",(0,a.kt)("strong",{parentName:"p"},"HTTP Request")," component you created, and then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left menu, click ",(0,a.kt)("strong",{parentName:"p"},"Phone Numbers")," and then click one of your numbers.\n",(0,a.kt)("strong",{parentName:"p"},"Note"),": If you don't have numbers click ",(0,a.kt)("strong",{parentName:"p"},"Buy Number")," and follow the instructions on the screen.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the phone number page, select ",(0,a.kt)("strong",{parentName:"p"},"PHLO")," in the ",(0,a.kt)("strong",{parentName:"p"},"Application Type")," field, select ",(0,a.kt)("strong",{parentName:"p"},"Webhook PHLO")," in the ",(0,a.kt)("strong",{parentName:"p"},"PHLO Name")," field, and then click ",(0,a.kt)("strong",{parentName:"p"},"Update Number"),"."))),(0,a.kt)("h3",{id:"run-webhooks-with-plivo-and-ngrok"},"Run Webhooks with Plivo and ngrok"),(0,a.kt)("p",null,"Plivo sends different request body contents depending on the event that is being triggered.\nYou can trigger new calls from Plivo to your application by following the instructions below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send an SMS message to your Plivo phone number."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives a notification and logs both headers and body in the terminal."))),(0,a.kt)("p",null,"Alternatively, you can verify the log of the webhook call in Plivo:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left menu of the ",(0,a.kt)("a",{parentName:"p",href:"https://console.plivo.com/"},"Plivo Console"),", click ",(0,a.kt)("strong",{parentName:"p"},"Messaging")," and then click ",(0,a.kt)("strong",{parentName:"p"},"SMS/MMS")," under ",(0,a.kt)("strong",{parentName:"p"},"Logs")," in the left panel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click one of the logs and then scroll down to the ","*",(0,a.kt)("strong",{parentName:"p"},"*","Status Callbacks")," section.\n",(0,a.kt)("img",{alt:"Webhook Logs",src:n(71613).Z,width:"1410",height:"677"})))),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect Plivo's webhooks call, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by Plivo."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:n(38258).Z,width:"1190",height:"514"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Plivo. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Plivo.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"id")," field inside the body of the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},(0,a.kt)("strong",{parentName:"h2"},"Bonus"),": Secure webhook requests"),(0,a.kt)("p",null,"The ngrok webhook verification feature allows ngrok to assert that requests from your Plivo webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access the ",(0,a.kt)("a",{parentName:"p",href:"https://console.plivo.com/"},"Plivo Console")," and sign in using your Plivo account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Overview")," page, click the eye icon next to ",(0,a.kt)("strong",{parentName:"p"},"Auth Token")," and then copy the value that appears.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your auth token}")," with the value you copied before:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook plivo --verify-webhook-secret {your auth token}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Send a new SMS to your Plivo phone number."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}u.isMDXComponent=!0},38258:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_introspection_plivo_webhooks-7751e47c8a9623aa866350c7da1d29fb.png"},71613:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_logs_plivo-ef339433086b4721f40e634e19e6d48a.png"},47113:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_url_configuration_plivo-37bda77671a5048ef5aa7d6ac415a466.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
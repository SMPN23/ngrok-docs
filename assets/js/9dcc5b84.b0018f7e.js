"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[75526],{57379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(51163),o=(n(59496),n(49613));const r={description:"Develop and test Clerk webhooks from localhost"},l="Clerk Webhooks",i={unversionedId:"integrations/clerk/webhooks",id:"integrations/clerk/webhooks",title:"Clerk Webhooks",description:"Develop and test Clerk webhooks from localhost",source:"@site/docs/integrations/clerk/webhooks.md",sourceDirName:"integrations/clerk",slug:"/integrations/clerk/webhooks",permalink:"/docs/integrations/clerk/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/clerk/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Clerk webhooks from localhost"},sidebar:"docs",previous:{title:"Clerk",permalink:"/docs/integrations/clerk/"},next:{title:"Coinbase",permalink:"/docs/integrations/coinbase/"}},s={},p=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Clerk",id:"setup-webhook",level:2},{value:"Run Webhooks with Clerk and ngrok",id:"run-webhooks-with-clerk-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:p},h="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clerk-webhooks"},"Clerk Webhooks"),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"TL;DR",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To integrate Clerk webhooks with ngrok:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"npm start")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Clerk webhooks with your ngrok URL.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,o.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Clerk by using Webhooks.\nClerk webhooks can be used to notify an external application whenever specific events occur in your Clerk account."),(0,o.kt)("p",null,"By integrating ngrok with Clerk, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Develop and test Clerk webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Clerk")," in real-time via the inspection UI and API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modify and Replay Clerk Webhook requests")," with a single click and without spending time reproducing events manually in your Clerk account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secure your app with Clerk validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,o.kt)("h2",{id:"start-your-app"},(0,o.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,o.kt)("p",null,"For this tutorial, we'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,o.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,o.kt)("p",null,"This will get the project installed locally."),(0,o.kt)("p",null,"Now you can launch the app by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,o.kt)("p",null,"The app runs by default on port 3000."),(0,o.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,o.kt)("h2",{id:"start-ngrok"},(0,o.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,o.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Clerk).\n",(0,o.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,o.kt)("h2",{id:"setup-webhook"},(0,o.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Clerk"),(0,o.kt)("p",null,"To register a webhook on your Clerk account follow the instructions below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.clerk.dev/"},"Clerk Dashboard")," and sign in using your Clerk account.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Applications")," page, click your application and then click ",(0,o.kt)("strong",{parentName:"p"},"Webhook")," on the left menu.\n",(0,o.kt)("strong",{parentName:"p"},"Tip"),": If you don`t have an application click ",(0,o.kt)("strong",{parentName:"p"},"Add application")," to create one.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Endpoint")," and then enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,o.kt)("strong",{parentName:"p"},"Endpoint URL")," field (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,o.kt)("img",{alt:"Clerk Endpoint URL",src:n(89093).Z,width:"1416",height:"669"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Message Filtering")," section, select ",(0,o.kt)("strong",{parentName:"p"},"user.created"),", ",(0,o.kt)("strong",{parentName:"p"},"user.deleted"),", and ",(0,o.kt)("strong",{parentName:"p"},"user.updated")," under ",(0,o.kt)("strong",{parentName:"p"},"Filter events"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Endpoints")," page, click the ",(0,o.kt)("strong",{parentName:"p"},"Testing")," tab, select ",(0,o.kt)("strong",{parentName:"p"},"user.created")," in the ",(0,o.kt)("strong",{parentName:"p"},"Send event")," field, and then click ",(0,o.kt)("strong",{parentName:"p"},"Send Example"),"."),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives the event notification and logs both headers and body in the terminal."))),(0,o.kt)("h3",{id:"run-webhooks-with-clerk-and-ngrok"},"Run Webhooks with Clerk and ngrok"),(0,o.kt)("p",null,"Clerk sends different request body contents depending on the event that is being triggered.\nYou can trigger new calls from Clerk to your application by following the instructions below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left menu of the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.clerk.dev/"},"Clerk Dashboard"),", click ",(0,o.kt)("strong",{parentName:"p"},"+Users")," and then click ",(0,o.kt)("strong",{parentName:"p"},"CREATE"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Create User")," popup, enter an email and a password for the user and then click ",(0,o.kt)("strong",{parentName:"p"},"CREATE"),"."),(0,o.kt)("p",{parentName:"li"},"Confirm your localhost app receives the event notification and logs both headers and body in the terminal."))),(0,o.kt)("p",null,"Alternatively, you can verify the log of the webhook call in Clerk:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the left menu of the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.clerk.dev/"},"Clerk Dashboard"),", click ",(0,o.kt)("strong",{parentName:"p"},"+Webhooks")," and then click the ",(0,o.kt)("strong",{parentName:"p"},"Logs")," tab.\n",(0,o.kt)("img",{alt:"Webhook Logs",src:n(60465).Z,width:"1371",height:"563"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click one of the messages to see its details."))),(0,o.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,o.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,o.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,o.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,o.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,o.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,o.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,o.kt)("p",null,"To inspect Clerk's webhooks call, launch the ngrok web interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by Clerk."),(0,o.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ngrok Request Inspector",src:n(55846).Z,width:"1196",height:"675"})),(0,o.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,o.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Clerk. To replay a request:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Clerk.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you choose to ",(0,o.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,o.kt)("strong",{parentName:"p"},"email_address")," field inside the body of the request.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,o.kt)("h2",{id:"security"},"Secure webhook requests"),(0,o.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your Clerk webhook are the only traffic allowed to make calls to your localhost app."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,o.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Access the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.clerk.dev/"},"Clerk Dashboard"),", click ",(0,o.kt)("strong",{parentName:"p"},"Webhooks")," on the left menu, and then click your endpoint in the list of endpoints.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"Endpoint")," page, click the eye icon under ",(0,o.kt)("strong",{parentName:"p"},"Signing Secret")," and copy the value that appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"{endpoint signing secret}")," with the value you copied before:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook clerk --verify-webhook-secret {endpoint signing secret}\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Users")," on the left menu and then create a new user."))),(0,o.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}c.isMDXComponent=!0},55846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_introspection_clerk_webhooks-3b9d6e6987ae5981560033bd2667839e.png"},60465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_logs_clerk-71f1922352609a32f4c012cdcd33b2da.png"},89093:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ngrok_url_configuration_clerk-89cce96dffac16633e14574c044fad66.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
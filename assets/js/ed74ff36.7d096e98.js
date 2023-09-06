"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[78118],{51238:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(51163),a=(o(59496),o(49613));const r={description:"Develop and test GitHub webhooks from localhost"},i="GitHub Repository Webhooks",l={unversionedId:"integrations/github/webhooks",id:"integrations/github/webhooks",title:"GitHub Repository Webhooks",description:"Develop and test GitHub webhooks from localhost",source:"@site/docs/integrations/github/webhooks.md",sourceDirName:"integrations/github",slug:"/integrations/github/webhooks",permalink:"/docs/integrations/github/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/github/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test GitHub webhooks from localhost"},sidebar:"docs",previous:{title:"GitHub OAuth",permalink:"/docs/integrations/github/oauth"},next:{title:"GitLab",permalink:"/docs/integrations/gitlab/"}},s={},p=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate GitHub",id:"setup-webhook",level:2},{value:"Run Webhooks with GitHub and ngrok",id:"run-webhooks-with-github-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],u={toc:p},h="wrapper";function k(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github-repository-webhooks"},"GitHub Repository Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate GitHub webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure GitHub webhook with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with GitHub to allow GitHub to send notifications to your localhost app anytime an event takes place in a GitHub repository."),(0,a.kt)("p",null,"By integrating ngrok with GitHub, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test GitHub webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from GitHub")," in real-time via the inspection UI and API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay GitHub Webhook requests")," with a single click and without spending time reproducing events manually in GitHub"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with GitHub webhook validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with GitHub).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:o(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate GitHub"),(0,a.kt)("p",null,"GitHub can trigger webhook calls to external applications whenever events happen in a repository. To register for such events, follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign in to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a repository from ",(0,a.kt)("strong",{parentName:"p"},"Your Repository")," list.\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," If you don't have a repository, create a new empty one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the repository page, click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," and then select ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," from the left menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a new webhook by clicking ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Payload URL"),", use the URL provided by the ngrok agent to expose your application to the internet (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"Payload URL",src:o(40941).Z,width:"1153",height:"567"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Content type")," of the data submitted from GitHub to your application as ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose which events you would like to trigger this webhook. For this example, select ",(0,a.kt)("strong",{parentName:"p"},"Just the push event"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure your webhook is active, and then click ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),"."))),(0,a.kt)("h3",{id:"run-webhooks-with-github-and-ngrok"},"Run Webhooks with GitHub and ngrok"),(0,a.kt)("p",null,"After you add a webhook to your GitHub repository, GitHub will submit a post request to your application through ngrok."),(0,a.kt)("p",null,"To review the content of this request on GitHub:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the webhook you've just created.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Recent Deliveries")," tab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ID of the delivery."))),(0,a.kt)("p",null,"Compare the headers and the body of this delivery with the information received by your application, and then confirm they contain the same data."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Different messages are sent to your application depending on the trigger event you choose."),(0,a.kt)("p",null,"Because you've selected ",(0,a.kt)("strong",{parentName:"p"},"Just the push event")," in this example, to trigger new calls from GitHub to your application, you need to push content to your GitHub repository.\nTo resend any request, click ",(0,a.kt)("strong",{parentName:"p"},"Redeliver")," in the ",(0,a.kt)("strong",{parentName:"p"},"Recent Deliveries"),"' tab of your GitHub ",(0,a.kt)("strong",{parentName:"p"},"Manage webhook")," page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Recent Deliveries",src:o(7635).Z,width:"1147",height:"455"})),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect GitHub's event requests, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by GitHub."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:o(15451).Z,width:"1198",height:"571"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without retriggering new events from GitHub. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from GitHub.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. Optionally, modify the request header with different content. For example, modify the ",(0,a.kt)("strong",{parentName:"p"},"X-GitHub-Event")," header with the value ",(0,a.kt)("strong",{parentName:"p"},"MyCustomPush"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"X-GitHub-Event")," header field with the value ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomPush"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your GitHub webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Add webhook")," page, provide a value to the ",(0,a.kt)("strong",{parentName:"p"},"Secret")," field.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your secret}")," with your ",(0,a.kt)("strong",{parentName:"p"},"Secret")," from GitHub:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook github --verify-webhook-secret {your secret}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Resend one of the messages from your GitHub webhook."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}k.isMDXComponent=!0},15451:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_introspection_github_hooks-ea0b9c660c17b5cd396726d2b2e8159f.png"},40941:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_url_configuration_github-50300bcd1e5fe5a337a22822d5768134.png"},7635:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/review_github_recent_deliveries-3653c541d0ca2d9105ab7ad775acd434.png"},84162:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
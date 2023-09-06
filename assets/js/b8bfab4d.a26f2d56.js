"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[94714],{22940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(51163),a=(n(59496),n(49613));const r={description:"Develop and test Sonatype Nexus webhooks from localhost"},p="Sonatype Nexus Webhooks",i={unversionedId:"integrations/sonatype-nexus/webhooks",id:"integrations/sonatype-nexus/webhooks",title:"Sonatype Nexus Webhooks",description:"Develop and test Sonatype Nexus webhooks from localhost",source:"@site/docs/integrations/sonatype-nexus/webhooks.md",sourceDirName:"integrations/sonatype-nexus",slug:"/integrations/sonatype-nexus/webhooks",permalink:"/docs/integrations/sonatype-nexus/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/sonatype-nexus/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Sonatype Nexus webhooks from localhost"},sidebar:"docs",previous:{title:"Sonatype Nexus",permalink:"/docs/integrations/sonatype-nexus/"},next:{title:"Square",permalink:"/docs/integrations/square/"}},s={},l=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Sonatype Nexus",id:"setup-webhook",level:2},{value:"Run Webhooks with Sonatype Nexus and ngrok",id:"run-webhooks-with-sonatype-nexus-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:l},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sonatype-nexus-webhooks"},"Sonatype Nexus Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate Sonatype Nexus webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Sonatype Nexus webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Sonatype Nexus by using Webhooks.\nSonatype Nexus webhooks can be used to notify an external application whenever specific events occur in your Sonatype Nexus account."),(0,a.kt)("p",null,"By integrating ngrok with Sonatype Nexus, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test Sonatype Nexus webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Sonatype Nexus")," in real-time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay Sonatype Nexus Webhook requests")," with a single click and without spending time reproducing events manually in your Sonatype Nexus account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with Sonatype Nexus validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Sonatype Nexus).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Sonatype Nexus"),(0,a.kt)("p",null,"To register a webhook on your Sonatype Nexus repository follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access your ",(0,a.kt)("strong",{parentName:"p"},"Sonatype Nexus Repository Manager")," user interface and sign in using your administration account.\n",(0,a.kt)("strong",{parentName:"p"},"Tip"),": The user interface URL depends on where you deployed your repository manager.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left menu, click ",(0,a.kt)("strong",{parentName:"p"},"System"),", click ",(0,a.kt)("strong",{parentName:"p"},"Capabilities"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Create capability")," on the ",(0,a.kt)("strong",{parentName:"p"},"Capabilities")," page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Select Capability Type")," click either ",(0,a.kt)("strong",{parentName:"p"},"Webhook: Global")," or ",(0,a.kt)("strong",{parentName:"p"},"Webhook: Repository")," depending on which type of event you associate with your webhook. In this example, click ",(0,a.kt)("strong",{parentName:"p"},"Webhook: Global"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Create Webhook")," page, enter the URL provided by the ngrok agent to expose your application to the internet in the ",(0,a.kt)("strong",{parentName:"p"},"URL")," field (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"Sonatype Nexus URL",src:n(28169).Z,width:"1351",height:"631"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Available")," list, click ",(0,a.kt)("strong",{parentName:"p"},"repository")," and then click the greater-than button to move the ",(0,a.kt)("strong",{parentName:"p"},"repository")," value to the ",(0,a.kt)("strong",{parentName:"p"},"Selected")," list."))),(0,a.kt)("h3",{id:"run-webhooks-with-sonatype-nexus-and-ngrok"},"Run Webhooks with Sonatype Nexus and ngrok"),(0,a.kt)("p",null,"Sonatype Nexus sends different request body contents depending on the event that is being triggered.\nYou can trigger new calls from Sonatype Nexus to your application by following the instructions below."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Sonatype Nexus Repository Manager")," user interface, click ",(0,a.kt)("strong",{parentName:"p"},"Repository")," on the left menu and then click ",(0,a.kt)("strong",{parentName:"p"},"Repositories"),". In this example, click ",(0,a.kt)("strong",{parentName:"p"},"apt (hosted)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Repositories")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Create Repository"),", click one of the ",(0,a.kt)("strong",{parentName:"p"},"Recipes")," from the list, enter any value in the ",(0,a.kt)("strong",{parentName:"p"},"Name"),", ",(0,a.kt)("strong",{parentName:"p"},"Distribution"),", and ",(0,a.kt)("strong",{parentName:"p"},"Signing Key"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Create repository"),"."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives an event notification and logs both headers and body in the terminal."))),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect Sonatype Nexus's webhooks call, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click on one of the requests sent by Sonatype Nexus."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:n(63814).Z,width:"1184",height:"533"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without the need to trigger new events from Sonatype Nexus. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Sonatype Nexus.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"id")," field inside the body of the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your Sonatype Nexus webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access your ",(0,a.kt)("strong",{parentName:"p"},"Sonatype Nexus Repository Manager")," user interface and sign in using your administration account.\n",(0,a.kt)("strong",{parentName:"p"},"Tip"),": Your ",(0,a.kt)("strong",{parentName:"p"},"Sonatype Nexus Repository Manager")," URL depends on where you deployed your repository manager.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the left menu, click ",(0,a.kt)("strong",{parentName:"p"},"System"),", click ",(0,a.kt)("strong",{parentName:"p"},"Capabilities"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Webhook: Global")," or ",(0,a.kt)("strong",{parentName:"p"},"Webhook: Repository")," depending on which type of capability you created before.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Webhook")," page, click the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab, and then enter ",(0,a.kt)("inlineCode",{parentName:"p"},"12345")," in the ",(0,a.kt)("strong",{parentName:"p"},"Secret Key")," field.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your webhook secret}")," with the value of the ",(0,a.kt)("strong",{parentName:"p"},"Secret Key")," field:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook sonatype_nexus --verify-webhook-secret {your webhook secret}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Sonatype Nexus Repository Manager")," user interface, click ",(0,a.kt)("strong",{parentName:"p"},"Repository")," on the left menu and then click ",(0,a.kt)("strong",{parentName:"p"},"Repositories"),". In this example, click ",(0,a.kt)("strong",{parentName:"p"},"apt (hosted)"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Repositories")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Create Repository"),", click one of the ",(0,a.kt)("strong",{parentName:"p"},"Recipes")," from the list, enter any value in the ",(0,a.kt)("strong",{parentName:"p"},"Name"),", ",(0,a.kt)("strong",{parentName:"p"},"Distribution"),", and ",(0,a.kt)("strong",{parentName:"p"},"Signing Key"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Create repository"),"."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives an event notification and logs both headers and body in the terminal."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}h.isMDXComponent=!0},63814:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_introspection_sonatype_webhooks-64a3bd92bde7a3a429d3f85dd30ee5ff.png"},28169:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_url_configuration_sonatype-7e920fb21ddce0713092aef4ef5012a9.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
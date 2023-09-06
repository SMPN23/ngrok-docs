"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[7688],{29950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var o=n(51163),a=(n(59496),n(49613));const r={description:"Develop and test Bitbucket webhooks from localhost"},i="Bitbucket Repository Webhooks",p={unversionedId:"integrations/bitbucket/webhooks",id:"integrations/bitbucket/webhooks",title:"Bitbucket Repository Webhooks",description:"Develop and test Bitbucket webhooks from localhost",source:"@site/docs/integrations/bitbucket/webhooks.md",sourceDirName:"integrations/bitbucket",slug:"/integrations/bitbucket/webhooks",permalink:"/docs/integrations/bitbucket/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/bitbucket/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test Bitbucket webhooks from localhost"},sidebar:"docs",previous:{title:"Bitbucket",permalink:"/docs/integrations/bitbucket/"},next:{title:"Box",permalink:"/docs/integrations/box/"}},l={},s=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate Bitbucket",id:"setup-webhook",level:2},{value:"Run Webhooks with Bitbucket and ngrok",id:"run-webhooks-with-bitbucket-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:s},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bitbucket-repository-webhooks"},"Bitbucket Repository Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate Bitbucket webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure Bitbucket webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with Bitbucket to allow Bitbucket to send notifications to your app anytime an event takes place in a Bitbucket repository."),(0,a.kt)("p",null,"By integrating ngrok with Bitbucket, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test Bitbucket webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from Bitbucket")," in real-time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay Bitbucket Webhook requests")," with a single click and without spending time reproducing events manually in your Bitbucket account.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with Bitbucket).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:n(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate Bitbucket"),(0,a.kt)("p",null,"Bitbucket can trigger webhook calls to external applications whenever events happen in a repository. To register for such events, follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access ",(0,a.kt)("a",{parentName:"p",href:"https://bitbucket.com/"},"Bitbucket")," and sign in using your Bitbucket account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Repositories")," on the top menu and click the name of a repository from the repository list.\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," If you don't have a repository, create a new empty one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the repository page, click ",(0,a.kt)("strong",{parentName:"p"},"Repository settings")," from the left menu and then click ",(0,a.kt)("strong",{parentName:"p"},"Webhooks"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Add new webhook")," page, enter a ",(0,a.kt)("strong",{parentName:"p"},"Title")," for your webhook and in the ",(0,a.kt)("strong",{parentName:"p"},"URL")," field enter the URL provided by the ngrok agent to expose your application to the internet (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"URL",src:n(28808).Z,width:"1576",height:"668"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Mark the ",(0,a.kt)("strong",{parentName:"p"},"Push")," checkbox under the ",(0,a.kt)("strong",{parentName:"p"},"Triggers")," section and then click ",(0,a.kt)("strong",{parentName:"p"},"Save")," at the bottom of the page."))),(0,a.kt)("h3",{id:"run-webhooks-with-bitbucket-and-ngrok"},"Run Webhooks with Bitbucket and ngrok"),(0,a.kt)("p",null,"Because you've selected the ",(0,a.kt)("strong",{parentName:"p"},"Push")," event as the trigger for your webhook, Bitbucket will submit a post request to your application through ngrok whenever you push content to your repository.\n",(0,a.kt)("strong",{parentName:"p"},"Note:")," Different messages are sent to your application depending on the trigger event you choose."),(0,a.kt)("p",null,"Follow the instructions below to add some content to your repository:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the name of your repository at the top of the left menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the project's page, click ",(0,a.kt)("strong",{parentName:"p"},"...")," and then click ",(0,a.kt)("strong",{parentName:"p"},"Add file"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Source")," page, enter a name for the file in the ",(0,a.kt)("strong",{parentName:"p"},"Filename")," field, and enter the following content to the file in the textbox:\n",(0,a.kt)("inlineCode",{parentName:"p"},"This is my new file content"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Commit"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Commit")," in the Commit changes popup."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives the push event notification and logs both headers and body to the terminal."))),(0,a.kt)("p",null,"Alternatively, clone your repository locally, add some content, commit, and then push the content to your repostiory on Bitbucket:\n",(0,a.kt)("inlineCode",{parentName:"p"},'bash\n    git add .; git commit -m "my first commit"; git push\n    ')),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect Bitbucket's event requests, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by Bitbucket."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:n(66491).Z,width:"1182",height:"684"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without retriggering new events from Bitbucket. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from Bitbucket.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. Optionally, modify the request header with different content. For example, modify the ",(0,a.kt)("strong",{parentName:"p"},"X-Bitbucket-Event")," header with the value ",(0,a.kt)("strong",{parentName:"p"},"MyCustomPush"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"user_name")," field in the body request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"THe following are quick steps to add extra protection to your application."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you are running Bitbucket Cloud, use ngrok IP Restrictions to allow ingress access for a list of IP addresses."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This feature requires ngrok Pro or Enterprise plan."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can find a list of CloudFront IP Addresses used by Bitbucket Cloud in the ",(0,a.kt)("a",{parentName:"p",href:"https://support.atlassian.com/bitbucket-cloud/docs/what-are-the-bitbucket-cloud-ip-addresses-i-should-use-to-configure-my-corporate-firewall/"},"Bitbucket Support documents"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard"),", sign in, click ",(0,a.kt)("strong",{parentName:"p"},"Security")," in the left menu, and then click ",(0,a.kt)("strong",{parentName:"p"},"IP Restrictions"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Agent")," section, click ",(0,a.kt)("strong",{parentName:"p"},"Attach IP Policies"),", click ",(0,a.kt)("strong",{parentName:"p"},"New IP Policy"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Add Rule"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," section, click ",(0,a.kt)("strong",{parentName:"p"},"Allow")," and then enter the CIDR that covers the IP Address from Bitbucket (i.e ",(0,a.kt)("inlineCode",{parentName:"p"},"123.456.789.1/32"),") in the ",(0,a.kt)("strong",{parentName:"p"},"CIDR")," field.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Description")," for both the rule and the policy, click ",(0,a.kt)("strong",{parentName:"p"},"Save"),", and then click ",(0,a.kt)("strong",{parentName:"p"},"Attach IP Policy"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"IP Restrictions")," page, click ",(0,a.kt)("strong",{parentName:"p"},"Save"),".")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you are running Bitbucket Server, ngrok signature webhook verification feature to allow ngrok to assert that requests from your Bitbucket webhook are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access your Bitbucket repository, navigate through the interface to the webhook page, and then edit the webhook.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Authentication")," section, select ",(0,a.kt)("strong",{parentName:"p"},"Secret token")," as the method, and then enter a value for the secret token.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your secret token}")," with the value you entered before:"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook bitbucket --verify-webhook-secret {your secret token}\n")),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Access your repository, add a new file and then commit the file.")),(0,a.kt)("p",{parentName:"li"},"Verify that your local application receives the request and logs information to the terminal."))))}c.isMDXComponent=!0},66491:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_introspection_bitbucket_hooks-5e72811d9c3124113c87ce8b6489732c.png"},28808:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok_url_configuration_bitbucket-83e3c39e0e83070953db3f35aa50daf8.png"},84162:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
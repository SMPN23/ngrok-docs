"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[69066],{74103:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=o(51163),a=(o(59496),o(49613));const r={description:"Develop and test GitLab webhooks from localhost"},i="GitLab Repository Webhooks",l={unversionedId:"integrations/gitlab/webhooks",id:"integrations/gitlab/webhooks",title:"GitLab Repository Webhooks",description:"Develop and test GitLab webhooks from localhost",source:"@site/docs/integrations/gitlab/webhooks.md",sourceDirName:"integrations/gitlab",slug:"/integrations/gitlab/webhooks",permalink:"/docs/integrations/gitlab/webhooks",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/integrations/gitlab/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{description:"Develop and test GitLab webhooks from localhost"},sidebar:"docs",previous:{title:"GitLab",permalink:"/docs/integrations/gitlab/oauth"},next:{title:"Amazon",permalink:"/docs/integrations/google/"}},p={},s=[{value:"<strong>Step 1</strong>: Start your app",id:"start-your-app",level:2},{value:"<strong>Step 2</strong>: Launch ngrok",id:"start-ngrok",level:2},{value:"<strong>Step 3</strong>: Integrate GitLab",id:"setup-webhook",level:2},{value:"Run Webhooks with GitLab and ngrok",id:"run-webhooks-with-gitlab-and-ngrok",level:3},{value:"Inspecting requests",id:"inspecting-requests",level:3},{value:"Replaying requests",id:"replaying-requests",level:3},{value:"Secure webhook requests",id:"security",level:2}],k={toc:s},h="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-repository-webhooks"},"GitLab Repository Webhooks"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"TL;DR",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To integrate GitLab webhooks with ngrok:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-your-app"},"Launch your local webhook.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#start-ngrok"},"Launch ngrok.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok http 3000")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#setup-webhook"},"Configure GitLab webhooks with your ngrok URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#security"},"Secure your webhook requests with verification.")))),(0,a.kt)("p",null,"This guide covers how to use ngrok to integrate your localhost app with GitLab to allow GitLab to send notifications to your app anytime an event takes place in a GitLab repository."),(0,a.kt)("p",null,"By integrating ngrok with GitLab, you can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Develop and test GitLab webhooks locally"),", eliminating the time in deploying your development code to a public environment and setting it up in HTTPS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inspect and troubleshoot requests from GitLab")," in real-time via the inspection UI and API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Modify and Replay GitLab Webhook requests")," with a single click and without spending time reproducing events manually in your GitLab account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Secure your app with GitLab validation provided by ngrok"),". Invalid requests are blocked by ngrok before reaching your app.")),(0,a.kt)("h2",{id:"start-your-app"},(0,a.kt)("strong",{parentName:"h2"},"Step 1"),": Start your app"),(0,a.kt)("p",null,"For this tutorial, we'll use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok/ngrok-webhook-nodejs-sample"},"sample NodeJS app available on GitHub"),"."),(0,a.kt)("p",null,"To install this sample, run the following commands in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ngrok/ngrok-webhook-nodejs-sample.git\ncd ngrok-webhook-nodejs-sample\nnpm install\n")),(0,a.kt)("p",null,"This will get the project installed locally."),(0,a.kt)("p",null,"Now you can launch the app by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"The app runs by default on port 3000."),(0,a.kt)("p",null,"You can validate that the app is up and running by visiting http://localhost:3000. The application logs request headers and body in the terminal and responds with a message in the browser."),(0,a.kt)("h2",{id:"start-ngrok"},(0,a.kt)("strong",{parentName:"h2"},"Step 2"),": Launch ngrok"),(0,a.kt)("p",null,"Once your app is running successfully on localhost, let's get it on the internet securely using ngrok!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you're not an ngrok user yet, just ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/signup"},"sign up for ngrok for free"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"Download the ngrok agent"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"ngrok dashboard")," and copy your Authtoken. ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," The ngrok agent uses the auth token to log into your account when you start a tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start ngrok by running the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ngrok will display a URL where your localhost application is exposed to the internet (copy this URL for use with GitLab).\n",(0,a.kt)("img",{alt:"ngrok agent running",src:o(84162).Z,width:"962",height:"479"})))),(0,a.kt)("h2",{id:"setup-webhook"},(0,a.kt)("strong",{parentName:"h2"},"Step 3"),": Integrate GitLab"),(0,a.kt)("p",null,"GitLab can trigger webhook calls to external applications whenever events happen in a repository. To register for such events, follow the instructions below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Sign in to ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a repository from the ",(0,a.kt)("strong",{parentName:"p"},"Your Repository")," list.\n",(0,a.kt)("strong",{parentName:"p"},"Tip:")," If you don't have a repository, create a new empty one.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the repository page, click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," from the left menu and then click ",(0,a.kt)("strong",{parentName:"p"},"Webhooks"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," page, in the ",(0,a.kt)("strong",{parentName:"p"},"URL")," field enter the URL provided by the ngrok agent to expose your application to the internet (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"https://1a2b-3c4d-5e6f-7g8h-9i0j.sa.ngrok.io"),").\n",(0,a.kt)("img",{alt:"URL",src:o(44343).Z,width:"1128",height:"509"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Mark the ",(0,a.kt)("strong",{parentName:"p"},"Push events")," checkbox under the ",(0,a.kt)("strong",{parentName:"p"},"Trigger")," section and then click ",(0,a.kt)("strong",{parentName:"p"},"Add webhook"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," page, scroll down until the ",(0,a.kt)("strong",{parentName:"p"},"Project Hooks")," section appears.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the webhook list for the ",(0,a.kt)("strong",{parentName:"p"},"Project Hooks")," section, click ",(0,a.kt)("strong",{parentName:"p"},"Test")," for the webhook you've just created and then click ",(0,a.kt)("strong",{parentName:"p"},"Push events"),"."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives the test event notification and logs both headers and body to the terminal.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optionally, in the webhook list, click the ",(0,a.kt)("strong",{parentName:"p"},"Edit")," button for your webhook entry, scroll down the webhook page until the ",(0,a.kt)("strong",{parentName:"p"},"Recent events")," section appears, and then click ",(0,a.kt)("strong",{parentName:"p"},"View details")," for the ",(0,a.kt)("strong",{parentName:"p"},"Push Hook")," trigger line to verify information about the post request GitLab has sent to your localhost application.\n",(0,a.kt)("img",{alt:"GitLab Recent events",src:o(52064).Z,width:"1128",height:"484"})),(0,a.kt)("p",{parentName:"li"},"Verify the content of the request is the same as the content received by your localhost app."))),(0,a.kt)("h3",{id:"run-webhooks-with-gitlab-and-ngrok"},"Run Webhooks with GitLab and ngrok"),(0,a.kt)("p",null,"Because you've selected the ",(0,a.kt)("strong",{parentName:"p"},"Push event")," as the trigger for your webhook, GitLab will submit a post request to your application through ngrok whenever you push content to your repository.\n",(0,a.kt)("strong",{parentName:"p"},"Note:")," Different messages are sent to your application depending on the trigger event you choose."),(0,a.kt)("p",null,"Follow the instructions below to add some content to your repository:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the name of your repository at the top of the left menu.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the project's page, click ",(0,a.kt)("strong",{parentName:"p"},"+")," and then click ",(0,a.kt)("strong",{parentName:"p"},"New file"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"New file")," page, enter a name for the file in the ",(0,a.kt)("strong",{parentName:"p"},"File name")," field, and enter the following content to the file in the textbox:\n",(0,a.kt)("inlineCode",{parentName:"p"},"This is my file content"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Commit changes"),"."),(0,a.kt)("p",{parentName:"li"},"Confirm your localhost app receives the push event notification and logs both headers and body to the terminal."))),(0,a.kt)("p",null,"Alternatively, clone your repository locally, add some content, commit, and then push the content to your repostiory on GitLab:\n",(0,a.kt)("inlineCode",{parentName:"p"},'git add .; git commit -m "my first commit"; git push')),(0,a.kt)("h3",{id:"inspecting-requests"},"Inspecting requests"),(0,a.kt)("p",null,"When you launch the ngrok agent on your local machine, you can see two links:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The URL to your app (it ends with ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok-free.app")," for free accounts or ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok.app")," for paid accounts when not using custom domains)"),(0,a.kt)("li",{parentName:"ul"},"A local URL for the Web Interface (a.k.a ",(0,a.kt)("strong",{parentName:"li"},"Request Inspector"),").")),(0,a.kt)("p",null,"The Request Inspector shows all the requests made through your ngrok tunnel to your localhost app. When you click on a request, you can see details of both the request and the response."),(0,a.kt)("p",null,"Seeing requests is an excellent way of validating the data sent to and retrieved by your app via the ngrok tunnel. That alone can save you some time dissecting and logging HTTP request and response headers, methods, bodies, and response codes within your app just to confirm you are getting what you expect."),(0,a.kt)("p",null,"To inspect GitLab's event requests, launch the ngrok web interface (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:4040"),"), and then click one of the requests sent by GitLab."),(0,a.kt)("p",null,"From the results, review the response body, header, and other details:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ngrok Request Inspector",src:o(68703).Z,width:"949",height:"512"})),(0,a.kt)("h3",{id:"replaying-requests"},"Replaying requests"),(0,a.kt)("p",null,"The ngrok Request Inspector provides a replay function that you can use to test your code without retriggering new events from GitLab. To replay a request:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ngrok inspection interface (i.e., ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:4040"),"), select a request from GitLab.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay")," to execute the same request to your application or select ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications")," to modify the content of the original request before sending the request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. Optionally, modify the request header with different content. For example, modify the ",(0,a.kt)("strong",{parentName:"p"},"X-GitLab-Event")," header with the value ",(0,a.kt)("strong",{parentName:"p"},"MyCustomPush"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you choose to ",(0,a.kt)("strong",{parentName:"p"},"Replay with modifications"),", you can modify any content from the original request. For example, you can modify the ",(0,a.kt)("strong",{parentName:"p"},"user_name")," field in the body request.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Replay"),"."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs the corresponding information to the terminal."),(0,a.kt)("h2",{id:"security"},"Secure webhook requests"),(0,a.kt)("p",null,"The ngrok signature webhook verification feature allows ngrok to assert that requests from your Gitlab webhooks are the only traffic allowed to make calls to your localhost app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," This ngrok feature is limited to 500 validations per month on free ngrok accounts. For unlimited, upgrade to Pro or Enterprise."),(0,a.kt)("p",null,"This is a quick step to add extra protection to your application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the repository page, click ",(0,a.kt)("strong",{parentName:"p"},"Settings")," from the left menu and then click ",(0,a.kt)("strong",{parentName:"p"},"Webhooks"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Webhooks")," page, scroll down until the ",(0,a.kt)("strong",{parentName:"p"},"Project Hooks")," section appears, and then click ",(0,a.kt)("strong",{parentName:"p"},"Edit")," for your webhook.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a text for the ",(0,a.kt)("strong",{parentName:"p"},"Secret token")," field and click ",(0,a.kt)("strong",{parentName:"p"},"Save changes"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart your ngrok agent by running the command, replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"{your secret token}")," with the value you have provided to the ",(0,a.kt)("strong",{parentName:"p"},"Secret token")," field (See ",(0,a.kt)("a",{parentName:"p",href:"#setup-webhook"},"Integrate GitLab"),"):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000 --verify-webhook gitlab --verify-webhook-secret {your secret token}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Project Hooks")," section, click ",(0,a.kt)("strong",{parentName:"p"},"Test")," for your webhook, and then click ",(0,a.kt)("strong",{parentName:"p"},"Push events"),". Alternatively, push content to your repository."))),(0,a.kt)("p",null,"Verify that your local application receives the request and logs information to the terminal."))}u.isMDXComponent=!0},68703:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_introspection_gitlab_hooks-76a939410bba410188d25ba81d3f1113.png"},44343:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ngrok_url_configuration_gitlab-548b57b991b8942ccdfcc86c16027107.png"},52064:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/review_gitlab_recent_events-19ef0c83e56c8a21b87bc9b6ed5bbb78.png"},84162:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/launch_ngrok_tunnel-599c338d88a6da7571391e2a570fb69c.png"}}]);
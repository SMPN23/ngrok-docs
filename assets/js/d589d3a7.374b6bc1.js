"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[47162],{7709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(51163),a=(n(59496),n(49613));const r={sidebar_position:2,title:"Getting Started"},s="Getting Started with ngrok",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"---",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Getting Started"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Guides",permalink:"/docs/guides/"}},i={},u=[{value:"Step 1: Starting a local web service",id:"step-1-starting-a-local-web-service",level:3},{value:"Step 2: Install the ngrok Agent",id:"step-2-install-the-ngrok-agent",level:3},{value:"Step 3: Connect your agent to your ngrok account",id:"step-3-connect-your-agent-to-your-ngrok-account",level:3},{value:"Step 4: Start ngrok",id:"step-4-start-ngrok",level:3},{value:"Bonus Step 1: Securing your public endpoint",id:"bonus-step-1-securing-your-public-endpoint",level:3},{value:"Bonus Step 2: Add OAuth 2.0 to your web service",id:"bonus-step-2-add-oauth-20-to-your-web-service",level:3},{value:"Next steps",id:"next-steps",level:3}],p={toc:u},c="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-ngrok"},"Getting Started with ngrok"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This guide will get you up and running with the ngrok agent, giving you a secure way to access your local service from anywhere in the world."),(0,a.kt)("p",null,"We'll do this in four steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Starting a local service"),(0,a.kt)("li",{parentName:"ol"},"Installing the ngrok agent"),(0,a.kt)("li",{parentName:"ol"},"Connecting your agent to your ngrok account"),(0,a.kt)("li",{parentName:"ol"},"Start ngrok")),(0,a.kt)("h3",{id:"step-1-starting-a-local-web-service"},"Step 1: Starting a local web service"),(0,a.kt)("p",null,"First, you'll need some sort of web service running on your machine. It should be available at http://localhost:","[","any port","]",". If you already have one, you can skip to Step 2. If not, we'll set one up using Python SimpleHTTPServer (ngrok actually has a ",(0,a.kt)("a",{parentName:"p",href:"/secure-tunnels/tunnels/http-tunnels#file-url"},"built in file server")," but let's not worry about that now)."),(0,a.kt)("p",null,"If you don't have a web service running, you can set one up for this demo using Python SimpleHTTPServer."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new directory, we'll call it ",(0,a.kt)("inlineCode",{parentName:"li"},"~/ngrok-rocks")),(0,a.kt)("li",{parentName:"ol"},"Move into that directory and create a file named ",(0,a.kt)("inlineCode",{parentName:"li"},"index.html")," with a single line of text: ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello, World!")),(0,a.kt)("li",{parentName:"ol"},"From that folder, run ",(0,a.kt)("inlineCode",{parentName:"li"},"python3 -m http.server"),". This will start a web server on port 8000 serving the contents of that directory."),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8000")," in your browser")),(0,a.kt)("p",null,"You should see ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello, World!")," in your browser. If you have any trouble getting things working, see ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#running_a_simple_local_http_server"},"this page for help"),"."),(0,a.kt)("p",null,"Unfortunately, this service is only available on your local machine for now. Now let's use ngrok to securely share it with the world. For the rest of this guide, we will assume we're working with a web service running at http://localhost:8000 but you should adjust the following commands to match your configuration."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(80284).Z,width:"256",height:"136"})),(0,a.kt)("h3",{id:"step-2-install-the-ngrok-agent"},"Step 2: Install the ngrok Agent"),(0,a.kt)("p",null,"The ngrok agent is the command line application that you will use to start your tunnels. The easiest way to get started is to use your favorite package manager to install ngrok."),(0,a.kt)("p",null,"For MacOS, use HomeBrew:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install ngrok/ngrok/ngrok\n")),(0,a.kt)("p",null,"Yes, three times, for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.brew.sh/Taps#repository-naming-conventions-and-assumptions"},"reasons"),"."),(0,a.kt)("p",null,"For Linux, use Apt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \\\n  sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \\\n  echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \\\n  sudo tee /etc/apt/sources.list.d/ngrok.list && \\\n  sudo apt update && sudo apt install ngrok\n')),(0,a.kt)("p",null,"For Windows, use Chocolatey:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"choco install ngrok\n")),(0,a.kt)("p",null,"You'll need to run this in an Administrator Command Prompt."),(0,a.kt)("p",null,"If you don't have one of these package managers installed or prefer to install the ngrok agent yourself, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"ngrok Download page")," for instructions and links."),(0,a.kt)("p",null,"You can test everything is working by running ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok -h")," which should print the help text for the ngrok agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    $ ngrok -h\n    NAME:\n      ngrok - tunnel local ports to public URLs and inspect traffic\n\n    USAGE:\n      ngrok [command] [flags]\n\n    DESCRIPTION:\n      ngrok exposes local networked services behinds NATs and firewalls to the\n      public internet over a secure tunnel. Share local websites, build/test\n      webhook consumers and self-host personal services.\n      Detailed help for each command is available with 'ngrok help <command>'.\n      Open http://localhost:4040 for ngrok's web interface to inspect traffic.\n\n    Author:\n      ngrok - <support@ngrok.com>\n\n    TERMS OF SERVICE: https://ngrok.com/tos\n\n    EXAMPLES:\n      ngrok http 80                           # secure public URL for port 80 web server\n      ngrok http --domain baz.ngrok.dev 8080  # port 8080 available at baz.ngrok.dev\n      ngrok http foo.dev:80                   # tunnel to host:port instead of localhost\n      ngrok http https://localhost            # expose a local https server\n      ngrok tcp 22                            # tunnel arbitrary TCP traffic to port 22\n      ngrok tls --domain=foo.com 443          # TLS traffic for foo.com to port 443\n      ngrok start foo bar baz                 # start tunnels from the configuration file\n\n    COMMANDS:\n      api                            use ngrok agent as an api client\n      completion                     generates shell completion code for bash or zsh\n      config                         update or migrate ngrok's configuration file\n      credits                        prints author and licensing information\n      diagnose                       diagnose connection issues\n      help                           Help about any command\n      http                           start an HTTP tunnel\n      service                        run and control an ngrok service on a target operating system\n      start                          start tunnels by name from the configuration file\n      tcp                            start a TCP tunnel\n      tls                            start a TLS tunnel\n      tunnel                         start a tunnel for use with a tunnel-group backend\n      update                         update ngrok to the latest version\n      version                        print the version string\n\n    OPTIONS:\n          --config strings   path to config files; they are merged if multiple\n      -h, --help             help for ngrok\n      -v, --version          version for ngrok\n")),(0,a.kt)("h3",{id:"step-3-connect-your-agent-to-your-ngrok-account"},"Step 3: Connect your agent to your ngrok account"),(0,a.kt)("p",null,"Now that the ngrok agent is installed, let's connect it to your ngrok Account. If you haven't already, ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com"},"sign up (or log in)")," to the ngrok Dashboard and get your ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/get-started/your-authtoken"},"Authtoken"),". The ngrok agent uses the authtoken (sometimes called tunnel credential) to log into your account when you start a tunnel."),(0,a.kt)("p",null,"Copy the value and run this command to add the authtoken in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok config add-authtoken TOKEN\n")),(0,a.kt)("h3",{id:"step-4-start-ngrok"},"Step 4: Start ngrok"),(0,a.kt)("p",null,"Start ngrok by running the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 8000\n")),(0,a.kt)("p",null,"You should see something similar to the following console UI in your terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    ngrok                                                                       (Ctrl+C to quit)\n\n    Session Status                online\n    Account                       inconshreveable (Plan: Free)\n    Version                       3.0.0\n    Region                        United States (us)\n    Latency                       78ms\n    Web Interface                 http://127.0.0.1:4040\n    Forwarding                    https://84c5df439d74.ngrok-free.dev -> http://localhost:8000\n\n    Connections                   ttl     opn     rt1     rt5     p50     p90\n                                  0       0       0.00    0.00    0.00    0.00\n")),(0,a.kt)("p",null,"Now open the Forwarding URL in your browser and you should see your local web service. At first glance, it may not seem impressive, but there are a few key differences here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"That URL is available to anyone in the world. Seriously, test it out by sending it to a friend."),(0,a.kt)("li",{parentName:"ul"},"You are now using TLS (notice the \ud83d\udd12 in your browser window) with a valid certificate without making any changes to your local service.")),(0,a.kt)("p",null,"Since the whole world can access this URL, we need to secure it quickly. Let's stop the ngrok agent with ",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl+c"),"."),(0,a.kt)("h3",{id:"bonus-step-1-securing-your-public-endpoint"},"Bonus Step 1: Securing your public endpoint"),(0,a.kt)("p",null,"The ngrok agent allows you to dynamically add security to any public endpoint in a variety of ways with IP restrictions, HTTP Basic Authentication, OAuth 2.0, OpenID Connect, SAML, Webhook Verification, and even Mutual TLS."),(0,a.kt)("p",null,"To start simply, let's add HTTP Basic Authentication to your endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 8000 --basic-auth 'ngrok:issecure'\n")),(0,a.kt)("p",null,"Now when you access the new ngrok URL in your browser, you should be prompted for a username and password."),(0,a.kt)("p",null,"By the way, if you have a paid plan and want to keep the same URL each time you restart, use the ",(0,a.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-http-flags"},(0,a.kt)("inlineCode",{parentName:"a"},"--domain"))," flag when starting the agent."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(12291).Z,width:"997",height:"598"})),(0,a.kt)("p",null,"You now have a public URL for your web service secured by a username and password, still without modifying your web service."),(0,a.kt)("h3",{id:"bonus-step-2-add-oauth-20-to-your-web-service"},"Bonus Step 2: Add OAuth 2.0 to your web service"),(0,a.kt)("p",null,"In most cases, you don't want to use a single set of shared credentials for all users (you can add as many basic auth credentials as you want, but still). Let's swap out Basic Auth for Google OAuth 2.0 in one line."),(0,a.kt)("p",null,"First stop the ngrok agent again ("),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 8000 --oauth google\n")),(0,a.kt)("p",null,"If you have a paid plan, you can explicitly specify the email addresses to allow with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--oauth-allow-email")," flag."),(0,a.kt)("p",null,"Now when you try to visit your new ngrok URL, you will be prompted to log in with your Google account (you can open in incognito to be sure). Again, this is without modifying your web service."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(37062).Z,width:"1060",height:"793"})),(0,a.kt)("h3",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"That's it, but there's a lot more you can do with ngrok!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure ngrok to use the same domain each time with ",(0,a.kt)("a",{parentName:"li",href:"/secure-tunnels/tunnels/http-tunnels#custom-subdomains"},(0,a.kt)("inlineCode",{parentName:"a"},"--domain"))),(0,a.kt)("li",{parentName:"ul"},"Tunnel other non-HTTP services such as SSH, RDP, or game servers using ",(0,a.kt)("a",{parentName:"li",href:"/secure-tunnels/tunnels/tcp-tunnels"},"TCP Tunnels")),(0,a.kt)("li",{parentName:"ul"},"Bring your own ",(0,a.kt)("a",{parentName:"li",href:"/secure-tunnels/tunnels/http-tunnels#custom-domains"},"custom domains to ngrok")),(0,a.kt)("li",{parentName:"ul"},"Add your ",(0,a.kt)("a",{parentName:"li",href:"/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-api"},"API key and automate via the ",(0,a.kt)("inlineCode",{parentName:"a"},"ngrok api")," command"),"."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/cloud-edge"},"ngrok Cloud Edges")," to dynamically reconfigure traffic to your ngrok agents")))}g.isMDXComponent=!0},80284:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/localhost-8000-210b6dbd8fc13d7c7696a233dcf1e362.png"},12291:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok-basic-auth-f03f70bc81bc3e6a2c2c23562c13ffc4.png"},37062:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ngrok-oauth-ba552e18cf37e6a641801c708d1738ee.png"}}]);
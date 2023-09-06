"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[78007],{74531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(51163),a=(n(59496),n(49613));const r={sidebar_position:1},s="HTTP Tunnels",i={unversionedId:"secure-tunnels/tunnels/http-tunnels",id:"secure-tunnels/tunnels/http-tunnels",title:"HTTP Tunnels",description:"---",source:"@site/docs/secure-tunnels/tunnels/http-tunnels.md",sourceDirName:"secure-tunnels/tunnels",slug:"/secure-tunnels/tunnels/http-tunnels",permalink:"/docs/secure-tunnels/tunnels/http-tunnels",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/secure-tunnels/tunnels/http-tunnels.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"ngrok Tunnels",permalink:"/docs/secure-tunnels/tunnels/"},next:{title:"TLS Tunnels",permalink:"/docs/secure-tunnels/tunnels/tls-tunnels"}},l={},p=[{value:"Custom subdomains",id:"custom-subdomains",level:2},{value:"Example: Open a tunnel with the domain &#39;inconshreveable.ngrok.dev&#39;",id:"example-open-a-tunnel-with-the-domain-inconshreveablengrokdev",level:6},{value:"Password protecting your tunnel with Basic Auth",id:"basic-auth",level:2},{value:"Example: Password-protect your tunnel",id:"example-password-protect-your-tunnel",level:6},{value:"Tunnels on custom branded domains",id:"custom-domains",level:2},{value:"Local HTTPS servers",id:"local-https",level:2},{value:"Forward to an https server by specifying the https:// scheme",id:"forward-to-an-https-server-by-specifying-the-https-scheme",level:6},{value:"Forward to the default https port on localhost",id:"forward-to-the-default-https-port-on-localhost",level:6},{value:"Rewriting the Host header",id:"host-header",level:2},{value:"Rewrite the Host header to &#39;site.dev&#39;",id:"rewrite-the-host-header-to-sitedev",level:6},{value:"Rewrite the Host header to &#39;example.com&#39;",id:"rewrite-the-host-header-to-examplecom",level:6},{value:"Serving local directories with ngrok&#39;s built-in file server",id:"file-url",level:2},{value:"Share a folder on your computer with authentication",id:"share-a-folder-on-your-computer-with-authentication",level:6},{value:"Share a folder on your Windows computer",id:"share-a-folder-on-your-windows-computer",level:6},{value:"Tunneling to HTTP or HTTPS only",id:"schemes",level:2},{value:"Example: Only listen on an HTTP tunnel endpoint",id:"example-only-listen-on-an-http-tunnel-endpoint",level:6},{value:"Example: Only listen on an HTTPS tunnel endpoint",id:"example-only-listen-on-an-https-tunnel-endpoint",level:6},{value:"HTTP Tunnel Examples",id:"examples",level:2},{value:"HTTP Tunnel Configuration Options",id:"configuration-options",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http-tunnels"},"HTTP Tunnels"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"ngrok HTTP tunnels allow you to route HTTP protocols quickly and easily. These include websites, RESTful APIs, web servers, websockets, and much more."),(0,a.kt)("p",null,"Starting an HTTP tunnel is a easy as ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok http 80"),", or whatever local port your service is running on. For a full list of options for starting HTTP tunnels, see our ",(0,a.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-http"},"ngrok agent HTTP Tunnel reference"),"."),(0,a.kt)("h2",{id:"custom-subdomains"},"Custom subdomains"),(0,a.kt)("p",null,"ngrok assigns random names to the HTTP tunnels it opens for you. This is okay for one-time personal uses. But if you're displaying the URL at a hackathon or integrating with a third-party webhook, it can be frustrating if the tunnel name changes or is difficult to read. You can specify a custom domain for your tunnel URL with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--domain")," switch."),(0,a.kt)("h6",{id:"example-open-a-tunnel-with-the-domain-inconshreveablengrokdev"},"Example: Open a tunnel with the domain 'inconshreveable.ngrok.dev'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http --domain=inconshreveable.ngrok.dev 80\n")),(0,a.kt)("h2",{id:"basic-auth"},"Password protecting your tunnel with Basic Auth"),(0,a.kt)("p",null,"Anyone who can guess your tunnel URL can access your local web server unless you protect it with a password. You can make your tunnels secure with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--basic-auth")," flag. This enforces HTTP Basic Auth on all requests with the username and password you specify as an argument. You can include multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"--basic-auth")," flags to allow multiple users."),(0,a.kt)("h6",{id:"example-password-protect-your-tunnel"},"Example: Password-protect your tunnel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ngrok http --basic-auth="username:password" 8080\n')),(0,a.kt)("h2",{id:"custom-domains"},"Tunnels on custom branded domains"),(0,a.kt)("p",null,"Instead of your tunnel appearing as a subdomain of an ngrok owned domain, you can connect ngrok tunnels to your custom domains. To run a tunnel over ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.example.com"),", follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/cloud-edge/domains"},"Domains tab of your ngrok.com dashboard")," and click 'Add a domain'. Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.example.com")," as a Reserved Domain. This guarantees that no one else can hijack your domain name with their own tunnel.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On your dashboard, click on the 'CNAME' icon to copy your CNAME target."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(41573).Z,width:"374",height:"133"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a DNS CNAME record from ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.example.com")," to your CNAME target. In this example, we would point the CNAME record to ",(0,a.kt)("inlineCode",{parentName:"p"},"2w9c34maz.wdv31sd.ngrok-cname.com"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Invoke ngrok with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--domain")," switch and specify the name of your custom domain as an argument."),(0,a.kt)("h6",{parentName:"li",id:"example-run-a-tunnel-over-a-custom-domain"},"Example: Run a tunnel over a custom domain"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"ngrok http --domain=dev.example.com 8000\n")))),(0,a.kt)("h2",{id:"local-https"},"Local HTTPS servers"),(0,a.kt)("p",null,"ngrok assumes that the server it is forwarding to is listening for unencrypted HTTP traffic, but if your server is listening for encrypted HTTPS traffic, you can specify a URL with an ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," scheme to request that ngrok speak HTTPS to your local server."),(0,a.kt)("h6",{id:"forward-to-an-https-server-by-specifying-the-https-scheme"},"Forward to an https server by specifying the https:// scheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http https://localhost:8443\n")),(0,a.kt)("p",null,"As a special case, ngrok assumes that if you forward to port 443 on any host that it should send HTTPS traffic and will act as if you specified an ",(0,a.kt)("inlineCode",{parentName:"p"},"https://")," URL."),(0,a.kt)("h6",{id:"forward-to-the-default-https-port-on-localhost"},"Forward to the default https port on localhost"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http 443\n")),(0,a.kt)("p",null,"ngrok assumes that your local network is private and it ",(0,a.kt)("strong",{parentName:"p"},"does not do any validation of the TLS certificate presented by your local server"),"."),(0,a.kt)("h2",{id:"host-header"},"Rewriting the Host header"),(0,a.kt)("p",null,"When forwarding to a local port, ngrok does not modify the tunneled HTTP requests at all, they are copied to your server byte-for-byte as they are received. Some application servers like WAMP and MAMP and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Host")," header for determining which development site to display. For this reason, ngrok can rewrite your requests with a modified Host header. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--host-header")," switch to rewrite incoming HTTP requests."),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"rewrite")," is specified, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Host")," header will be rewritten to match the hostname portion of the forwarding address. Any other value will cause the ",(0,a.kt)("inlineCode",{parentName:"p"},"Host")," header to be rewritten to that value."),(0,a.kt)("h6",{id:"rewrite-the-host-header-to-sitedev"},"Rewrite the Host header to 'site.dev'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http --host-header=rewrite site.dev:80\n")),(0,a.kt)("h6",{id:"rewrite-the-host-header-to-examplecom"},"Rewrite the Host header to 'example.com'"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http --host-header=example.com 80\n")),(0,a.kt)("h2",{id:"file-url"},"Serving local directories with ngrok's built-in file server"),(0,a.kt)("p",null,"ngrok can serve local file system directories by using its own built-in file server, no separate server needed. You can serve files using the ",(0,a.kt)("inlineCode",{parentName:"p"},"file://")," scheme when specifying the forwarding URL."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"All paths must be specified as absolute paths"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"file://")," URL scheme has no notion of relative paths."),(0,a.kt)("h6",{id:"share-a-folder-on-your-computer-with-authentication"},"Share a folder on your computer with authentication"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ngrok http --basic-auth="user:password" file:///Users/alan/share\n')),(0,a.kt)("p",null,"File URLs can look a little weird on Windows, but they work the same:"),(0,a.kt)("h6",{id:"share-a-folder-on-your-windows-computer"},"Share a folder on your Windows computer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ngrok http "file:///C:\\Users\\alan\\Public Folder"\n')),(0,a.kt)("h2",{id:"schemes"},"Tunneling to HTTP or HTTPS only"),(0,a.kt)("p",null,"By default, when ngrok runs an HTTP tunnel, it opens endpoints for both HTTP and HTTPS traffic. If you wish to only forward HTTP or HTTPS traffic, but not both, you can toggle this behavior with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--scheme")," flag."),(0,a.kt)("h6",{id:"example-only-listen-on-an-http-tunnel-endpoint"},"Example: Only listen on an HTTP tunnel endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http --scheme=http site.dev:80\n")),(0,a.kt)("h6",{id:"example-only-listen-on-an-https-tunnel-endpoint"},"Example: Only listen on an HTTPS tunnel endpoint"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http --scheme=https site.dev:80\n")),(0,a.kt)("h2",{id:"examples"},"HTTP Tunnel Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http 8080                             # forwards provided ngrok URL to port 80\nngrok http example.com:9000                 # forward traffic to example.com:9000\nngrok http --domain=bar.ngrok.dev 80        # request subdomain name: 'bar.ngrok.dev'\nngrok http --domain=www.ex.com 1234         # request tunnel 'www.ex.com' (DNS CNAME)\nngrok http --basic-auth='falken:joshua' 80  # enforce basic auth on tunnel endpoint\nngrok http --host-header=ex.com 80          # rewrite the Host header to 'ex.com'\nngrok http file:///var/log                  # serve local files in /var/log\nngrok http https://localhost:8443           # forward to a local https server\n")),(0,a.kt)("h2",{id:"configuration-options"},"HTTP Tunnel Configuration Options"),(0,a.kt)("p",null,"For a full list of options for configuring HTTP tunnels, see our ",(0,a.kt)("a",{parentName:"p",href:"/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-http"},"ngrok agent HTTP Tunnel reference"),"."))}d.isMDXComponent=!0},41573:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"}}]);
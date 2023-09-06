"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[68275],{34204:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(51163),n=(t(59496),t(49613));const o={title:"Overview"},l="Errors",s={unversionedId:"errors/index",id:"errors/index",title:"Overview",description:"Philosophy",source:"@site/docs/errors/index.md",sourceDirName:"errors",slug:"/errors/",permalink:"/docs/errors/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/errors/index.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"User Management",permalink:"/docs/user-management/"},next:{title:"Overview",permalink:"/docs/errors/"}},i={},d=[{value:"Philosophy",id:"philosophy",level:2},{value:"Programmatic Error Handling",id:"programmatic-error-handling",level:2},{value:"Common Errors",id:"common-errors",level:2},{value:"All Errors",id:"all-errors",level:2}],u={toc:d},p="wrapper";function m(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"errors"},"Errors"),(0,n.kt)("h2",{id:"philosophy"},"Philosophy"),(0,n.kt)("p",null,"When you encounter an error while using ngrok, we report a globally unique\nerror code. Each error code corresponds to a specific location in ngrok's code\nwhich helps us quickly identify where something went wrong and help you know\nexactly how to fix it."),(0,n.kt)("p",null,"When your report a bug or email us about a support issue, please include the\nunique error code if you have encountered one. It will help us diagnose and\nsolve your issue much more quickly."),(0,n.kt)("p",null,"ngrok's error codes were also designed so that you can paste them into your\nfavorite search engine and immediately find a dedicated page with instructions\non how to fix your problem."),(0,n.kt)("h2",{id:"programmatic-error-handling"},"Programmatic Error Handling"),(0,n.kt)("p",null,"When working with ngrok's programmatically, we return these unique error codes\nin a structured way so that you can write software which appropriately handles\ndifferent error conditions."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/#errors"},"API Error Handling"))),(0,n.kt)("h2",{id:"common-errors"},"Common Errors"),(0,n.kt)("p",null,"You're more likely to run into some errors than others. The most common are\nlisted here to help make your troubleshooting easier."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Code"),(0,n.kt)("th",{parentName:"tr",align:null},"Message"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_100"},"ERR_NGROK_100")),(0,n.kt)("td",{parentName:"tr",align:null},"Invalid metadata length")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_108"},"ERR_NGROK_108")),(0,n.kt)("td",{parentName:"tr",align:null},"You've hit your account limit for simultaneous ngrok agent sessions. Try stopping an existing agent or upgrading your account.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_120"},"ERR_NGROK_120")),(0,n.kt)("td",{parentName:"tr",align:null},"Your ngrok agent version ",(0,n.kt)("inlineCode",{parentName:"td"},"VERSION")," is no longer supported. Only the most recent version of the ngrok agent is supported without an account. Update to a newer version with ",(0,n.kt)("inlineCode",{parentName:"td"},"ngrok update")," or by downloading from ",(0,n.kt)("a",{parentName:"td",href:"https://ngrok.com/download"},"https://ngrok.com/download"),". Sign up for an account to avoid forced version upgrades: ",(0,n.kt)("a",{parentName:"td",href:"https://ngrok.com/signup"},"https://ngrok.com/signup"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_1205"},"ERR_NGROK_1205")),(0,n.kt)("td",{parentName:"tr",align:null},"You failed to solve the catpcha, please try again.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_1226"},"ERR_NGROK_1226")),(0,n.kt)("td",{parentName:"tr",align:null},"You are disallowed from creating an ngrok account due to violation of the terms of service.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_3004"},"ERR_NGROK_3004")),(0,n.kt)("td",{parentName:"tr",align:null},"ngrok gateway error. The server returned an invalid or incomplete HTTP response. Try starting ngrok with the full upstream service URL (e.g. ngrok http https://localhost:8081)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_3200"},"ERR_NGROK_3200")),(0,n.kt)("td",{parentName:"tr",align:null},"Tunnel not found. This could be because your agent is not online or your tunnel has been flagged by our automated moderation system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_3208"},"ERR_NGROK_3208")),(0,n.kt)("td",{parentName:"tr",align:null},"The account associated with this hostname has been banned.We've determined this account to be in violation of ngrok's terms of service.If you are the account owner and believe this is a mistake, please contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:support@ngrok.com"},"support@ngrok.com"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_4011"},"ERR_NGROK_4011")),(0,n.kt)("td",{parentName:"tr",align:null},"Your password must be at least 10 characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_4013"},"ERR_NGROK_4013")),(0,n.kt)("td",{parentName:"tr",align:null},"You may not create a new account because you are already a member of a free account. Upgrade or delete that account first before creating a new account.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_4100"},"ERR_NGROK_4100")),(0,n.kt)("td",{parentName:"tr",align:null},"The email or password you entered is not valid.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_4101"},"ERR_NGROK_4101")),(0,n.kt)("td",{parentName:"tr",align:null},"A user with the email address already exists.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_4108"},"ERR_NGROK_4108")),(0,n.kt)("td",{parentName:"tr",align:null},"Sign ups are disallowed for the email provider. Please sign up with a different email provider.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_6022"},"ERR_NGROK_6022")),(0,n.kt)("td",{parentName:"tr",align:null},"Before you can serve HTML content, you must sign up for an ngrok account and install your authtoken.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_6024"},"ERR_NGROK_6024")),(0,n.kt)("td",{parentName:"tr",align:null},"You are about to visit ",(0,n.kt)("inlineCode",{parentName:"td"},"HOSTPORT"),", served by ",(0,n.kt)("inlineCode",{parentName:"td"},"SERVINGIP"),". This website is served for free through ngrok.com. You should only visit this website if you trust whoever sent the link to you.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/errors/err_ngrok_8012"},"ERR_NGROK_8012")),(0,n.kt)("td",{parentName:"tr",align:null},"Traffic was successfully tunneled to the ngrok agent, but the agent failed to establish a connection to the upstream web service")))),(0,n.kt)("h2",{id:"all-errors"},"All Errors"),(0,n.kt)("p",null,"Consult the ",(0,n.kt)("a",{parentName:"p",href:"/docs/errors/reference"},"Errors Reference Documentation")," for a\ncomplete list of all of ngrok's error codes."))}m.isMDXComponent=!0}}]);
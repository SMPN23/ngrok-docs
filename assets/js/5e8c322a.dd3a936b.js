"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[37597],{53499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(51163),a=(n(59496),n(49613));const i={sidebar_position:1,title:"Overview"},o="The ngrok API",l={unversionedId:"api/index",id:"api/index",title:"Overview",description:"---",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/api/index.md",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"docs",previous:{title:"Event Source Reference",permalink:"/docs/events/reference"},next:{title:"Overview",permalink:"/docs/api/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"API Reference Docs",id:"api-reference-docs",level:4},{value:"Other ways to interact with the API",id:"other-ways-to-interact-with-the-api",level:4},{value:"You may be looking for other programmatic ways to work with ngrok",id:"you-may-be-looking-for-other-programmatic-ways-to-work-with-ngrok",level:4},{value:"Quickstart",id:"quickstart",level:2},{value:"Access the API with curl",id:"access-the-api-with-curl",level:5},{value:"Access the API with the agent CLI",id:"access-the-api-with-the-agent-cli",level:5},{value:"Client Libraries",id:"client-libraries",level:2},{value:"Terraform Provider",id:"terraform-provider",level:2},{value:"example.tf",id:"exampletf",level:4},{value:"Authentication",id:"authentication",level:2},{value:"Content Types",id:"content-types",level:2},{value:"Versioning and API Stability",id:"versioning",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Timestamps and Timezones",id:"timezones",level:2},{value:"Rate Limits",id:"rate-limits",level:2},{value:"IP Restrictions",id:"ip-restrictions",level:2},{value:"Errors",id:"errors",level:2},{value:"Licensing",id:"licensing",level:2}],d={toc:p},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-ngrok-api"},"The ngrok API"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ngrok API provides programmatic access to all of ngrok's resources."),(0,a.kt)("p",null,"The API is REST-ish. It follows most of the conventions of a REST API but\ndiverges slightly when the REST model does not fit well."),(0,a.kt)("p",null,"The API is available at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.ngrok.com"),". The API listens only on\nport 443 to help avoid any accidental unencrypted requests."),(0,a.kt)("p",null,"The API is designed to be simple enough to be called with ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," and HTTP\nlibraries in your programming language of choice. We also publish other ways to\ninteract with the API like native API client libraries, a native CLI and a\nTerraform Provider."),(0,a.kt)("h4",{id:"api-reference-docs"},"API Reference Docs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/api/reference"},"API Reference")),": Documentation of all API resources and endpoints. We know it's important, that's why it's first :)")),(0,a.kt)("h4",{id:"other-ways-to-interact-with-the-api"},"Other ways to interact with the API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/secure-tunnels/ngrok-agent/reference/ngrok#ngrok-api"},"Agent API CLI")),": Explore and script the API via the ",(0,a.kt)("inlineCode",{parentName:"li"},"ngrok api")," commands included in the ngrok agent."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#client-libraries"},"API Client Libraries")),": We publish idiomatic API client libraries for all major programming languages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"#terraform-provider"},"Terraform Provider")),": Use ngrok's Terraform provider to manage ngrok resources")),(0,a.kt)("h4",{id:"you-may-be-looking-for-other-programmatic-ways-to-work-with-ngrok"},"You may be looking for other programmatic ways to work with ngrok"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/secure-tunnels/ngrok-agent/reference/api"},"Agent API")),": The ngrok agent has its own API if you're trying to dynamically start and stop endpoints and tunnels"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/secure-tunnels/agentless/#ngrok-agent-libraries"},"Agent SDKs")),": If you're looking to embed ngrok agent functionality as a library in your own software")),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("h5",{id:"access-the-api-with-curl"},"Access the API with curl"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl https://api.ngrok.com -H "authorization: Bearer {API Key}" -H "ngrok-version: 2"\n')),(0,a.kt)("h5",{id:"access-the-api-with-the-agent-cli"},"Access the API with the agent CLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'ngrok config add-api-key "{API Key}"\nngrok api endpoints list\n')),(0,a.kt)("h2",{id:"client-libraries"},"Client Libraries"),(0,a.kt)("p",null,"We publish open-source API client libraries to make working with the ngrok API\nfeel native and fluent in your favorite programming language. Library\nrepositories are published in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ngrok"},"ngrok github\norganization"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Language"),(0,a.kt)("th",{parentName:"tr",align:null},"Installation"),(0,a.kt)("th",{parentName:"tr",align:null},"Documentation"),(0,a.kt)("th",{parentName:"tr",align:null},"Repository"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Go"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"go get github.com/ngrok/ngrok-api-go/v4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://pkg.go.dev/github.com/ngrok/ngrok-api-go/v4"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-go"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},".NET"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"dotnet add package NgrokApi")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-dotnet"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-dotnet"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ruby"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"gem install ngrok-api")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://ruby-api.docs.ngrok.com"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-ruby"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Python"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"pip install ngrok-api")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://python-api.docs.ngrok.com"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-python"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Java (unstable)"),(0,a.kt)("td",{parentName:"tr",align:null},"See the README for installing with Maven"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://java-api.docs.ngrok.com"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-java"},"GitHub"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scala (unstable)"),(0,a.kt)("td",{parentName:"tr",align:null},"See the README for installing with Maven"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://python-api.docs.ngrok.com"},"Documentation")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/ngrok/ngrok-api-scala"},"GitHub"))))),(0,a.kt)("h2",{id:"terraform-provider"},"Terraform Provider"),(0,a.kt)("p",null,"When you use ngrok resources as part of production infrastructure, it is an\nindustry best practice to define them using an infrastructure-as-code tool like\n",(0,a.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform"),". We publish an official Terraform\nprovider that consumes the ngrok API to your resources in this way."),(0,a.kt)("p",null,"Consult the documentation for the ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/ngrok/ngrok/latest/docs"},"ngrok Terraform provider on Hashicorp's\nTerraform\nRegistry.")),(0,a.kt)("h4",{id:"exampletf"},"example.tf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'# Configure the ngrok provider\nprovider "ngrok" {\n  api_key = "{API_KEY}"\n}\n\n# Provision an ngrok domain\nresource "ngrok_reserved_domain" "my_domain" {\n  name   = "my-domain.example.com"\n  region = "us"\n  certificate_management_policy {\n    authority        = "letsencrypt"\n    private_key_type = "ecdsa"\n  }\n}\n')),(0,a.kt)("h2",{id:"authentication"},"Authentication"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base URL"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"https://api.ngrok.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authentication Header"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"authorization: Bearer {API Key}")))))),(0,a.kt)("p",null,"Requests to the API must include an API key as a bearer token in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://dashboard.ngrok.com/api"},"API Keys on the ngrok dashboard")),": Provision your first API key from your ngrok dashboard."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/api/resources/api-keys#list-api-keys"},"API keys API Resource")),": Once you have an API key, you may provision additional API keys programmatically.")),(0,a.kt)("h2",{id:"content-types"},"Content Types"),(0,a.kt)("p",null,"Requests to the API with a content body must set a ",(0,a.kt)("inlineCode",{parentName:"p"},"content-type")," header of\n",(0,a.kt)("inlineCode",{parentName:"p"},"application/json"),". All responses returned by the API will use the\n",(0,a.kt)("inlineCode",{parentName:"p"},"application/json")," content type."),(0,a.kt)("h2",{id:"versioning"},"Versioning and API Stability"),(0,a.kt)("p",null,"Requests to the API must set the ",(0,a.kt)("inlineCode",{parentName:"p"},"ngrok-version")," header. The latest version is\n",(0,a.kt)("inlineCode",{parentName:"p"},"2"),". All other versions are deprecated."),(0,a.kt)("p",null,"The ngrok API guarantees that breaking changes to the API will never be made\nunless the caller explicitly opts in to a newer version. The following\nnon-breaking changes to the API may be made to existing versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The addition of new resources"),(0,a.kt)("li",{parentName:"ul"},"The addition of new methods to existing resources"),(0,a.kt)("li",{parentName:"ul"},"The addition of new fields on existing resource representations"),(0,a.kt)("li",{parentName:"ul"},"Bug fixes which change the API to match documented behavior")),(0,a.kt)("h2",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"List endpoints can be paginated using the query parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"before_id"),". Results are returned ordered from newest to oldest. The maximum\nvalue of ",(0,a.kt)("inlineCode",{parentName:"p"},"limit")," is 100. If a limit is not specified, it will default to 100.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"before_id")," is not specified, the first page of results will be returned.\nYou can provide an explicit value for ",(0,a.kt)("inlineCode",{parentName:"p"},"before_id")," to retrieve items created\nbefore the given ID. Each response to a list request will include a\n",(0,a.kt)("inlineCode",{parentName:"p"},"next_page_uri")," field, which will be the full URL you can request to retrieve\nthe next page of results. If there are no more results, ",(0,a.kt)("inlineCode",{parentName:"p"},"next_page_uri")," will be\n",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h2",{id:"timezones"},"Timestamps and Timezones"),(0,a.kt)("p",null,"Timestamp fields in the ngrok API are represented as strings that are returned\nin the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc3339.txt"},"RFC 3339 format"),". Timestamps\nreturned by the API are in UTC time which is indicated by a ",(0,a.kt)("inlineCode",{parentName:"p"},"Z")," at the end."),(0,a.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,a.kt)("p",null,"The ngrok API enforces a limit on all accounts of 120 requests over a rolling\n60 second window. If you exceed the rate limit, ngrok will return\n",(0,a.kt)("a",{parentName:"p",href:"/docs/errors/ERR_NGROK_226"},"ERR_NGROK_226")," and an HTTP Status Code of 429."),(0,a.kt)("h2",{id:"ip-restrictions"},"IP Restrictions"),(0,a.kt)("p",null,"All API access requires an API key, but you may also further restrict which IPs\nare permitted to make requests to the API. You may define one or more IP\nPolicies to configure which CIDR blocks may manipulate the API for your\naccount."),(0,a.kt)("p",null,"If you use SCIM with an IdP, you may need to add the IPs of your IdP as well\nbecause SCIM requests to the ngrok API are subject to these IP restrictions as\nwell."),(0,a.kt)("p",null,"IP Restrictions can be configured manually on the ngrok dashboard or\nprogramatically via API with a ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"agent"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://dashboard.ngrok.com/security/ip-restrictions"},"IP Restrictions on your ngrok dashboard"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/api/resources/ip-restrictions/"},"IP Restrictions API Resource")))),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("p",null,"We believe that it is important to provide a well-defined interface to errors\nyou encounter when working with the ngrok API. Well-defined error surfaces and codes\nare what allow your software to appropriately handle error conditions."),(0,a.kt)("p",null,"Errors returned by the ngrok API are serialized with the following example format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "error_code": "ERR_NGROK_218",\n  "status_code": 400,\n  "msg": "Your request has not specified an API version. Please include the version you wish to use in the Ngrok-Version header. Supported versions: 2.",\n  "details": {\n    "operation_id": "op_2RfSBcv0nsy71XCHWOegjx1OoKh"\n  }\n}\n')),(0,a.kt)("p",null,"Every error returned by the ngrok API includes a globally unique error code in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"error_code")," property field. This error code is distinct for every possible\nerror condition that can be encountered so your software can properly handle\ndifferent error conditions."),(0,a.kt)("p",null,"Consult the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/errors"},"Error Reference Documentation"))," for the complete list of all\nerror codes returned by ngrok."),(0,a.kt)("h2",{id:"licensing"},"Licensing"),(0,a.kt)("p",null,"The API is available to all ngrok users at no additional charge. You only incur\ncosts if the resources provisioned by the API have a cost."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#ip-restrictions"},"API IP Restrictions")," is available on the Enterprise plan."))}k.isMDXComponent=!0}}]);
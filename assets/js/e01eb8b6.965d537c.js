"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[51796],{23931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(51163),i=(n(59496),n(49613));const r={title:"Overview"},o="Events",s={unversionedId:"events/index",id:"events/index",title:"Overview",description:"---",source:"@site/docs/events/index.mdx",sourceDirName:"events",slug:"/events/",permalink:"/docs/events/",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/events/index.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1692661363,formattedLastUpdatedAt:"Aug 21, 2023",frontMatter:{title:"Overview"},sidebar:"docs",previous:{title:"Forwarding to different machines",permalink:"/docs/secure-tunnels/non-local"},next:{title:"Overview",permalink:"/docs/events/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Concepts",id:"concepts",level:3},{value:"Quickstart",id:"quickstart",level:2},{value:"Event Subscriptions",id:"subscriptions",level:2},{value:"Event Sources",id:"sources",level:2},{value:"Versioning and Payload Stability",id:"versioning-and-payload-stability",level:3},{value:"Filters",id:"filters",level:3},{value:"Filter Examples",id:"filter-examples",level:4},{value:"Filter for connections from a particular hostname",id:"filter-for-connections-from-a-particular-hostname",level:6},{value:"Filter for connections to an endpoint that didn&#39;t use HTTPS",id:"filter-for-connections-to-an-endpoint-that-didnt-use-https",level:6},{value:"Filter for connections to a hostname that exclude traffic from a client IP",id:"filter-for-connections-to-a-hostname-that-exclude-traffic-from-a-client-ip",level:6},{value:"Event Destinations",id:"destinations",level:2},{value:"Event Payloads",id:"event-payloads",level:2},{value:"Principal Object",id:"principal-object",level:4},{value:"Example Payloads",id:"example-payloads",level:3},{value:"ip_policy_created.v0 event",id:"ip_policy_createdv0-event",level:4},{value:"http_request_complete.v0 event",id:"http_request_completev0-event",level:4},{value:"tcp_connection_closed.v0 event",id:"tcp_connection_closedv0-event",level:4},{value:"Licensing",id:"licensing",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Whenever changes occur in your ngrok account or when traffic transits through\nyour endpoints, an event is fired. You may subscribe to these events, filter\nthem to those relevant to you and publish them to any number of destinations."),(0,i.kt)("p",null,"ngrok's event system was designed for three primary use cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sending logs of your ngrok traffic to logging services like Datadog and\nCloudWatch Logs"),(0,i.kt)("li",{parentName:"ul"},"Sending audit logs of ngrok configurations changes to your SIEM"),(0,i.kt)("li",{parentName:"ul"},"Enabling you to programmatically respond to events on your ngrok account")),(0,i.kt)("p",null,"There are ",(0,i.kt)("a",{parentName:"p",href:"/docs/events/reference"},"over 40 event types published")," via ngrok at the time of writing.\nThey break down into two important classes of event:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/events/reference/#configuration-events"},"Configuration Events")),": Changes to your account like create/update/delete of Domains, API Keys, IP Policies, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/events/reference/#traffic-events"},"Traffic Events")),": When traffic transits through your endpoints like processing an HTTP request or TCP connection")),(0,i.kt)("h3",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"ngrok's event logging system is composed of three simple primitives. You create\nan ",(0,i.kt)("strong",{parentName:"p"},"Event Subscription")," to ",(0,i.kt)("em",{parentName:"p"},"subscribe")," to a set of ",(0,i.kt)("strong",{parentName:"p"},"Event Sources")," and\n",(0,i.kt)("em",{parentName:"p"},"publish")," those events to one or more ",(0,i.kt)("strong",{parentName:"p"},"Event Destinations"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#subscriptions"},"Event Subscriptions")),": Define which Event\nSources to capture and which Event Destinations to publish to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#sources"},"Event Sources")),": The event types a subscription captures and\noptionally a set of fields to record and a boolean filter expression"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#destinations"},"Event Destinations")),": Where events are sent, e.g.\nDatadog, CloudWatch, Kinesis.")),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"You can create your first Event Subscription on the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/events/subscriptions"},"Events page of your ngrok\nDashboard")," to being capturing\nand publishing events."),(0,i.kt)("p",null,"We also publish guides to get started with each of ngrok's Event Destinations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/integrations/datadog/event-destination/"},"Datadog Logs"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/integrations/amazon-cloudwatch/event-destination/"},"AWS CloudWatch Logs"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/integrations/amazon-firehose/event-destination/"},"AWS Firehose"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/integrations/amazon-kinesis/event-destination/"},"AWS Kinesis")))),(0,i.kt)("h2",{id:"subscriptions"},"Event Subscriptions"),(0,i.kt)("p",null,"Event subscriptions define which Event Sources to capture and which\ndestinations to publish to. If you're familiar with other event systems, they may\ncall this a ",(0,i.kt)("em",{parentName:"p"},"listener"),", a ",(0,i.kt)("em",{parentName:"p"},"hook"),", a ",(0,i.kt)("em",{parentName:"p"},"probe")," or a ",(0,i.kt)("em",{parentName:"p"},"tap"),"."),(0,i.kt)("p",null,"When you create an Event Subscription, you select:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One or more Event Sources to subscribe to"),(0,i.kt)("li",{parentName:"ul"},"One or more Event Destinations to publish the subscribed events to")),(0,i.kt)("p",null,"Event Subscriptions can be created on the ",(0,i.kt)("a",{parentName:"p",href:"https://dashboard.ngrok.com/events/subscriptions"},"ngrok\nDashboard")," or via the ",(0,i.kt)("a",{parentName:"p",href:"/api#api-event-subscriptions-create"},"\nEvent Subscription API Resource"),"."),(0,i.kt)("h2",{id:"sources"},"Event Sources"),(0,i.kt)("p",null,"Event Sources choose which events an Event Subscription captures. Other event\nsystems may call this a ",(0,i.kt)("em",{parentName:"p"},"selector"),"."),(0,i.kt)("p",null,"There are two categories of event sources."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/events/reference/#configuration-events"},"Configuration Events")),":\nChanges to your account like create/update/delete of Domains, API Keys, IP\nPolicies, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"/docs/events/reference/#traffic-events"},"Traffic Events")),":\nWhen traffic transits through your endpoints like processing an HTTP request or\nTCP connection")),(0,i.kt)("p",null,"Traffic Events support the ability to select exactly which fields you'd like to\ninclude in the captured event. This provides you with control over how much\ndata is logged to the destinations."),(0,i.kt)("p",null,"Traffic Events also support the ability to be ",(0,i.kt)("strong",{parentName:"p"},"filtered"),". As part of the Event Source\ndefinition you specify a CEL expression which is evaluated against each event\nto determine if it should be captured. See the ",(0,i.kt)("a",{parentName:"p",href:"#filters"},"Filters")," section\nfor further detail."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/events/reference"},"ngrok Event Sources reference")," documents the full list\nof Event Sources and their fields."),(0,i.kt)("h3",{id:"versioning-and-payload-stability"},"Versioning and Payload Stability"),(0,i.kt)("p",null,"Event Sources include a version number in their name. Each Event Source ends\nwith a version string after a dot, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"api_key_created.v0"),"."),(0,i.kt)("p",null,"New fields may be added to the payloads of an Event Source without a version\nchange. Any other change to the event representation will lead to the\nintroduction of a new version of the Event Source."),(0,i.kt)("h3",{id:"filters"},"Filters"),(0,i.kt)("p",null,"You may specify a filter on the Event Sources of ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/events/reference/#traffic-events"},"Traffic\nEvents")),". Filters are a boolean\nexpression defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/cel-spec/blob/master/doc/langdef.md#standard"},"Google's Common Expression Language\n(CEL)"),".\nFilters are evaluated on each event as it is published to determine whether it\nshould be sent to the Event Subscription's destinations."),(0,i.kt)("p",null,"Traffic Events are often high cardinality. We support filters because you may\nonly interested in logging a subset of traffic (e.g. specific client IPs).\nFilters also enable you to control spend on downstream destinations where you\nincur costs based on the quantity of data processed and stored."),(0,i.kt)("p",null,"The event object is made available to the CEL filter expression as the ",(0,i.kt)("inlineCode",{parentName:"p"},"ev"),"\nvariable. ",(0,i.kt)("inlineCode",{parentName:"p"},"ev")," corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," field of the captured event. Use\nstandard ",(0,i.kt)("a",{parentName:"p",href:"https://goessner.net/articles/JsonPath/"},"JSONPath")," syntax to access\nthe fields of the event you want to use in your filters."),(0,i.kt)("p",null,"Filter expressions have the following limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only some fields of an event are available in the ",(0,i.kt)("inlineCode",{parentName:"li"},"ev")," object. The Event\nSource's reference documentation will specify whether a field may be evaluated\nin a filter expression."),(0,i.kt)("li",{parentName:"ul"},"Event metadata fields like ",(0,i.kt)("inlineCode",{parentName:"li"},"principal")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"event_timestamp")," are not available")),(0,i.kt)("h4",{id:"filter-examples"},"Filter Examples"),(0,i.kt)("h6",{id:"filter-for-connections-from-a-particular-hostname"},"Filter for connections from a particular hostname"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ev.conn.server_name.matches("ngrok-docs-examples\\\\.ngrok\\\\.dev")\n')),(0,i.kt)("h6",{id:"filter-for-connections-to-an-endpoint-that-didnt-use-https"},"Filter for connections to an endpoint that didn't use HTTPS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ev.conn.server_name.matches(".*-your-org\\\\.ngrok\\\\.dev") &&\nev.conn.server_port == 80\n')),(0,i.kt)("h6",{id:"filter-for-connections-to-a-hostname-that-exclude-traffic-from-a-client-ip"},"Filter for connections to a hostname that exclude traffic from a client IP"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ev.conn.client_ip != "2601:0:8200:0:4cd7:fd52:0:7823" &&\nev.conn.server_name == "ngrok-docs-examples.ngrok.dev"\n')),(0,i.kt)("h2",{id:"destinations"},"Event Destinations"),(0,i.kt)("p",null,"An Event Destination encapsulates the configuration to publish events to other\nsystems. Other event systems may call this a ",(0,i.kt)("em",{parentName:"p"},"sink"),"."),(0,i.kt)("p",null,"Event Destinations are typically third-party logging aggregators. The following\ndestinations are currently supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/amazon-cloudwatch/event-destination/"},"Amazon CloudWatch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/amazon-firehose/event-destination/"},"Amazon Kinesis Data Firehose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/amazon-kinesis/event-destination/"},"Amazon Kinesis")),(0,i.kt)("li",{parentName:"ul"},"AWS S3 (via Kinesis Firehose)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/integrations/datadog/event-destination/"},"Datadog Logs"))),(0,i.kt)("p",null,"Each destination requires provider-specific configuration. If you create a\ndestination in the ngrok dashboard, you'll be prompted to send a test event to\nverify the integration."),(0,i.kt)("p",null,"When configuring AWS destinations you'll be prompted to optionally download a\nsmall helper script which will automatically configure the appropriate IAM\nobjects necessary for integration. You may also set these values up via the AWS\nConsole or tools like Terraform or Pulumi."),(0,i.kt)("p",null,"Amazon S3 is not a directly supported destination. Instead, configure Amazon Kinesis\nData Firehose to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-s3"},"deliver events into an S3\nbucket"),"."),(0,i.kt)("h2",{id:"event-payloads"},"Event Payloads"),(0,i.kt)("p",null,"Events are serialized as JSON when they are published to a destination."),(0,i.kt)("p",null,"Events include the following fields:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"account_id")),(0,i.kt)("td",{parentName:"tr",align:null},"unique identifier for the account, always prefixed with ac","_"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ac_2OtNvAlhso10Gx6s7eupzX3F98q"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"event_id")),(0,i.kt)("td",{parentName:"tr",align:null},"unique identifier for this event, always prefixed with ev","_"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ev_1vPlyBW3OR44bpPphS4HIZyajDD"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"event_type")),(0,i.kt)("td",{parentName:"tr",align:null},"identifies the object, action, and version of the event"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ip_policy_created.v0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"event_timestamp")),(0,i.kt)("td",{parentName:"tr",align:null},"timestamp of when the event fired in RFC 3339 format"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2021-07-16T21:44:37Z"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:null},"the event object"),(0,i.kt)("td",{parentName:"tr",align:null},"See examples below")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"principal")),(0,i.kt)("td",{parentName:"tr",align:null},"an object of the principal who actioned this event, null for traffic events"),(0,i.kt)("td",{parentName:"tr",align:null},"See example below")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," property of the event is distinct for each Event Source."),(0,i.kt)("p",null,"For ",(0,i.kt)("a",{parentName:"p",href:"/events/reference#configuration-events"},"Configuration Events"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"\nrepresentation is identical to its API resource at the time of capture."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/events/reference#traffic-events"},"Traffic Events")," define their own ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"\nrepresentation because they have no corresponding API resource definition."),(0,i.kt)("h4",{id:"principal-object"},"Principal Object"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"principal")," object in every event describe the user or bot user responsible\nfor initiating the event. Principal is defined for all Configuration Events\nand it is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," for Traffic Events."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"unique identifier for the principal, either a user or bot"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"usr_2OtNv9qH5Nk4NuNeszZ39gBxZ4H"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"subject"),(0,i.kt)("td",{parentName:"tr",align:null},"human readable unique identifier for the principal, either a user email or a bot user name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"foo@example.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"where the principal initiated the event, either 'Dashboard' or 'API'"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"API"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"credential"),(0,i.kt)("td",{parentName:"tr",align:null},"id and uri resource for the credential used for authentication, ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"source")," is 'Dashboard'"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"id": "ak_2Oxt94wYsBTLwFUoMZcJRvJTaub","uri": "https://api.ngrok.com/api_keys/ak_2Oxt94wYsBTLwFUoMZcJRvJTaub"}'))))),(0,i.kt)("h3",{id:"example-payloads"},"Example Payloads"),(0,i.kt)("h4",{id:"ip_policy_createdv0-event"},"ip_policy_created.v0 event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "event_id": "ev_25X2AsJ5xpvuOParTYUQWe12XKo",\n    "event_type": "ip_policy_created.v0",\n    "event_timestamp": "2022-02-23T23:29:29Z",\n    "account_id": "ac_2OtNvAlhso10Gx6s7eupzX3F98q",\n    "principal": {\n        "id": "usr_2OtNv9qH5Nk4NuNeszZ39gBxZ4H",\n        "subject": "foo@example.com",\n        "source": "API",\n        "credential": {\n            "id": "ak_2Oxt94wYsBTLwFUoMZcJRvJTaub",\n            "uri": "https://api.ngrok.com/api_keys/ak_2Oxt94wYsBTLwFUoMZcJRvJTaub"\n        }\n    },\n    "object": {\n        "id": "ipp_25X2Ao39z73FlVQKZ1iReMPe6Qv",\n        "uri": "https://api.ngrok.com/ip_policies/ipp_25X2Ao39z73FlVQKZ1iReMPe6Qv",\n        "created_at": "2022-02-23T23:29:29Z",\n        "description": "Home network IP",\n        "metadata": "",\n        "action": "allow"\n    }\n}\n')),(0,i.kt)("h4",{id:"http_request_completev0-event"},(0,i.kt)("a",{parentName:"h4",href:"/events/reference/#http-request-complete"},"http_request_complete.v0")," event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "event_id": "ev_25X3yFS6TDkig1KDJWIc4nnJO0c",\n    "event_type": "http_request_complete.v0",\n    "event_timestamp": "2022-02-23T23:44:16Z",\n    "account_id": "ac_2OtNvAlhso10Gx6s7eupzX3F98q",\n    "object": {\n        "conn": {\n            "client_ip": "2601:0:8200:9e:4cd7:0:c97f:7823",\n            "server_name": "ngrok-docs-example.ngrok.io",\n            "server_port": ""\n        },\n        "http": {\n            "request": {\n                "first_byte_ts": null,\n                "last_byte_ts": null,\n                "method": "GET",\n                "url": {\n                    "path": "/docs/events"\n                },\n                "version": "HTTP/2.0"\n            },\n            "response": {\n                "body_length": 13079,\n                "first_byte_ts": "2022-02-23T23:44:16.732791273Z",\n                "last_byte_ts": "2022-02-23T23:44:16.737257209Z",\n                "status_code": 200\n            }\n        }\n    }\n}\n')),(0,i.kt)("h4",{id:"tcp_connection_closedv0-event"},(0,i.kt)("a",{parentName:"h4",href:"/events/reference/#tcp-connection-closed"},"tcp_connection_closed.v0")," event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "event_id": "ev_25X4osod1q306srserDeFyghTC4",\n    "event_type": "tcp_connection_closed.v0",\n    "event_timestamp": "2022-02-23T23:51:14Z",\n    "account_id": "ac_2OtNvAlhso10Gx6s7eupzX3F98q",\n    "object": {\n        "conn": {\n            "bytes_in": 3437,\n            "bytes_out": 90256,\n            "client_ip": "2601:0:8200:9e:4cd7:0:c97f:7823",\n            "end_ts": "2022-02-23T23:51:14.005372199Z",\n            "server_name": "ngrok-docs-example.ngrok.io",\n            "server_port": "",\n            "start_ts": "2022-02-23T23:44:16.528374173Z"\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"The ngrok Events system is available to all ngrok users with a free tier that\nincludes the transmission of up to 10,000 events per month."))}u.isMDXComponent=!0}}]);
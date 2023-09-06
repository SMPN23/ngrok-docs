"use strict";(self.webpackChunkngrok_doc=self.webpackChunkngrok_doc||[]).push([[2810],{52492:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(51163),i=(n(59496),n(49613));const r={toc:[{value:"Example Request",id:"example-request",level:4}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"example-request"},"Example Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X DELETE \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/edges/https/edghts_2TMGJY7TKoSfmTpXzRFnUCCW9VF/routes/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/saml\n')))}o.isMDXComponent=!0},80558:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(51163),i=(n(59496),n(49613));const r={toc:[{value:"Example Request",id:"example-request",level:4}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"example-request"},"Example Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X GET \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Ngrok-Version: 2" \\\nhttps://api.ngrok.com/edges/https/edghts_2TMGJY7TKoSfmTpXzRFnUCCW9VF/routes/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/saml\n')))}o.isMDXComponent=!0},61557:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(51163),i=(n(59496),n(49613));const r={toc:[{value:"Example Response",id:"example-response",level:4}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"example-response"},"Example Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled": true,\n    "options_passthrough": false,\n    "cookie_prefix": "",\n    "inactivity_timeout": 0,\n    "maximum_duration": 0,\n    "idp_metadata_url": "",\n    "idp_metadata": "\\n\\u003cEntityDescriptor xmlns=\\"urn:oasis:names:tc:SAML:2.0:metadata\\" validUntil=\\"2020-09-14T12:53:23.691Z\\" cacheDuration=\\"PT1M\\" entityID=\\"http://127.0.0.1:12345/metadata\\"\\u003e\\u003cIDPSSODescriptor xmlns=\\"urn:oasis:names:tc:SAML:2.0:metadata\\" protocolSupportEnumeration=\\"urn:oasis:names:tc:SAML:2.0:protocol\\"\\u003e\\u003cNameIDFormat\\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\\u003c/NameIDFormat\\u003e\\u003cSingleSignOnService Binding=\\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\\" Location=\\"http://127.0.0.1:12345/sso\\"\\u003e\\u003c/SingleSignOnService\\u003e\\u003cSingleSignOnService Binding=\\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\\" Location=\\"http://127.0.0.1:12345/sso\\"\\u003e\\u003c/SingleSignOnService\\u003e\\u003c/IDPSSODescriptor\\u003e\\u003c/EntityDescriptor\\u003e\\n",\n    "force_authn": false,\n    "allow_idp_initiated": true,\n    "authorized_groups": [],\n    "entity_id": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk",\n    "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/acs",\n    "single_logout_url": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/slo",\n    "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\\nMIIEAzCCAuugAwIBAgIQBkew96upe1vByURPp+wyyzANBgkqhkiG9w0BAQsFADCB\\noDFOMEwGA1UECgxFaHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWRn\\naHRzcnRfMlRNR0pVUGVqNHgxeHAzZmlpN2pFYk5JU3hrMU4wTAYDVQQDDEVodHRw\\nczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lZGdodHNydF8yVE1HSlVQZWo0\\neDF4cDNmaWk3akViTklTeGswIBcNMjMwNzMxMjMxNzQ1WhgPMjA1ODA3MjIyMzE3\\nNDVaMIGgMU4wTAYDVQQKDEVodHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2Ft\\nbC9lZGdodHNydF8yVE1HSlVQZWo0eDF4cDNmaWk3akViTklTeGsxTjBMBgNVBAMM\\nRWh0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2VkZ2h0c3J0XzJUTUdK\\nVVBlajR4MXhwM2ZpaTdqRWJOSVN4azCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC\\nAQoCggEBAKpCUa9mSl576C1o0Gd/V0B9ZVqnjQBPZ9/pTT4JVnVzdmwAbvClG8mb\\nXGxCrEI12wm4p5YL7ImZmN1vJR5qAsSZCme8zREjyAvu5wf/uq2zSZJAq4+kH0s5\\nvYmUz0joc02we0SCQ7btsF2lUh+73AzsJI/wjoMnBiYGTfbcaCADD19tN/lUfPth\\nGegQ3ONxsBaralqoZCR58l0iHkd3AoQ+HqMKg2BP3QN/iN56IVsWsEt2E0NFLlON\\nSpauNfWwlfW3Km+bVVvVjEEKOgmuIVLzSOO2uMJ4L7iWv0qtgmIHedeRL5n9m7Uj\\nF5HcUZ+FHTE/DhyAOoX9tz2DW4HusxMCAwEAAaM1MDMwDgYDVR0PAQH/BAQDAgeA\\nMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEL\\nBQADggEBAGlrraemN2vMOaUUoVSc+Q/rjhZi6jYtTzZ9WN3mdWn6MPRnzNwgJCyO\\npWCPLfHFWhgfQMdX4D9jwXh3Yotn/aXAK8K9VOclOJfw8UlI7O8M/Sle4TIlFQQP\\n2ozWsSmWy7X6ElkMbjvhUyy+5icKYIg0SYjpqRURPh1P+Zr5IczlqQrFA/O5OuPe\\nRUJmHwXkPw9NSfH/S6h0xZmm7TxwZLxecrf7rgmoliaENIGlT022a2IcS/isL4p+\\nTAHapCQWKLD3fY+tXFDTorVzK+l+MmaQruka9ebPtSIG/AGG0veaQtUrG6bOJsXy\\nRPTFh+dwZp5X3PFQl7J3H6ivWpFDcEo=\\n-----END CERTIFICATE-----\\n",\n    "metadata_url": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk",\n    "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"\n}\n')))}o.isMDXComponent=!0},70948:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(51163),i=(n(59496),n(49613));const r={toc:[{value:"Example Request",id:"example-request",level:4}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"example-request"},"Example Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n-X PUT \\\n-H "Authorization: Bearer {API_KEY}" \\\n-H "Content-Type: application/json" \\\n-H "Ngrok-Version: 2" \\\n-d \'{"enabled":true,"idp_metadata":"\\n\\u003cEntityDescriptor xmlns=\\"urn:oasis:names:tc:SAML:2.0:metadata\\" validUntil=\\"2020-09-14T12:53:23.691Z\\" cacheDuration=\\"PT1M\\" entityID=\\"http://127.0.0.1:12345/metadata\\"\\u003e\\u003cIDPSSODescriptor xmlns=\\"urn:oasis:names:tc:SAML:2.0:metadata\\" protocolSupportEnumeration=\\"urn:oasis:names:tc:SAML:2.0:protocol\\"\\u003e\\u003cNameIDFormat\\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\\u003c/NameIDFormat\\u003e\\u003cSingleSignOnService Binding=\\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\\" Location=\\"http://127.0.0.1:12345/sso\\"\\u003e\\u003c/SingleSignOnService\\u003e\\u003cSingleSignOnService Binding=\\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\\" Location=\\"http://127.0.0.1:12345/sso\\"\\u003e\\u003c/SingleSignOnService\\u003e\\u003c/IDPSSODescriptor\\u003e\\u003c/EntityDescriptor\\u003e\\n"}\' \\\nhttps://api.ngrok.com/edges/https/edghts_2TMGJY7TKoSfmTpXzRFnUCCW9VF/routes/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/saml\n')))}o.isMDXComponent=!0},207:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(51163),i=(n(59496),n(49613));const r={toc:[{value:"Example Response",id:"example-response",level:4}]},l="wrapper";function o(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h4",{id:"example-response"},"Example Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled": true,\n    "options_passthrough": false,\n    "cookie_prefix": "",\n    "inactivity_timeout": 0,\n    "maximum_duration": 0,\n    "idp_metadata_url": "",\n    "idp_metadata": "\\n\\u003cEntityDescriptor xmlns=\\"urn:oasis:names:tc:SAML:2.0:metadata\\" validUntil=\\"2020-09-14T12:53:23.691Z\\" cacheDuration=\\"PT1M\\" entityID=\\"http://127.0.0.1:12345/metadata\\"\\u003e\\u003cIDPSSODescriptor xmlns=\\"urn:oasis:names:tc:SAML:2.0:metadata\\" protocolSupportEnumeration=\\"urn:oasis:names:tc:SAML:2.0:protocol\\"\\u003e\\u003cNameIDFormat\\u003eurn:oasis:names:tc:SAML:2.0:nameid-format:transient\\u003c/NameIDFormat\\u003e\\u003cSingleSignOnService Binding=\\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect\\" Location=\\"http://127.0.0.1:12345/sso\\"\\u003e\\u003c/SingleSignOnService\\u003e\\u003cSingleSignOnService Binding=\\"urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST\\" Location=\\"http://127.0.0.1:12345/sso\\"\\u003e\\u003c/SingleSignOnService\\u003e\\u003c/IDPSSODescriptor\\u003e\\u003c/EntityDescriptor\\u003e\\n",\n    "force_authn": false,\n    "allow_idp_initiated": true,\n    "authorized_groups": [],\n    "entity_id": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk",\n    "assertion_consumer_service_url": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/acs",\n    "single_logout_url": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk/slo",\n    "request_signing_certificate_pem": "-----BEGIN CERTIFICATE-----\\nMIIEAzCCAuugAwIBAgIQBkew96upe1vByURPp+wyyzANBgkqhkiG9w0BAQsFADCB\\noDFOMEwGA1UECgxFaHR0cHM6Ly9pZHAubG9jYWwtbmdyb2suY29tL3NhbWwvZWRn\\naHRzcnRfMlRNR0pVUGVqNHgxeHAzZmlpN2pFYk5JU3hrMU4wTAYDVQQDDEVodHRw\\nczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2FtbC9lZGdodHNydF8yVE1HSlVQZWo0\\neDF4cDNmaWk3akViTklTeGswIBcNMjMwNzMxMjMxNzQ1WhgPMjA1ODA3MjIyMzE3\\nNDVaMIGgMU4wTAYDVQQKDEVodHRwczovL2lkcC5sb2NhbC1uZ3Jvay5jb20vc2Ft\\nbC9lZGdodHNydF8yVE1HSlVQZWo0eDF4cDNmaWk3akViTklTeGsxTjBMBgNVBAMM\\nRWh0dHBzOi8vaWRwLmxvY2FsLW5ncm9rLmNvbS9zYW1sL2VkZ2h0c3J0XzJUTUdK\\nVVBlajR4MXhwM2ZpaTdqRWJOSVN4azCCASIwDQYJKoZIhvcNAQEBBQADggEPADCC\\nAQoCggEBAKpCUa9mSl576C1o0Gd/V0B9ZVqnjQBPZ9/pTT4JVnVzdmwAbvClG8mb\\nXGxCrEI12wm4p5YL7ImZmN1vJR5qAsSZCme8zREjyAvu5wf/uq2zSZJAq4+kH0s5\\nvYmUz0joc02we0SCQ7btsF2lUh+73AzsJI/wjoMnBiYGTfbcaCADD19tN/lUfPth\\nGegQ3ONxsBaralqoZCR58l0iHkd3AoQ+HqMKg2BP3QN/iN56IVsWsEt2E0NFLlON\\nSpauNfWwlfW3Km+bVVvVjEEKOgmuIVLzSOO2uMJ4L7iWv0qtgmIHedeRL5n9m7Uj\\nF5HcUZ+FHTE/DhyAOoX9tz2DW4HusxMCAwEAAaM1MDMwDgYDVR0PAQH/BAQDAgeA\\nMBMGA1UdJQQMMAoGCCsGAQUFBwMBMAwGA1UdEwEB/wQCMAAwDQYJKoZIhvcNAQEL\\nBQADggEBAGlrraemN2vMOaUUoVSc+Q/rjhZi6jYtTzZ9WN3mdWn6MPRnzNwgJCyO\\npWCPLfHFWhgfQMdX4D9jwXh3Yotn/aXAK8K9VOclOJfw8UlI7O8M/Sle4TIlFQQP\\n2ozWsSmWy7X6ElkMbjvhUyy+5icKYIg0SYjpqRURPh1P+Zr5IczlqQrFA/O5OuPe\\nRUJmHwXkPw9NSfH/S6h0xZmm7TxwZLxecrf7rgmoliaENIGlT022a2IcS/isL4p+\\nTAHapCQWKLD3fY+tXFDTorVzK+l+MmaQruka9ebPtSIG/AGG0veaQtUrG6bOJsXy\\nRPTFh+dwZp5X3PFQl7J3H6ivWpFDcEo=\\n-----END CERTIFICATE-----\\n",\n    "metadata_url": "https://idp.local-ngrok.com/saml/edghtsrt_2TMGJUPej4x1xp3fii7jEbNISxk",\n    "nameid_format": "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"\n}\n')))}o.isMDXComponent=!0},4523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>u,metadata:()=>m,toc:()=>g});var a=n(51163),i=(n(59496),n(49613)),r=n(70948),l=n(207),o=n(80558),s=n(61557),d=n(52492);const u={},p="HTTPS Edge Route SAML Module",m={unversionedId:"api/resources/https-edge-route-saml-module",id:"api/resources/https-edge-route-saml-module",title:"HTTPS Edge Route SAML Module",description:"---",source:"@site/docs/api/resources/https-edge-route-saml-module.mdx",sourceDirName:"api/resources",slug:"/api/resources/https-edge-route-saml-module",permalink:"/docs/api/resources/https-edge-route-saml-module",draft:!1,editUrl:"https://github.com/ngrok/ngrok-docs/edit/main/docs/api/resources/https-edge-route-saml-module.mdx",tags:[],version:"current",lastUpdatedBy:"Russ Savage",lastUpdatedAt:1691862991,formattedLastUpdatedAt:"Aug 12, 2023",frontMatter:{},sidebar:"docs",previous:{title:"HTTPS Edge Route Response Headers Module",permalink:"/docs/api/resources/https-edge-route-response-headers-module"},next:{title:"HTTPS Edge Route Webhook Verification Module",permalink:"/docs/api/resources/https-edge-route-webhook-validation-module"}},c={},g=[{value:"Replace HTTPS Edge Route SAML Module",id:"replace-https-edge-route-saml-module",level:2},{value:"Request",id:"request",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Response",id:"response",level:3},{value:"Fields",id:"fields",level:4},{value:"Get HTTPS Edge Route SAML Module",id:"get-https-edge-route-saml-module",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Fields",id:"fields-1",level:4},{value:"Delete HTTPS Edge Route SAML Module",id:"delete-https-edge-route-saml-module",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3}],h={toc:g},k="wrapper";function N(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"https-edge-route-saml-module"},"HTTPS Edge Route SAML Module"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"replace-https-edge-route-saml-module"},"Replace HTTPS Edge Route SAML Module"),(0,i.kt)("h3",{id:"request"},"Request"),(0,i.kt)("p",null,"PUT /edges/https/{edge_id}/routes/{id}/saml"),(0,i.kt)(r.ZP,{mdxType:"EdgeRouteSAMLModuleReplaceRequest"}),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the module will be applied to traffic, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," to disable. default ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," if unspecified")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options_passthrough")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cookie_prefix")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inactivity_timeout")),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maximum_duration")),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"idp_metadata")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"force_authn")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allow_idp_initiated")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the ",(0,i.kt)("inlineCode",{parentName:"td"},"RelayState")," parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authorized_groups")),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,i.kt)("td",{parentName:"tr",align:null},"If present, only users who are a member of one of the listed groups may access the target endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nameid_format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of ",(0,i.kt)("inlineCode",{parentName:"td"},"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent")," will be used. A subset of the allowed values enumerated by the SAML specification are supported.")))),(0,i.kt)("h3",{id:"response"},"Response"),(0,i.kt)("p",null,"Returns a 200 response on success"),(0,i.kt)(l.ZP,{mdxType:"EdgeRouteSAMLModuleReplaceResponse"}),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the module will be applied to traffic, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," to disable. default ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," if unspecified")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options_passthrough")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cookie_prefix")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inactivity_timeout")),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maximum_duration")),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"idp_metadata")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"force_authn")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allow_idp_initiated")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the ",(0,i.kt)("inlineCode",{parentName:"td"},"RelayState")," parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authorized_groups")),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,i.kt)("td",{parentName:"tr",align:null},"If present, only users who are a member of one of the listed groups may access the target endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"entity_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"assertion_consumer_service_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"single_logout_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"request_signing_certificate_pem")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metadata_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nameid_format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of ",(0,i.kt)("inlineCode",{parentName:"td"},"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent")," will be used. A subset of the allowed values enumerated by the SAML specification are supported.")))),(0,i.kt)("h2",{id:"get-https-edge-route-saml-module"},"Get HTTPS Edge Route SAML Module"),(0,i.kt)("h3",{id:"request-1"},"Request"),(0,i.kt)("p",null,"GET /edges/https/{edge_id}/routes/{id}/saml"),(0,i.kt)(o.ZP,{mdxType:"EdgeRouteSAMLModuleGetRequest"}),(0,i.kt)("h3",{id:"response-1"},"Response"),(0,i.kt)("p",null,"Returns a 200 response on success"),(0,i.kt)(s.ZP,{mdxType:"EdgeRouteSAMLModuleGetResponse"}),(0,i.kt)("h4",{id:"fields-1"},"Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,i.kt)("th",{parentName:"tr",align:null},"\xa0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")," if the module will be applied to traffic, ",(0,i.kt)("inlineCode",{parentName:"td"},"false")," to disable. default ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," if unspecified")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options_passthrough")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Do not enforce authentication on HTTP OPTIONS requests. necessary if you are supporting CORS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cookie_prefix")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"the prefix of the session cookie that ngrok sets on the http client to cache authentication. default is 'ngrok.'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"inactivity_timeout")),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer number of seconds of inactivity after which if the user has not accessed the endpoint, their session will time out and they will be forced to reauthenticate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maximum_duration")),(0,i.kt)("td",{parentName:"tr",align:null},"uint32"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer number of seconds of the maximum duration of an authenticated session. After this period is exceeded, a user must reauthenticate.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"idp_metadata")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The full XML IdP EntityDescriptor. Your IdP may provide this to you as a a file to download or as a URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"force_authn")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, indicates that whenever we redirect a user to the IdP for authentication that the IdP must prompt the user for authentication credentials even if the user already has a valid session with the IdP.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"allow_idp_initiated")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"If true, the IdP may initiate a login directly (e.g. the user does not need to visit the endpoint first and then be redirected). The IdP should set the ",(0,i.kt)("inlineCode",{parentName:"td"},"RelayState")," parameter to the target URL of the resource they want the user to be redirected to after the SAML login assertion has been processed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"authorized_groups")),(0,i.kt)("td",{parentName:"tr",align:null},"List","<","string",">"),(0,i.kt)("td",{parentName:"tr",align:null},"If present, only users who are a member of one of the listed groups may access the target endpoint.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"entity_id")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The SP Entity's unique ID. This always takes the form of a URL. In ngrok's implementation, this URL is the same as the metadata URL. This will need to be specified to the IdP as configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"assertion_consumer_service_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The public URL of the SP's Assertion Consumer Service. This is where the IdP will redirect to during an authentication flow. This will need to be specified to the IdP as configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"single_logout_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The public URL of the SP's Single Logout Service. This is where the IdP will redirect to during a single logout flow. This will optionally need to be specified to the IdP as configuration.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"request_signing_certificate_pem")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"PEM-encoded x.509 certificate of the key pair that is used to sign all SAML requests that the ngrok SP makes to the IdP. Many IdPs do not support request signing verification, but we highly recommend specifying this in the IdP's configuration if it is supported.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"metadata_url")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A public URL where the SP's metadata is hosted. If an IdP supports dynamic configuration, this is the URL it can use to retrieve the SP metadata.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nameid_format")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the name identifier format the SP expects the IdP to use in its assertions to identify subjects. If unspecified, a default value of ",(0,i.kt)("inlineCode",{parentName:"td"},"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent")," will be used. A subset of the allowed values enumerated by the SAML specification are supported.")))),(0,i.kt)("h2",{id:"delete-https-edge-route-saml-module"},"Delete HTTPS Edge Route SAML Module"),(0,i.kt)("h3",{id:"request-2"},"Request"),(0,i.kt)("p",null,"DELETE /edges/https/{edge_id}/routes/{id}/saml"),(0,i.kt)(d.ZP,{mdxType:"EdgeRouteSAMLModuleDeleteRequest"}),(0,i.kt)("h3",{id:"response-2"},"Response"),(0,i.kt)("p",null,"Returns a 204 response with no body on success"))}N.isMDXComponent=!0}}]);
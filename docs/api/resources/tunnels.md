import TunnelsListRequest from './examples/_tunnels_list_request.md';
import TunnelsListResponse from './examples/_tunnels_list_response.md';
import TunnelsGetRequest from './examples/_tunnels_get_request.md';
import TunnelsGetResponse from './examples/_tunnels_get_response.md';

# Tunnels
------------



## List Tunnels
List all online tunnels currently running on the account.

### Request

GET /tunnels

<TunnelsListRequest />


### Response

Returns a 200 response  on success

<TunnelsListResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `tunnels` | [Tunnel](#api-tunnels-list-fields-tunnel) | the list of all online tunnels on this account |
| `uri` | string | URI of the tunnels list API resource |
| `next_page_uri` | string | URI of the next page, or null if there is no next page |

#### Tunnel fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique tunnel resource identifier |
| `public_url` | string | URL of the ephemeral tunnel's public endpoint |
| `started_at` | string | timestamp when the tunnel was initiated in RFC 3339 format |
| `metadata` | string | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs#tunnel-definitions-metadata) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs#config_metadata). |
| `proto` | string | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| `region` | string | identifier of tune region where the tunnel is running |
| `tunnel_session` | [Ref](#api-tunnels-list-fields-ref) | reference object pointing to the tunnel session on which this tunnel was started |
| `endpoint` | [Ref](#api-tunnels-list-fields-ref) | the ephemeral endpoint this tunnel is associated with, if this is an agent-initiated tunnel |
| `labels` | Map&lt;string, string&gt; | the labels the tunnel group backends will match against, if this is a backend tunnel |
| `backends` | [Ref](#api-tunnels-list-fields-ref) | tunnel group backends served by this backend tunnel |
| `forwards_to` | string | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |


## Get Tunnel
Get the status of a tunnel by ID

### Request

GET /tunnels/{id}

<TunnelsGetRequest />


### Response

Returns a 200 response  on success

<TunnelsGetResponse />


#### Fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | unique tunnel resource identifier |
| `public_url` | string | URL of the ephemeral tunnel's public endpoint |
| `started_at` | string | timestamp when the tunnel was initiated in RFC 3339 format |
| `metadata` | string | user-supplied metadata for the tunnel defined in the ngrok configuration file. See the tunnel [metadata configuration option](https://ngrok.com/docs#tunnel-definitions-metadata) In API version 0, this value was instead pulled from the top-level [metadata configuration option](https://ngrok.com/docs#config_metadata). |
| `proto` | string | tunnel protocol for ephemeral tunnels. one of `http`, `https`, `tcp` or `tls` |
| `region` | string | identifier of tune region where the tunnel is running |
| `tunnel_session` | [Ref](#api-tunnels-get-fields-ref) | reference object pointing to the tunnel session on which this tunnel was started |
| `endpoint` | [Ref](#api-tunnels-get-fields-ref) | the ephemeral endpoint this tunnel is associated with, if this is an agent-initiated tunnel |
| `labels` | Map&lt;string, string&gt; | the labels the tunnel group backends will match against, if this is a backend tunnel |
| `backends` | [Ref](#api-tunnels-get-fields-ref) | tunnel group backends served by this backend tunnel |
| `forwards_to` | string | upstream address the ngrok agent forwards traffic over this tunnel to. this may be expressed as a URL or a network address. |

#### Ref fields

|&nbsp;| &nbsp;| &nbsp;|
|---|---|---|
| `id` | string | a resource identifier |
| `uri` | string | a uri for locating a resource |
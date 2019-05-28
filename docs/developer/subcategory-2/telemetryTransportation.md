---
date: 2018-11-18
title: Transpotation.
description: This is a Guide for developers who are interested to write a plugin for OPenRAP (v2.0) 
PageOrdering: 4
showSidebar: true
published: true
allowSearch: true
allowIndexing: true
---
## Transportation:
This Module will send the files to the specific cloud.
* Take care of Cloud endpoints with respect to each application telemetry. There might be a case when multiple applications are running and the user should be able to configure different endpoints for each of the applications.
* OpenRAP will be supporting Amazon s3 uploads along with access key & access secret authentication mechanism.
* Plain HTTP post call to transport data will also be supported.


**SDK APIs:**  

transportTelemetry :-  
**Arguments** 
* Cloud (s3, self, etc)
* Endpoint ( cloud endpoint )
* Bucket ( s3 bucket name )
* Access key ( aws access key)
* Access secret ( aws access secret )

**Description**
* Sends telemetry to S3 or the configured cloud endpoint.

---
date: 2018-11-18
title: Processing.
description: This is a Guide for developers who are interested to write a plugin for OPenRAP (v2.0) 
PageOrdering: 3
showSidebar: true
published: true
allowSearch: true
allowIndexing: true
---
## Aggregation/Filtering:
This Module should help applications to perform any sort of operations on the data before they wish to send it to the cloud, operations like: 
* **Aggregation:**(Zipping/Unzipping) 
* **Filtering/Massaging/anonymization:** Removing the noise and only storing the relevant application specific data (this would be a plugin).
* **Formatting:** Changing the format of the data before sending it to the cloud (again this would be a plugin)

**SDK APIs:**  

getTelemetryData:-  
**Arguments** 
* Content (content that needs to be written to a file and zipped)
**Description**
* Returns some telemetry data to be operated on or passed to aggregation api.

zipFiles:-  
**Arguments** 
* Path (path to the file to be zipped )
* Content (content that needs to be written to a file and zipped)

**Description**
* Takes a file and zips it for transport or takes some string content, writes it to a file and zips it.

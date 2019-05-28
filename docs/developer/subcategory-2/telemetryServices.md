---
date: 2018-11-18
title: Introduction.
description: This is a Guide for developers who are interested to write a plugin for OPenRAP (v2.0) 
PageOrdering: 1
showSidebar: true
published: true
allowSearch: true
allowIndexing: true
---
## Telemetry Service and SDK
This document explains OpenRAP telemetry architecture and the SDK APIs its exposing, to be consumed by the Plug-in writers.

Essentially Telemetry architecture has three modules:
* **Create**
* **Process (Aggregate/Filter/Format)**
* **Transport**

All the above three modules are explained in the upcoming sections.
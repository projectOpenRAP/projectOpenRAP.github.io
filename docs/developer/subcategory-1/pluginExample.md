---
date: 2018-11-18
title: Plugin Examples.
description: This is a Guide for developers who are interested to write a plugin for OPenRAP (v2.0) 
PageOrdering: 3
showSidebar: true
published: true
allowSearch: true
allowIndexing: true
---
## An Example Plugin
A plugin written for [EkStep's](https://ekstep.in/) app called Genie is already in place. Here’s the Github [link](https://github.com/projectOpenRAP/OpenRAP/tree/pluginBranch/appServer/plugins/ekStep) to the repo. Also, you can refer to the [documentation](https://docs.google.com/document/d/15f4S4v6xnRR0UzBRv883XXK705OuP2nElqYjOAVN5Hs/edit?usp=sharing) for a better understanding of this plugin works.

## Testing the plugin
* **Manual testing can be done using** [Postman](https://www.getpostman.com/). It enables you to call the implemented routes, send request data, and examine responses.

* **Unit testing can be done using `Mocha` and `Chai`**. `Mocha` is a javascript framework for `Node.js` which allows Asynchronous testing. `Chai`  is an assertion library which supplements `Mocha`. 

## Integrating Plugin with OpenRAP
You can refer to [this document](https://docs.google.com/document/d/1RgW2PRLi4NhrGh-XU39XtJHcGR7Gd49qIIQsrbRE7wo/edit?usp=sharing) to help you with building the OpenRAP device and integrating your plugin.

## Final Notes
As mentioned earlier, a template plugin is already in place and can be found in `OpenRAP/appServer/plugins/`. So you can go ahead and start with building, testing and deploying your plugin right away!
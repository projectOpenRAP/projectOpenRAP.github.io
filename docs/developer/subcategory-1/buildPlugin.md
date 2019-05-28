---
date: 2018-11-18
title: Building the plugin.
description: This is a Guide for developers who are interested to write a plugin for OPenRAP (v2.0) 
PageOrdering: 2
showSidebar: true
published: true
allowSearch: true
allowIndexing: true
--- 
## Building the plugin
1. **Create a directory in the plugin root**. Run

    ```css
    mkdir ./pluginName
    ```
    `pluginName` can be changed to your plugin's name. This is    where all your plugin modules will go.
2. **Browse into the newly created directory and create two files** -- `pluginName.controller.js` and `pluginName.routes.js`. Run

    ```css
    cd ./pluginName && touch pluginName.routes.js
    pluginName.controller.js
    ```

3. **Code away**. Now you can start with *actually* building the plugin. All your code will reside in the files created in the previous step. Let's take a look at what goes where and the general code structure.

    * **The Controller**  
        `pluginName.controller.js` is where you write the controller logic for your plugin endpoints. The template for writing the controller can be found in `.../template.controller.js`. Here's a breakdown.
        * Import the modules that you would require in your controller.
        * Define the functions that will be called at each endpoint.

            ```css
            let getAllUsers = (req, res) => {
                res.send("All Users");
            }
            ```

        * Export these functions, as they will be later   imported  by our router module for interfacing.

            ```css
            module.exports = {
               getAllUsers
            }
            ```

        * Putting it all together, following is a general structure that can be followed while writing a  plugin   controller.

            ```css
            // Importing necessary modules

            // Defining functions
            let getAllUsers = (req, res) => {
                res.send("All Users");
            }

            // Exporting functions
            module.exports = {
                getAllUsers
            }
            ```
    * **The Router**  
        `pluginName.routes.js` is where you specify all the routes for the plugin. A template for writing the router can be found in `.../template/template.controller.js`. Here's a breakdown.
        * Import the required functions from the controller   module.

            ```css
            let { getAllUsers = require('./template.controller')
            ```
        * Hook the endpoints with their respective functions.

            ```css
            app.get('/template/allUsers', getAllUsers)
            ```
        * You can also define an optional `init` function to initialize your plugin.

            ```css
            function init() {
                   console.log("running init function")
            }
            ```
            This function will be called before any other   function  gets executed.
        * All this goes within a single function which takes  the  app instance as the only input. The necessary middlewares can also be defined within this function and used as and when required.

            ```css
            module.exports = app => {
            
                // Middlewares

                // Endpoint interfacing        
                app.get('/template/allUsers', getAllUsers);

                // Plugin initialization
                function init() {
                    console.log("running init function");
                }

                init();
            }
            ```
            This function has to be exported by the module, as it is required by the plugin framework.

        * Putting it all together, following is a general structure that can be followed while writing a plugin router.
            ```css    
            // Importing controller functionality    
            let { getAllUsers } = require ('./template.controller');
            module.exports = app => {
            
                // Middlewares

                // Endpoint interfacing        
                app.get('/template/allUsers',   getAllUsers);
                
                // Plugin initialization
                function init() {
                    console.log("running init function");
                }
                
                init();
            }
            ```
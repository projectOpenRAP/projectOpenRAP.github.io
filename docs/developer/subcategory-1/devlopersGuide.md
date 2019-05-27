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
## A Developer's Guide To Write Plugins For OpenRAP (v2.0)

### Prerequisites  
* **Operating System** -- Any operating system which supports `node`, `npm` and `MySQL`.
* **System Architecture** -- Supports any architecture.
* **Install git** -- Refer [installation of git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for any OS.
* **Install `Node.js` and `npm`** -- `npm` will be automatically installed along with `Node.js`. Refer [installation of Node.js](https://nodejs.org/en/download/) for any OS. Recommended version of `Node.js` is v8.x and that of `npm` is v5.x. or above
* **Install `MySQL`** -- Refer [installation of MySQL](https://dev.mysql.com/doc/refman/5.7/en/installing.html) for any OS.
Recommended version of `MySQL` is v5.7 and above.

### Getting started
1. **Make sure you have node and npm installed properly.** Run the following in your terminal.  
    
    ```css 
    node -v && npm -v
    ```

    If you have any of the two missing, follow the steps provided on [npm's website](https://docs.npmjs.com/getting-started/installing-node).

2. **Clone the repository.** Go to the Github [repository](https://github.com/projectOpenRAP/OpenRAP). Change the branch in repository to `develop-v2` and then clone it. Assuming you have [git](https://git-scm.com/) set up on your machine, run the following in your terminal to clone the OpenRAP repository.

    ```css
    git clone https://github.com/projectOpenRAP/OpenRAP.git
    ```

3. **Install the required dependencies.** The following commands will install dependencies for all `SDKs`, `devmgmtui`, `devmgmtV2` and `plugins`. Run the following commands one by one to install the required dependencies. ( A script should be written to this to automate the procedure ). 

    ```css
    cd OpenRAP/dbsdk2 && npm install
    cd ../filesdk && npm install
    cd ../searchsdk && npm install
    cd ../devmgmtui && npm install
    cd ../devmgmtV2 && npm install
    cd ../appServer && npm install
    ```

    `OpenRAP/appServer/plugins` directory will be the root for all your plugins.

    ***Note :** Henceforth,`OpenRAP/appServer/plugins` will be referred to by ellipses (...) for brevity.*

4. **Add OpenRAP location to NODE_PATH.** 
    * Open to `.bashrc` file present in your home directory of your system using the following command.

        ```css
        vi /home/ADMIN/.bashrc
        ```

        The home directory path is different from system to system.

    * Add the following `NODE_PATH` value to anywhere in the  file.
        
        ```css
        export NODE_PATH=$NODE_PATH:[Path to OpenRAP folder from root]
        ```

    * Save the file and exit. Then, run the following to source `.bashrc`

        ```css
        source ~/.bashrc
        ```

5. **You are all set to start building a plugin**.

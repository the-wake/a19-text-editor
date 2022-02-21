# JATE: Just Another Text Editor PWA

## Description
This is a simple text editor PWA hosted on Heroku with local integration. It uses a service worker, IndexedDB, and local storage to automatically save and load data, which are passed between the web client and the local application.

[Heroku Deployment](https://safe-earth-41888.herokuapp.com/)  
[GitHub Repository](https://github.com/the-wake/a19-text-editor)

![Demonstration screenshot](/assets/Demo-Screenshot.png)

## Installation
This application is can be run via Heroku through the browser at the above link, or as a local application (downloadable via a link in the upper-lefthand corner of the browser interface).

## Functionality
This application uses the CodeMirror interface to take text input. Whenever the editor loses focus, it will save its content to Local Storage and IndexedDB. It also uses a service worker to cache user data. When loaded, the application will scan through these sources to recreate the state of the previous session.

When rendering a session, the editor will query information in the following order:

* IndexedDB storage
* Local Storage
* Default header

By using these storage methods, information can be passed from the web application to the local instance.

## Tools Used
* JavaScript
* Express.js
* Node.js
* NPM
* @bable core
* Workbox
* Webpack
* GitHub
* GitBash
* Heroku
* Coded in VS Code

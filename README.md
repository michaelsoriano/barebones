Barebones is a starter theme for WordPress running ReactJS. It is designed to get you up to speed in writing JS single page applications and WordPress' REST api. A complete tutorial on how this theme is built can be found [here](http://michaelsoriano.com/wordpress-theme-react-part-1-setup/). 

By core WordPress functionality I mean the following:

* Single Post
* Post Meta
* Comments
* Comment form
* Archive (with paging)
* Category 
* Search results (with paging)
* Search form

This repo contains the "react-src" portion of the theme only. When you clone, you have to take extra steps for it to work. Continue below:

## How to use

In your WP themes directory, create a directory named "my-theme" - or any name you like. CD into this directory, and do:

`git clone https://github.com/michaelsoriano/barebones.git react-src`

This will create a folder inside your my-theme directory called "react-src" with the necessary files. CD into "react-src" and do:

### `npm install`

This will install the necessary modules inside the node_modules directory. When you're ready to edit the theme, run 

### `npm run wpstart`

Now you're ready to edit the files. Note that this uses your WordPress' server vs webpack. All changes will automatically refresh your browser.  

### `npm run wpbuild`

This will cause a build to happen. All final build files is located in the "build" directory. A copy of the files is also added to the root - so you can see the changes right away. 

For more information, see [create-react-wptheme](https://github.com/devloco/create-react-wptheme#readme)

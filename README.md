This project was bootstrapped with [Create React WPTheme](https://www.npmjs.com/package/create-react-wptheme). 

Barebones is a starter theme for WordPress running ReactJS. It is designed to get you up to speed in writing JS single page applications and WordPress' REST api. A complete tutorial on how this theme is built can be found [here](http://michaelsoriano.com/wordpress-theme-react-part-1-setup/).  

## How to use

In your WP themes directory, clone this repository. CD into "react-src" and run 

### `npm install`

This will install the necessary modules inside the node_modules directory. When you're ready to edit the theme, run 

### `npm run wpstart`

Now you're ready to edit the files inside react-src directory. Note that this uses your WordPress' server vs webpack. All changes will automatically refresh your browser.  

### `npm run wpbuild`

This will cause a build to happen. All final build files is located in the "build" directory inside react-src. A copy of the files is also added to the root - so you can see the changes right away. 

For more information, see [create-react-wptheme](https://github.com/devloco/create-react-wptheme#readme)

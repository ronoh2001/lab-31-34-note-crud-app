![cf](http://i.imgur.com/7v5ASc8.png) lab-31-32 note-crud-app
====

[![Issues?](https://img.shields.io/badge/Issues%3F-Ask%20for%20Help!-55cbe0.svg)](https://github.com/codefellows/seattle-javascript-401n1/issues/new)

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Directions
* Create these directories to organize your code: 
 * app
 * app/component
 * app/service
 * app/html
 * app/scss/vendor
 * app/asset/image
* create a **_theme.scss** partial 
 * add three color variables
* create a **base.scss** file 
 * import normalize
 * import bootstrap
 * import \_theme
 * write some styles that use the color variables defined in \_theme
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**

# Requirements
* Create a service for managing crud opperations of the list resource using ajax request to the note api
 * should maintain state
* Create a service for managing crud opperations of the note resource using ajax request to the note api
 * should not maintian state
 * the state of notes should be maintained in side of lists
* Create component with a form that enables you to create lists
* Create component with to display the content of a list
 * should provide an interface to delete the list 
* Create a component with a form that enables you to create notes
* Create a component to display the content of a note
 * should provide an interface to delete the note

# BONUS:
* **1pt** Create a component that inables you to update a list
* **1pt** Create a component that inables you to update a note

# Rubric
App requirements: 6pts
* create note and list services
* components described in the Requirements section

Code style: 3pts
  - Passes linter
  - Well-named functions and variables, properly scoped
  - Good project organization
  
Git usage: 1pt
  - Well-structured pull request
  - Accurate commit messages
  - Clear, readable git history


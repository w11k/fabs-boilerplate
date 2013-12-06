# Weigle Wilczek - Boilerplate

Project structure boilerplate and demo of `fabs` build system for web applications developed with AngularJS.


## Getting Started

* Download and unzip distribution or clone git repository
* Install Node.JS 0.10 or higher
* Install Grunt and Bower via `npm install -g grunt-cli bower` (try sudo if installation fails)
* Navigate to project folder
* Install Node Packages via `npm install`. This will install everything you need to run the build system.
* Install Bower dependencies via `bower install`. This will install all libraries used within the application itself to
the vendor folder.
* Run `grunt dev` and navigate your browser to `http://localhost:9000`


## Development

Read the documentation about the build system (see https://github.com/w11k/fabs) to familiarize yourself with its
configuration and usage.

As mentioned above, bower will install all libraries the application depends on (specified via bower.json) to `vendor`
folder. The source code of the application is located under `src/app`. `src/common` as the name says, holds code not
specific to the application but not packed and installed via bower. Think of it as a place to extract common code from
the app before moving it to an own project. The `assets` folder is the place to put all static files like images, fonts,
etc into. Within CSS/LESS/SASS code reference assets with `assets/...`. fabs will take care of adjusting the paths. If
you dynamically calculate paths (e.g. in JS code), you will have to include `@@cacheBustingDir` as prefix. Otherwise
the path will be invalid after cache busting during build of the distribution (grunt dist).

Within `src/app` and `src/common` you are free to structure the code as you want to. But inspired by ng-boilerplate
(see https://github.com/ngbp/ng-boilerplate) we recommend to use a feature based structure. Create folders and
subfolders to structure your code instead of creating folders like 'style', 'scripts', etc and structure your code
according to its kind. Place all the files needed for a feature within the feature folder. By doing so, it is much
easier to find and navigate between those files. Take a look to `src/app` folder of this project to see an example for
this structure.


## Roadmap

See milestones and issues at https://github.com/w11k/fabs-boilerplate/issues and https://github.com/w11k/fabs/issues

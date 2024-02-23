// node package manager

// to find npm version

var npm = "npm -v";

// to find node version

var node = "node -v";

// for specific version using @

var specificVersion = "npm i -g npm@2.3.2";

// creating package.json for node creation

var package = "npm init";

// is one of the method

var pakage = "npm init --yes"; /*it will answer all the answer*/

// for underscore

var underscore = "npm i underscore";

// now in  versions like @^2.3.4 and @~2.3.5 these are for three values
// 1.major => here 2 is the major for chamging the whole version is kmown as major changes of version or features installed

// 2.minor => here 3  is the minor change happend to the version

// 3.patch => here 4 is the patch work is will doest effect if we created new version

/* now the symbol ^ is for protect the app from install higher versions it will update untill lat version of minor change...ie
2.10.0 is the last change to update

now the symbol ~ is for protect the app from install higher versions it will update untill lat version of patch change...ie
2.3.9 is the last change to update

*/

var _ = require("underscore");

var use = "_."; /*whichn is usefull tool for applying array*/

// like if [2,3,4] is array to find 3 is inside or 3 is contain or not in arr

_.contains([2, 3, 4], 3); /*it will return boolean*/

// now

var arr = [2, 3, 4];

console.log("for 3 " + _.contains(arr, 3));
console.log("for 5 " + _.contains(arr, 5));

// how node's reuire functionnn resolved the modules  ?

// node...
// firstly checks the core module
// secondly checks the it is in file or folder of thr project
// thirdly only it checks from node modules folder which we had been created

// in dependentcies we don want to share node modules
// only add in terminal just npm i which includes all the dependentcies

// listing the installed modules

/*
that is  npm list
for depth =  npm list --depth=1
*/

var listingthemodules = "npm list";

var depth = " npm list --depth=1";

// to see the packages detail ie view

var view = "npm view underscore"; /*use the module name after the view*/

var versions = "npm view underscore versions";

// npm outdated gives the which one of the modules version is updated info will get

var outdated = "npm outdated";

// for update to restricted version of update use

var update = "npm update";
// that means which have carat symbol in version  update only minors

/*for update the latest version of all first intall check-updates */

var checkupdates = "npm i -g npm-check-updates";

// which gives output to see in ncu

var ncu = "ncu -u";

/**for particular  */
var ncup = "ncu underscore";

// if one module uses only for developer performace means it stored in devdependies

var devdepend = "npm i underscore --save-dev";

// for unistall _.templatehe module

var unistallmodule = "npm un underscore"; /**using un */

// for publishing the our npm package

var loginnpm = "npm login";

// then

var publishing = "npm publish";

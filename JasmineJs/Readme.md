# Jasmine
## What is Jasmine
- It is a Unit Testing library provided for JS Applications.
- It focuses on BTD(Behavioral Test Development). 
- It is used to perform Testing on functions created in JS. 
- It does not depend on any browser and can be viewed on Terminals.
- If U want to run on any browser, we can depend on Test runners like Karma. 

## How to create and use jasmine?
- U can download the standalone zip file from the Github and consume it. 
- U can install it as node package and use its libraries.

```
npm init -y
npm install --save-dev jasmine
npx jasmine init
```

### Contents of the Folder:
- When the Jasmine is initialized, it will generate a folder structure which is used for creating Tests and Function calls. 

### Installing Karma
```
 npm install --save-dev karma karma-jasmine jasmine-core karma-chrome-launcher karma-jasmine-html-reporter
 npx karma init
 npx karma start
```
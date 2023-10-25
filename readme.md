
# React 

## is a library for web and native user interfaces. is a SPA(single page application)
* requirement: Node.js 

Use react powered frameworks like Next.js, Remix etc or

1. Create React project manually 

    > npx create-react-app
    
    > npm run start

2. Or Create using bundlers i.e. Vite / Parcel 
    > npm create vite@latest
    
    > npm i | npm install

    > npm run dev

## Get Production version of the application

> npm run build 

* react-scripts injects script tag in Manual react application where script tag is already there in bundler one.

## File Structure

* index.js then app.js in classic one
* main.jsx then app.jsx in bundler one
* if your js code is returning html then its fiel extension is .jsx
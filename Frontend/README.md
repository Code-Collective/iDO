# Frontend


## OSX Installation 
In order to ensure effective set-up please do refer to: 

https://facebook.github.io/react-native/docs/getting-started.html

More detailed instructions are available here: 

### XCode Installation

- Go to the app Store and search for xcode. Click install and go through the installation process. Please do ensure that you have the latest version of Xcode with update on app Store.

### HomeBrew 
- Homebrew is used to install node
- Go to brew.sh website, highlight the text box - copy and execute in the terminal 
- On the command-line ensure you have the latest version by running brew update

### Node / NPM 
- brew install node 
- Run node -v to ensure you hvae at least node version 4.5

### Watchman
- brew install watchman to check for file changes

### React Native CLI

- Run npm install -g react-native-cli (I ran react-native init iDO to set up the project - you don't have to do this to run this project)


### Launch project and run Simulator

- Change to project directory and run: react-native run-ios
- If the Simulator doesn't immediately run. Drag simulator to click on app... 


## ESLint Setup with VSCode 

- Ensure you are inside your project directory. On the terminal run: npm install -g eslint
- In VSCode install ESLint extension package. 
- Readymade rule set: npm install --save-dev eslint-confi-rallycoding
- Back in VSCode make a new file: .eslintrc and add: 

{
  "extends": "rallycoding"
}

- Test eslint by taking out a semi colon... Yay! Eslint works!



## Any issues? 

Refer to: https://rallycoding.com/blog/troubleshooting-react-native-startup/





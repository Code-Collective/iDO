# iDO Backend

## What is this?

This is the node.js express server that will provide the backend API for our react native frontend application. It is connected to an [mLab](https://mlab.com/) mongodb database that is hosted in AWS. 

## Development

### Setup

Download [keepassX](https://www.keepassx.org/downloads) (You may have to allow for third-party applications in your settings)

Open `secrets.kdbx` and follow the instructions in the file `mlab db ido-development` under the development group.


### Run

```bash
$ npm ci && npm start
```
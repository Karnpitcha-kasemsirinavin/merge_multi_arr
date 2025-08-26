# Merge Function with Unit Tests

This project contains a `merge` function that merges three arrays into ascending order.  
`collection_1` and `collection_3` are ascending from min(0) to max; `collection_2` is descending from max to min(0). 

## Project Structure
```bash
├─ src/
│   └─ index.ts            # merge function
├─ tests/
│   └─ index.test.ts       # unit tests for merge
├─ package.json            # scripts & dependencies
├─ tsconfig.json           # TypeScript configuration
└─ jest.config.js          # Jest configuration
```

## Prerequisites

Node.js v22.12.0 or higher

Needed to run the project and install dependencies.

Download: https://nodejs.org/en/download/

Yarn v1.22.22 or higher

Used to install dependencies and run scripts.

Install guide: https://classic.yarnpkg.com/en/docs/install

## Setup
1. Clone the repo:
```bash
git clone https://github.com/Karnpitcha-kasemsirinavin/merge_multi_arr.git
cd merge_multi_arr
```

2.Install dependencies:
```bash
yarn install
```
3.Run the code
```bash
yarn dev
```

4.Run unit tests
```bash
yarn test
```

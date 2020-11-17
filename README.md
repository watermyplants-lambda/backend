# backend

name: Sync OAS to ReadMe
on:
  push:
    branches:
      - master
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: readmeio/github-readme-sync@v2
        with:
          readme-oas-key: NT4PFMJyoEqu89j8vl4Gx68976vOKzT2:5fb34aa35e7ea08f62199339
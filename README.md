[![Build Status](https://travis-ci.org/eosjs/json.svg?branch=master)](https://travis-ci.org/eosjs/json)

# About

This repository contains information about the EOS blockchain in the JSON file format.  The JSON format is used to help keep this information parsable and available to other programming languages.

# API

[./api/v1/chain.json](./api/v1/chain.json)

Build and run [eosd](https://github.com/eosio/eos) or direct requests to a public testnet or production node.

Usage:
```bash
curl http://127.0.0.1:8888/v1/chain/get_info
echo '{"block_num_or_id": 1}' | curl http://127.0.0.1:8888/v1/chain/get_block -d @-
```

# Operations

[./schema/operations.json](./schema/operations.json)

These operations make up the blockchain.  Because these are signed and stored in binary format a serialization and deserialization library is needed.

* [libtx](https://github.com/eosjs/libtx) - JavaScript

## Environment

JSON

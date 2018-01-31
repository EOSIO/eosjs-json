[![Build Status](https://travis-ci.org/EOSIO/eosjs-json.svg?branch=master)](https://travis-ci.org/EOSIO/eosjs-json)
[![NPM](https://img.shields.io/npm/v/eosjs-json.svg)](https://www.npmjs.org/package/eosjs-json)

# About

This repository contains information about the EOS blockchain in the JSON file format.  The JSON format is used to help keep this information parsable and available to other programming languages.

# API

[./api/v1/chain.json](./api/v1/chain.json)

Run [eosd](https://github.com/eosio/eos) or direct requests to a public node.

Usage:
```bash
curl http://127.0.0.1:8888/v1/chain/get_info
echo '{"block_num_or_id": 1}' | curl http://127.0.0.1:8888/v1/chain/get_block -d @-
```

# Operations

[./schema/generated.json](./schema/generated.json)

These operations update the blockchain.  Because these are signed and stored in
binary format a serialization and deserialization library is needed.

* [fcbuffer](https://github.com/EOSIO/eosjs-fcbuffer) - JavaScript

# Environment

JSON

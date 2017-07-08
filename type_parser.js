#!/usr/bin/env node

const fs = require('fs')

const [,, typesFileName] = process.argv

if(!typesFileName) {
  console.error();
  console.error('Expecting first argument types.eos file name.');
  console.error();
  console.error('curl https://raw.githubusercontent.com/EOSIO/eos/master/libraries/types/types.eos > types.eos');
  console.error('./type_parser.js types.eos > schema/generated.json')
  console.error();
  console.error('Run unit tests');
  console.error();
  process.exit(1)
}

const lineData = fs.readFileSync(typesFileName).toString().split('\n')


function parseLine(line) {
  let [def, ...comment] = line.split('#')
  def = def.trim()
  comment = comment.join('#').trim() // comment contains hash(es)
  def = def === '' ? [] : def.split(/[\t ]+/)
  return {def, comment}
}

let typedefs = {}, structs = {}, currentStruct

for(const line of lineData) {
  const {def, comment} = parseLine(line)
  if(!def.length) {
    continue
  }

  if(def[0] === 'typedef') {
    currentStruct = null
    const [, name, type] = def
    typedefs[type] = name

  } else if(def[0] === 'struct') {
    const name = def[1]
    currentStruct = {}
    structs[name] = currentStruct
    if(def.length > 3 && def[2] === 'inherits') {
      currentStruct.base = def[3]
    }
    currentStruct.fields = {}

  } else if(currentStruct) {
    const [name, type] = def
    currentStruct.fields[name] = type
    if(comment) {
      if(!currentStruct.docs) {
        currentStruct.docs = {}
      }
      currentStruct.docs[name] = comment
    }

  } else {
    console.error('Unknown line:' + line);
  }
}

console.log(JSON.stringify(Object.assign(typedefs, structs), null, 2));

curl https://raw.githubusercontent.com/EOSIO/eos/master/libraries/types/types.eos > types.eos
./type_parser.js types.eos > schema/generated.json
git diff
npm test

yarn build
yarn generate
echo 'www.oyusec.ml' > ./dist/CNAME
./push.sh
yarn deploy

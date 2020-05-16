echo $'\e[1;34m'Closing and deleting Gallery Containers / Images if they exist...$'\e[0m'
docker stop mysql1
docker stop reviews
docker ps -aq | xargs docker rm
docker rmi reviews
echo $'\e[1;34m'Creating web and db containers...$'\e[0m'
docker-compose up -d
echo $'\e[1;34m'Closing containers for reboot...$'\e[0m'
docker stop  mysql1
docker stop reviews
echo $'\e[1;34m'Restarting constainers to seed db...$'\e[0m'
docker start  mysql1
docker start reviews
echo $'\e[1;34m'Seeding database...$'\e[0m'
docker exec reviews node database/seed.js
echo $'\e[1;34m'Initializing app...$'\e[0m'
open -a "Google Chrome" http://127.0.0.1:9999

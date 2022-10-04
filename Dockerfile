FROM node:18-alpine
WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

CMD ["npm","run","dev","-- --open"]


EXPOSE 3000
# if facing error while building image, paste there two command in terminal.

# export DOCKER_BUILDKIT=0
#export COMPOSE_DOCKER_CLI_BUILD=0
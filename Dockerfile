FROM node:16-alpine3.13

WORKDIR /usr/src/goazy

USER node

COPY package.json ./package.json
COPY yarn.lock ./yarn.lock

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 6654

ENTRYPOINT "yarn dev"

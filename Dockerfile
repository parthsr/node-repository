FROM node:8.12.0-alpine

WORKDIR /srv

COPY . /srv

ENV NODE_PORT 51052
ENV NODE_HOST "0.0.0.0"

RUN npm install

EXPOSE 51052

CMD ["npm", "run", "start:prod"]

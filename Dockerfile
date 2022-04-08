FROM node:alpine

WORKDIR /cms/content

COPY ./ /cms/content/

RUN npm install --production

CMD [ "node dist/main.js" ]


EXPOSE 3333

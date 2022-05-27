FROM node:lts-alpine

WORKDIR /usr/src/app

COPY ./entrypoint.sh /usr/src/app/entrypoint.sh

RUN chmod +x /usr/src/app/entrypoint.sh

COPY ./ ./

EXPOSE 3000

ENV WDS_SOCKET_PORT=0

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
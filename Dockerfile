FROM node:alpine
RUN mkdir -p /opt
WORKDIR /opt
COPY node_modules /opt/node_modules
COPY dist /opt/dist
COPY .eslint* package.json yarn.lock /opt/
EXPOSE 80
CMD yarn dist:run

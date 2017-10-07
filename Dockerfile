FROM node:8.1

WORKDIR /src
ADD package.json yarn.lock ./
RUN yarn install --ignore-scripts

ADD . .

ENV NODE_ENV production
RUN yarn build

EXPOSE 3006
CMD ["yarn", "run", "server"]
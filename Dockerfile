
FROM node:13-alpine AS build
WORKDIR /app

COPY . .
RUN yarn install --production
RUN yarn build

FROM node:13-alpine
WORKDIR /app

COPY --from=build /app/dist dist
COPY --from=build /app/dist /app/package.json /app/yarn.lock ./
RUN yarn add serve

EXPOSE 8080
CMD ["yarn", "start"]
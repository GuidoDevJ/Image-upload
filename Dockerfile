FROM node:18.18.0-alpine as deps
WORKDIR /app
COPY package.json package.json
RUN npm install --frozen lockfile

FROM node:18.18.0-alpine as build
WORKDIR /app
COPY --from=deps /app/node_modules /node_modules
COPY . .
RUN npm run build

FROM nginx:1.23.3 as prod
EXPOSE 80
COPY --from=build /app/dist /usr/share/nginx/html
COPY /src/assets/ /usr/share/nginx/html/assets
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g","daemon off;"]



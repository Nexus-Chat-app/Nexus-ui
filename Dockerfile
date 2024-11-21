FROM node:20.17.0 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port Nginx will serve on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

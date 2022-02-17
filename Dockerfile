FROM node:14

RUN mkdir -p /src/app
WORKDIR /src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD ["node","src/app.js"]
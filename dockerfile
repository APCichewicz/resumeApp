FROM node:14.15.4-alpine3.12
WORKDIR /app 
COPY package.json . 
RUN npm i 
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

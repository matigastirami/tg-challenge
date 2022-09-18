FROM node:16-alpine As development

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4040

CMD ["npm", "run", "dev"]
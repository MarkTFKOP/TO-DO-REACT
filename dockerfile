FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT = 4000

EXPOSE 4000

CMD ["npm",'start']
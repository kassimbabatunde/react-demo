FROM node

RUN mkdir /src
WORKDIR /src

COPY . .
RUN npm i
EXPOSE 3000

CMD ["npm", "start"]
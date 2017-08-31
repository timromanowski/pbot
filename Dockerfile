# create a file named Dockerfile
FROM node:argon
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3978
CMD ["npm", "start"]
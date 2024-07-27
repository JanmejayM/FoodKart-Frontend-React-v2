FROM node:18-alpine
WORKDIR /react-foodkartv2/
COPY public/ /react-foodkartv2/public
COPY src/ /react-foodkartv2/src
COPY package.json /react-foodkartv2/
RUN npm install
CMD ["npm", "start"]


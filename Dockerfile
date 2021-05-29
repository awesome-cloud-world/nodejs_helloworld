FROM node:14.16.1-alpine3.13

COPY . .
RUN npm install
CMD ["./run.sh"]

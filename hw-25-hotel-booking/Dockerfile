FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y curl
RUN curl -sSL https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh -o /usr/local/bin/wait-for-it \
    && chmod +x /usr/local/bin/wait-for-it
COPY src/ ./src/
EXPOSE 5000

CMD ["wait-for-it", "db:3306", "--timeout=30", "--strict", "--", "node", "src/app.js"]

FROM cypress/included:12.9.0
WORKDIR /app
COPY . .
RUN npm install
CMD ["npx", "cypress", "run"]

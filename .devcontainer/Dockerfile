FROM node:alpine

WORKDIR /app

RUN chown node:node -R /app && chmod 777 -R /app

# use non-root user
USER node

# Add packages
ADD --chown=node:node package*.json ./

# install dependencies && disable nextjs delemetry
RUN npm i && npx next telemetry disable

# Add project files
ADD --chown=node:node . .

# Expose NextJS Port
EXPOSE 3000

CMD ["npm", "run", "dev"]

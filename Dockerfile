# Какую версию используем
FROM node:20-alpine 
COPY ..
RUN npm i
CMD ["npm", "run", "test"]

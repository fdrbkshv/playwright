# Какую версию используем
FROM mcr.microsoft.com/playwright
COPY . .
RUN npm i
RUN npx playwright install --with-deps
CMD ["npm", "run", "test"]

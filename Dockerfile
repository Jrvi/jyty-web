FROM node:18-alpine

# Määritä työskentelyhakemisto
WORKDIR /app

# Kopioi package.json ja package-lock.json
COPY package*.json ./

# Asenna riippuvuudet
RUN npm install

# Kopioi kaikki tiedostot työskentelyhakemistoon
COPY . .

# Rakenna projekti
RUN npm run build

# Avaa portti 3000
EXPOSE 3000

# Käynnistä sovellus
CMD ["npm", "start"]
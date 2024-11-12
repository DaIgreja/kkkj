#TODO Configure o Dockerfile

# Usar a imagem base do Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]

# Utiliza una imagen de Node.js como base
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que tu aplicación escuchará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev"]

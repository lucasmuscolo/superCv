FROM node:18.18.0

# Evitar warnings de npm
ENV NPM_CONFIG_LOGLEVEL=error
ENV NPM_CONFIG_COLOR=false

# Instalar la CLI de Angular globalmente
RUN npm install -g @angular/cli@17.2.3

# Crear un usuario no-root
RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /workspace

# Cambiar a usuario no-root
USER node

# Exponer el puerto que usa ng serve por defecto
EXPOSE 4200
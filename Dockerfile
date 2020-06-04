FROM nginx:stable
MAINTAINER Ahmad Aji  "pangestu@alterra.id"

RUN mkdir -p /home/ajay-task/www/Portofolio_Frontend/build
RUN mkdir -p /home/ajay-task/log

COPY default.conf /etc/nginx/conf.d/
ADD build/. /home/ajay-task/www/Portofolio_Frontend/build

WORKDIR /home/ajay-task/www/Portofolio_Frontend/build
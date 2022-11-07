FROM nginx:latest
MAINTAINER 9zCloud

COPY static /usr/share/nginx/html
COPY build /usr/share/nginx/html


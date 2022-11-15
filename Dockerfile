FROM nginx:latest
MAINTAINER 9zCloud

COPY static/video /usr/share/nginx/html/video
COPY build /usr/share/nginx/html
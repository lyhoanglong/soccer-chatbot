FROM phusion/baseimage
MAINTAINER Long Ly Hoang <longly@seespace.co>

CMD ["/sbin/my_init"]

ENV DOCKER_OPTS "--dns 8.8.8.8"

RUN apt-get update && apt-get install -y build-essential
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs

RUN mkdir -p /var/www
WORKDIR /var/www

EXPOSE 9003

RUN apt-get clean && rm -rf /var/list/apt/lists/* /tmp/* /var/tmp/*
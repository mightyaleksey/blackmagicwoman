FROM ubuntu:14.04

ENV UPDATED_AT 2014-10-29

RUN apt-get update
RUN apt-get install -y \
    nodejs \
    npm

ADD ./ /root

WORKDIR /root

RUN npm i

EXPOSE 80

CMD ["nodejs", "app.js"]

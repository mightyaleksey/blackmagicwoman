blackmagicwoman
===============

Inspired by http://www.youtube.com/watch?v=Ij4gc8iBDaI

## Builind & running

 1. Install [Docker](https://www.docker.com/)
 2. Clone this repo
 3. Run in the working copy `docker build --tag blackmagicwoman .`
 4. Run `run --rm --publish 8000:80 blackmagicwoman`
 5. Open in your browser http://127.0.0.1:8000 (change 127.0.0.1 to the ip of
    your docker virtual machine)

## Environment variables

- `NODE_ENV` &mdash; Default **development**.
- `PORT` &mdash; Port to listen to.
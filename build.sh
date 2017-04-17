#!/bin/bash
docker build -t padconf-ui-build -f Dockerfile.build . && \
docker run --rm -it -v $(pwd):/mnt -p 4200:4200 padconf-ui-build "$@"

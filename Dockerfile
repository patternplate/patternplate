FROM marionebl/patternplate-cubicle

WORKDIR /src
ADD . ./
RUN yarn install
RUN yarn build

# -- PREPARE STAGE --------------------------------
FROM node:lts-slim AS prepare

WORKDIR /src

# Define build arguments & map them to environment variables
ARG NPM_TOKEN
ARG FONTAWESOME_TOKEN

# Build the project and then dispose files not necessary to run the project
# This will make the runtime image as small as possible
COPY package.json .npmrc yarn.lock /src/
RUN yarn install --frozen-lockfile

# -- BUILD STAGE --------------------------------
FROM node:lts-slim AS build

WORKDIR /src

# Define build arguments & map them to environment variables
ARG NPM_TOKEN
ARG FONTAWESOME_TOKEN
ENV NEXT_TELEMETRY_DISABLED=1

# Build the project and then dispose files not necessary to run the project
# This will make the runtime image as small as possible
COPY --from=prepare /src /src
COPY src /src/src
COPY public /src/public
COPY .npmrc babel.config.js .browserslistrc next-env.d.ts next.config.js tsconfig.json /src/
RUN yarn build
RUN yarn install --production
RUN rm -rf .next/cache

# -- RUNTIME STAGE --------------------------------

FROM gcr.io/distroless/nodejs:16

WORKDIR /app

# copy in our healthcheck binary
COPY --from=ghcr.io/bratteng/healthcheck-next:latest --chown=nonroot /healthcheck /healthcheck

COPY --chown=nonroot --from=build /src/node_modules /app/node_modules
COPY --chown=nonroot --from=build /src/.next /app/.next
COPY --chown=nonroot --from=build /src/public /app/public
COPY --chown=nonroot --from=build /src/next.config.js /app/next.config.js

# default next.js port
EXPOSE 3000

# define a volume for next cache images
VOLUME [ "/app/.next/cache/images" ]

# healthcheck to report the container status
HEALTHCHECK --interval=5s --timeout=10s --retries=3 CMD [ "/healthcheck", "3000" ]

CMD ["/app/node_modules/.bin/next", "start", "-p", "3000"]

#ARG node_image=arm64v8/node
ARG node_image=node
ARG node_version=20

FROM ${node_image}:${node_version} AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

FROM base AS setup
WORKDIR /usr/src/app

# Step 1:
#COPY . .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
COPY package.json .
COPY packages packages

# Step 2: Copy whole app
COPY packages packages

# Step 3: Find and remove non-package.json files
RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

# Step 4: Define second build stage
#FROM ${node_image}:${node_version}
FROM base AS build
WORKDIR /usr/src/app

# Step 5: Copy files from the first build stage.
COPY --from=setup /usr/src/app .

#RUN pnpm install || exit 1
#RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm install --frozen-lockfile --ignore-scripts

COPY . .

# To restore workspaces symlinks
RUN pnpm install --frozen-lockfile --ignore-scripts

RUN pnpm build

ENV NODE_ENV=production
EXPOSE 4000
HEALTHCHECK CMD curl --fail http://localhost:4000/ || exit 1

CMD pnpm node ./packages/graphql/dist/src/server.js

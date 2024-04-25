# Dockerize Hono

An example project for containerizing Node.js API built using [Hono](https://hono.dev), [Typescript](https://www.typescriptlang.org/) and [PNPM](https://pnpm.io).

## Installation

Install Dependencies.

```bash
pnpm install
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

| Name | Description                                 |
| ---- | ------------------------------------------- |
| PORT | The port that your application will run on. |

## Run Locally

Start the dev server. If you don't specify PORT in the .env file, it will run by default on http://localhost:8000.

```bash
pnpm dev
```

To build the API. It uses [esbuild](https://esbuild.github.io/).

```bash
pnpm build
```

To run the built API:

```bash
pnpm start
```

## Build Docker Image

To build, first ensure that you have installed [Docker](https://www.docker.com/) on your computer. We suggest using [Docker Desktop](https://www.docker.com/products/docker-desktop/).

Run the following command in the root of the project to create a Docker image:

```bash
docker build -t <your_docker_image_name>:<your_docker_image_version> .
```

Once the Docker image is created, you can run the Docker image with the following command:

```bash
docker run -p 8000:8000 <your_docker_image_id>
```

# Dicen Web App

This application has two parts:
- Webapp: An express app in charge of serving static assets and handling authentication endpoints
- SPA: The React app

# Development

1) Install dependencies by running `yarn install --ignore-scripts`
2) Run `grunt dev` to compile assets
3) Run `yarn run server:watch`

The app should have started at `http://localhost:3006`.
By default, it will try to use the API at `http://localhost:3007`. This can be changed through the `API_URL` environment variable.

There's an `.env.example` file that contains a few environment variables that need to be set. For example to enable GitHub authentication.

# Production

1) Install dependencies by running `yarn`
2) Run `grunt build` to compile all the assets
3) Run `yarn run server`

# Deployment
The app uses Heroku as infrastructure.
It can be deployed both from the code or from a Docker image built with the `Dockerfile` included.

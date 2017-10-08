# Real State App

##TODO
- Encrypt password with BCrypt
- Persist roles
- Show user and roles information in dashboard
- Add all fields
- Finish real validations
- Server side validations
- Properly store and format addresses
- Combo boxes for fields with fixed options
- Use a UI calendar for dates
- Tests
- Styling
- Expire sessions
- Update dependencies

w
## The app

This application has two parts:
- Webapp: An express app in charge of handling the API endpoints and serving static assets
- SPA: The React app

## Development

1) Install dependencies by running `yarn install --ignore-scripts`
2) Run `grunt dev` to compile assets in dev mode
3) Run `yarn run server:watch`

The app should have started at `http://localhost:3006`.

## Production

1) Install dependencies by running `yarn`
2) Run `grunt build` to compile all the assets for production 
3) Run `NODE_ENV=production yarn run server`

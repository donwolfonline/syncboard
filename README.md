# Syncboard - AI Powered Real-time Whiteboard
![thumbnail](https://github.com/donwolfonline/syncboardify/assets/31382668/299feae8-e088-47ef-b8bf-f3a0360a7dfe)
Syncboard is a user-friendly board editor that lets you draw and work together with your team in real-time. It also has a handy AI feature that helps you make diagrams and flowcharts effortlessly.

## What's inside?

This project using Turborepo includes the following packages/apps:

### Apps and Packages

- `api`: Backend services created with express and using graphql
- `web`: Frontend service using nextjs
- `ui`: React component for ui library using `shadcn/ui` shared for `web` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Built With

- [Next.js](https://nextjs.org/)
- [Express](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

### Want to running the project localy?

Run the following command:

1. Clone the repo into a public GitHub repository (or fork https://github.com/donwolfonline/syncboardify/fork).

   ```sh
   git clone https://github.com/donwolfonline/syncboardify.git
   ```

2. Go to the project folder

   ```sh
   cd syncboard
   ```

3. Install packages

   ```sh
   npm install

   yarn install

   pnpm install
   ```

4. Set up your `.env` file on apps/web and apps/api

5. Run development mode on root folder

   ```sh
   npm run dev

   yarn run dev

   pnpm run dev
   ```

Access the frontend in `localhost:3000`, sometimes when this port used it will be using other available port.

Access the backend in `localhost:4000/graphql`
For the Websocket service `localhost:1234`

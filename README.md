<p align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" height="128">
    </picture>
    <h1 align="center">Computer Science Showdown</h1>
  </a>
</p>

<p align="center">
  <a aria-label="License" href="https://github.com/vexra/css/blob/main/LICENSE">
    <img alt="" src="https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Follow the community on Instagram" href="https://www.instagram.com/himakomunila">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Instagram&labelColor=000000">
  </a>
</p>

## Introduction

Used for the annual event of the computer science student association at the University of Lampung called the Computer Science Showdown aka CSS. This webapp enables competition participants to simplify the registration process.

### Built With

- [Next.js](https://nextjs.org)
- [React.js](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Prisma.io](https://prisma.io)
- [Shadcn UI](https://ui.shadcn.com/)

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites

Here is what you need to be able to run this webapp.

- Node.js (Version: >=18.x)
- PostgreSQL (Version: >=13.x)
- Pnpm

## Development

### Setup

1. Clone the repo from GitHub repository

   ```sh
   git clone https://github.com/vexra/css.git
   ```

1. Go to the project folder

   ```sh
   cd css
   ```

1. Install packages with pnpm

   ```sh
   pnpm install
   ```

1. Set up your `.env.local` file

   - Duplicate `.env.example` to `.env.local`
   - Use `openssl rand -base64 32` to generate a key and add it under `AUTH_SECRET` in the `.env.local` file.

1. Setup Node
   If your Node version does not meet the project's requirements as instructed by the docs, "nvm" (Node Version Manager) allows using Node at the version required by the project:

   ```sh
   nvm use
   ```

   You first might need to install the specific version and then use it:

   ```sh
   nvm install && nvm use
   ```

   You can install nvm from [here](https://github.com/nvm-sh/nvm).

#### Manual setup

1. Configure environment variables in the `.env.local` file. Replace `<user>`, `<pass>`, `<db-host>`, and `<db-port>` with their applicable values

   ```
   DATABASE_URL='postgresql://<user>:<pass>@<db-host>:<db-port>'
   ```

   <details>
   <summary>If you don't know how to configure the DATABASE_URL, then follow the steps here to create a quick local DB</summary>

   1. [Download](https://www.postgresql.org/download/) and install postgres in your local (if you don't have it already).

   1. Create your own local db by executing `createDB <DB name>`

   1. Now open your psql shell with the DB you created: `psql -h localhost -U postgres -d <DB name>`

   1. Inside the psql shell execute `\conninfo`. And you will get the following info.  
      ![image](https://user-images.githubusercontent.com/39329182/236612291-51d87f69-6dc1-4a23-bf4d-1ca1754e0a35.png)

   1. Now extract all the info and add it to your DATABASE_URL. The url would look something like this
      `postgresql://postgres:postgres@localhost:5432/Your-DB-Name`. The port is configurable and does not have to be 5432.

   </details>

   If you don't want to create a local DB. Then you can also consider using services like neon.tech.

- [Setup postgres DB with neon.tech](https://neon.tech/docs/connect/query-with-psql-editor)

2. Set up the database using the Prisma schema (found in `prisma/schema.prisma`)

   In a development environment, run:

   ```sh
   npx prisma migrate dev
   ```

   In a production environment, run:

   ```sh
   npx prisma migrate deploy
   ```

3. Run (in development mode)

   ```sh
   pnpm run dev
   ```

#### Setting up admin account

1. Open [Prisma Studio](https://prisma.io/studio) to look at or modify the database content:

   ```sh
   npx prisma studio
   ```

2. Click on the `User` model to add a new user record.
3. Fill out the fields `email`, `name`, `password`, and set `role` to `ADMIN` (remembering to encrypt admin password with [BCrypt](https://bcrypt-generator.com/)) and click `Save 1 Record` to create your first user.
4. Open a browser to [http://localhost:3000](http://localhost:3000) and login with your just created, admin account.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvexra%2Fcss)

## Repo Activity

<img width="100%" src="https://repobeats.axiom.co/api/embed/09b67de5a614a0a6e75a96d0285bbe86c3cb2579.svg" />

## Community

The computer science student association at the University of Lampung aka HIMAKOM can be found on [Instagram Account](https://www.instagram.com/himakomunila) where you can ask questions, voice ideas, and share your thoughts with other people.

## Authors

A list of the original co-authors of Computer Science Showdown webapp that helped bring this amazing webapp to life!

- [@vexra](https://github.com/vexra)
- [@kiraware](https://github.com/kiraware)
- [@dafahan](https://github.com/dafahan)

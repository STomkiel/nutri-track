# Nutri-Track

## Introduction

Introducing an innovative application that seamlessly integrates a recipe book with a diet tracker. Explore a vast array of recipes for your favorite dishes while effortlessly managing your meals. Whether you're searching for culinary inspiration or monitoring your dietary intake, this app offers a convenient solution for all your cooking and nutritional needs

# Getting Started

## Prerequisites

- Node.js (Version: >=20)
- Postgresql

1. Clone the repository:

   ```bash
   git clone git@github.com:STomkiel/nutri-track.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nutri-track
   ```
3. Install packages with npm

   ```bash
   npm install
   ```

4. Setup your .env file

- Duplicate `.env.example` and rename it to `.env`
- Update the `DATABASE_URL` with your database connection string
- Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.

## Setting up database

1. Run the SQL migration file against the database:

   ```bash
   npx prisma migrate dev
   ```

2. Populate the database with mock data:

   ```bash
   node .\mockData\script.js
   ```

## Running the application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Husky and Linting

### Husky

Husky is used to manage Git hooks. Husky helps ensure that certain scripts run at specific points in your Git workflow (e.g., before commits or pushes). This project is configured to run linters before each commit.

### Linting

ESLint is used to maintain code quality and consistency. ESLint is configured to run automatically before commits, thanks to Husky.

To run the linter manually, use:

```bash
npm run lint
```

To fix linting errors automatically, use:

```bash
npm run lint:fix
```

# Acknowledgements

Special thanks to these amazing projects which help power nutri-track

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://mui.com/material-ui/)
- [React Chart.js 2](https://react-chartjs-2.js.org/)
- [Next Intl](https://next-intl-docs.vercel.app/)
- [Next Auth](https://next-auth.js.org/)
- [Prisma](https://prisma.io/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [PostgreSQL](https://www.postgresql.org.pl/)

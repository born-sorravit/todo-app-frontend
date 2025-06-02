This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How to run the project

1. Clone and run backend => [https://github.com/born-sorravit/todo-app-backend](https://github.com/born-sorravit/todo-app-backend)

2. Run the frontend server:

```bash

npm install
# or
npm install --legacy-peer-deps

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Reasoning behind your implementation choices

1. Utilized UI components from Shadcn for a consistent and customizable design system.

2. Applied Tailwind CSS for utility-first styling, allowing for rapid and responsive UI development.

3. Chose Zustand for state management—used to control components such as modals and toasts—enabling easy open/close actions via a centralized store.

4. Used Axios for making API calls to the backend, providing a simple and promise-based HTTP client for data fetching.
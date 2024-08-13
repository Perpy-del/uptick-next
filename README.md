# Uptick Next Project

### Project

Rebuild your [frontend application](https://github.com/Perpy-del/uptick-react) using a server side framework like Next.JS, Nuxt.js or Angular Universal, ensuring server-side rendering for improved performance and SEO. Implement data fetching on the server and ensure synchronization with client-side data fetching. Focus on maintaining routing functionality and component/page mapping as per the application requirements.

### Requirements

- Implement functionality.

- Enable users to create and log into their account.

- Allow users to create and update blog posts.

- Allow users to fetch all posts and get details of a single post.

- The application should fetch the data from the [backend API](https://github.com/Perpy-del/uptick_sqltomdb).

- Provide an option to delete blog posts from the list.

### Technologies Used:
-   [NextJS](https://nextjs.org/docs) - Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for 
    additional features and optimizations.
-   [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
-   [Shadcn](https://ui.shadcn.com/docs/installation) - Beautifully designed reusable components that you can copy and paste into your application.

### Containerization using Docker

- Docker was used to containerize the application both for development and production build

For Development run,

- `docker-compose -f docker-compose-dev.yml up -d --build`

View will be on: **http://localhost:3000**

For Production, run

- `docker-compose -f docker-compose-prod.yml up -d --build`

View will be on: **http://localhost:8080**

### Browser Storage
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - localStorage is used to save key/value pairs in the browser. This was used to store the user name.


### *Thank you for reading*

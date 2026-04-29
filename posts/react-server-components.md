---
title: "Understanding React Server Components"
date: "2026-04-12"
excerpt: "A deep dive into React Server Components and how they change the way we build React applications."
tags: ["react", "nextjs", "web-development", "performance"]
---

# Understanding React Server Components

React Server Components (RSC) represent a fundamental shift in how we think about React applications. They allow components to run on the server, reducing the JavaScript sent to the client.

## What Are Server Components?

Server Components are React components that:

- Run exclusively on the server
- Have zero impact on bundle size
- Can directly access server resources (databases, file system)
- Cannot use hooks or browser APIs

## Server vs Client Components

### Server Components (default in Next.js App Router)

```tsx
// app/posts/page.tsx
async function PostsPage() {
  const posts = await db.posts.findMany();
  
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

### Client Components

```tsx
'use client'

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```

## Benefits

### Reduced Bundle Size

Server Components don't add to your JavaScript bundle. Large dependencies stay on the server.

### Direct Data Access

No need for API routes—fetch data directly in your components:

```tsx
async function UserProfile({ userId }) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  
  return <ProfileCard user={user} />;
}
```

### Automatic Code Splitting

The framework handles which code goes to the client and which stays on the server.

## Patterns

### Composing Server and Client Components

```tsx
// Server Component
import { ClientButton } from './ClientButton';

async function ServerPage() {
  const data = await fetchData();
  
  return (
    <div>
      <h1>{data.title}</h1>
      <ClientButton /> {/* Interactive client component */}
    </div>
  );
}
```

## Conclusion

Server Components are a powerful tool for building performant React applications. They reduce bundle sizes, simplify data fetching, and create a better developer experience.

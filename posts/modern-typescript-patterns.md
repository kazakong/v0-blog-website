---
title: "Modern TypeScript Patterns"
date: "2026-04-15"
excerpt: "Explore advanced TypeScript patterns that will make your code more type-safe and maintainable."
tags: ["typescript", "javascript", "web-development"]
---

# Modern TypeScript Patterns

TypeScript has evolved significantly over the years. Let's explore some modern patterns that can make your code more robust and maintainable.

## Utility Types

TypeScript provides several built-in utility types:

### Partial and Required

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// All properties optional
type PartialUser = Partial<User>;

// All properties required
type RequiredUser = Required<Partial<User>>;
```

### Pick and Omit

```typescript
// Only specific properties
type UserPreview = Pick<User, 'id' | 'name'>;

// All except specific properties
type UserWithoutEmail = Omit<User, 'email'>;
```

## Discriminated Unions

Perfect for handling different states:

```typescript
type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }
  | { status: 'loading' };

function handleResult<T>(result: Result<T>) {
  switch (result.status) {
    case 'success':
      return result.data; // TypeScript knows data exists
    case 'error':
      throw result.error; // TypeScript knows error exists
    case 'loading':
      return null;
  }
}
```

## Template Literal Types

Create string types dynamically:

```typescript
type EventName = 'click' | 'focus' | 'blur';
type HandlerName = `on${Capitalize<EventName>}`;
// "onClick" | "onFocus" | "onBlur"
```

## Const Assertions

Lock down object types:

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} as const;

// config.apiUrl is now 'https://api.example.com', not string
```

## Type Guards

Create custom type guards for complex checks:

```typescript
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'id' in obj &&
    'name' in obj
  );
}
```

## Conclusion

These patterns will help you write more expressive and type-safe TypeScript code. The key is to let TypeScript's type system work for you, not against you.

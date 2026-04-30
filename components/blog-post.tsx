import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface BlogPostProps {
  post: Post
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="border-3 border-foreground bg-card">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b-3 border-foreground bg-muted px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to posts</span>
        </Link>
        <span className="flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-primary" />
          <span className="flex h-3 w-3 rounded-full bg-secondary border border-foreground" />
          <span className="flex h-3 w-3 rounded-full bg-muted-foreground/30" />
        </span>
      </div>

      {/* Post Header */}
      <header className="border-b-3 border-foreground p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 border-2 border-foreground bg-primary px-2 py-0.5 text-xs font-semibold"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Post Content */}
      <div className="p-6 md:p-8">
        <div
          className="post-content max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

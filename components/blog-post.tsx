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
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b-3 prose-h2:border-foreground prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-strong:font-bold
            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-foreground prose-pre:text-primary-foreground prose-pre:border-3 prose-pre:border-foreground prose-pre:p-4 prose-pre:overflow-x-auto
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:bg-muted prose-blockquote:py-2"
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

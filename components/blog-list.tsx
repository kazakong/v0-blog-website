import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import type { PostMeta } from '@/lib/posts'

interface BlogListProps {
  posts: PostMeta[]
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="border-3 border-foreground bg-card p-8 text-center">
        <p className="text-muted-foreground text-lg">No posts yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {posts.map((post, index) => (
        <article
          key={post.slug}
          className="group border-3 border-foreground bg-card transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)]"
        >
          <div className="flex items-center justify-between border-b-3 border-foreground bg-muted px-4 py-2">
            <span className="flex items-center gap-2 text-sm font-medium">
              <span className="flex h-3 w-3 rounded-full bg-primary" />
              <span className="flex h-3 w-3 rounded-full bg-secondary border border-foreground" />
              <span className="flex h-3 w-3 rounded-full bg-muted-foreground/30" />
            </span>
            <span className="text-sm text-muted-foreground font-mono">
              post_{String(index + 1).padStart(2, '0')}.md
            </span>
          </div>
          <Link href={`/posts/${post.slug}`} className="block p-6">
            <h2 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors text-balance">
              {post.title}
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 4).map((tag) => (
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
          </Link>
        </article>
      ))}
    </div>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

import Link from 'next/link'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import type { PostMeta } from '@/lib/posts'

interface RelatedPostsProps {
  posts: PostMeta[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="border-3 border-foreground bg-card mt-8">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b-3 border-foreground bg-primary px-4 py-3">
        <span className="font-bold">Related Posts</span>
        <span className="flex items-center gap-2">
          <span className="flex h-3 w-3 rounded-full bg-foreground" />
          <span className="flex h-3 w-3 rounded-full bg-card border border-foreground" />
          <span className="flex h-3 w-3 rounded-full bg-card border border-foreground" />
        </span>
      </div>

      <div className="p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block border-3 border-foreground bg-muted p-4 transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                  Read
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-0.5 border border-foreground bg-card px-1.5 py-0.5 text-xs"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

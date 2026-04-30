import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { BlogList } from "../components/blog-list"
import { getSortedPostsData } from "../lib/posts"

export default function Home() {
  const posts = getSortedPostsData()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl w-full px-4 py-8 md:py-12">
        {/* Hero Section */}
        <section className="border-3 border-foreground bg-card mb-8">
          <div className="flex items-center justify-between border-b-3 border-foreground bg-primary px-4 py-2">
            <span className="font-bold">Welcome</span>
            <span className="flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-foreground" />
              <span className="flex h-3 w-3 rounded-full bg-card border border-foreground" />
              <span className="flex h-3 w-3 rounded-full bg-card border border-foreground" />
            </span>
          </div>
          <div className="p-6 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
              The Blog
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Thoughts on web development, design, and building things for the internet. 
              Exploring modern patterns and best practices.
            </p>
          </div>
        </section>

        {/* Posts Section */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Latest Posts</h2>
            <div className="flex-1 border-b-3 border-foreground" />
            <span className="text-sm text-muted-foreground font-mono">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
          </div>
          <BlogList posts={posts} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

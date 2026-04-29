import { Github, Twitter, Rss } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t-3 border-foreground bg-card mt-12">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Blog. Built with Next.js.
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border-3 border-foreground bg-card transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-primary"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border-3 border-foreground bg-card transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center border-3 border-foreground bg-card transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:bg-primary"
              aria-label="RSS Feed"
            >
              <Rss className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

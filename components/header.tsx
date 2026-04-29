import Link from 'next/link'
import { FileText, Home } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b-3 border-foreground bg-card sticky top-0 z-50">
      <div className="mx-auto max-w-4xl px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <span className="flex h-10 w-10 items-center justify-center border-3 border-foreground bg-primary transition-transform group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
              <FileText className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">The Blog</span>
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 border-3 border-foreground bg-card px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 border-3 border-foreground bg-primary px-4 py-2 font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Posts</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
}

export interface Post extends PostMeta {
  content: string
}

export function getSortedPostsData(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      const stats = readingTime(matterResult.content)

      return {
        slug,
        title: matterResult.data.title || slug,
        date: matterResult.data.date || new Date().toISOString(),
        excerpt: matterResult.data.excerpt || '',
        tags: matterResult.data.tags || [],
        readingTime: stats.text,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getPostData(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const stats = readingTime(matterResult.content)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    content: contentHtml,
    title: matterResult.data.title || slug,
    date: matterResult.data.date || new Date().toISOString(),
    excerpt: matterResult.data.excerpt || '',
    tags: matterResult.data.tags || [],
    readingTime: stats.text,
  }
}

export function getRelatedPosts(currentSlug: string, currentTags: string[], limit = 3): PostMeta[] {
  const allPosts = getSortedPostsData()

  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => currentTags.includes(tag))
      return { ...post, relevance: sharedTags.length }
    })
    .filter((post) => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit)

  if (relatedPosts.length < limit) {
    const additionalPosts = allPosts
      .filter(
        (post) =>
          post.slug !== currentSlug &&
          !relatedPosts.find((rp) => rp.slug === post.slug)
      )
      .slice(0, limit - relatedPosts.length)
    return [...relatedPosts, ...additionalPosts]
  }

  return relatedPosts
}

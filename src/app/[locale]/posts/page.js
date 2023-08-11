import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
export default async function PostPage() {
    const posts = await getPostsData()
    return (
        <div>
            <h1>My blog</h1>
            <ul>
                {posts.map((post) => (<li key={post.slug}>
                    <Link href={`/posts/${post.slug}`}>
                        <h3>{post.data.title}</h3>
                    </Link>
                </li>))}
            </ul>
        </div>
    )
}

export async function getPostsData() {
    const files = fs.readdirSync('posts')
    const posts = files.map((filename) => {
        const markdownWithMetaData = fs.readFileSync(path.join('posts', filename)).toString()
        const { data } = matter(markdownWithMetaData)
        const slug = filename.replace('.md', '')
        return {
            slug,
            data
        }
    })
    return posts
}
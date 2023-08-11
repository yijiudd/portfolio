import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default async function SinglePost({ params }) {
    const { content, data } = await getPostData(params.slug)
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.date.toString()}</p>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}


export async function getPostData(slug) {
    const markdownWithMetaData = fs.readFileSync(path.join('posts', slug + '.md')).toString()
    const { data, content } = matter(markdownWithMetaData)
    const html = marked(content)
    return {
        content: html,
        data
    }

}
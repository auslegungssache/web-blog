import fs from "fs"
import matter from "gray-matter"
import path from "path"
import styled from "styled-components";

interface ArticleProps {
    post: {
        slug: string;
        data: {[p: string]: any}
    }
}
function ArticleListing({post}: ArticleProps) {
    const actualLink = `blog/${post.slug}`
    const data = post.data
    const lastUpdated = data.updated ? ` | Last updated: ${data.updated}` : '';

    return <Article>
        <ArticleTitle href={actualLink}>{data.title}</ArticleTitle>
        <ArticleDate>{data.date}{lastUpdated}</ArticleDate>
        <ArticleText>{data.description}</ArticleText>
    </Article>
}
const Article = styled.article`
  text-align: left;
  transition: all 0.2s ease;
  color: ${p => p.theme.textColor};
`
const ArticleTitle = styled.a`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${p => p.theme.textColor};
  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 3px;
  }
`;
const ArticleDate = styled.div`
  color: ${p => p.theme.subTextColor};
`;
const ArticleText = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.5rem;
`

interface Props {
    posts: [{slug: string, data: matter.GrayMatterFile<string>}]
}
export default function Blog({posts}: Props) {
    return <div>
        {posts.map(post => (
            <ArticleListing post={post} />
        ))}
    </div>
}

export async function getStaticProps() {
    const files = fs.readdirSync(path.join("posts"))

    const tempPosts = files.map(filename => {
        const slug = filename.replace('.md', '')

        const markdownWithMeta = fs.readFileSync(
            path.join("posts", filename),
            'utf-8'
        )

        const data = matter(markdownWithMeta)

        if (!data.data.draft) {
            return {
                slug,
                data: data.data
            }
        } else {
            return null
        }
    })

    const posts = tempPosts.filter(x => x)
    return {
        props: {
            posts
        }
    }
}

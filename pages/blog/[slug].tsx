import fs from "fs"
import path from "path"

import matter from "gray-matter"
import { marked } from "marked"

import {useEffect} from "react";
import styled, {createGlobalStyle} from "styled-components"

import hljs from 'highlight.js/lib/common';
import 'highlight.js/styles/base16/oceanicnext.css';

interface Props {
    content: string
    frontmatter: {[p: string]: any}
}
export default function PostPage({ content, frontmatter }: Props) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    const date = frontmatter.date

    return <article className="article">
        <Style />
        <Title>{frontmatter.title}</Title>
        {date
            ? <Published>{date}</Published>
            : null
        }

        <div className="article-content" dangerouslySetInnerHTML={{__html: marked.parse(content)}}></div>
    </article>
}

const Title = styled.div`
  font-size: 1.6rem;
  text-decoration: none;
  color: ${p => p.theme.textColor};
`
const Published = styled.div`
  color: ${p => p.theme.subTextColor};
`
const Style = createGlobalStyle`
  .article-content {
    overflow-wrap: break-word;
    color: ${p => p.theme.textColor};
    
    pre {
      font-family: 'Fira Code', Menlo, Monaco, Consolas, Courier New, monospace;
      font-size: 13px;

      overflow-x: auto;
      padding: 1rem;

      border-radius: 0.75rem;
    }
    
    a {
      color: ${p => p.theme.linkColor};
      text-decoration-thickness: 2.5px;
      
      &:hover {
        background: ${p => p.theme.linkColor};
        color: ${p => p.theme.linkHoverColor};
      }
    }
  }
`

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const temppaths = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join('posts', filename),
            'utf-8'
        )

        const { data: frontmatter } = matter(markdownWithMeta)

        if (!frontmatter.draft) {
            return {
                params: {
                    slug: filename.replace('.md', ''),
                },
            }
        } else {
            return null
        }
    })
    const paths = temppaths.filter(x => x)

    return {
        paths,
        fallback: false,
    }

}

interface staticProps {
    params: {
        slug: string
    }
}
export async function getStaticProps({ params: { slug } }: staticProps) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const data = matter(markdownWithMeta)
    const { data: frontmatter, content } = data

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}

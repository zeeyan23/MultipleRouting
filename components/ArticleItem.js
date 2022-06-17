import React from 'react'
import styles from '../styles/Article.module.css'
import Link from 'next/link'

export const ArticleItem = ({article}) => {
  return (
    <div>
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={styles.card}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
            </a>
        </Link>
    </div>
  )
}
export default ArticleItem;
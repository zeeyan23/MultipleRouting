import React from 'react'
import styles from '../styles/Article.module.css';
import  ArticleItem  from './ArticleItem';

export const ArticleName = ({article}) => {
  return (
    <div className={styles.grid}>
        {article.map(article=> <ArticleItem article={article}/>)}
    </div>
  )
}

export default ArticleName;
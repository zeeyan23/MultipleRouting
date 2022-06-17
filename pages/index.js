import Head from 'next/head';
import ArticleName from '../components/ArticleName';

export default function Home({article}) {
  // console.log(article);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <ArticleName article={article} />
    </div>
  )
}

export const getStaticProps=async()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const article=await res.json();

  return{
    props: {
      article
    }
  }
}

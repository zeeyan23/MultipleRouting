import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

export const index = ({article}) => {
    // console.log(article)
    // const router = useRouter();
    // const {id}=router.query;

  return (
    <div> 
        {article.title}
        <br />
        <Link href='/'>GO Back</Link>
    </div>
     
  )
}

export const  getServerSideProps = async(context) => {
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article=await res.json()

    return{
        props:{
            article
        }
    }
}

export default index
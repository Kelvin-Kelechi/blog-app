 import { useRouter } from 'next/router';
import React from 'react'
 
 export default function postDetail() {
   const router = useRouter();
   const { slug } = router.query;
   return (
     <div>postDetail {slug} </div>
   )
 }
 
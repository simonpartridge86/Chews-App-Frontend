// pages/404.js
import Link from 'next/link'
import SocialProfileWithImageHorizontal from '../components/RecipeCard/RecipeCard'
import {useState, useEffect} from 'react';


export default function Play() {

const [data, setData] = useState(null)
console.log(data)
  useEffect( () => {
    async function fetchData() {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      const data = await res.json()
      setData(data)
      console.log(data)
    }
    fetchData()
  },[])

  if(data) {
  return (
    <>
        <SocialProfileWithImageHorizontal data={data} />
    </>
  
)}

  }

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('https://api.edamam.com/api/recipes/v2/fd2956d1b07db78913c4bf38d23decea?app_id=d6752ced&app_key=dd313e1761bc6ba97b9c65b475de7937&type=public')
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

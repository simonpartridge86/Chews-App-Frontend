import Link from "next/link";
import SocialProfileWithImageHorizontal from "../components/RecipeCard/RecipeCard";
import { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

export default function Play() {
  const noReturn = ["British", "American"];
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      for (const i of noReturn) {
        if (data.meals[0].strArea === i) {
          fetchData();
        }
        setData(data)

      }
      console.log(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <p>loading</p>;
  }

  if (data) {
    return (
      <>
        <SocialProfileWithImageHorizontal data={data} />
      </>
    );
  }
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch('https://api.edamam.com/api/recipes/v2/fd2956d1b07db78913c4bf38d23decea?app_id=d6752ced&app_key=dd313e1761bc6ba97b9c65b475de7937&type=public')
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

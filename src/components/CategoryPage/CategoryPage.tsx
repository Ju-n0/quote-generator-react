import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GridColumn,Card , Grid } from 'semantic-ui-react'
import NotFound from "../NotFound/NotFound";
import Loading from "../Loading/Loading";

interface ICat {
    _id: string;
    author: string;
    content: string;
}

function CategoryPage() {
    const [userCategory, setUserCategory] = useState<ICat[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
const params = useParams();
  const categorySlug = params.slug;

      const fetchUserCatagory = async () => {
    setIsLoading(true);
          const result = await axios.get(
      `https://api.quotable.io/quotes?tags=${categorySlug}`
    );
    const userCatData = result.data.results;
     if (!userCatData) {
    return <NotFound />;
    }
          setUserCategory(userCatData);
        
          
    setIsLoading(false);
};
   
    
    useEffect(
    () => {
            fetchUserCatagory();
    },
    []
    );
    
    const quotesByTag = userCategory.map((userCat:ICat) => (
    <GridColumn key={userCat._id} stretched>
      <Card centered
             key={userCat._id}
          header={userCat.content}
          meta={userCat.author}
               
      />
    </GridColumn>
  ));
    return (
         <>
            {isLoading ? (
                <Loading />
            ) :
            ( <Grid columns={3} centered padded>
      {quotesByTag}
    </Grid>
            )}
            
  </>
  )
}

export default CategoryPage




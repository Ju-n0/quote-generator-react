import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardHeader, CardContent, Card, Grid, GridColumn } from "semantic-ui-react";
import Loading from "../Loading/Loading";

interface ITag {
  id: string;
  name: string;
  slug: string;
}

function AllCategories() {
  const [categories, setCategories] = useState<ITag[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchAllCategories = async () => {
    setIsLoading(true);
    const result = await axios.get(`https://api.quotable.io/tags`);
    const allCatData = result.data;

    setCategories(allCatData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const arrayOfCategories = categories.map((category) => (
    <GridColumn key={category._id} stretched>
      <Card className="card">
        <CardContent textAlign="center">
          <CardHeader>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </CardHeader>
        </CardContent>
      </Card>
    </GridColumn>
  ));
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid columns={3} centered padded>
          {arrayOfCategories}
        </Grid>
      )}
    </>
  );
}

export default AllCategories;

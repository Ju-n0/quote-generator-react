import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CardHeader, CardContent, Card, Grid, GridColumn } from "semantic-ui-react";
import Loading from "../Loading/Loading";

interface IAuthor {
  id: string;
  name: string;
}

function AllAuthors() {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const fetchAuthors = async () => {
    setIsLoading(true);
    const result = await axios.get(`https://api.quotable.io/authors?sortBy=name&order=asc`);
    const arrayOfAuthors = result.data.results;

    setAuthors(arrayOfAuthors);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);
  const authorsDisplay = authors.map((author) => (
    <GridColumn key={author._id} stretched>
      <Card className="card">
        <CardContent textAlign="center">
          <CardHeader>{author.name}</CardHeader>
        </CardContent>
      </Card>
    </GridColumn>
  ));
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide examples" : "Show examples"}{" "}
      </button>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid columns={3} centered padded>
          {isVisible && authorsDisplay}
        </Grid>
      )}
    </>
  );
}

export default AllAuthors;

import { useState } from "react";
import { Form, FormInput, Grid, GridColumn, Card } from "semantic-ui-react";
import axios from "axios";
import Loading from "../Loading/Loading";
import AllAuthors from "../AllAuthors/AllAuthors";

interface IResult {
  _id: string;
  name: string;
  bio: string;
  description: string;
  link: string;
  quoteCount: number;
}
function SearchAuthor() {
  const [inputValue, setInputValue] = useState("");
  const [userSearch, setUserSearch] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasfetch, setHasfetch] = useState<boolean>(false);

  const fetchAuthor = async () => {
    setIsLoading(true);
    setHasfetch(true);
    const result = await axios.get(`https://api.quotable.io/authors?sortBy=name&order=asc`);
    const arrayOfAuthors = result.data.results;
    const searchResult = arrayOfAuthors.filter((author: IResult) =>
      author.name.includes(inputValue)
    );

    setUserSearch(searchResult);

    setIsLoading(false);
  };
  const searchResultDisplay = userSearch.map((result) => (
    <GridColumn key={result._id} stretched>
      <Card header={result.name} meta={result.description} description={result.bio} />
    </GridColumn>
  ));
  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          fetchAuthor();
        }}
      >
        <FormInput
          iconPosition="left"
          icon={{
            name: "search",
            circular: true,
            link: true,
          }}
          placeholder="Enter a name"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </Form>
      {hasfetch ? "" : <AllAuthors />}
      {isLoading ? (
        <Loading />
      ) : (
        <Grid columns={3} centered padded>
          {searchResultDisplay.length === 0 && hasfetch ? (
            <Card>No results found</Card>
          ) : (
            searchResultDisplay
          )}
        </Grid>
      )}
    </>
  );
}

export default SearchAuthor;

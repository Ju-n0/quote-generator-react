import { Card, Button } from "semantic-ui-react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./RandomQuote.scss";
interface IQuote {
  id: string;
  content: string;
  author: string;
  tags: string[];
  dateAdded: string;
}

function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState<IQuote | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchRandomQuote = async () => {
    setIsLoading(true);
    const result = await axios.get(`https://api.quotable.io/random`);
    const randomQuoteData = result.data;

    setRandomQuote(randomQuoteData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Card
            id="RandomQuote"
            centered
            link
            header={randomQuote?.content}
            meta={randomQuote?.author}
            description={randomQuote?.dateAdded}
          />
          <Button
            id="RandomQuote__button"
            onClick={(event) => {
              event.preventDefault();
              fetchRandomQuote();
            }}
          >
            {" "}
            Read another random quote
          </Button>
        </div>
      )}
    </>
  );
}

export default RandomQuote;

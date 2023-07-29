import styled from "styled-components";
import useSWR from "swr";

const QuoteCardWrapper = styled.div`
  display: flex;
  height: 45vh;
  padding: 0 20px;
`;

const QuoteCard = styled.section`
  position: relative;
  font-family: sans-serif;
  font-weight: 800;
  color: #93bfcf;
  padding: 30px 0;
  width: 100%;
  z-index: 1;
  margin: 80px auto;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;

  &:after {
    content: "”";
    color: #93bfcf;
    font-size: 10rem;
    line-height: 0;
    position: absolute;
    bottom: -43px;
    right: 30px;
  }
`;

const StyledQuote = styled.h2`
  position: relative;
  color: #6096b4;
  font-size: 38px;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  text-align: left;
`;

const StyledAuthor = styled.h3`
  position: relative;
  color: #272727;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding-top: 20px;
  z-index: 1;
`;

const fallbackQuotes = [
  {
    id: 1,
    content:
      "No matter how difficult the past, you can always begin again today.",
    author: "Jack Kornfield",
  },
];

const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error = new Error("Failed to fetch data");
      error.info = await response.json();
      error.status = response.status;
      throw error;
    }
    return response.json();
  } catch (error) {
    return fallbackQuotes;
  }
};

export default function Quote() {
  const { data, error } = useSWR(
    "https://api.quotable.io/quotes/random?tags=motivational|future?minLength=30&maxLength=50",
    fetcher,
    {
      revalidateOnFocus: false,
      fallbackData: fallbackQuotes,
    }
  );

  if (error)
    return (
      <div>
        <strong>{error.message}</strong>
      </div>
    );

  if (!data) return <div>Loading...</div>;

  const quote = data[0];

  return (
    <QuoteCardWrapper>
      <QuoteCard>
        <StyledQuote>{quote.content}</StyledQuote>
        <StyledAuthor>{quote.author}</StyledAuthor>
      </QuoteCard>
    </QuoteCardWrapper>
  );
}

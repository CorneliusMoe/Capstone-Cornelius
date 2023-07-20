import { styled } from "styled-components";
import useSWR from "swr";

const QuoteCardWrapper = styled.div`
  display: flex;
  height: 50vh;
  padding: 0 20px;
`;

const QuoteCard = styled.section`
  position: relative;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: #ffffff;
  padding: 30px 0;
  width: 100%;
  max-width: 500px;
  z-index: 1;
  margin: 80px auto;
  align-self: center;
  border-top: solid 1px;
  border-bottom: solid 1px;

  &:after {
    content: "”";
    color: rgba(255, 255, 255, 1);
    font-size: 10rem;
    line-height: 0;
    position: absolute;
    bottom: -43px;
    right: 30px;
  }
`;

const StyledQuote = styled.h2`
  position: relative;
  color: #ffffff;
  font-size: 40px;
  font-weight: 800;
  line-height: 1;
  margin: 0;
  text-align: left;
`;

const StyledAuthor = styled.h3`
  position: relative;
  color: #292a2b;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1;
  margin: 0;
  padding-top: 20px;
  z-index: 1;
`;

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("Failed to fetch data");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function Quote() {
  const { data, error } = useSWR(
    "https://api.quotable.io/quotes/random?tags=motivational|future?minLength=30&maxLength=50",
    fetcher
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

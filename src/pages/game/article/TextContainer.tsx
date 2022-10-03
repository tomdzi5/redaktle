import { Typography } from "@mui/material";
import { ArticleType } from "../../../types/article";
import { BlurredText } from "./styled";

type PropsType = {
  article: ArticleType;
};

const findWords = (text: string) => {
  const wordArray = text.split(" ");

  console.log(wordArray);

  const bluredWords = wordArray.map((word) => {
    if (word.length < 5) return word + " ";
    return (
      <>
        <BlurredText guessed={false}>{word}</BlurredText>{" "}
      </>
    );
  });

  console.log(bluredWords);

  return bluredWords;
};

const TextContainer = (props: PropsType) => {
  const { title, text } = props.article;

  const bluredWords = findWords(text);

  return (
    <>
      <Typography variant="h2" sx={{ mb: 2 }}>
        <BlurredText guessed={false}>{title}</BlurredText>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {bluredWords}
      </Typography>
    </>
  );
};

export default TextContainer;

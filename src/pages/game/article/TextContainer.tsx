import { Typography } from "@mui/material";
import { ArticleType } from "../../../types/article";
import { BlurredText } from "./styled";

type PropsType = {
  article: ArticleType;
};

const findWords = (text: string) => {
  const wordArray = text.split(" ");
  const regex = /[\,\.\s]/;

  console.log(wordArray);

  const bluredWords = wordArray.map((word) => {
    if (word.length < 6) return word + " ";

    

    const wordHide = word.split("").map((letter) => {
      if (!regex.test(letter)) return <>&#9647;</>;
      return letter;
    });

    return (
      <>
        <BlurredText guessed={false}>
          <span>{wordHide}</span>
        </BlurredText>{" "}
      </>
    );
  });

  console.log(bluredWords);

  return bluredWords;
};

const TextContainer = (props: PropsType) => {
  const { title, text } = props.article;

  const bluredTitle = title.split("").map(() => <>&#9647;</>);

  const bluredWords = findWords(text);

  return (
    <>
      <Typography variant="h2" sx={{ mb: 2 }}>
        <BlurredText guessed={false}>{bluredTitle}</BlurredText>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {bluredWords}
      </Typography>
    </>
  );
};

export default TextContainer;

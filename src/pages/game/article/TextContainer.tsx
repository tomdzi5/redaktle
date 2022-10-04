import { Typography } from "@mui/material";
import { ArticleType, BlurredArticleType } from "../../../types/article";
import { BlurredText } from "./styled";

type PropsType = {
  article: ArticleType;
  blurredArticle: BlurredArticleType;
};

const TextContainer = (props: PropsType) => {
  // const { title, text } = props.article;
  const { blurredTitle, blurredText } = props.blurredArticle;

  return (
    <>
      <Typography variant="h2" sx={{ mb: 2 }}>
        <BlurredText guessed={false}>
          {blurredTitle.map((word) => word)}
        </BlurredText>
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        {blurredText.map((word) => {
          if (word[0] !== "*") {
            return word;
          }

          return <BlurredText guessed={false}>{word}</BlurredText>;
        })}
      </Typography>
    </>
  );
};

export default TextContainer;

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

type SyntaxHighlighterComponentProps = {
  codeString: string;
};

export const SyntaxHighlighterComponent: React.FC<
  SyntaxHighlighterComponentProps
> = ({ codeString }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

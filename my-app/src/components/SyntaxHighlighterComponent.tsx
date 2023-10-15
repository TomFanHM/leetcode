import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { customStyle } from "../styles/syntax-highlighter";

type SyntaxHighlighterComponentProps = {
  codeString: string;
  className?: string;
};

export const SyntaxHighlighterComponent: React.FC<
  SyntaxHighlighterComponentProps
> = ({ codeString, className, ...rest }) => {
  return (
    <SyntaxHighlighter
      language="typescript"
      className={className}
      {...rest}
      style={customStyle}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

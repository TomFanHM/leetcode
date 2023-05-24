import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type SyntaxHighlighterComponentProps = {
  codeString: string;
  className: string
};

export const SyntaxHighlighterComponent: React.FC<
  SyntaxHighlighterComponentProps
> = ({ codeString, className }) => {
  return (
    <SyntaxHighlighter language="javascript" className={className}>
      {codeString}
    </SyntaxHighlighter>
  );
};

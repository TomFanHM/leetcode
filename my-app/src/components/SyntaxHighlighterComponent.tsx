import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

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

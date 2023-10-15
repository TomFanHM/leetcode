import type { CSSProperties } from "react";

export const customStyle: { [key: string]: CSSProperties } = {
  'code[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "unset",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#c5c8c6",
    textShadow: "unset",
    fontFamily:
      "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "unset",
    borderRadius: "0.3em",
    background: "transparent",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "transparent",
    padding: ".1em",
    borderRadius: ".3em",
  },
  comment: {
    color: "#6a9955",
  },
  prolog: {
    color: "#6a9955",
  },
  doctype: {
    color: "#6a9955",
  },
  cdata: {
    color: "#6a9955",
  },
  punctuation: {
    color: "#569cd6",
  },
  ".namespace": {
    opacity: "0.7",
  },
  property: {
    color: "#ce9178",
  },
  keyword: {
    color: "#569cd6",
  },
  tag: {
    color: "#569cd6",
  },
  "class-name": {
    color: "#FFFFB6",
    textDecoration: "underline",
  },
  boolean: {
    color: "#99CC99",
  },
  constant: {
    color: "#99CC99",
  },
  symbol: {
    color: "#f92672",
  },
  deleted: {
    color: "#ce9178",
  },
  number: {
    color: "#FF73FD",
  },
  selector: {
    color: "#A8FF60",
  },
  "attr-name": {
    color: "@",
  },
  string: {
    color: "#ce9178",
  },
  char: {
    color: "#A8FF60",
  },
  builtin: {
    color: "#569cd6",
  },
  inserted: {
    color: "#A8FF60",
  },
  variable: {
    color: "#C6C5FE",
  },
  operator: {
    color: "#ce9178",
  },
  entity: {
    color: "#FFFFB6",
    cursor: "help",
  },
  url: {
    color: "#96CBFE",
  },
  ".language-css .token.string": {
    color: "#99CC99",
  },
  ".style .token.string": {
    color: "#99CC99",
  },
  atrule: {
    color: "#F9EE98",
  },
  "attr-value": {
    color: "#F9EE98",
  },
  function: {
    color: "#569cd6",
  },
  regex: {
    color: "#E9C062",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

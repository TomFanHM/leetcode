import { siteConfig } from "../config/site";

type Navigation = {
  name: string;
  href: string;
  icon: (props: any) => React.JSX.Element;
}[];

const navigation: Navigation = [
  {
    name: "Facebook",
    href: siteConfig.links.facebook,
    icon: (props) => (
      <img src="/svg/square-facebook.svg" alt="square-facebook" {...props} />
    ),
  },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: (props) => (
      <img src="/svg/instagram.svg" alt="instagram" {...props} />
    ),
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: (props) => (
      <img src="/svg/x-twitter.svg" alt="x-twitter" {...props} />
    ),
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: (props) => (
      <img src="/svg/github-alt.svg" alt="github-alt" {...props} />
    ),
  },
  {
    name: "YouTube",
    href: siteConfig.links.youtube,
    icon: (props) => <img src="/svg/youtube.svg" alt="youtube" {...props} />,
  },
];

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/">
          Home
        </a>
        <a className="link link-hover" href="/about/">
          About
        </a>
        <a className="link link-hover" href="/articles/">
          Articles
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6 filter-svg" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div>
        {`© ${new Date().getFullYear()} ${
          siteConfig.author
        } All rights reserved.`}
      </div>
    </footer>
  );
}

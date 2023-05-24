import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
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
        <a className="link link-hover" href="/resources/">
          Resources
        </a>
        <a className="link link-hover" href="/donate/">
          Donate
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <BsTwitter size={24} />
          </a>
          <a>
            <BsYoutube size={24} />
          </a>
          <a>
            <BsFacebook size={24} />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Tom Fan.</p>
      </div>
    </footer>
  );
}

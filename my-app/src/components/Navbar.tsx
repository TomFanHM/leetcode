import { HiMenuAlt1 } from "react-icons/hi";
import { MdNotificationsNone, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt1 size={24} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about/">About</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Articles
                <MdOutlineKeyboardArrowRight size={24}/>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/resources/">Resources</a>
            </li>
            <li>
              <a href="/donate/">Donate</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Leetcode</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about/">About</a>
          </li>
          <li tabIndex={0}>
            <a>
              Articles
              <MdOutlineKeyboardArrowDown size={24}/>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/resources/">Resources</a>
          </li>
          <li>
            <a href="/donate/">Donate</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href='/notification/'>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <MdNotificationsNone size={24} />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

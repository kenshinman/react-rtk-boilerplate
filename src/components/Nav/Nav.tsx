import {Link, type LinkProps} from "react-router-dom";

const links: LinkProps[] = [
  {
    to: "/",
    children: "Home",
  },
  {
    to: "/about",
    children: "About",
  },
];

const Nav = () => {
  return (
    <div>
      {links.map((link) => (
        <Link
          key={link.to as string}
          to={link.to}
          className="text-blue-500 hover:text-blue-700"
        >
          {link.children}
        </Link>
      ))}
    </div>
  );
};

export default Nav;

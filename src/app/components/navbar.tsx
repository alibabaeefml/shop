"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menuItems = [
  {
    icon: "bag-shopping",
    name: "Products",
    link: "/",
  },
  {
    icon: "info-circle",
    name: "About",
    link: "/about",
  },
  {
    icon: "phone",
    name: "Contact",
    link: "/",
  },
];

function menuItemsUl() {
  const pathname = usePathname();

  const menuItemsEl = menuItems.map((item) => (
    <li key={item.name}>
      <Link
        href={item.link}
        className={
          "hover:bg-[rgba(0,0,0,.2)]  select-none" +
          (pathname == item.link ? "bg-[rgba(0,0,0,.2)]" : "")
        }
      >
        <i className={"fa fa-" + item.icon}></i>
        <span className="pl-1">{item.name}</span>
      </Link>
    </li>
  ));

  return <ul className="flex items-center gap-10 pr-2">{menuItemsEl}</ul>;
}

export default function Navbar() {
  return (
    <div className="flex items-center justify-between w-full fixed top-0 left-0  border-b-2 border-black bg-white bg-white h-[50px] ">
      <Link href="/">
        <h3 className="p-2">
          <i className="fa fa-bag-shopping"></i> Shop
        </h3>
      </Link>

      {menuItemsUl()}
    </div>
  );
}

import Link from "next/link";

const NavLink = ({ href, title, isActive }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-3 font-bold hover:text-white 
        ${isActive ? "bg-[#e2931b] text-white" : "text-[#ADB7BE]"}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;

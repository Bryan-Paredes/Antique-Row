import { navItems } from "./nav-items";

export default function NavBar({ isOpen }) {
  return (
    <nav className="flex justify-between items-center py-2 px-8 ">
      <ul className="flex justify-end items-center gap-3 text-xl transition-all .2s ease-in-out">
        {navItems.map(({ id, name, href }) => (
          <li key={id} className="text-[13px] uppercase">
            <a
              className=" hover:text-gray-500 hover:border-b border-gray-500"
              href={href}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

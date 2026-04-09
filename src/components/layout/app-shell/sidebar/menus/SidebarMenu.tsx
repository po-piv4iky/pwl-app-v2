import { usePathname } from "next/navigation";
import { MenuItem } from "./menuItem/MenuItem";
import { ISidebarItem } from "./sidebar.type";
import { match } from "path-to-regexp";

interface Props {
  menu: ISidebarItem[];
}

export function SidebarMenu({ menu }: Props) {

  const pathname = usePathname()
  return (
    <nav className="pt-5">
      <ul>
        {menu.map((el) => (
          <MenuItem
            key={el.link} 
            elMenu={el}
            isActive={!!match(el.link)(pathname)}
          />
        ))}
      </ul>
    </nav>
  );
}


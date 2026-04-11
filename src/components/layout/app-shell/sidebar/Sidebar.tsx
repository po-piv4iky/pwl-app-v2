import { useUIStore } from "@/store/ui.store";
import { HeaderSidebar } from "./header/HeaderSidebar";
import LogMaxes from "./logMaxes/LogMaxes";
import { SIDEBAR_DATA } from "./menus/sidebar.data";
import { SidebarMenu } from "./menus/SidebarMenu";
import css from './Sidebar.module.scss'


export function Sidebar() {
    const { isSidebarOpen, isMobile } = useUIStore()
    const isCollapsed = !isSidebarOpen && !isMobile
    const showMaxes = isSidebarOpen || isMobile

    return (
        <aside
            className={css.sidebarContainer}
            data-sidebar-collapsed={isCollapsed}
        >
            <HeaderSidebar />
            <SidebarMenu menu={SIDEBAR_DATA}></SidebarMenu>
            <LogMaxes show={showMaxes} />
        </aside>
    )
}

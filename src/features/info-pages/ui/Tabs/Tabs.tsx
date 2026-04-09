import { Tab, TabId } from "../../model/tabs"
import TabButton from "../TabButton/TabButton"
import css from './Tabs.module.scss'


type Props = {
   tabs: readonly Tab[]
   activeTab: TabId
   setActiveTab: (id: TabId) => void
}

export default function Tabs({tabs, activeTab, setActiveTab}: Props) {
    const activeIndex = Math.max(tabs.findIndex(tab => tab.id === activeTab), 0)

    return (
        <div
          className={css.tabs}
          style={{
            ['--tabs-count' as string]: tabs.length,
            ['--active-index' as string]: activeIndex,
          }}
        >
            <span className={css.indicator} aria-hidden="true" />
            {tabs.map(tab => (
                <TabButton 
                  key={tab.id} 
                  label={tab.label}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                />
            ))}
        </div>
    )
}

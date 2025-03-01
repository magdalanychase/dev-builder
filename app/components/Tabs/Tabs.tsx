import xsvg from '~/assets/x.svg';
import './Tabs.css'

export function TabBar({ children }: { children: React.ReactNode }) {
    return (
        <div className='TabBar'>
            {children}
        </div>
    )
}

export function Tab({ children }: { children: React.ReactNode }) {
    return (
        <div className='Tab'>
            {children}
            <div className='x'>
                <img src={xsvg} />
            </div>
        </div>
    )
}

export default function Tabs() {
    return (
        <TabBar>
            <Tab>filename</Tab>
            <Tab>filename</Tab>
            <Tab>filename</Tab>
        </TabBar>
    )
}
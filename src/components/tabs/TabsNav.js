const TabsNav = (props) => {
    const {tabs, activeTab, setActiveTab} = props

    return (
        <div className='flex items-center flex-wrap md:flex-nowrap gap-y-3 border-b mb-[24px] border-[#363738]'>
            {tabs.map((tab, index) => (
                <button className={`${activeTab === index ? 'text-[#3F99FF] font-[700] border-b transform translate-y-[1px] border-b-[6px] border-[#3F99FF]' : 'text-white/60 transform translate-y-[1px] border-b-[6px] border-[transparent]'} transition duration text-[16px] flex w-full md:justify-center items-center py-[12px]`}
                        onClick={() => setActiveTab(index)}
                >
                    {tab.icon(activeTab)}

                    <span className='ml-[10px]'>{tab.title}</span>
                </button>
            ))}
        </div>
    )
}

export default TabsNav
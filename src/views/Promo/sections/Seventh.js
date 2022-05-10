// Sources
import _bgMain from 'assets/img/bg/3.png'

const Seventh = () => {
  return (
    <div
      className='md:min-h-[510px] bg-no-repeat bg-contain lg:py-[50px]'
      style={{
        backgroundImage: `url(${_bgMain})`,
      }}
    >
      <div className='px-4 lg:px-8'>
        <div className='flex justify-end'>
          <div className='max-w-[880px]'>
            <div className='md:pr-[80px] mb-[24px]'>
              <h3 className='font-black text-[22px] lg:text-[36px] mb-[16px]'>
                Land sizes to meet every Enterprise need
              </h3>
              <div className='text-[16px] text-white/[.80]'>
                Launch Digital 3D immersive commercial establishments like Malls, E-Commerce shops,
                marketplaces, experience centers, stadiums in Metaverse with few clicks.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seventh

// Sources
import _imgEarth from 'assets/img/earth-sm.png'
import _bgAbstract1 from 'assets/img/370x400/1.jpg'
import _bgAbstract2 from 'assets/img/370x400/2.jpg'

const Third = () => {
  return (
    <div className='bg-[#161718] lg:py-[100px] relative'>
      <div className='hidden lg:block bg-gradient-to-b from-[#161718] to-[#161718]/0 h-[110px] transform translate-y-[70px] absolute top-0 z-[1] left-0 w-full'></div>
      <div className='absolute bottom-0 left-0 bg-center md:bg-top md:transform bg-cover md:bg-contain 4xl:bg-cover translate-y-[140px] md:translate-y-[70px] w-full bg-no-repeat h-full bg-[url("assets/img/bg/7.png")]'></div>

      <div className='max-w-[1340px] mx-auto px-4 lg:px-[80px] relative z-[1]'>
        <h2 className='leading-tight font-extrabold lg:text-center text-[32px] lg:text-[52px] mb-[40px] lg:mb-[200px] '>
          COMEARTH - <span className='text-gradient'>Metaverse</span> with a
          <br />
          Purpose
        </h2>

        <div className='grid grid-cols-10 '>
          <div className='col-span-7 md:col-span-3 mb-[12px] md:mb-0'>
            <div
              className='relative min-h-[220px] md:min-h-[400px] bg-no-repeat bg-cover bg-center'
              style={{
                backgroundImage: `url(${_bgAbstract1})`,
              }}
            >
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/[.50]' />
              <div className='absolute lg:top-[60px] left-0 right-0 p-[20px]'>
                <svg
                  className='fill-white mb-[30px]'
                  width='56'
                  height='43'
                  viewBox='0 0 56 43'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M31.6371 16.7351V43H54.3835V22.6622H46.301V17.8973C46.301 12.5514 48.033 11.273 56 11.273V0C36.7175 0 31.6371 5.46216 31.6371 16.7351ZM0 43H22.7464V22.6622H14.6639V17.8973C14.6639 12.5514 16.3959 11.273 24.3629 11.273V0C5.08041 0 0 5.46216 0 16.7351V43Z'
                    fill='currentColor'
                    fillOpacity='0.3'
                  />
                </svg>
                <div className='leading-tight font-black text-[14px] lg:text-[24px]'>
                  To let Brands create memorable immersive experiences for their consumers
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block col-span-4'>
            <img className='inline-block max-w-full translate-y-1/4 relative z-[2]' src={_imgEarth} alt='Earth' />
          </div>
          <div className='col-span-7 col-start-4 md:col-span-3'>
            <div
              className='relative min-h-[220px] md:min-h-[400px] bg-no-repeat bg-cover bg-center'
              style={{
                backgroundImage: `url(${_bgAbstract2})`,
              }}
            >
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/[.50]' />
              <div className='absolute lg:top-[60px] left-0 right-0 p-[20px]'>
                <svg
                  className='fill-white mb-[30px]'
                  width='56'
                  height='43'
                  viewBox='0 0 56 43'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M31.6371 16.7351V43H54.3835V22.6622H46.301V17.8973C46.301 12.5514 48.033 11.273 56 11.273V0C36.7175 0 31.6371 5.46216 31.6371 16.7351ZM0 43H22.7464V22.6622H14.6639V17.8973C14.6639 12.5514 16.3959 11.273 24.3629 11.273V0C5.08041 0 0 5.46216 0 16.7351V43Z'
                    fill='currentColor'
                    fillOpacity='0.3'
                  />
                </svg>
                <div className='leading-tight font-black text-[14px] lg:text-[24px]'>
                  To let Buyers discover the best products & events in one metaverse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third

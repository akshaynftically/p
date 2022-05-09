// Sources
import _imgEarth from 'assets/img/earth-sm.png'
import _bgAbstract1 from 'assets/img/370x400/1.jpg'
import _bgAbstract2 from 'assets/img/370x400/2.jpg'

const Third = () => {
  return (
    <div className='bg-[#161718] py-[100px]'>
      <div className='max-w-[1340px] mx-auto px-4 lg:px-8'>
        <h2 className='leading-tight font-extrabold text-center text-[32px] lg:text-[52px] lg:mb-[200px]'>
          COMEARTH - <span className='text-gradient'>Metaverse</span> with a
          <br />
          Purpose
        </h2>

        <div className='grid grid-cols-10'>
          <div className='col-span-3'>
            <div
              className='relative min-h-[400px] bg-no-repeat bg-cover bg-center'
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
                <div className='leading-tight font-black text-[24px]'>
                  To let Brands create memorable immersive experiences for their consumers
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-4'>
            <img className='inline-block max-w-full translate-y-1/4' src={_imgEarth} alt='Earth' />
          </div>
          <div className='col-span-3'>
            <div
              className='relative min-h-[400px] bg-no-repeat bg-cover bg-center'
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
                <div className='leading-tight font-black text-[24px]'>
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

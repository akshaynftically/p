// Sources
import _logoComearth from 'assets/img/logo-comearth.svg'

const FooterAlt = () => {
  return (
    <div className='max-w-[1340px] text-white pt-[100px] pb-[60px] px-4 lg:px-8 mx-auto'>
      <div className='grid grid-cols-12'>
        <div className='col-span'>
          <img className='inline-block max-w-full' src={_logoComearth} alt='Comearth' />
        </div>
      </div>
    </div>
  )
}

export default FooterAlt

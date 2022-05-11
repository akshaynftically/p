// Sources
import _imgPartner1 from 'assets/img/partners/1.svg'
import _imgPartner2 from 'assets/img/partners/2.svg'

// Mocks
const _partners = [
  {
    id: '1001',
    image: _imgPartner1,
  },
  {
    id: '1002',
    image: _imgPartner2,
  },
  {
    id: '1003',
    image: _imgPartner1,
  },
  {
    id: '1004',
    image: _imgPartner2,
  },
  {
    id: '1005',
    image: _imgPartner1,
  },
  {
    id: '1006',
    image: _imgPartner2,
  },
]

const Ninth = () => {
  return (
    <div className='max-w-[1340px] lg:pt-[120px] px-4 lg:px-8 mx-auto'>
      <h2 className='leading-tight font-black text-[32px] lg:text-[48px] mb-[32px]'>
        Our <span className='text-gradient'>Key</span> Partners
      </h2>

      <div className='grid grid-cols-6 items-center gap-[25px]'>
        {_partners.map((el) => (
          <div key={el.id} className='text-center'>
            <img className='inline-block max-w-full' src={el.image} alt='Partner' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ninth

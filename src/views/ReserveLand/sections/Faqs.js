import {Fragment, useState} from 'react'

// Components
import AccordionItem from 'components/accordion/AccordionItem'

const _faqs = [
  {
    id: '1001',
    title: 'What is the significance of the land sizes ?',
    text: 'Land sizes are the area over which owners shall be able to create their custom stores or experience centers.The sizes also govern the maximum height of structures supported upon the land in line with COMEARTH\'s Floor-Area-Ratio (FAR) regulations. A 1x1 unit represent the 30 Meter X 30 Meter size of the real world in Metaverse. Similarly 2x2 represents 4 units of 1x1 making the size of 60X60 Meter in size if compared to real world.',
  },
  {
    id: '1002',
    title: 'How soon can I start building on my reserved land?',
    text: 'We will be launching the public Beta version of our DIY E-Commerce by October. You will be able to start utilizing the land to launch your business on COMEARTH latest by October 2022.',
  },
  {
    id: '1003',
    title: 'Do I have to pay again while launching my business on this land?',
    text: 'No. Launching your experiences in COMEARTH is entirely free and requires zero technical knowledge. However, you can purchase any premium assets and apps created by the global COMEARTH community to add various utilities to your creation.',
  },
  {
    id: '1004',
    title: 'What is the location of the land parcel(s) that I\'m purchasing?',
    text: 'You can choose the location of your Land parcel on a first-come, first-serve basis on the launch of the COMEARTH Metaverse landscape in coming few weeks and latest by October 2022.',
  },
  {
    id: '1005',
    title: 'Can I sell this land further to other potential buyers? If yes, by when?',
    text: 'Yes. One can sell Land NFTs on COMEARTH\'s secondary marketplace and popular global NFT Marketplaces once their location is fixed on first-come, first-serve basis. We shall enable the ability to purchase in secondary marketplaces after the project\'s public launch.',
  },
  {
    id: '1006',
    title: 'How and where will I receive the COMEARTH land that I purchase?',
    text: 'Post-purchase, the land parcel(s) shall be available in your Wallet as an NFT. The NFT proves your ownership of parcel(s) of a given area.',
  }, {
    id: '1007',
    title: 'Can I buy or reserve the land at a later stage?',
    text: 'Yes. COMEARTH shall sell land NFTs in multiple stages. However, Since 10 Million + global brands and creators shall be vying for approximately 235k land NFTs, the price of land is likely to increase sharply in the upcoming rounds. Additionally, COMEARTH rewards the belief of its community, and early supporters shall reap unparalleled benefits in the long run.',
  },
]

const Faqs = () => {
  const [faqsSelected, setFaqsSelected] = useState('1002')

  // Handlers
  const handleClickFaqsItem = (val) => {
    setFaqsSelected(val)
  }

  return (
    <Fragment>
      {_faqs.map((el) => (
        <AccordionItem
          key={el.id}
          title={el.title}
          isOpened={faqsSelected === el.id}
          onClick={() => handleClickFaqsItem(el.id)}
        >
          {el.text}
        </AccordionItem>
      ))}
    </Fragment>
  )
}

export default Faqs

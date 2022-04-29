import {Fragment, useState} from 'react'

// Components
import AccordionItem from 'components/accordion/AccordionItem'

const _faqs = [
  {
    id: '1001',
    title: 'What is the significance of the land sizes ?',
    text: 'Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut repellendus minima aut commodi.',
  },
  {
    id: '1002',
    title: 'Can I buy it later ?',
    text: 'Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut repellendus minima aut commodi.',
  },
  {
    id: '1003',
    title: 'What is the significance of the land sizes ?',
    text: 'Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut repellendus minima aut commodi.',
  },
  {
    id: '1004',
    title: 'What is the significance of the land sizes ?',
    text: 'Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut repellendus minima aut commodi.',
  },
  {
    id: '1005',
    title: 'What is the significance of the land sizes ?',
    text: 'Lorem ipsum dolor sit amet. Ut possimus aperiam et mollitia culpa sed voluptatum voluptatem qui porro nostrum ut veniam itaque ex officia galisum non soluta porro! Aut repellendus minima aut commodi.',
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

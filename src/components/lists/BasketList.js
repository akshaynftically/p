import {Fragment} from 'react'

// Components
import BasketListItem from './BasketListItem'

const BasketList = (props) => {
  const {items} = props

  return (
    <Fragment>
      {items.map((el) => (
        <BasketListItem key={el.id} {...el} />
      ))}
    </Fragment>
  )
}

export default BasketList

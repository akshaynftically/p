import ReactSelect, {components} from 'react-select'

const OptionItem = (props) => {
  return (
      <components.Option {...props}>
        <div className='flex items-center'>
          <span>{props.data.label}</span>
        </div>
      </components.Option>
  )
}

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width='16' height='8' viewBox='0 0 16 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M16 0H0L8.42105 8L16 0Z' fill='#ffffff' fillOpacity='0.4' />
      </svg>
    </components.DropdownIndicator>
  )
}

const Select = (props) => {
  const defaultStyles = {
    valueContainer: (styles) => ({
      ...styles,
      padding: '0 20px',
    }),
    control: (styles) => ({
      ...styles,
      minHeight: 44,
      background: '#363738',
      borderColor: isError ? 'rgb(248 113 113)' : '#6A6A6A',
      boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.45)',
    }),
    input: (styles) => ({
      ...styles,
      color: 'rgba(255, 255, 255, 0.65)',
      fontSize: '14px',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: '#ffffff',
      fontSize: '14px',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: '#ffffff',
      fontSize: '14px',
    }),
    menu: (styles) => ({
      ...styles,
      zIndex: 10,
      background: '#363738',
      borderColor: '#6A6A6A',
      boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.45)',
    }),
    option: (styles, state) => ({
      ...styles,
      color: '#ffffff',
      fontSize: '14px',
      background: state.isSelected ? '#3F99FF' : state.isFocused ? '#262728' : 'transparent',
      padding: '10px 20px',
    }),
  }

  const {isError, customStyles = {}, components = {}, Option = OptionItem, ...rest} = props
  const _customStyles = Object.assign(defaultStyles, customStyles)

  return (
    <ReactSelect
      classNamePrefix='react-select'
      styles={_customStyles}
      components={{DropdownIndicator, Option, ...components}}
      {...rest}
    />
  )
}

export default Select

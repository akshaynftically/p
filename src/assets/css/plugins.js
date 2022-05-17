const plugin = require("tailwindcss/plugin")

module.exports = plugin(function ({addVariant, e}) {
  addVariant('swiper-slide-active', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.swiper-slide-active .${e(`swiper-slide-active${separator}${className}`)}`
    })
  })

  addVariant('swiper-slide-next', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.swiper-slide-next .${e(`swiper-slide-next${separator}${className}`)}`
    })
  })

  addVariant('swiper-slide-prev', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.swiper-slide-prev .${e(`swiper-slide-prev${separator}${className}`)}`
    })
  })
})
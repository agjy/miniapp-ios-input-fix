// index.js

Page({
  data: {
    name: '',
    phone: '',
    address: '',
  },
  handleInputName(e) {
    console.log('name', e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  handleInputPhone(e) {
    console.log('phone', e.detail.value)
    this.setData({
      phone: e.detail.value
    })
  },
  handleInputAddress(e) {
    console.log('address', e.detail.value)
    this.setData({
      address: e.detail.value
    })
  },
})

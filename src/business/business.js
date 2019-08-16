import { network } from '@/api/network.js'
import { Translate } from '@/adapters/translate.js'
class Business {
  constructor (https, translate) {
    this.https = https
    this.translate = translate
  }
  getStats () {
    const _this = this
    return new Promise((resolve, reject) => {
      _this.https.post('/xxxx/').then(res => {
        console.log(res)
        const _data = _this.translate.translation(res.data)
        resolve(_data)
      }, err => {
        reject(err)
      })
    })
  }
}

export default function () {
  return new Business(network, new Translate())
}

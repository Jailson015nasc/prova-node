// const myURL = new URL('https://nodejs.org/api/url.html#url_new_url_input_base')

// console.log(myURL.hash)
// myURL.hash = ''
// console.log(myURL.protocol)

// console.log(myURL.pathname)
// myURL.pathname = ''
// console.log(myURL.href)
const url = require('url')
const adress = 'https://nodejs.org/api/url.html#url_new_url_input_base'
const persedUrl = new url.URL(adress)

console.log(persedUrl.protocolo)
console.log(persedUrl.host)
console.log(persedUrl.pathname)
console.log(persedUrl.searchParams)
console.log(persedUrl.hash)




const { NODE_ENV } = process.env

let host = '//devgw.ingongdi.com/'
let env = 'DEV'

if (NODE_ENV === 'DEV') {
  host = `//devgw.ingongdi.com/`
  env = 'DEV'
}

if (NODE_ENV === 'PRE') {
  host = `//pregw.ingongdi.com/`
}

if (NODE_ENV === 'TEST') {
  host = `//testgw.ingongdi.com/`
  env = 'TEST'
}

if (NODE_ENV === 'PROD') {
  host = '//gateway.ingongdi.com/'
  env = 'PROD'
}

console.log('host = ', host)

export default { host, env }

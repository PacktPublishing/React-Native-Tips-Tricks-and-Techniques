const SAClient = {
    info: (msg, props) => console.log('Some Analytics: info', msg, props),
    warn: (msg, props) => console.log('Some Analytics: warning', msg, props),
    error: (msg, props) => console.log('Some Analytics: error', msg, props),
}
export default SAClient

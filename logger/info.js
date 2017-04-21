const info = {
  register: (server, request, next) => {
    console.log(request)
    next()
  }
}

info.register.attributes = {
  name: 'info',
  version: '1.0.0'
}

module.exports = info

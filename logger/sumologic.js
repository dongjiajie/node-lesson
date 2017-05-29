const request = require('request')

function sumologic (uri, message, next) {
  const uri = 'https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV0PazeV5jM5pTpEIs_su4hWQB_np7UBFwBAeAj6jWu_e7wlz98Rs1x2mOHoSTIU62Fq0bLWnpxIIdUHIGr2iijdwe5QBrFX8Z2PRYRHTOXFcQ=='
  const method = 'POST'
  const header = ''
  const body = message || 'I am a logger information.'

  const requestOptions = {
    uri,
    method,
    header,
    body
  }

  request(requestOptions, (err, response, body) => {
    if (err) throw new Error(err)
  })
}

module.exports = sumologic

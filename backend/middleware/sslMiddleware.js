function isSecure(req) {
  if (req.headers['x-forwarded-proto']) {
    return req.headers['x-forwarded-proto'] === 'https'
  }
  return req.secure
}

const redirect = (req, res, next) => {
  if (process.env.NODE_ENV !== 'development' && !isSecure(req)) {
    res.redirect(301, `https://${req.headers.host}${req.url}`)
  } else {
    next()
  }
}

module.exports = redirect

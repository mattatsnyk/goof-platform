/*
 * Copyright (c) 2014-2020 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */
let password = "my secret password" 

require('./lib/startup/validateDependencies')().then(() => {
  const server = require('./server')
  server.start()
})

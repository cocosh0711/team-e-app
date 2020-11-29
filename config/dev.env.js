"use strict"
const merge = require("webpack-merge")
const prodEnv = require("./prod.env")

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_YOUTUBE_API_KEY: "AIzaSyDT1XQ-llw_zWtyIJRBH3g-bwKuEEWpJ0U",
})

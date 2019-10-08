const proxy = require('http-proxy-middleware');
const express = require('express');
const app = express();

module.exports = function(app){
    app.use(
        proxy('/api', {
            target: 'http://huopan-test.baijiajiekuan.com/',
            changeOrigin: true
        }),
        proxy('/certification', {
            target: 'http://192.168.0.140:8801/',
            changeOrigin: true
        })
    )
}
const fs = require('fs')


const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>access url :{{url}}</div>`
    })
    renderer.renderToString(app, (err, html) => {
        // res.end()

        console.log(html)
    })
})
const 
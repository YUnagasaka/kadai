const http = require('http')


const server = http.createServer((req, res) => {            
            const num = Math.random()
            res.setHeader('Access-Control-Allow-Origin', '*');

            if(num < 0.5) {
                res.write('吉')
            } else if(num < 0.75){
                res.write('中吉')                
            } else if(num < 0.9) {
                res.write('大吉')
            } else {
                res.write('凶')
            }
   
    
    res.end()
})
server.listen(4000)
console.log("The server is listening...")
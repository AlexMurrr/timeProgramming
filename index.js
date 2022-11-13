const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000

const server = http.createServer((req, res)=>{
  console.log('Server request')
  res.setHeader('Content-Type', 'text/html')

const createPath = (page)=>path.resolve(__dirname, 'veiws', `${page}.html`)
  let basePath = ''
  
  switch(req.url){
      case '/':
      case '/home':
      case '/index.html':        
          basePath = createPath('index')
          res.statusCode = 200
          break
      case '/contact':
          basePath = createPath('contact')
          res.statusCode = 200
          break
      case '/about-us':
          res.statusCode = 301
          res.setHeader('Location', '/contact')
          res.end()
          break
      default:
          basePath = createPath('error')   
          res.statusCode = 404
          break    
  }

  
      fs.readFile(basePath, (err, data)=>{
          if(err){
              console.log(err)
              res.end()
          } else {
              res.write(data)
              res.end()
      }
  })
  
})

server.listen(PORT, 'localhost', (err)=>{
  err ? console.log(err) : console.log(`listen port ${PORT}`)
})




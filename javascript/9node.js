// console.log("Hello world to NodeJs")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <title>Box Model</title>
      <style>
          /* # is use for giving id and call back id */
          /* . is use for giving class or call back class */
          .container
          {
              background-color:#c6dee8;
              border:black solid 2px ;
              border-radius: 50px;
              /* here padding is done from all side top right bottom left */
              padding: 50px;
              /* padding: 50px 40px 52px 6px; here top right bottom left this order is maintain */
              /* padding: 50px 60px ; which means y(top/right) x(bottom/left) are same*/
              margin: 50px;
              width:0500px;
              background-image: url("https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
              background-size: cover;
              background-attachment: fixed;
          }
          body{
              background-image: url("https://thumbs.dreamstime.com/b/my-pics-just-random-pic-looks-beautiful-75259774.jpg");
              background-size: cover;
              background-attachment: fixed;
          }
  
      </style>
  </head>
  <body>
      <div class="container"> 
      <h1>This is my hadding</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae alias autem vitae, illo reprehenderit itaque quis adipisci laboriosam odit hic! Laborum iusto eos labore at iste ea, odit consequuntur vel consequatur repellendus incidunt dolores nemo totam velit temporibus libero reprehenderit, fuga expedita! Asperiores?
  
      </p>
      </div>
      <div class="container"> 
          <h1>This is second hadding</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae alias autem vitae, illo reprehenderit itaque quis adipisci laboriosam odit hic! Laborum iusto eos labore at iste ea, odit consequuntur vel consequatur repellendus incidunt dolores nemo totam velit temporibus libero reprehenderit, fuga expedita! Asperiores?</p>
          </div>
          <div class="container"> 
              <h1>This is third hadding</h1>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae alias autem vitae, illo reprehenderit itaque quis adipisci laboriosam odit hic! Laborum iusto eos labore at iste ea, odit consequuntur vel consequatur repellendus incidunt dolores nemo totam velit temporibus libero reprehenderit, fuga expedita! Asperiores?</p>
              </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
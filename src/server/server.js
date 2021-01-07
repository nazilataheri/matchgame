import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);
  res.render('index', { initialMarkup });
  //   res.send(`
  //     <html>
  //       <head>
  //         <title>Sample React App</title>
  //         <link rel="stylesheet" href="styles/index.css" />
  //       </head>
  //       <body>
  //         <div id="root">${initialMarkup}</div>
  //         <script src="/main.js"></script>
  //       </body>
  //     </html>
  //   `);
});

server.listen(4242, () => console.log('Server is running...'));

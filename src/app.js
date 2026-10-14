const path = require('path');
const express = require('express');
const compression = require('compression');
const favicon = require('serve-favicon');

const router = require('./router.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const app = express();

app.use(compression());

//app.use('/assets', path.resolve(`${__dirname}/../client/`));
app.use('/assets', express.static( path.resolve(`${__dirname}/../client/`) ));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(favicon(`${__dirname}/../client/img/favicon.png`));

router(app);

app.listen(port, (error) => {
    if (error) { throw error; }
    console.log(`Listening on port ${port}`);
});
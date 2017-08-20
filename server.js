const express = require('express');
const app = express();

const port = process.env.PORT || 80;

app.use(express.static('dist'))

app.listen(port, function () {
    // eslint-disable-next-line no-console
    console.log("Listening on port " + port);
});
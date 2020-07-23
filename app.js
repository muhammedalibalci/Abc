var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 5005; 
 
app.use(express.static(path.join(__dirname, 'build')));
 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'build/index.html'));
    })
}
 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})
 
app.listen(port, (req, res) => {
})
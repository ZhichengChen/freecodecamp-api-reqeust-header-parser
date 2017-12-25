var express = require('express');
var app = express();

app.get('/api/whoami/', function(req, res, next) {
    var headers = req.headers;
    res.json({
            "ipaddress": headers['x-forwarded-for'],
            "language": headers['accept-language'].split(';')[0].split(',')[0],
            "software": headers['user-agent']
                            .match(/\([^\)]+\)/)[0]
                            .replace(/\(/,'')
                            .replace(/\)/, '')
        });
});

app.listen(process.env.PORT || 8080, function(){
   console.log('Running.'); 
});
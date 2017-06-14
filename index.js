const express = require('express');
const {ratePost} = require('./lib/rateHandlers')
const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/rate', function(request, response) {
  response.render('pages/rateForm');
});

app.post('/rate', ratePost)

app.get('/results', (req, res) => {
  res.render('pages/results')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



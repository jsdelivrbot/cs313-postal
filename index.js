const express = require('express');
const app = express();

const calculateRate = require('./lib/calculateRate')

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


app.get('/results', calculateRate, (req, res)=> {
  console.log(typeof res.rate)
  res.locals.blahe = res.rate
  res.render('pages/results' )
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

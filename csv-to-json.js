var fs = require('fs');
var Converter = require('csvtojson').Converter;
var c = new Converter({});

c.on('end_parsed', function(jsonArray) {
  fs.appendFile('songs-raw.json', JSON.stringify(jsonArray), function(){
    console.log('done!');
  });
});

fs.createReadStream("./songs.csv").pipe(c);

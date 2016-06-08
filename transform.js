var fs = require('fs');

var instruments = [
  { id: 1, name: 'mandolin' },
  { id: 2, name: 'cello' },
  { id: 3, name: 'fiddle' },
  { id: 4, name: 'guitar' },
  { id: 5, name: 'bass' },
  { id: 6, name: 'banjo' }
];

var users = [
  {
    id: 2,
    username: 'sammyj',
    knownSongs: []
  },
  {
    id: 3,
    username: 'ben',
    knownSongs: []
  },
  {
    id: 4,
    username: 'jer',
    knownSongs: []
  },
  {
    id: 5,
    username: 'dave',
    knownSongs: []
  }
];

function assignKnownSong(song) {
  if (song['sms'] === 'y') {
    users[0].knownSongs.push({song: song.id, instrument: 1});
  }

  if (song['scel'] === 'y') {
    users[0].knownSongs.push({song: song.id, instrument: 2});
  }

  if (song['bfid'] === 'y') {
    users[1].knownSongs.push({song: song.id, instrument: 3});
  }

  if (song['jbj'] === 'y') {
    users[2].knownSongs.push({song: song.id, instrument: 6});
  }

  if (song['jguit'] === 'y') {
    users[2].knownSongs.push({song: song.id, instrument: 4});
  }

  if (song['jmand'] === 'y') {
    users[2].knownSongs.push({song: song.id, instrument: 1});
  }

  if (song['dbs'] === 'y') {
    users[3].knownSongs.push({song: song.id, instrument: 5});
  }
}

var songs = [];

fs.readFile('./songs-raw.json', (err, data) => {
  if (err) throw err;
  var rawSongs = JSON.parse(data);

  rawSongs.forEach((song, i) => {
    songs.push(transformSong(song, i));
    songs.forEach((s) => {
      assignKnownSong(s);
    });
    //TODO: assignIdsToKnownSongs()
  });

  fs.appendFile('transformed/users.json', JSON.stringify(users), function() {
    console.log('users done!');
  });
  fs.appendFile('transformed/songs.json', JSON.stringify(songs), function() {
    console.log('songs done!');
  });
});


function transformSong(raw, index) {
  return {
    id: index + 1,
    title: raw.s,
    key: raw.key,
    type: raw.type,
    genre: raw.genre,

    sms: raw.sms,
    scel: raw.scel,
    bfid: raw.bfid,
    jbj: raw.jbj,
    jguit: raw.jguit,
    jmand: raw.jmand,
    dbs: raw.dbs
  }
}

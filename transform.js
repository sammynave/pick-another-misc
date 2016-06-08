var example = {"s":"A Little Heart's Ease","key":"G","genre":"","type":"","sms":"y","smb":"y","scel":"","bfid":"","jbj":"","jguit":"","jmand":"","dbs":"","pguit":"","♫ex1":"","♫ex2":"","tab1":"","tab2":"","lesson":"","extra1":"","extra2":"","mtuning":"","ftuning":"","chord prog":{"":""},"field24":""}

var songs = [];
songs.push(getSong(example));

function getSong(raw) {
  var converted = {
    title: raw.s,
    key: raw.key,
    type: raw.type,
    genre: raw.genre
  }

  return converted;
}

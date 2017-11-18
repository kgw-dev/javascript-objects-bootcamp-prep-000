var playlist = {
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, artistname, songtitle) {
 return Object.assign({}, playlist, {[artistname]: songtitle})
}

function removeFromPlaylist(playlist, artistname) {
 delete playlist.artistname;
 return playlist
}

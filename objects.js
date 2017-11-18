var playlist = {
  artistname1: "songtitle1",
  artistname2: "songtitle2",
  artistname3: "songtitle3"
};

function updatePlaylist(playlist, artistname, songtitle) {
 return Object.assign({}, playlist, {[artistname]: songtitle})
}

function removeFromPlaylist(playlist, artistname) {
 delete playlist.artistname
 return (playlist)
}

"use strict";
function make_Album(artistName, ablum_Tittle, tracks) {
    let Album = {
        artist: artistName,
        tittle: ablum_Tittle
    };
    if (tracks !== undefined) {
        Album.tracks = tracks;
    }
    return Album;
}
let album1 = make_Album("bismah", "album tittle 1");
console.log(album1);
let album2 = make_Album("bismah", "album tittle 2", 10);
console.log(album2);

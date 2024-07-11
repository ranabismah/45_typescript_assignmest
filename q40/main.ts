/*question "40"
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

*/

function make_Album(artistName:string, ablum_Tittle:string,tracks?: number){
    let Album:{artist: string,tittle:string,tracks?:number}={
        artist:artistName,
        tittle:ablum_Tittle
    };
    if(tracks!== undefined){
        Album.tracks=tracks;
    }
    return Album;
}
let album1= make_Album("bismah","album tittle 1");

console.log(album1);


let album2= make_Album("bismah","album tittle 2", 10);
console.log(album2);
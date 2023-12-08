console.log("***** Music Collection *****");
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
    title,
    artist,
    yearPublished,
  };
  //add newAlbum to collection
  collection.push(newAlbum);
  return newAlbum;
}

console.log(
  "From the album, Toto IV",
  addToCollection(myCollection, "Africa", "TOTO", "1982")
);
console.log(
  "From the album, MMHMM",
  addToCollection(myCollection, "Be My Escape", "Relient K", "2004")
);
console.log(
  "From the album, Where the light shines through",
  addToCollection(myCollection, "I Wont Let You Go", "Switchfoot", "2016")
);
console.log(
  "From the album, Atlas: Year One",
  addToCollection(myCollection, "Saturn", "Sleeping At Last", "2014")
);
console.log(
  "From the album, Jazz",
  addToCollection(myCollection, "Fat Bottomed Girls", "QUEEN", "1978")
);
console.log(
  "From the album, Glory Sound Prep",
  addToCollection(myCollection, "Studpid Deep", "Jon Bellion", "2018")
);

console.log(myCollection);

function showCollection(collection) {

  for (let i = 0; i < collection.length; i++)

    console.log(`${collection[i].title} by, ${collection[i].artist} published in, ${collection[i].yearPublished}`);
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let artistArray = [];

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      artistArray.push(collection[i]);
    }
  }

  return artistArray;
}

console.log("Find albums by QUEEN:", findByArtist(myCollection, "QUEEN"));
console.log("Find albums by U2:", findByArtist(myCollection, "U2"));


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection:
      typeof myCollection !== "undefined" ? myCollection : undefined,
    addToCollection:
      typeof addToCollection !== "undefined" ? addToCollection : undefined,
    showCollection:
      typeof showCollection !== "undefined" ? showCollection : undefined,
    findByArtist:
      typeof findByArtist !== "undefined" ? findByArtist : undefined,
    search: typeof search !== "undefined" ? search : undefined,
  };
} catch (e) {
  // Do nothing
}

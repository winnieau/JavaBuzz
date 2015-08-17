// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
function Javabuzz() {
}

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
}

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  if (number % 15 === 0) {
    return true;
  } else {
    return false;
  }
};
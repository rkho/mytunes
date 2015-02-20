// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
    console.log(this.models);
    if (this.models.length === 1){
      this.models[0].play();
    }
  }

});

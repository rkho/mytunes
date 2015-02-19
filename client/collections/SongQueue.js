// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('change', function(){
      playFirst();
    });
  },

  playFirst: function(){
    var model = this[0];
    if (this.length === 1){
      model.play();
    }
  }

});

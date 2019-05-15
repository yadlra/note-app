(function(exports) {
  function NoteList(list) {
    this.list = [];
    };

  // var list = [];

  NoteList.prototype.addItem = function(item) {
    this.list.push(new Note(item));
  }

  NoteList.prototype.getItem = function() {
    return this.list;
  }

  exports.NoteList = NoteList;
})(this);

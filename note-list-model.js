(function(exports) {
  function NoteList(list) {
    this.list = [];
    };

    NoteList.prototype.addItem = function(item) {
    this.list.push(item);
  }

  NoteList.prototype.getItem = function() {
    return this.list;
  }

  exports.NoteList = NoteList;
})(this);

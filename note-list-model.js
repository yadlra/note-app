(function(exports) {
  function NoteList(list) {
    };

  var list = [];

  NoteList.prototype.addItem = function(item) {
    list.push(item);
  }

  NoteList.prototype.getItem = function() {
    return list.join(", ");
  }

  exports.NoteList = NoteList;
})(this);

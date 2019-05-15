(function(exports) {
  function ListView(noteList) {
    this._noteList = noteList;
  }

  ListView.prototype.getHTML = function() {
    var string = "<ul>";
    this._noteList.getItem().map(function(note) {
      string += "<li><div>" + note.text() + "</div></li>\n";
    });
    string += "</ul>";
    return string;
  };

  exports.ListView = ListView;
})(this);

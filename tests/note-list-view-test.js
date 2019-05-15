(function(exports) {
  function testEmptyList() {
    var noteList = new NoteList();
    var listView = new ListView(noteList);
    // console.log(listView.getHTML());
    assert.isTrue(listView.getHTML() === "<ul></ul>");
  }

  testEmptyList();
})(this);

(function(exports) {
  function testReturn3NoteList() {
    var noteList = new NoteList();
    noteList.addItem("hello");
    noteList.addItem("world");
    noteList.addItem("!!!!!");

    var noteListView = new ListView(noteList);

    assert.isTrue(
      noteListView.getHTML() ===
        "<ul><li><div>hello</div></li>\n<li><div>world</div></li>\n<li><div>!!!!!</div></li>\n</ul>"
    );
  }
  testReturn3NoteList();
})(this);

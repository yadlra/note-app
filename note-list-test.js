(function(exports) {
  function testNoteList() {
    var note = new NoteList();
    note.addItem("hello")
    note.addItem("bye")
    note.addItem("see you")
    if (note.getItem() !== ["hello, bye, see you"]) {
      throw new Error("List does not exist");
    };
  };

  testNoteList();
})(this);

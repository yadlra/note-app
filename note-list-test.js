(function(exports) {
  function testNoteList() {
    var note = new Note("hello");
    console.log(note.text)
    var noteList = new NoteList();
    noteList.addItem(note.text)
    noteList.addItem("bye")
    noteList.addItem("see you")
    if (noteList.getItem() !== "hello, bye, see you") {
      throw new Error("List does not exist");
    }else{
      console.log("Test 2 passes")
    }
  };

  testNoteList();
})(this);

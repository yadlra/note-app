(function(exports) {
  function testNoteList() {
    // var note = new Note("hello");
    // // console.log(note.text)
    var noteList = new NoteList();
    assert.isTrue(
      Array.isArray(noteList.getItem()) === true &&
        noteList.getItem().length === 0
    );
  }

  //
  //   if (noteList.getItem().join(", ") !== "hello, bye, see you") {
  //     throw new Error("List does not exist");
  //   }else{
  //     console.log("Test 2 passes!")
  //   }
  // };

  testNoteList();
})(this);

(function(exports) {
  function addNoteToAllArrays() {
    var noteList = new NoteList();
    noteList.addItem("hello");
    assert.isTrue(noteList.getItem()[0].text() === "hello");
  }

  addNoteToAllArrays();
})(this);

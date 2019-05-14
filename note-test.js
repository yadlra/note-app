(function(exports) {
  function testNote() {
    var note = new Note("hello");

    if (note.text !== 'hello') {
      throw new Error("Text does not exist");
    }else{
      console.log("Test 1 passes!")
    }
  };

  testNote();
})(this)

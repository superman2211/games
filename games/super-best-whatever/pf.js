var ls={
'A':[[,1],[1,,1],[1,,1],[1,1,1],[1,,1]],
'B':[[1,1],[1,,1],[1,1,1],[1,,1],[1,1]],
'C':[[1,1,1],[1],[1],[1],[1,1,1]],
'D':[[1,1],[1,,1],[1,,1],[1,,1],[1,1]],
'E':[[1,1,1],[1],[1,1,1],[1],[1,1,1]],
'F':[[1,1,1],[1],[1,1],[1],[1]],
'G':[[,1,1],[1],[1,,1,1],[1,,,1],[,1,1]],
'H':[[1,,1],[1,,1],[1,1,1],[1,,1],[1,,1]],
'I':[[1,1,1],[,1],[,1],[,1],[1,1,1]],
'J':[[1,1,1],[,,1],[,,1],[1,,1],[1,1,1]],
'K':[[1,,,1],[1,,1],[1,1],[1,,1],[1,,,1]],
'L':[[1],[1],[1],[1],[1,1,1]],
'M':[[1,1,1,1,1],[1,,1,,1],[1,,1,,1],[1,,,,1],[1,,,,1]],
'N':[[1,,,1],[1,1,,1],[1,,1,1],[1,,,1],[1,,,1]],
'O':[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],
'P':[[1,1,1],[1,,1],[1,1,1],[1],[1]],
'Q':[[0,1,1],[1,,,1],[1,,,1],[1,,1,1],[1,1,1,1]],
'R':[[1,1],[1,,1],[1,,1],[1,1],[1,,1]],
'S':[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],
'T':[[1,1,1],[,1],[,1],[,1],[,1]],
'U':[[1,,1],[1,,1],[1,,1],[1,,1],[1,1,1]],
'V':[[1,,,,1],[1,,,,1],[,1,,1],[,1,,1],[,,1]],
'W':[[1,,,,1],[1,,,,1],[1,,,,1],[1,,1,,1],[1,1,1,1,1]],
'X':[[1,,,,1],[,1,,1],[,,1],[,1,,1],[1,,,,1]],
'Y':[[1,,1],[1,,1],[,1],[,1],[,1]],
'Z':[[1,1,1,1,1],[,,,1],[,,1],[,1],[1,1,1,1,1]],
'0':[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],
'1':[[,1],[,1],[,1],[,1],[,1]],
'2':[[1,1,1],[,,1],[1,1,1],[1],[1,1,1]],
'3':[[1,1,1],[,,1],[1,1,1],[,,1],[1,1,1]],
'4':[[1,],[1,,1],[1,,1],[1,1,1],[,,1]],
'5':[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],
'6':[[1,1,1],[1],[1,1,1],[1,,1],[1,1,1]],
'7':[[1,1,1],[,,1],[,1,1],[,,1],[,,1]],
'8':[[1,1,1],[1,,1],[1,1,1],[1,,1],[1,1,1]],
'9':[[1,1,1],[1,,1],[1,1,1],[,,1],[1,1,1]],
':':[[,],[,1],[,],[,1],[,]],
'!':[[,1],[,1],[,1],[,],[,1]],
'?':[[1,1,1],[,,1],[,1,],[,,],[,1,]],
'.':[[,],[,],[,],[,],[,1]],
'/':[[1],[1],[,1],[,,1],[,,1]],
'\'':[[,1],[,1],[,],[,],[,]],
'-':[[],[],[1,1,1],[],[]],
' ':[[,,],[,,],[,,],[,,],[,,]]
};

function msr(string,size) {
  var currX = 0;
  string = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    var lt = ls[string.charAt(i)]
    var addX = 0;
    for (var j = 0; j < lt.length; j++) {
      var row = lt[j];
      addX = Math.max(addX, row.length * size);
    }
    currX += size + addX;
  }
  return Math.round(currX/2)
}

function wrt(string, size, posx, posy, color) {
  ctx.fillStyle = color;
  var currX = posx;
  string = string.toUpperCase();
  for (var i = 0; i < string.length; i++) {
    var lt = ls[string.charAt(i)];
    var currY = posy;
    var addX = 0;
    for (var j = 0; j < lt.length; j++) {
      var row = lt[j];
      for (var k = 0; k < row.length; k++)
        if (row[k])
          ctx.fillRect(currX + k * size, currY, size, size);
      addX = Math.max(addX, row.length * size);
      currY += size;
    }
    currX += size + addX;
  }
}

//Business Logic
function beepBoop(input) {

  const newArray = [];

  for (let i = 0; i <= input; i++) {
    if ([i].toString().includes("3")) {
      newArray.push("Won't you be my neighbor?");
    }
    else if ([i].toString().includes("2")){
      newArray.push("Boop");
    }
    else if ([i].toString().includes("1")){
      newArray.push("Beep")
    }
    else {
      newArray.push(i);
    }
  }

  return newArray;
};

//UI Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let input = $("input#number").val();
    let result = beepBoop(input);

    $("#resultNumber").text(result);
  });
});

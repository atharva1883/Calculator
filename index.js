let string = " ";

let buttons = document.querySelectorAll(".button").length;

for (var i = 0; i < buttons; i++) {
  document
    .querySelectorAll(".button")
    [i].addEventListener("click", function (e) {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "AC") {
        string = " ";
        document.querySelector("input").value = string;
      } else if (e.target.innerHTML == "DE") {
        string = string.toString().slice(0, -1);
        document.querySelector("input").value = string;
      } else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
      e.preventDefault();
    });
}

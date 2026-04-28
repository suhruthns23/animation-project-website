function toggle(id) {
  let cie = document.getElementById("cie");
  let assign = document.getElementById("assign");

  cie.style.display = "none";
  assign.style.display = "none";

  let selected = document.getElementById(id);
  selected.style.display = "flex";
}

// Sub dropdown toggle
function subToggle(id) {
  let all = document.querySelectorAll(".sub-dropdown");

  all.forEach(el => {
    if (el.id !== id) el.style.display = "none";
  });

  let current = document.getElementById(id);

  if (current.style.display === "flex") {
    current.style.display = "none";
  } else {
    current.style.display = "flex";
  }
}

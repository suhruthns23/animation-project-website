function toggle(id) {
  let cie = document.getElementById("cie");
  let assign = document.getElementById("assign");

  // Close both first
  cie.style.display = "none";
  assign.style.display = "none";

  // Open selected one
  let selected = document.getElementById(id);
  selected.style.display = "flex";
}

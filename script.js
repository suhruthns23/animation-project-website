function toggle(id) {
  let cie = document.getElementById("cie");
  let assign = document.getElementById("assign");

  // close both
  if (cie) cie.style.maxHeight = null;
  if (assign) assign.style.maxHeight = null;

  let selected = document.getElementById(id);

  if (selected.style.maxHeight) {
    selected.style.maxHeight = null;
  } else {
    selected.style.maxHeight = selected.scrollHeight + "px";
  }
}

function subToggle(id) {
  let all = document.querySelectorAll(".sub-dropdown");

  all.forEach(el => {
    if (el.id !== id) el.style.maxHeight = null;
  });

  let current = document.getElementById(id);

  if (current.style.maxHeight) {
    current.style.maxHeight = null;
  } else {
    current.style.maxHeight = current.scrollHeight + "px";
  }
}

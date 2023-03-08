// NAVBAR START

const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  console.log(label);
  label.addEventListener("click", function () {
    toggleCheckBox(label);
  });
});

function toggleCheckBox(label) {
  const labelFor = getLabelFor(label);
  const checkbox = getInputhWithName(labelFor);
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
  }
}

function getLabelFor(label) {
  return label.getAttribute("for");
}

function getInputhWithName(name) {
  return document.querySelector(`input[name='${name}']`);
}

// NAVBAR END

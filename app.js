const ssn = document.getElementById("ssn");
const validate = document.getElementById("btn");
const reset = document.getElementById("reset-btn");
const result = document.getElementById("result");

function validateSsn() {
  let value = ssn.value;
  // Remove non-numeric characters
  value = value.replace(/\D/g, "");
  ssn.value = value; // Update input value with numeric characters only

  let numberStr = value.toString();

  if (numberStr.length !== 9) {
    result.innerHTML = "Please enter a nine-digit number.";
    return;
  }

  let firstPart = Number(numberStr.slice(0, 3));
  let secondPart = Number(numberStr.slice(3, 5));
  let thirdPart = Number(numberStr.slice(5));

  let trueNumber = `
    <div class="card">
      <div class="card-body bg-success">
        Entered SSN (${firstPart}-${secondPart}-${thirdPart}) is valid!
      </div>
    </div>
  `;

  let falseNumber = `
    <div class="card">
      <div class="card-body bg-danger">
        Entered SSN (${firstPart}-${secondPart}-${thirdPart}) is not valid!
      </div>
    </div>
  `;

  if (
    (firstPart >= 900 && firstPart <= 999) ||
    firstPart === 0 ||
    firstPart === 666 ||
    secondPart < 1 ||
    secondPart > 99 ||
    thirdPart < 1 ||
    thirdPart > 9999
  ) {
    result.innerHTML = falseNumber;
  } else {
    result.innerHTML = trueNumber;
  }
}

validate.addEventListener("click", validateSsn);
reset.addEventListener("click", function() {
  ssn.value = "";
  result.innerHTML = "";
});

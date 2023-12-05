const updateProgressBarValue = () => {
  const progressbar = document.getElementById("myProgress");
  progressbar.value = "75";
  progressbar.max = "100";
};
const inputField = document.getElementById("name");
inputField.addEventListener("input", updateProgressBarValue);

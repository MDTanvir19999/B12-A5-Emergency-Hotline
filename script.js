function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert("✅ Number copied: " + number);
  });
}

function logCall(service, number) {
  const historyList = document.getElementById("callHistory");
  const li = document.createElement("li");
  const now = new Date().toLocaleTimeString();
  li.textContent = `${service} (${number}) - ${now}`;
  historyList.prepend(li);
}

function clearHistory() {
  document.getElementById("callHistory").innerHTML = "";
}

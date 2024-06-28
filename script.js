let startTime;
let elapsedTime = 0;
let timerInterval;

function startStop() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById('startStopButton').textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10); // Update time every 10ms
    document.getElementById('startStopButton').textContent = 'Pause';
  }
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  displayTime(elapsedTime);
}

function displayTime(time) {
  const formattedTime = new Date(time).toISOString().slice(11, -1);
  document.getElementById('display').textContent = formattedTime;
}

function lap() {
  const currentTime = Date.now();
  const lapTime = currentTime - startTime;
  const formattedTime = new Date(lapTime).toISOString().slice(11, -1);
  const lapTimes = document.getElementById('lapTimes');
  const li = document.createElement('li');
  li.textContent = formattedTime;
  lapTimes.appendChild(li);
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  displayTime(elapsedTime);
  document.getElementById('startStopButton').textContent = 'Start';
  document.getElementById('lapTimes').innerHTML = '';
}

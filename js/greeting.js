// Get the hour
Date.toLocaleString('fr-FR', {hour: '2-digit',   hour12: false, timeZone: 'Europe/Paris' })
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Luc';

// Here you can change your greetings
const gree1 = 'Go to Sleep  ';
const gree2 = 'Good morning,  ';
const gree3 = 'Good afternoon  ';
const gree4 = 'Good evening,  ';
const points = 'Good evening,  ';
const oh = '!';
const what = '?';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name + points;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name + oh;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name + oh;
} else {
  document.getElementById('greetings').innerText = gree4 + name oh;
}

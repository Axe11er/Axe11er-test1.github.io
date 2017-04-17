var click = document.querySelector(".click");
click.addEventListener("click", function (event) {
  var secondsInAMinute = 60;
  var minutesInAHour = 60;
  var secondsInAHour = secondsInAMinute * minutesInAHour;
  var hoursInADay = 24;
  var secondsInADay = secondsInAHour * hoursInADay;
  var daysInAYear = 365;
  var secondsInAYear = secondsInADay * daysInAYear;
  var age = prompt("Сколько тебе лет? ", "");
  var secondsInMyAge = age * secondsInAYear;
  if (age >= 20 && age < 100) alert("Ого, да у нас тут долгожитель " + "\n" + "\n" + "Ты прожил на свете уже более чем " + secondsInMyAge + " секунд!");
  else if (age < 20 && age > 0) alert("Тю.. мелочь пузатая " + "\n" + "\n" + "Ты прожил на свете всего лишь каких-то жалких " + secondsInMyAge + " секунд!");
  else if (age >= 100) alert("Сорян, я до стольки считать не умею..(");
  else alert("Пожалуйста, не тупите и введите свой возраст > >");
});
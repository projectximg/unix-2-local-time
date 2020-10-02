function covertUnix2HumanTime() {
  event.preventDefault();
  var inputUnixTime = document.getElementById("unixTime").value;
  var myDate = new Date(inputUnixTime * 1000);
  console.log(myDate);
  var localTime =
    getOrdinalNum(myDate.getDate()) +
    " " +
    getMonthName(myDate.getMonth()) +
    " " +
    myDate.getFullYear() +
    ", " +
    myDate.toLocaleTimeString();
  var gmtTime = myDate.toUTCString();
  document.getElementById("GMTTime").innerHTML = gmtTime;
  document.getElementById("LOCALTime").innerHTML = localTime;
  document.getElementById("timeResults").style.display = "block";
  return false;
}

const getOrdinalNum = (number) => {
  let selector;
  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }
  return number + ["th", "st", "nd", "rd", ""][selector].sup();
};

const getMonthName = (number) => {
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[number];
};

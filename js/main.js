$(".nav-link").on("click", function (e) {
  $(e.target).addClass("active");
  $(e.target).parent().siblings().children().removeClass("active");
});

function run() {
  var rainyDay = new RainyDay({
    image: "background",
  });
  window.setTimeout(function () {}, 1000000);
}
let btninput = document.getElementById("btninput");
let seacrhinput = document.getElementById("search");
let locationname = document.getElementById("locationname");
let locationtempc = document.getElementById("locationtempc");
let firsticon = document.getElementById("firsticon");
let firsttext = document.getElementById("firsttext");
let secondtemp = document.getElementById("secondtemp");
let dirwind = document.getElementById("dirwind");
let humidity = document.getElementById("humidity");
let wind_kph = document.getElementById("wind_kph");
let tempc2 = document.getElementById("tempc2");
let tempc3 = document.getElementById("tempc3");
let icon3 = document.getElementById("icon3");
let icon2 = document.getElementById("icon2");
let tempf2 = document.getElementById("tempf2");
let tempf3 = document.getElementById("tempf3");
let secondtext = document.getElementById("secondtext");
let threetext = document.getElementById("threetext");
let daye = document.getElementById("day");
let input = document.getElementById("dateinput");
let output = document.getElementById("dateoutput");
let nextday = document.getElementById("nextday");
let nextday2 = document.getElementById("nextday2");

let next = [];

async function getdate(valu = "cairo") {
  let weather = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=7ccf0f2652c4433cb18125030242501&q=${valu}&days=3  `
  );
  let run = await weather.json();
  next = run.forecast;
  console.log(run);
  showdate1(run);
}
getdate();

function showdate1(date) {
  locationname.innerHTML = date.location.name;
  locationtempc.innerHTML = date.current.temp_c;
  firsttext.innerHTML = date.current.condition.text;
  firsticon.setAttribute("src", date.current.condition.icon);
  dirwind.innerHTML = date.current.wind_dir;
  humidity.innerHTML = date.current.humidity;
  wind_kph.innerHTML = date.current.wind_kph;
  icon2.setAttribute("src", date.forecast.forecastday[1].day.condition.icon);
  icon3.setAttribute("src", date.forecast.forecastday[2].day.condition.icon);
  tempc2.innerHTML = date.forecast.forecastday[1].day.maxtemp_c;
  tempf2.innerHTML = date.forecast.forecastday[1].day.mintemp_c;
  secondtext.innerHTML = date.forecast.forecastday[1].day.condition.text;
  tempc3.innerHTML = date.forecast.forecastday[2].day.maxtemp_c;
  tempf3.innerHTML = date.forecast.forecastday[2].day.mintemp_c;
  threetext.innerHTML = date.forecast.forecastday[2].day.condition.text;
  let dates = new Date(date.current.last_updated);
  let dates2 = new Date(date.forecast.forecastday[1].date);
  let dates3 = new Date(date.forecast.forecastday[2].date);

  nextday2.innerHTML = dates3.toLocaleDateString("en-us", { weekday: "long" });
  nextday.innerHTML = dates2.toLocaleDateString("en-us", { weekday: "long" });
  daye.innerHTML = dates.toLocaleDateString("en-us", { weekday: "long" });
  input.innerHTML = dates.toLocaleDateString("en-us", { month: "long" });
  output.innerHTML = dates.getDate();
}

btninput.addEventListener("click", function () {
  let valu2 = seacrhinput.value;
  getdate(valu2);
});

let width = $(".inner").outerWidth();
$(".sidebar").animate({ left: `-${width}px` }, 0);

$(".setting").on("click", function () {
  let left = $(".sidebar").css(`left`);
  if (left == "0px") {
    $(".sidebar").animate({ left: `-${width}px` }, 2000);
  } else {
    $(".sidebar").animate({ left: `0px` }, 2000);
  }
  console.log(width);
});

$(".side").click(function (event) {
  let ell = $(event.target).css("background-color");
  $(":root").css("--main-color", ell);
  localStorage.setItem("fcolor", ell);
});

if (localStorage.getItem("fcolor") != null) {
  $(":root").css("--main-color", localStorage.getItem("fcolor"));
}

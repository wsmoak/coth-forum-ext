now = Date.parse(Date());
a_year = 60 * 60 * 24 * 365 * 1000

var elements = document.getElementsByClassName("date");

for (const element of elements) {
  started_on = Date.parse(element.innerHTML);
  if (now - started_on - a_year > 0) {
  	element.parentElement.parentElement.style.backgroundColor = "lavender"
  }
}

var times = document.getElementsByTagName("time");
for (const element of times) {
	posted_on = Date.parse(element.innerHTML);
	  if (now - posted_on - a_year > 0) {
  	element.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "lavender"
  }
}
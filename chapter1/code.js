scoops = 5;
while (scoops > 0) {
	document.write("Another scoop!<br>");
	if (scoops < 3) {
		alert("Ice cream is running low!");
	} else if (scoops >= 5) {
		alert("Eat faster, the ice cream is going to melt!");
	}
	scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");

function draw(string) {
	document.getElementById("result").innerHTML += string;
}

function br() {
	draw("<br />" + ps1);
}

function execute(string) {
	draw("<br />Now loading '" + string + "'...");
}

function blink(){
	if (document.getElementById("cursor").style.visibility == "visible") {
		document.getElementById("cursor").style.visibility = "hidden";
	} else {
		document.getElementById("cursor").style.visibility = "visible";
	}
	setTimeout(blink, 500);
}

window.onload = function() {
	document.getElementById("wrapper").innerHTML += init;
	document.getElementById("wrapper").innerHTML += "<span id='result'>"+ ps1 +"</span><span id='cursor'>_</span>";
	blink();
	window.document.onkeydown = function(e) {
		if (!e)	e = window.event;
		if (e.ctrlKey || e.altKey) return;
		var kc = e.keyCode;
		if (kc == 13) {
			br();
			return;
		}
		if (kc in shortcuts) {
			execute(shortcuts[kc]["title"]);
			location.href = shortcuts[kc]["url"];
		}
	}
}

function NappaimistonKuuntelija(matopeli) {
	this.matopeli = matopeli;
}

NappaimistonKuuntelija.prototype.keyDown = function(evt) {
	var suunta;
	switch (evt.keyCode) {
		case 37:
			suunta = "vasen"
			//suunta = Suunta.VASEN;
			break;
		case 38:
			suunta = "ylos"
			//suunta = Suunta.YLOS;
			break;
		case 39:
			suunta = "oikea"
			//suunta = Suunta.OIKEA;
			break;
		case 40:
			suunta = "alas"
			//suunta = Suunta.ALAS;
			break;
		case 13:
			this.matopeli.aloita();
			return;
		default:
			return;
	}
	this.matopeli.kaanny(suunta)
}

NappaimistonKuuntelija.prototype.keyUp = function(evt) {
}

Matopeli = function() {
	this.leveys = 40;
	this.korkeus = 20;
	this.matoNakyvissa = true;
	this.ajastinViive = 140
}

Matopeli.prototype.liiku = function() {
	this.mato.liiku(this.suunta)
	if (this.mato.paa.x == this.ruoka.x && this.mato.paa.y == this.ruoka.y) {
		this.ruoka = this.arvoRuoka();
		this.mato.syoRuoka();
	}

	if (this.mato.paa.x < 0 || this.mato.paa.x >= this.leveys || this.mato.paa.y < 0 || this.mato.paa.y >= this.korkeus) {
		this.lopeta();
	}

	pala = this.mato.paa.seuraava
	while (pala != undefined) {
		if (this.mato.paa.x == pala.x && this.mato.paa.y == pala.y) {
			this.lopeta();
		}
		pala = pala.seuraava
	}

}

Matopeli.prototype.aloita = function() {
	if (this.ajastin) {
		clearInterval(this.ajastin);
	}
	this.ajastin = setInterval(this.ajastinLogiikka,this.ajastinViive);
	this.mato = new Mato(3, 4)
	this.suunta = "oikea"
	this.ruoka = this.arvoRuoka();
	this.jatkuu = true;
	this.matoNakyvissa = true;
}

Matopeli.prototype.lopeta = function() {
	this.jatkuu = false;
}

Matopeli.prototype.kaanny = function(suunta) {
	this.suunta = suunta
	this.ajastinLogiikka();
	clearInterval(this.ajastin);
	this.ajastin = setInterval(this.ajastinLogiikka,this.ajastinViive);
}

Matopeli.prototype.arvoRuoka = function() {
	xkoord = Math.floor((Math.random()*this.leveys))
	ykoord = Math.floor((Math.random()*this.korkeus))
	return new Pala(xkoord, ykoord, undefined)
}

Matopeli.prototype.ajastinLogiikka = function() {
	if (matopeli.jatkuu) {
		matopeli.liiku();
	} else {
		matopeli.matoNakyvissa = !matopeli.matoNakyvissa
	}
	matopeli.paivitettava.piirra();

}

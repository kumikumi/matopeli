Mato = function(xkoord, ykoord) {
	this.paa = new Pala(xkoord, ykoord, undefined)
	this.hanta = this.paa;
	this.kasvuvara = 3;
}

Mato.prototype.poistaViimeinen = function() {
	if (this.hanta == this.paa) {
		return
	}
	this.hanta = this.hanta.edellinen
	this.hanta.seuraava = undefined
}

Mato.prototype.liiku = function(suunta) {
	switch(suunta) {
		case Suunta.YLOS:
			this.paa = new Pala(this.paa.x, this.paa.y-1, this.paa)
			break;
		case Suunta.ALAS:
			this.paa = new Pala(this.paa.x, this.paa.y+1, this.paa)
			break;
		case Suunta.OIKEA:
			this.paa = new Pala(this.paa.x+1, this.paa.y, this.paa)
			break;
		case Suunta.VASEN:
			this.paa = new Pala(this.paa.x-1, this.paa.y, this.paa)
			break;
	}
	this.paa.seuraava.edellinen = this.paa
	if (this.kasvuvara > 0) {
		this.kasvuvara--;
	} else {
		this.poistaViimeinen();
	}
}

Mato.prototype.syoRuoka = function() {
	this.kasvuvara = 1;
}


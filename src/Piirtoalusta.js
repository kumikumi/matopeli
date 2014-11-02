function Piirtoalusta(matopeli, piirtoalue) {
	this.matopeli = matopeli;
	this.piirtoalue = piirtoalue;
	ruudunleveys = 10;
	reuna = 40;
}

Piirtoalusta.prototype.piirra = function() {
	this.piirtoalue.fillStyle = "#a5a5ff";
	this.piirtoalue.fillRect(0, 0, matopeli.leveys*ruudunleveys+2*reuna, matopeli.korkeus*ruudunleveys+2*reuna)
	this.piirtoalue.fillStyle = "#aaaaaa";
	this.piirtoalue.fillRect(reuna, reuna, matopeli.leveys*ruudunleveys, matopeli.korkeus*ruudunleveys)
	//this.piirtoalue.clearRect ( 0, 0, 640, 480 );
	if (this.matopeli.matoNakyvissa) {
		this.piirtoalue.fillStyle = "#000000";
		pala = this.matopeli.mato.paa
		while (pala != undefined) {
			this.piirtoalue.fillRect(reuna + pala.x * ruudunleveys, reuna + pala.y * ruudunleveys, 10, 10)
			pala = pala.seuraava
		}
	}
	this.piirtoalue.fillStyle = "#FF0000";
	this.piirtoalue.fillRect(reuna+matopeli.ruoka.x*10, reuna+matopeli.ruoka.y*10, 10, 10)
}

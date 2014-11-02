//mato = new Mato(3, 4)
matopeli = new Matopeli();
piirtoalue = document.getElementById("piirtoalue").getContext("2d");
piirtoalusta = new Piirtoalusta(matopeli, piirtoalue)
nappaimistonKuuntelija = new NappaimistonKuuntelija(matopeli);
matopeli.paivitettava = piirtoalusta
matopeli.aloita();

window.addEventListener('keydown',nappaimistonKuuntelija.keyDown,true); 
window.addEventListener('keyup',nappaimistonKuuntelija.keyUp,true);

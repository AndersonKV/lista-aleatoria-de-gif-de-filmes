var intro = { "notes": [
{
    "gif": "gifs/b.gif",
    "diretor": 'Tim Burton',
    "filme": "hmmm"
},]};


var data = { "notes": [
{
    "gif": "gifs/beetlejuice.gif",
    "diretor": 'Tim Burton',
    "filme": "beetlejuice"
},
{
    "gif": "gifs/wonder-woman.gif",
    "diretor": 'Patty Jenkins',
    "filme": "wonder woman"
},
{
    "gif": "gifs/taxi-driver.gif",
    "diretor": 'Martin Scorcesse',
    "filme": "taxi driver"
},
{
    "gif": "gifs/pulp-fiction.gif",
    "diretor": 'Quentin Tarantino',
    "filme": "pulp fiction"
},
{
    "gif": "gifs/ghostbuster.gif",
    "diretor": 'ivan reitman',
    "filme": "ghostbusters"
},
{
    "gif": "gifs/night.gif",
    "diretor": 'henry selick',
    "filme": "The Nightmare Before Christmas"
},
{
    "gif": "gifs/fauno.gif",
    "diretor": 'guilherme del toro',
    "filme": "El laberinto del fauno"
},
{
    "gif": "gifs/psicose.gif",
    "diretor": 'alfred hitchcocko',
    "filme": "psicose"
},
{
    "gif": "gifs/psicose.gif",
    "diretor": 'alfred hitchcocko',
    "filme": "psicose"
},
{
    "gif": "gifs/legend.gif",
    "diretor": 'ridley scott',
    "filme": "legend"
},
{
    "gif": "gifs/evildead2.gif",
    "diretor": 'sam raimi',
    "filme": "evil dead 2"
},

]};

img = new Image();
img.src = intro.notes[0].gif
img.setAttribute("class", "gif");

var texto = document.createTextNode("hmmmm");
document.querySelector('.img').appendChild(img)
document.querySelector('.diretor').appendChild(texto)

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];

  img = new Image();
  img.src = item.gif
  img.setAttribute("class", "gif");

  document.querySelector('.filme').innerHTML = item.filme
  $('.img').html(img);
  document.querySelector('.diretor').innerHTML = item.diretor

}

function proximo() {
  randomize()
}

//Primeiro botão para alerta de Fila
var filaButton = document.getElementById('fila-button');
var clearButton = document.getElementById('clear-button');
var alertContainer = document.getElementById('alert-container');

filaButton.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = 'ACESSO SÓ DE IS';

  alertContainer.appendChild(alertElement);

  var audio = new Audio('IS-2.mp3');
  audio.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});


//Segundo botão para alerta de Pix
var pixIntermitente = document.getElementById('pix-intermitente');
var clearButton = document.getElementById('clear-pix');
var alertContainer = document.getElementById('alert-container');

pixIntermitente.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "PIX ESTÁ INTERMITENTE";

  alertContainer.appendChild(alertElement);

  var audiopix = new Audio('pix.mp3');
  audiopix.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Terceiro botão para alerta de Sefaz
var sefaz = document.getElementById('sefaz');
var clearButton = document.getElementById('clear-sefaz');
var alertContainer = document.getElementById('alert-container');

sefaz.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "SEFAZ ESTÁ INTERMITENTE";

  alertContainer.appendChild(alertElement);

  var audiosefaz = new Audio('sefaz.mp3');
  audiosefaz.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Quarto botão para alerta de Web
var web = document.getElementById('web');
var clearButton = document.getElementById('clear-web');
var alertContainer = document.getElementById('alert-container');

web.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "WEB FORA DO AR";

  alertContainer.appendChild(alertElement);

  var audioweb = new Audio('web.mp3');
  audioweb.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Quinto botão para alerta de Nuvem
var nuvem = document.getElementById('nuvem');
var clearButton = document.getElementById('clear-nuvem');
var alertContainer = document.getElementById('alert-container');

nuvem.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "NUVEM FISCAL INTERMITENTE";

  alertContainer.appendChild(alertElement);

  var audionuvem = new Audio('nuvemfiscal.mp3');
  audionuvem.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Sexto botão para alerta de Atenção
var nuvem = document.getElementById('atencao');
var clearButton = document.getElementById('clear-atencao');
var alertContainer = document.getElementById('alert-container');

atencao.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "ATENÇÃO, AVISO DO GESTOR!";

  alertContainer.appendChild(alertElement);

  var audioatencao = new Audio('atencao.mp3');
  audioatencao.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Sétimo botão para alerta de Marquinhos
var marquinhos = document.getElementById('marquinhos');
var clearButton = document.getElementById('clear-marquinhos');
var alertContainer = document.getElementById('alert-container');

marquinhos.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "ATENÇÃO, N1! MARQUINHOS SÃO PAULINO CHEGOU";

  alertContainer.appendChild(alertElement);

  var audiomarquinhos = new Audio('marquinhos2.mp3');
  audiomarquinhos.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Oitavo botão para alerta de Renato
var renato = document.getElementById('renato');
var clearButton = document.getElementById('clear-renato');
var alertContainer = document.getElementById('alert-container');

renato.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "ATENÇÃO, N1! PAPAI RENATO CHEGOU!";

  alertContainer.appendChild(alertElement);

  var audiorenato = new Audio('renato2.mp3');
  audiorenato.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Nono botão para alerta de Fernanda
var fernanda = document.getElementById('fernanda');
var clearButton = document.getElementById('clear-fernanda');
var alertContainer = document.getElementById('alert-container');

fernanda.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "TA BOM, FERNANDA! TA COM A GOTA!";

  alertContainer.appendChild(alertElement);

  var audiofernanda = new Audio('fernanda2.mp3');
  audiofernanda.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Décimo botão para alerta de Zenaide
var zenaide = document.getElementById('zenaide');
var clearButton = document.getElementById('clear-zenaide');
var alertContainer = document.getElementById('alert-container');

zenaide.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "ZENAIDE, TU QUER UM PAI É?";

  alertContainer.appendChild(alertElement);

  var audiozenaide = new Audio('Zenaide.mp3');
  audiozenaide.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});

//Décimo Primeiro botão para alerta de Francisco
var francisco = document.getElementById('francisco');
var clearButton = document.getElementById('clear-francisco');
var alertContainer = document.getElementById('alert-container');

francisco.addEventListener('click', () => {
  var alertElement = document.createElement('div');
  alertElement.className = 'alert';
  alertElement.textContent = "CALA A BOCA, FRANCISCO!";

  alertContainer.appendChild(alertElement);

  var audiofrancisco = new Audio('francisco.mp3');
  audiofrancisco.play();
});

clearButton.addEventListener('click', () => {
  alertContainer.innerHTML = '';
});





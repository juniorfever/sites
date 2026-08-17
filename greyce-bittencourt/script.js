/* Greyce Bittencourt — comportamento. Sem dependência, sem requisição externa. */
(function () {
  'use strict';

  /* ano do rodapé: nunca mais um "© 2023" envelhecendo sozinho */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* menu mobile */
  var botao = document.getElementById('menu');
  var nav = document.getElementById('nav');
  if (botao && nav) {
    botao.addEventListener('click', function () {
      var aberto = nav.classList.toggle('aberto');
      botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('aberto');
        botao.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* sombra no topo e botão flutuante depois da primeira dobra */
  var topo = document.querySelector('.topo');
  var flutuante = document.querySelector('.flutuante');
  function aoRolar() {
    var y = window.scrollY;
    if (topo) topo.classList.toggle('rolou', y > 12);
    if (flutuante) flutuante.classList.toggle('aparece', y > 620);
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  /* revelação na entrada — degrau curto para a lista não pipocar */
  var alvos = document.querySelectorAll('.revelar');
  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(alvos, function (el) { el.classList.add('visivel'); });
  } else {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada, i) {
        if (!entrada.isIntersecting) return;
        var el = entrada.target;
        setTimeout(function () { el.classList.add('visivel'); }, Math.min(i, 5) * 70);
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    Array.prototype.forEach.call(alvos, function (el) { obs.observe(el); });
  }

  /* item do menu ativo conforme a seção na tela */
  var secoes = document.querySelectorAll('main section[id]');
  var links = document.querySelectorAll('.nav a[href^="#"]');
  if (secoes.length && links.length && 'IntersectionObserver' in window) {
    var espiao = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        var id = entrada.target.id;
        Array.prototype.forEach.call(links, function (a) {
          a.classList.toggle('ativo', a.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Array.prototype.forEach.call(secoes, function (s) { espiao.observe(s); });
  }
})();

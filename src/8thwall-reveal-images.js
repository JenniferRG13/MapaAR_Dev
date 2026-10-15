/*
 * Botones para mostrar imágenes en una experiencia 8th Wall con A-Frame.
 * Cada botón debe incluir data-reveal-target="selector-de-la-imagen".
 * La imagen (por ejemplo, <a-image>) empieza oculta con visible="false".
 */
(function () {
  'use strict';

  function initImageReveal(root) {
    if (root.dataset.imageRevealReady === 'true') return;
    root.dataset.imageRevealReady = 'true';

    root.addEventListener('click', function (event) {
      var button = event.target.closest('[data-reveal-target]');
      if (!button || !root.contains(button)) return;

      var selector = button.getAttribute('data-reveal-target');
      var image = selector && document.querySelector(selector);
      if (!image) {
        console.warn('No se encontró la imagen indicada por:', selector);
        return;
      }

      // Por defecto, cada botón alterna la visibilidad de su imagen.
      var willShow = image.getAttribute('visible') !== true &&
        image.getAttribute('visible') !== 'true';
      image.setAttribute('visible', willShow);
      button.setAttribute('aria-expanded', String(willShow));

      // Opcional: enlaza un botón de cierre con data-reveal-close="#imagen".
      if (!willShow) image.setAttribute('visible', false);
    });

    root.addEventListener('click', function (event) {
      var closeButton = event.target.closest('[data-reveal-close]');
      if (!closeButton || !root.contains(closeButton)) return;

      var selector = closeButton.getAttribute('data-reveal-close');
      var image = selector && document.querySelector(selector);
      if (!image) return;

      image.setAttribute('visible', false);
      var revealButton = root.querySelector('[data-reveal-target="' + selector + '"]');
      if (revealButton) revealButton.setAttribute('aria-expanded', 'false');
    });
  }

  function start() {
    // El botón puede estar en la interfaz HTML fuera de <a-scene>.
    initImageReveal(document);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();

import { CartAddEvent } from '@theme/events';

/**
 * @param {CustomEvent} event
 */
document.addEventListener(CartAddEvent.eventName, function(event) {
  console.log(event);
});

/**
 * @param {MouseEvent} e
 */
document.addEventListener('click', (e) => {
  const target = e.target;
  if (!(target instanceof Element)) return;
  const btn = target.closest('[data-native-pre-order-btn]');
  if (!btn) return;

  // your logic here
  console.log('Pre-order button clicked:', btn);
});
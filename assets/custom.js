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


function scrollToHash() {
  const hash = window.location.hash; // "#faq"
  if (hash) {
    const id = hash.slice(1); // remove #
    const target = document.querySelector(`[data-section-id="${id}"]`);
    if (target) {
      let offset = 0;
      const stickyHeader = document.querySelector('.header[data-sticky-state="active"]');
      if (stickyHeader) {
        offset = stickyHeader.clientHeight;
      }

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  }
}

// Run on page load
scrollToHash();

// Run on hash change
window.addEventListener("hashchange", scrollToHash);

// Run when clicking hash link (even if it includes slash or full URL)
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener("click", event => {
    const linkUrl = new URL(link.href, window.location.href);

    if (
      linkUrl.pathname === window.location.pathname && // same page
      linkUrl.hash // has a hash
    ) {
      event.preventDefault();
      history.pushState(null, null, linkUrl.hash);
      scrollToHash();
    }
  });
});
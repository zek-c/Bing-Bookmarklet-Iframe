javascript:(function() {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://Bing.com');
  iframe.style.position = 'fixed';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.zIndex = '9999';

  document.body.appendChild(iframe);
})();

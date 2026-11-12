"use strict";

(() => {
  const { protocol, hostname } = window.location;
  const localHosts = ["localhost", "127.0.0.1", "[::1]"];
  if (protocol !== "https:" || localHosts.includes(hostname)) return;

  window.va = window.va || function (...args) {
    (window.vaq = window.vaq || []).push(args);
  };

  // Somente visualizações de página; nunca campos, mensagens ou URLs do WhatsApp.
  window.va("beforeSend", (event) => {
    if (event.type !== "pageview") return null;
    const url = new URL(event.url, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    url.search = "";
    url.hash = "";
    return { ...event, url: url.href };
  });

  const script = document.createElement("script");
  script.defer = true;
  script.src = "/_vercel/insights/script.js";
  document.head.appendChild(script);
})();

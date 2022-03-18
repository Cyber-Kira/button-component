import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll<HTMLElement>("pre code").forEach((el) => {
    hljs.highlightElement(el);
  });
});

// Markdown rendering helper — used by worklog.html and story.html
async function renderMarkdown(url, targetEl) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Not found');
    const text = await res.text();
    targetEl.innerHTML = marked.parse(text, { gfm: true, breaks: false });
  } catch (e) {
    targetEl.innerHTML = '<p style="color:#999;font-family:var(--mono);font-size:0.85rem;">Content could not be loaded.</p>';
  }
}

function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// Wrap h3 sections into collapsible <details>
function collapseSections(containerEl) {
  const h3s = Array.from(containerEl.querySelectorAll('h3'))
    .filter(h => h.textContent.trim() !== 'Goals');

  h3s.forEach(header => {
    const details = document.createElement('details');
    details.className = 'section-collapse';
    const summary = document.createElement('summary');
    summary.textContent = header.textContent;
    details.appendChild(summary);

    const toMove = [];
    let next = header.nextElementSibling;
    while (next) {
      if (['H2', 'H3'].includes(next.tagName)) break;
      toMove.push(next);
      next = next.nextElementSibling;
    }

    header.replaceWith(details);
    toMove.forEach(el => details.appendChild(el));
  });
}

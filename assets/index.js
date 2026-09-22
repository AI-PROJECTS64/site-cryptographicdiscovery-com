'use strict';
(() => {
  const form = document.getElementById('filters');
  const query = document.getElementById('query');
  const type = document.getElementById('type');
  const method = document.getElementById('method');
  const records = Array.from(document.querySelectorAll('.record'));
  const count = document.getElementById('result-count');
  const empty = document.getElementById('empty');
  const normalise = value => value.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  function filter() {
    const terms = normalise(query.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const record of records) {
      const matches = (!type.value || record.dataset.type === type.value) &&
        (!method.value || record.dataset.method === method.value) &&
        terms.every(term => normalise(record.dataset.search).includes(term));
      record.hidden = !matches;
      if (matches) visible++;
    }
    count.textContent = `${visible} of ${records.length} records`;
    empty.hidden = visible !== 0;
  }
  function openLinkedRecord() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const record = records.find(item => item.id === id);
    if (!record) return;
    if (record.hidden) { form.reset(); filter(); }
    record.open = true;
    record.scrollIntoView({block: 'start'});
  }
  form.hidden = false;
  count.hidden = false;
  form.addEventListener('input', filter);
  form.addEventListener('change', filter);
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', () => queueMicrotask(filter));
  window.addEventListener('hashchange', openLinkedRecord);
  filter();
  openLinkedRecord();
})();

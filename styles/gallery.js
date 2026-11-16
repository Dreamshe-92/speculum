/* 搜索与分类筛选：只改变已有卡片的可见性，不生成死按钮。 */
(function(){
  var data = window.SPECULUM_CASES || [];
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-case]'));
  var input = document.getElementById('q');
  var select = document.getElementById('filter');
  var result = document.getElementById('result');
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var empty = document.getElementById('empty');
  if (!cards.length || !input || !select || !result) return;
  function norm(s){ return String(s || '').toLowerCase().replace(/\s+/g,' '); }
  function apply(){
    var q = norm(input.value.trim());
    var key = select.value;
    var shown = 0;
    cards.forEach(function(card){
      var text = norm(card.getAttribute('data-search'));
      var match = (!q || text.indexOf(q) !== -1) && (!key || card.getAttribute('data-key') === key);
      card.hidden = !match;
      if (match) shown += 1;
    });
    sections.forEach(function(sec){
      var visible = sec.querySelectorAll('[data-case]:not([hidden])').length;
      sec.hidden = visible === 0;
    });
    result.textContent = '照见 ' + shown + ' / ' + data.length + ' 例' + (q ? ' · 关键词「' + input.value.trim() + '」' : '') + (key ? ' · 已按分类筛选' : '');
    if (empty) empty.hidden = shown !== 0;
  }
  input.addEventListener('input', apply);
  select.addEventListener('change', apply);
  apply();
})();

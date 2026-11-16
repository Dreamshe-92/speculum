/* 案例页：把原文模板与使用者填写的任务拼成可复制提示词。 */
(function(){
  var tpl = document.getElementById('prompt-source');
  var out = document.getElementById('prompt-preview');
  var task = document.getElementById('prompt-task');
  var cons = document.getElementById('prompt-constraints');
  var btn = document.getElementById('copy-prompt');
  var status = document.getElementById('copy-status');
  if (!tpl || !out || !task || !cons || !btn || !status) return;
  var node = tpl.content.querySelector('pre');
  if (!node) return;
  var base = node.textContent;

  function fill(text, label, value){
    var re = new RegExp('(【' + label + '】\\n)(\\[[^\\]]*\\])');
    return text.replace(re, function(m, head, placeholder){
      return head + (value.trim() || placeholder);
    });
  }
  function render(){
    var text = fill(fill(base, '我的任务', task.value), '我的约束', cons.value);
    out.textContent = text;
    return text;
  }
  function feedback(ok){
    status.textContent = ok ? '已复制，可直接粘贴给 AI。' : '复制受限，请选中上方预览文本手动复制。';
    btn.textContent = ok ? '已复制' : '手动复制';
    window.setTimeout(function(){ btn.textContent = '复制提示词'; }, 2400);
  }
  function fallback(text){
    var range = document.createRange();
    range.selectNodeContents(out);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    sel.removeAllRanges();
    feedback(ok);
  }
  btn.addEventListener('click', function(){
    var text = render();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function(){ feedback(true); }, function(){ fallback(text); });
    } else {
      fallback(text);
    }
  });
  task.addEventListener('input', render);
  cons.addEventListener('input', render);
  render();
})();

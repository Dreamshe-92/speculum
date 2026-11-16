/* 热门案例 · 12 个活示例交互，逐字取自附件《热门优秀案例》实操工坊脚本。 */
// ===== Workshop interactions =====
function $(id){return document.getElementById(id)}
// copy buttons
document.querySelectorAll('.copy-btn').forEach(function(b){b.addEventListener('click',function(){var el=$(b.getAttribute('data-copy'));if(!el)return;var txt=el.textContent.trim();function done(){var o=b.textContent;b.textContent='已复制 ✓';setTimeout(function(){b.textContent=o},1600)}if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(function(){fallback()})}else{fallback()}function fallback(){var ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){b.textContent='复制失败，请长按文本'}document.body.removeChild(ta)}})});
// 1 wordmark
var wmR=$('wmRange');if(wmR){wmR.addEventListener('input',function(){$('wmText').style.fontSize=wmR.value+'px';$('wmVal').textContent=wmR.value+'px'})}
// 2 patmos tap
var pb=$('patmosBox');if(pb){pb.addEventListener('click',function(){pb.classList.toggle('show-nav')})}
// 3 kinetic scroll
var kin=$('kinBox');if(kin){var lines=kin.querySelectorAll('.kin-line');function upd(){var st=kin.scrollTop;lines.forEach(function(l){var s=parseFloat(l.getAttribute('data-speed'));l.style.transform='translateX('+(st*s)+'px)';l.style.opacity=Math.max(.25,1-Math.abs(st)*0.0012)})}kin.addEventListener('scroll',upd);upd()}
// 4 tilt
var stage=$('tiltStage'),btn=$('tiltBtn');if(stage&&btn){function tilt(x,y){var r=btn.getBoundingClientRect();var dx=(x-(r.left+r.width/2))/ (r.width/2),dy=(y-(r.top+r.height/2))/(r.height/2);btn.style.transform='perspective(700px) rotateY('+(dx*14)+'deg) rotateX('+(-dy*14)+'deg)'}stage.addEventListener('mousemove',function(e){tilt(e.clientX,e.clientY)});stage.addEventListener('touchmove',function(e){if(e.touches[0])tilt(e.touches[0].clientX,e.touches[0].clientY)},{passive:true});stage.addEventListener('mouseleave',function(){btn.style.transition='transform .3s cubic-bezier(.2,.8,.2,1)';btn.style.transform='perspective(700px)';setTimeout(function(){btn.style.transition=''},320)})}
// 5 words
var wb=$('wordsBox');if(wb){var raw=wb.textContent.trim().split(/\s+/);wb.innerHTML=raw.map(function(w,i){return '<span class="w" style="transition-delay:'+(i*45)+'ms">'+w+'</span>'}).join(' ');$('wordsPlay').addEventListener('click',function(){wb.classList.remove('play');void wb.offsetWidth;wb.classList.add('play')});$('wordsReset').addEventListener('click',function(){wb.classList.remove('play')})}
// 6 magnetic + spotlight
var mag=$('magBtn'),magStage=$('magStage');if(mag&&magStage){magStage.addEventListener('mousemove',function(e){var r=mag.getBoundingClientRect();var cx=r.left+r.width/2,cy=r.top+r.height/2;var dx=e.clientX-cx,dy=e.clientY-cy;if(Math.hypot(dx,dy)<140){mag.style.transform='translate('+(dx*0.35)+'px,'+(dy*0.35)+'px)'}else{mag.style.transform=''}});magStage.addEventListener('mouseleave',function(){mag.style.transition='transform .25s';mag.style.transform='';setTimeout(function(){mag.style.transition=''},260)})}
var spot=$('spotCard');if(spot){spot.addEventListener('mousemove',function(e){var r=spot.getBoundingClientRect();spot.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');spot.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})}
// 7 periodic
var perData=[['H','氢',1],['He','氦',2],['Li','锂',3],['Be','铍',4],['B','硼',5],['C','碳',6],['N','氮',7],['O','氧',8],['F','氟',9],['Ne','氖',10],['Na','钠',11],['Mg','镁',12]];
var buzz=['赋能','抓手','闭环','对齐','沉淀','颗粒度','心智','链路','势能','破圈','增量','复盘'];
var perGrid=$('perGrid'),perBuzz=false;
function renderPer(){perGrid.innerHTML=perData.map(function(c,i){return perBuzz?'<div class="per-cell buzz"><b>'+buzz[i]+'</b>'+c[2]+' · 黑话</div>':'<div class="per-cell"><b>'+c[0]+'</b>'+c[1]+' · '+c[2]+'</div>'}).join('')}
if(perGrid){renderPer();$('perToggle').addEventListener('click',function(){perBuzz=!perBuzz;renderPer();this.textContent=perBuzz?'换回元素原版':'换成营销黑话版';this.classList.toggle('on',perBuzz)})}
// 8 moon + tide
function moonUpdate(){var d=parseInt($('moonRange').value,10);$('moonVal').textContent=d+' 天';var ill=Math.round((1-Math.cos(2*Math.PI*d/29.5))/2*100);var names=['新月','娥眉月','娥眉月','上弦月','盈凸月','盈凸月','满月','亏凸月','亏凸月','下弦月','残月','残月'];var idx=Math.min(11,Math.floor(d/29.5*12));if(d<=1){idx=0;ill=Math.max(ill,0)}if(d>=14&&d<=16){idx=6}$('moonName').textContent=names[idx];$('moonDesc').textContent='月龄 '+d+' 天 · 照亮约 '+ill+'%';var r=42,cx=50,cy=50;var rx=Math.abs(Math.cos(2*Math.PI*d/29.5))*r;var sweepOuter=d<15?1:0;var sweepInner=d<15?(d<7.4?0:1):(d<22?1:0);$('moonShadow').setAttribute('d','M '+cx+' '+(cy-r)+' A '+r+' '+r+' 0 1 '+sweepOuter+' '+cx+' '+(cy+r)+' A '+rx.toFixed(1)+' '+r+' 0 1 '+sweepInner+' '+cx+' '+(cy-r)+' Z');var pts=[];for(var x=0;x<=300;x+=10){var y=32-18*Math.sin(x/300*Math.PI*2+ (d/29.5)*Math.PI);pts.push((x===0?'M':'L')+x+' '+y.toFixed(1))}$('tidePath').setAttribute('d',pts.join(' '))}
if($('moonRange')){$('moonRange').addEventListener('input',moonUpdate);moonUpdate()}
// 9 color lab
var themes={teal:{bg:'#ecfdf5',ink:'#123332',btn:'#0f766e',btnInk:'#fff'},amber:{bg:'#fffbeb',ink:'#3a2a10',btn:'#b45309',btnInk:'#fff'},slate:{bg:'#f1f5f9',ink:'#1e293b',btn:'#334155',btnInk:'#fff'},plum:{bg:'#fdf2f7',ink:'#3d1526',btn:'#7e2a4e',btnInk:'#fff'}};
var darkMode=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
document.querySelectorAll('.swatch').forEach(function(s){s.addEventListener('click',function(){document.querySelectorAll('.swatch').forEach(function(x){x.classList.remove('on')});s.classList.add('on');var th=themes[s.getAttribute('data-theme')];var m=$('colorMock');if(darkMode){m.style.background='#232320';m.style.color='#f2efe8'}else{m.style.background=th.bg;m.style.color=th.ink}var b=$('mockBtn');b.style.background=th.btn;b.style.color=th.btnInk})});
var mb=$('mockBtn');if(mb){var th0=themes.teal;mb.style.background=th0.btn;mb.style.color=th0.btnInk;var cm=$('colorMock');if(darkMode){cm.style.background='#232320';cm.style.color='#f2efe8'}else{cm.style.background=th0.bg;cm.style.color=th0.ink}}
// 10 type lab
var pairs={a:{ff:'"PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',fw:900,ls:'-0.02em',label:'Clash + Satoshi 风'},b:{ff:'"Songti SC","Noto Serif CJK SC","STSong",serif',fw:900,ls:'0',label:'衬线标题'},c:{ff:'"PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',fw:500,ls:'0',label:'全无衬线'}};
document.querySelectorAll('[data-pair]').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('[data-pair]').forEach(function(x){x.classList.remove('on')});b.classList.add('on');var pr=pairs[b.getAttribute('data-pair')];var h=$('typeHead');h.style.fontFamily=pr.ff;h.style.fontWeight=pr.fw;h.style.letterSpacing=pr.ls})});
// 11 timing
function timing(btnId,dotId,msgId,delay){var b=$(btnId);if(!b)return;b.addEventListener('click',function(){var dot=$(dotId),msg=$(msgId);dot.textContent='…';msg.textContent='等待反馈中…';setTimeout(function(){dot.textContent='✓';dot.style.background='var(--accent)';dot.style.color='#fff';msg.textContent='反馈到达 · '+delay+'ms'},delay)})}
timing('btnFast','dotFast','fastMsg',150);timing('btnSlow','dotSlow','slowMsg',650);
// 12 impeccable toggle
var impT=$('impToggle');if(impT){impT.addEventListener('click',function(){var bad=$('impBad'),good=$('impGood');var showGood=bad.classList.contains('hidden')===false;bad.classList.toggle('hidden',showGood);good.classList.toggle('hidden',!showGood);impT.textContent=showGood?'看 AI 味版':'看去味版'})}
// 触屏 / 键盘可及性：倾斜大按钮点按也给一次可见反馈（不改样例语义）
var tb=$('tiltBtn');if(tb){tb.addEventListener('click',function(){
  tb.style.transform='perspective(700px) rotateY(10deg) rotateX(-8deg)';
  setTimeout(function(){tb.style.transition='transform .3s cubic-bezier(.2,.8,.2,1)';
    tb.style.transform='perspective(700px)';
    setTimeout(function(){tb.style.transition=''},320)},260);
})}


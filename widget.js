/* 리치해빗 리뷰 위젯 — 제로투원 제작 2026-09-02
   하는 일
   1) 상품 카드의 "사용후기 : -465" 를 ★4.9 · 리뷰 465 로 교체
   2) 상품 상세 상단에 리뷰 요약바 + 포토리뷰 썸네일 삽입
   3) 메인 히어로 배너에 비네팅(테두리 어둡게) 적용
   PC / 모바일 동일 적용. 지우려면 스크립트태그만 삭제하면 원상복구.
*/
(function () {
  'use strict';
  var RV = {"9":{"avg":4.9,"cnt":465,"photo":312,"pics":["https://phinf.pstatic.net/checkout.phinf/20260901_14/1788221223390UWSlh_JPEG/1.jpg","https://phinf.pstatic.net/checkout.phinf/20260811_268/1786374490004N7U2j_JPEG/IMG_9140.jpeg","https://phinf.pstatic.net/checkout.phinf/20260806_170/1785980420726NDhjX_JPEG/image.jpg","https://phinf.pstatic.net/checkout.phinf/20260803_239/1785743752345Qs0Yp_JPEG/1785743742250.jpg","https://phinf.pstatic.net/checkout.phinf/20260718_41/1784368287737FAgAA_JPEG/74511.jpg","https://phinf.pstatic.net/checkout.phinf/20260716_200/1784202389364tWJLu_JPEG/IMG_1956.jpeg"]},"10":{"avg":4.9,"cnt":47,"photo":19,"pics":["https://phinf.pstatic.net/checkout.phinf/20260901_164/17882210734194hULq_JPEG/1.jpg","https://phinf.pstatic.net/checkout.phinf/20260723_231/1784816216115MnE3c_JPEG/tmp_7425667522814449909.jpg","https://phinf.pstatic.net/checkout.phinf/20260519_254/1779179069500wFQc5_JPEG/1779179055220.jpg","https://phinf.pstatic.net/checkout.phinf/20260514_83/1778744713060xnBv6_PNG/EC8AA4ED81ACEBA6B0EC83B7202026-05-1420164503.png","https://phinf.pstatic.net/checkout.phinf/20260512_7/1778588739758d3pw6_JPEG/image.jpg","https://phinf.pstatic.net/checkout.phinf/20260222_223/1771766969069n6svp_JPEG/1771766956594.jpg"]},"46":{"avg":4.9,"cnt":107,"photo":61,"pics":["https://phinf.pstatic.net/checkout.phinf/20260830_94/1788100638961yhogy_JPEG/image.jpg","https://phinf.pstatic.net/checkout.phinf/20260813_124/1786611738475HkjId_JPEG/1000022158.jpg","https://phinf.pstatic.net/checkout.phinf/20260810_246/1786329955523AfzYW_JPEG/1786329944396.jpg","https://phinf.pstatic.net/checkout.phinf/20260722_236/1784683792276fCu1B_JPEG/1784675761074.jpg","https://phinf.pstatic.net/checkout.phinf/20260717_176/1784296844527iXQCw_JPEG/1000023160.jpg","https://phinf.pstatic.net/checkout.phinf/20260717_95/1784246712332oE1Hx_JPEG/IMG_4344.jpeg"]},"11":{"avg":4.9,"cnt":227,"photo":140,"pics":["https://phinf.pstatic.net/checkout.phinf/20260822_106/1787397893415lybVc_JPEG/PayApp_20260822_202437_8887557403428892655.jpg","https://phinf.pstatic.net/checkout.phinf/20260726_28/1785037825872r3pCb_JPEG/1785037793328.jpg","https://phinf.pstatic.net/checkout.phinf/20260710_126/1783657947851sLun6_JPEG/74261.jpg","https://phinf.pstatic.net/checkout.phinf/20260710_35/17836568841572o05t_JPEG/1000038692.jpg","https://phinf.pstatic.net/checkout.phinf/20260705_145/1783237268192dfmFn_JPEG/1000033587.jpg","https://phinf.pstatic.net/checkout.phinf/20260625_173/1782348218184G076D_JPEG/IMG_7177.jpeg"]},"47":{"avg":4.8,"cnt":12,"photo":8,"pics":["https://phinf.pstatic.net/checkout.phinf/20260812_43/178650286059338H2q_JPEG/20260807_084150.jpg","https://phinf.pstatic.net/checkout.phinf/20260807_24/1786078703426O384E_JPEG/KakaoTalk_20260807_135746999_05.jpg","https://phinf.pstatic.net/checkout.phinf/20260802_17/1785632125789shOuC_JPEG/IMG_2228.jpeg","https://phinf.pstatic.net/checkout.phinf/20260730_193/1785404395454ABAn0_JPEG/KakaoTalk_20260730_183713543.jpg","https://phinf.pstatic.net/checkout.phinf/20260722_80/17847070330959E0q9_JPEG/IMG_9237.jpeg","https://phinf.pstatic.net/checkout.phinf/20260625_61/1782348321734bN72T_JPEG/IMG_7177.jpeg"]}};

  /* ---------- CSS ---------- */
  var CSS = [
    '.z21-rv{display:inline-flex;align-items:center;gap:5px;vertical-align:middle}',
    '.z21-stars{position:relative;display:inline-block;font-size:13px;line-height:1;letter-spacing:1px;color:#e2ded7;white-space:nowrap}',
    '.z21-stars::before{content:"\\2605\\2605\\2605\\2605\\2605"}',
    '.z21-stars i{position:absolute;left:0;top:0;overflow:hidden;white-space:nowrap;color:#f0a500}',
    '.z21-stars i::before{content:"\\2605\\2605\\2605\\2605\\2605"}',
    '.z21-score{font-size:12px;font-weight:700;color:#222;letter-spacing:-.2px}',
    '.z21-cnt{font-size:12px;color:#8a8a8a;font-style:normal;letter-spacing:-.3px}',
    '.z21-photo{font-size:11px;color:#b08d57;font-style:normal;letter-spacing:-.3px}',

    /* 상세 상단 요약바 */
    '.z21-sum{margin:14px 0 18px;padding:14px 16px;border:1px solid #ece7e0;border-radius:10px;background:#fbf9f6}',
    '.z21-sum__head{display:flex;align-items:center;flex-wrap:wrap;gap:8px}',
    '.z21-sum .z21-stars{font-size:17px;letter-spacing:2px}',
    '.z21-sum__score{font-size:18px;font-weight:700;color:#1d1d1d;line-height:1}',
    '.z21-sum__cnt{font-size:13px;color:#6d6d6d}',
    '.z21-sum__link{margin-left:auto;font-size:13px;color:#8a6d3b;text-decoration:underline;white-space:nowrap}',
    '.z21-sum__pics{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-top:12px}',
    '.z21-sum__pics a{display:block;position:relative;padding-top:100%;overflow:hidden;border-radius:6px;background:#efeae3}',
    '.z21-sum__pics img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}',

    /* 히어로 비네팅 */
    '.z21-hero{position:relative}',
    '.z21-hero::after{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;z-index:2;',
    'background:radial-gradient(125% 95% at 50% 42%,rgba(0,0,0,0) 42%,rgba(0,0,0,.16) 76%,rgba(0,0,0,.40) 100%)}',

    '@media (max-width:767px){',
    '.z21-stars{font-size:12px}.z21-score,.z21-cnt{font-size:11px}.z21-photo{display:none}',
    '.z21-sum{margin:12px 0 16px;padding:12px 13px;border-radius:8px}',
    '.z21-sum .z21-stars{font-size:15px}.z21-sum__score{font-size:16px}',
    '.z21-sum__link{margin-left:0;width:100%;text-align:right}',
    '.z21-sum__pics{grid-template-columns:repeat(4,1fr)}',
    '.z21-hero::after{background:radial-gradient(140% 100% at 50% 45%,rgba(0,0,0,0) 46%,rgba(0,0,0,.14) 78%,rgba(0,0,0,.34) 100%)}',
    '}'
  ].join('');

  function injectCss() {
    if (document.getElementById('z21-css')) return;
    var s = document.createElement('style');
    s.id = 'z21-css';
    s.appendChild(document.createTextNode(CSS));
    (document.head || document.documentElement).appendChild(s);
  }

  function stars(avg, cls) {
    var pct = Math.max(0, Math.min(100, avg / 5 * 100));
    return '<span class="z21-stars' + (cls ? ' ' + cls : '') + '"><i style="width:' + pct.toFixed(1) + '%"></i></span>';
  }

  function num(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  /* ---------- 1) 상품 카드 ---------- */
  function paintCards() {
    var cards = document.querySelectorAll('li[id^="anchorBoxId_"]');
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (card.getAttribute('data-z21') === '1') continue;
      var m = /anchorBoxId_(\d+)/.exec(card.id || '');
      if (!m) continue;
      var rows = card.querySelectorAll('ul.spec > li'), slot = null;
      for (var j = 0; j < rows.length; j++) {
        if (rows[j].textContent.indexOf('사용후기') > -1) { slot = rows[j]; break; }
      }
      if (!slot) continue;
      card.setAttribute('data-z21', '1');
      var d = RV[m[1]];
      if (!d || !d.cnt) { slot.style.display = 'none'; continue; }
      var h = '<span class="z21-rv" aria-label="평점 ' + d.avg + '점, 리뷰 ' + d.cnt + '개">';
      h += stars(d.avg);
      h += '<span class="z21-score">' + d.avg.toFixed(1) + '</span>';
      h += '<em class="z21-cnt">리뷰 ' + num(d.cnt) + '</em>';
      if (d.photo) h += '<em class="z21-photo">포토 ' + num(d.photo) + '</em>';
      h += '</span>';
      slot.innerHTML = h;
    }
  }

  /* 위젯이 못 붙은 자리에 마이너스가 남으면 숨김.
     ※ 같은 값을 반복해서 쓰면 MutationObserver 가 자기 자신을 다시 부르는 무한루프가 된다.
        반드시 처리 표시(data-z21hid)를 남기고 한 번만 건드릴 것. */
  function killNegative() {
    var els = document.querySelectorAll('ul.spec > li:not([data-z21hid])');
    for (var i = 0; i < els.length; i++) {
      var t = els[i].textContent || '';
      if (t.indexOf('사용후기') > -1 && /-\s*\d/.test(t) && !els[i].querySelector('.z21-rv')) {
        els[i].setAttribute('data-z21hid', '1');
        els[i].style.display = 'none';
      }
    }
  }

  /* ---------- 2) 상품 상세 상단 요약바 ---------- */
  function currentProductNo() {
    var m = /[?&]product_no=(\d+)/.exec(location.search);
    if (m) return m[1];
    m = /\/product\/[^/]+\/(\d+)\//.exec(location.pathname);
    return m ? m[1] : null;
  }

  function paintDetail() {
    if (document.querySelector('.z21-sum')) return;
    var pno = currentProductNo();
    if (!pno) return;
    var d = RV[pno];
    if (!d || !d.cnt) return;
    var info = document.querySelector('.infoArea');
    var head = info && info.querySelector('.headingArea');
    if (!info || !head) return;

    var box = document.createElement('div');
    box.className = 'z21-sum';
    var h = '<div class="z21-sum__head">' + stars(d.avg);
    h += '<span class="z21-sum__score">' + d.avg.toFixed(1) + '</span>';
    h += '<span class="z21-sum__cnt">구매자 리뷰 ' + num(d.cnt) + '개';
    if (d.photo) h += ' · 포토 ' + num(d.photo) + '장';
    h += '</span>';
    h += '<a href="#prdReview" class="z21-sum__link">리뷰 전체보기 &rsaquo;</a></div>';
    if (d.pics && d.pics.length) {
      h += '<div class="z21-sum__pics">';
      for (var i = 0; i < Math.min(6, d.pics.length); i++) {
        h += '<a href="#prdReview"><img src="' + d.pics[i] + '" alt="구매자 포토리뷰" loading="lazy"></a>';
      }
      h += '</div>';
    }
    box.innerHTML = h;
    head.parentNode.insertBefore(box, head.nextSibling);

    var links = box.querySelectorAll('a[href="#prdReview"]');
    for (var k = 0; k < links.length; k++) {
      links[k].addEventListener('click', function (e) {
        var target = document.getElementById('prdReview');
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  /* ---------- 3) 히어로 비네팅 ---------- */
  function paintHero() {
    if (!/^\/($|index)/.test(location.pathname)) return;
    var c = document.getElementById('contents');
    if (!c) return;
    var hero = c.querySelector('.xans-smart-banner-admin');
    if (hero && hero.className.indexOf('z21-hero') === -1) hero.className += ' z21-hero';
  }

  var observer = null, scheduled = false, runs = 0;

  function paint() {
    try { injectCss(); paintCards(); killNegative(); paintDetail(); paintHero(); } catch (e) { }
  }

  /* 감시 중 자기 변경에 다시 반응하지 않도록 관찰을 끊고 그린 뒤 다시 붙인다.
     추가로 프레임당 1회로 묶고, 총 실행 횟수에 상한을 둬서 어떤 경우에도 폭주하지 않게 한다. */
  function run() {
    if (observer) observer.disconnect();
    paint();
    if (observer && runs < 300) observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  function schedule() {
    if (scheduled || runs >= 300) return;
    scheduled = true;
    (window.requestAnimationFrame || window.setTimeout)(function () {
      scheduled = false;
      runs++;
      run();
    }, 60);
  }

  if (window.MutationObserver) observer = new MutationObserver(schedule);

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();
  window.addEventListener('load', schedule);
})();

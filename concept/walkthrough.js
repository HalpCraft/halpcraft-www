/* HalpCraft Onboarding Nudges walkthrough (animated mock-up).
   Usage: <div class="wt" data-walkthrough></div> + this script + walkthrough.css.
   Plays when visible, pauses off-screen, never autoplays with reduced motion. */
(function () {
  var LOGO = '/logos/halpcraft-logo-on-light.png';
  var CAPTIONS = [
    'Buy once. $49 NZD per new hire, no subscription.',
    'Checkout is handled securely by Stripe.',
    'Tell us who is starting and when. About two minutes.',
    'One email, with one calendar file.',
    'All ten nudges land in your calendar, across 150 days.',
    'Each one arrives on the day it matters, with what to do and say.'
  ];
  var NUDGES = [[-7,'Week before'],[0,'Day 1'],[5,'Week 1'],[12,'Day 12'],[25,'Day 25'],[40,'Day 40'],[80,'Day 80'],[100,'Day 100'],[125,'Day 125'],[150,'Day 150']];
  var FIELDS = [['Your name','Sam Walker'],["New hire's name",'Aroha Tane'],['Start date','19 October 2026'],['Nudges land at','9:00 am'],['Work pattern','Standard, Mon to Fri']];

  function bar(where) {
    return '<div class="wt-bar"><img src="' + LOGO + '" alt="" /><span class="where">' + where + '</span></div>';
  }
  function markup() {
    var pts = NUDGES.map(function (n) {
      var pct = (NUDGES.indexOf(n) / (NUDGES.length - 1)) * 100;
      return '<div class="pt" style="left:' + pct.toFixed(2) + '%"><span>' + n[1] + '</span></div>';
    }).join('');
    var fields = FIELDS.map(function (f, i) {
      return '<label class="f' + (i === 4 ? ' full' : '') + '"><small>' + f[0] + '</small><span class="in"><span class="tx"></span><i></i></span></label>';
    }).join('');
    return '' +
    '<div class="wt-frame"><div class="wt-stage" aria-hidden="true">' +
      '<section class="wt-scene s1">' + bar('halpcraft.com/onboarding-nudges') +
        '<div class="wt-body"><div class="card"><p class="wt-label">HalpCraft Onboarding Nudges</p>' +
        '<p class="wt-h">A little help, right when you need it.</p>' +
        '<p class="wt-p">Ten short nudges in your calendar across a new hire’s first 150 days.</p>' +
        '<div class="price"><b>$49 NZD</b><span>per new hire, one-time</span></div>' +
        '<span class="wt-btn" data-t="buy">Buy now</span></div></div></section>' +
      '<section class="wt-scene s2">' + bar('Secure checkout') +
        '<div class="wt-body"><div class="card"><div class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#F3EFE7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>' +
        '<p class="amt">Payment confirmed</p>' +
        '<div class="row"><span>Onboarding Nudges, Single</span><span>$49.00 NZD</span></div>' +
        '<p class="fine">Paid securely with Stripe. Receipt sent by email.</p>' +
        '<p class="next">Taking you to setup…</p></div></div></section>' +
      '<section class="wt-scene s3">' + bar('Set up your new hire') +
        '<div class="wt-body"><div class="card"><p class="wt-label">Purchase confirmed</p>' +
        '<p class="wt-h">Let’s set up your new hire’s onboarding.</p>' +
        '<div class="fields">' + fields + '</div>' +
        '<span class="wt-btn wt-btn--ink" data-t="send">Send my calendar</span></div></div></section>' +
      '<section class="wt-scene s4"><div class="inbox"><h4>Inbox</h4>' +
        '<div class="msg new" data-t="msg"><b>HalpCraft</b>Your Onboarding Nudges calendar for Aroha Tane is ready</div>' +
        '<div class="msg"><b>Payroll</b>Pay run confirmation for this week</div>' +
        '<div class="msg"><b>Team chat</b>3 new mentions in #rosters</div></div>' +
        '<div class="mail"><img src="' + LOGO + '" alt="" /><div class="rule"></div>' +
        '<p class="wt-label">Your calendar is ready</p><p class="wt-h">10 nudges. 150 days. One click.</p>' +
        '<p class="wt-p">Your personalised onboarding sequence for <b style="color:#171714">Aroha Tane</b> is ready to import.</p>' +
        '<span class="wt-btn" data-t="dl">Download my nudge calendar →</span>' +
        '<p class="wt-p" style="font-size:13px">Works with Google Calendar, Outlook and Apple Calendar.</p></div></section>' +
      '<section class="wt-scene s5">' + bar('Your calendar') +
        '<div class="wt-body"><div class="card"><p class="wt-label">Imported</p>' +
        '<p class="count">Added to your calendar: <em class="n">0</em> of 10 nudges</p>' +
        '<div class="line">' + pts + '</div>' +
        '<div class="ends"><span>Starts the week before day one</span><span>Finishes on Day 150</span></div></div></div></section>' +
      '<section class="wt-scene s6"><div class="day"><p class="wt-label">Your calendar</p><h4>Monday 2 November</h4>' +
        '<div class="slot"><b>8:30</b><span>Team huddle</span></div>' +
        '<div class="slot"><b>9:00</b><span class="ev" data-t="ev">Nudge 4 of 10: The Pace Setter<small>Aroha Tane · Day 12</small></span></div>' +
        '<div class="slot"><b>10:00</b><span>Supplier call</span></div>' +
        '<div class="slot"><b>11:30</b><span></span></div></div>' +
        '<div class="toast"><b>In 15 minutes</b>Nudge 4 of 10: The Pace Setter</div>' +
        '<div class="guide"><p class="wt-label">Day 12 · The Pace Setter</p><p class="wt-h">Normalise the learning curve.</p>' +
        '<p class="wt-p">Two weeks in, the doubt is just starting. Ask one question, then listen.</p>' +
        '<p class="say">“What’s one thing you’ve come across that you’re not 100% sure about, but haven’t asked yet?”</p></div></section>' +
      '<div class="wt-cursor"><svg viewBox="0 0 24 24"><path d="M4 2l15 11-6.5 1.3L9.8 21 4 2z" fill="#171714" stroke="#F3EFE7" stroke-width="1.4" stroke-linejoin="round"/></svg></div>' +
    '</div></div>' +
    '<div class="wt-under"><button class="wt-play" type="button" aria-label="Pause walkthrough"></button>' +
      '<p class="wt-cap" aria-live="polite"></p>' +
      '<div class="wt-steps" role="group" aria-label="Walkthrough steps">' +
        CAPTIONS.map(function (c, i) { return '<button type="button" aria-label="Step ' + (i + 1) + ': ' + c + '"></button>'; }).join('') +
      '</div></div>';
  }

  var PLAY = '<svg viewBox="0 0 14 14"><path d="M3 1.5v11l9-5.5z" fill="currentColor"/></svg>';
  var PAUSE = '<svg viewBox="0 0 14 14"><path d="M3 1.5h3v11H3zM8 1.5h3v11H8z" fill="currentColor"/></svg>';

  function init(root) {
    root.innerHTML = markup();
    var frame = root.querySelector('.wt-frame'), stage = root.querySelector('.wt-stage');
    var scenes = [].slice.call(root.querySelectorAll('.wt-scene'));
    var cursor = root.querySelector('.wt-cursor'), cap = root.querySelector('.wt-cap');
    var playBtn = root.querySelector('.wt-play'), stepBtns = [].slice.call(root.querySelectorAll('.wt-steps button'));
    var scale = 1;
    var W = 960, H = 600;
    function fit() {
      var narrow = frame.clientWidth < 560;
      root.classList.toggle('narrow', narrow);
      W = narrow ? 540 : 960; H = narrow ? 640 : 600;
      scale = frame.clientWidth / W;
      stage.style.transform = 'scale(' + scale + ')'; frame.style.height = (H * scale) + 'px';
    }
    fit(); window.addEventListener('resize', fit);

    function q(sel) { return scenes[cur].querySelector(sel); }
    function aim(sel, dx, dy) {
      var el = q(sel); if (!el) return;
      var s = stage.getBoundingClientRect(), r = el.getBoundingClientRect();
      if (!r.width) return;
      cursor.style.left = ((r.left - s.left) / scale + (dx == null ? r.width / scale / 2 : dx)) + 'px';
      cursor.style.top = ((r.top - s.top) / scale + (dy == null ? r.height / scale / 2 : dy)) + 'px';
    }
    function press(sel) { var el = q(sel); if (!el) return; el.classList.add('press'); setTimeout(function () { el.classList.remove('press'); }, 260); }
    function add(c) { scenes[cur].classList.add(c); }
    function typing(i, a, b) { return { type: i, a: a, b: b }; }

    // Each scene: duration (ms) and timed events. Typing entries are continuous.
    var PLAN = [
      { d: 6000, ev: [[300, function () { cursor.style.opacity = 1; aim('.wt-p', 40, 70); }], [1500, function () { aim('[data-t=buy]'); }], [2700, function () { press('[data-t=buy]'); }]] },
      { d: 4800, ev: [[300, function () { add('go'); cursor.style.opacity = 0; }], [2200, function () { add('go2'); }]] },
      { d: 8200, ev: [[200, function () { cursor.style.opacity = 1; aim('.card', 20, 20); }], [6300, function () { aim('[data-t=send]'); }], [7300, function () { press('[data-t=send]'); }]],
        type: [typing(0, 500, 1400), typing(1, 1600, 2500), typing(2, 2700, 3700), typing(3, 3900, 4900), typing(4, 5100, 5700)] },
      { d: 7200, ev: [[400, function () { add('go'); aim('.inbox h4'); }], [1500, function () { aim('[data-t=msg]'); }], [2500, function () { add('open'); }], [3800, function () { aim('[data-t=dl]'); }], [4900, function () { press('[data-t=dl]'); }]] },
      { d: 6200, ev: [[200, function () { cursor.style.opacity = 0; }]], pts: 500 },
      { d: 7600, ev: [[600, function () { add('go'); }], [1400, function () { cursor.style.opacity = 1; aim('[data-t=ev]'); }], [2600, function () { press('[data-t=ev]'); add('open'); }], [3400, function () { cursor.style.opacity = 0; }]] }
    ];

    var cur = 0, t = 0, fired = 0, playing = false, last = 0, visible = false, raf = 0, userPaused = false;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function reset(i) {
      var s = scenes[i];
      s.classList.remove('go', 'go2', 'open');
      [].forEach.call(s.querySelectorAll('.tx'), function (x) { x.textContent = ''; });
      [].forEach.call(s.querySelectorAll('.f'), function (x) { x.classList.remove('active'); });
      [].forEach.call(s.querySelectorAll('.pt'), function (x) { x.classList.remove('in'); });
      var n = s.querySelector('.n'); if (n) n.textContent = '0';
    }
    function show(i) {
      scenes.forEach(function (s, k) { s.classList.toggle('on', k === i); });
      reset(i); cur = i; t = 0; fired = 0;
      cap.innerHTML = '<b>' + (i + 1) + '/6</b>' + CAPTIONS[i];
      stepBtns.forEach(function (b, k) { b.setAttribute('aria-current', k === i ? 'true' : 'false'); });
    }
    function render(final) {
      var p = PLAN[cur];
      while (fired < p.ev.length && (final || p.ev[fired][0] <= t)) { p.ev[fired][1](); fired++; }
      (p.type || []).forEach(function (ty) {
        var f = scenes[cur].querySelectorAll('.f')[ty.type], tx = f.querySelector('.tx'), full = FIELDS[ty.type][1];
        var k = final ? 1 : Math.max(0, Math.min(1, (t - ty.a) / (ty.b - ty.a)));
        tx.textContent = full.slice(0, Math.round(full.length * k));
        f.classList.toggle('active', !final && t >= ty.a && t < ty.b + 250);
      });
      if (p.pts != null) {
        var pts = scenes[cur].querySelectorAll('.pt'), on = 0;
        [].forEach.call(pts, function (pt, k) { var hit = final || t >= p.pts + k * 380; pt.classList.toggle('in', hit); if (hit) on++; });
        scenes[cur].querySelector('.n').textContent = on;
      }
    }
    function frameStep(now) {
      raf = 0;
      if (!playing) return;
      t += Math.min(64, now - (last || now)); last = now;
      render(false);
      if (t >= PLAN[cur].d) show((cur + 1) % PLAN.length);
      raf = requestAnimationFrame(frameStep);
    }
    function setPlaying(v) {
      playing = v; last = 0;
      playBtn.innerHTML = v ? PAUSE : PLAY;
      playBtn.setAttribute('aria-label', v ? 'Pause walkthrough' : 'Play walkthrough');
      if (v && !raf) raf = requestAnimationFrame(frameStep);
    }
    playBtn.addEventListener('click', function () { userPaused = playing; setPlaying(!playing); });
    stepBtns.forEach(function (b, k) { b.addEventListener('click', function () { show(k); if (!playing) render(true); }); });

    show(0);
    if (reduced) { render(true); setPlaying(false); return; }
    setPlaying(false);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        en.forEach(function (e) { visible = e.isIntersecting; setPlaying(visible && !userPaused); });
      }, { threshold: 0.35 }).observe(root);
    } else { setPlaying(true); }
  }
  [].forEach.call(document.querySelectorAll('[data-walkthrough]'), init);
})();

import './style.css'

const telegramUsername = 'ShinCatalog'
const telegramLink = `https://t.me/${telegramUsername}`

let currentLang = 'id'
let currentTheme = 'light'
let heroImageIndex = 0
let heroImageTimer

const heroImages = [
  'https://store-images.s-microsoft.com/image/apps.19518.14597666972638877.042b999e-e945-42e2-b28e-972a86cdeb65.6be8719d-10d4-43e7-b35d-37749ed64ad7',
  'https://webusstatic.yo-star.com/web-cms-prod/upload/content/2026/06/01/XzCsyNpk.png',
  'https://images.rpgsite.net/image/da49c9a1/139385/original/Zenless-Zone-Zero_Launch_KeyArt.jpg',
  'https://images.igdb.com/igdb/image/upload/t_original/ar5bjo.jpg',
  'https://images.igdb.com/igdb/image/upload/t_720p/cobfz5.jpg',
  'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=90',
]

const copy = {
  id: {
    nav: ['Layanan', 'Paket', 'Cara kerja', 'FAQ'],
    chat: 'Chat Telegram',
    eyebrow: 'GAME BOOSTING STUDIO / 2026',
    title: 'Naik level.<br /><em>Tanpa ribet.</em>',
    hero: 'Joki game untuk progres yang lebih cepat, dikerjakan rapi oleh player berpengalaman. Kamu fokus main, kami urus sisanya.',
    start: 'Mulai order',
    see: 'Lihat layanan',
    proof: 'order selesai',
    proofSmall: 'trusted by players',
    ticker: ['AMAN & TERPERCAYA', 'UPDATE PROGRES', 'HARGA TRANSPARAN', 'PLAYER BERPENGALAMAN'],
    servicesTitle: 'Yang sedang kamu<br /><em>cari, ada di sini.</em>',
    servicesIntro: 'Pilih game, ceritakan targetmu, dan kami susun rute paling efisien untuk mencapainya.',
    moreTitle: 'Joki lainnya',
    moreIntro: 'Butuh yang belum ada di paket? Bisa request manual, nanti kami cek akun dan targetnya dulu.',
    packagesTitle: 'Pilih game dulu.<br /><em>Harga kebuka.</em>',
    packagesIntro: 'List harga disembunyikan sampai kamu klik tab game. Jadi halaman tetap rapi dan paket tidak langsung memenuhi layar.',
    empty: 'Klik salah satu game untuk lihat list harga paket joki.',
    messageLabel: 'Pesan buat store',
    qtyLabel: 'Jumlah paket',
    order: 'Order paket',
    processTitle: 'Simple. <em>Terukur.</em><br />Selesai.',
    processIntro: 'Tidak ada langkah yang bikin bingung. Dari chat pertama sampai order beres, semuanya transparan.',
    faqTitle: 'Masih ada<br /><em>yang ganjel?</em>',
    ask: 'Tanya langsung',
    ctaTitle: 'Progress berikutnya<br /><em>dimulai dari chat.</em>',
    telegram: 'Hubungi via Telegram',
    footer: 'Joki game yang mengerti waktu kamu.',
    orderMessage: 'Halo, mau order paket joki.',
    fields: { game: 'Game', package: 'Paket', price: 'Harga', qty: 'Jumlah', note: 'Pesan' },
    qtyUnit: 'paket',
  },
  en: {
    nav: ['Services', 'Packages', 'How it works', 'FAQ'],
    chat: 'Telegram Chat',
    eyebrow: 'GAME BOOSTING STUDIO / 2026',
    title: 'Level up.<br /><em>No hassle.</em>',
    hero: 'Game boosting for faster progress, handled neatly by experienced players. You focus on playing, we handle the grind.',
    start: 'Start order',
    see: 'View services',
    proof: 'orders done',
    proofSmall: 'trusted by players',
    ticker: ['SAFE & TRUSTED', 'PROGRESS UPDATES', 'CLEAR PRICING', 'EXPERIENCED PLAYERS'],
    servicesTitle: 'What you need<br /><em>is right here.</em>',
    servicesIntro: 'Pick a game, tell us your target, and we will plan the cleanest route to get it done.',
    moreTitle: 'Other boosting',
    moreIntro: 'Need something outside the list? Send a custom request and we will check the account and target first.',
    packagesTitle: 'Choose a game.<br /><em>Prices open.</em>',
    packagesIntro: 'Prices stay hidden until you click a game tab, keeping the page clean and easy to scan.',
    empty: 'Click a game to view its boosting price list.',
    messageLabel: 'Message for store',
    qtyLabel: 'Package quantity',
    order: 'Order package',
    processTitle: 'Simple. <em>Measured.</em><br />Done.',
    processIntro: 'No confusing steps. From the first chat until completion, everything stays transparent.',
    faqTitle: 'Still have<br /><em>questions?</em>',
    ask: 'Ask directly',
    ctaTitle: 'Your next progress<br /><em>starts with a chat.</em>',
    telegram: 'Contact via Telegram',
    footer: 'Game boosting that respects your time.',
    orderMessage: 'Hi, I want to order a boosting package.',
    fields: { game: 'Game', package: 'Package', price: 'Price', qty: 'Quantity', note: 'Note' },
    qtyUnit: 'package(s)',
  },
}

const games = [
  { id: 'arknights', tag: 'STRATEGY RPG', name: 'Arknights', desc: 'Sanity • Event • Annihilation', className: 'card-arknights' },
  { id: 'endfield', tag: 'ACTION RPG', name: 'Arknights:<br />Endfield', desc: 'Progress • Story • Exploration', className: 'card-endfield' },
  { id: 'wuwa', tag: 'OPEN WORLD', name: 'Wuthering<br />Waves', desc: 'Daily - Story - Exploration', className: 'card-wuwa' },
  { id: 'zzz', tag: 'ACTION RPG', name: 'Zenless<br />Zone Zero', desc: 'Daily - Weekly - Story', className: 'card-zzz' },
  { id: 'hsr', tag: 'TURN BASED', name: 'Honkai:<br />Star Rail', desc: 'Daily - Endgame - Event', className: 'card-hsr' },
  { id: 'nte', tag: 'OPEN WORLD', name: 'Neverness to<br />Everness', desc: 'Daily - Story - Explore', className: 'card-nte' },
  { id: 'custom', tag: 'REQUEST', name: 'Game lain', desc: 'Material • Quest • Account care', className: 'card-custom' },
]

const packages = {
  arknights: {
    label: '01',
    game: 'Arknights',
    items: [
      { label: 'Harian', labelEn: 'Daily', title: 'Daily Clear', desc: 'Login, daily mission, claim reward, dan basic sanity.', descEn: 'Login, daily missions, reward claims, and basic sanity use.', price: '7 ribu', placeholder: 'Contoh: daily clear, claim reward, sanity jangan sampai full.', placeholderEn: 'Example: daily clear, claim rewards, keep sanity from capping.' },
      { label: 'Event', labelEn: 'Event', title: 'Event Rush', desc: 'Progress event, farm material, dan target milestone utama.', descEn: 'Event progress, material farming, and main milestone targets.', price: '12 ribu', featured: true, placeholder: 'Contoh: mau farm event stage tertentu sampai token cukup.', placeholderEn: 'Example: farm a specific event stage until tokens are enough.' },
      { label: 'Annihilation', labelEn: 'Annihilation', title: 'Annihilation', desc: 'Clear mingguan Annihilation untuk reward Orundum.', descEn: 'Weekly Annihilation clear for Orundum rewards.', price: '10 ribu', placeholder: 'Contoh: mau Annihilation weekly, squad sudah siap.', placeholderEn: 'Example: weekly Annihilation, squad is ready.' },
    ],
  },
  endfield: {
    label: '02',
    game: 'Arknights: Endfield',
    items: [
      { label: 'Story', labelEn: 'Story', title: 'Story', desc: 'Progress cerita utama sesuai chapter yang kamu butuhkan.', descEn: 'Main story progress based on the chapter you need.', price: '15 ribu/chapter', placeholder: 'Contoh: mau story chapter 2 sampai selesai.', placeholderEn: 'Example: finish story chapter 2.' },
      { label: 'Factory', labelEn: 'Factory', title: 'Pabrik + Mining', titleEn: 'Factory + Mining', desc: 'Joki pabrik, setup mining, dan rapihin produksi akun.', descEn: 'Factory boosting, mining setup, and cleaner account production.', price: '25 ribu', featured: true, placeholder: 'Contoh: mau setup mining dan pabrik dibuat rapi.', placeholderEn: 'Example: set up mining and organize the factory.' },
      { label: 'Harian', labelEn: 'Daily', title: 'Daily', desc: 'Login, daily task, claim reward, dan rutinitas ringan.', descEn: 'Login, daily tasks, reward claims, and light routines.', price: '5 ribu', placeholder: 'Contoh: daily Endfield saja, claim reward juga.', placeholderEn: 'Example: Endfield daily only, include reward claims.' },
      { label: 'Mingguan', labelEn: 'Weekly', title: 'Rawat Akun', titleEn: 'Account Care', desc: 'Rawat akun selama satu minggu, termasuk daily rutin.', descEn: 'One week account care, including routine daily tasks.', price: '20 ribu', placeholder: 'Contoh: rawat 2 minggu, mulai Senin.', placeholderEn: 'Example: care for 2 weeks, start Monday.' },
      { label: 'Bulanan', labelEn: 'Monthly', title: 'Rawat Akun', titleEn: 'Account Care', desc: 'Paket rawat akun satu bulan untuk progress lebih hemat.', descEn: 'One month account care for steadier progress.', price: '35 ribu', placeholder: 'Contoh: rawat 1 bulan, daily wajib clear.', placeholderEn: 'Example: care for 1 month, daily must be cleared.' },
    ],
  },
  wuwa: {
    label: '03',
    game: 'Wuthering Waves',
    items: [
      { label: 'Harian', labelEn: 'Daily', title: 'Daily Clear', desc: 'Login, daily activity, claim reward, dan spend Waveplate.', descEn: 'Login, daily activity, reward claims, and Waveplate spending.', price: '5 ribu', placeholder: 'Contoh: daily WuWa, Waveplate buat material karakter.', placeholderEn: 'Example: WuWa daily, spend Waveplate on character materials.' },
      { label: 'Mingguan', labelEn: 'Weekly', title: 'Weekly Care', desc: 'Rutinitas mingguan ringan termasuk weekly boss atau target stamina.', descEn: 'Light weekly routine including weekly boss or stamina targets.', price: '20 ribu', featured: true, placeholder: 'Contoh: clear weekly boss dan spend Waveplate selama 1 minggu.', placeholderEn: 'Example: clear weekly boss and spend Waveplate for 1 week.' },
      { label: 'Story', labelEn: 'Story', title: 'Main Quest', desc: 'Bantu progres main quest sesuai chapter atau target yang diminta.', descEn: 'Main quest progress based on requested chapter or target.', price: '12 ribu/chapter', placeholder: 'Contoh: lanjut main quest sampai chapter terbaru.', placeholderEn: 'Example: continue main quest until the latest chapter.' },
      { label: 'Explore', labelEn: 'Explore', title: 'Exploration', desc: 'Exploration map, chest, puzzle, dan target completion area.', descEn: 'Map exploration, chests, puzzles, and area completion targets.', price: 'mulai 50 ribu', placeholder: 'Contoh: exploration area tertentu sampai 80%.', placeholderEn: 'Example: explore a specific area up to 80%.' },
    ],
  },
  zzz: {
    label: '04',
    game: 'Zenless Zone Zero',
    items: [
      { label: 'Harian', labelEn: 'Daily', title: 'Daily Errand', desc: 'Login, daily task, battery spend, dan claim reward rutin.', descEn: 'Login, daily tasks, battery spending, and routine reward claims.', price: '5 ribu', placeholder: 'Contoh: daily ZZZ dan battery untuk material agent.', placeholderEn: 'Example: ZZZ daily and battery for agent materials.' },
      { label: 'Mingguan', labelEn: 'Weekly', title: 'Weekly Reset', desc: 'Clear target mingguan seperti Hollow, boss, atau objective reset.', descEn: 'Weekly targets such as Hollow, boss, or reset objectives.', price: '25 ribu', featured: true, placeholder: 'Contoh: weekly reset ZZZ sampai reward utama beres.', placeholderEn: 'Example: ZZZ weekly reset until main rewards are done.' },
      { label: 'Story', labelEn: 'Story', title: 'Story Chapter', desc: 'Progress story dan side commission sesuai target akun.', descEn: 'Story and side commission progress based on account targets.', price: '15 ribu/chapter', placeholder: 'Contoh: clear story chapter 3 sampai selesai.', placeholderEn: 'Example: finish story chapter 3.' },
      { label: 'Rawat', labelEn: 'Care', title: 'Monthly Care', desc: 'Rawat akun satu bulan untuk daily dan rutinitas basic.', descEn: 'One month account care for daily and basic routines.', price: '60 ribu', placeholder: 'Contoh: rawat ZZZ 1 bulan, daily wajib clear.', placeholderEn: 'Example: care for ZZZ for 1 month, daily must be cleared.' },
    ],
  },
  hsr: {
    label: '05',
    game: 'Honkai: Star Rail',
    items: [
      { label: 'Harian', labelEn: 'Daily', title: 'Daily Training', desc: 'Login, daily training, claim reward, dan spend Trailblaze Power.', descEn: 'Login, daily training, reward claims, and Trailblaze Power spending.', price: '5 ribu', placeholder: 'Contoh: daily HSR, power untuk relic atau trace.', placeholderEn: 'Example: HSR daily, power for relics or traces.' },
      { label: 'Endgame', labelEn: 'Endgame', title: 'MoC / PF / AS', desc: 'Bantu clear konten endgame sesuai roster dan target bintang.', descEn: 'Endgame clear based on roster and star target.', price: '25 ribu', featured: true, placeholder: 'Contoh: MoC sampai floor tertentu, target semampunya roster.', placeholderEn: 'Example: MoC up to a certain floor, target based on roster.' },
      { label: 'Story', labelEn: 'Story', title: 'Trailblaze Mission', desc: 'Progress misi utama, companion, atau event story.', descEn: 'Main mission, companion, or event story progress.', price: '15 ribu/chapter', placeholder: 'Contoh: lanjut Penacony sampai quest utama selesai.', placeholderEn: 'Example: continue Penacony until main quest is done.' },
      { label: 'Rawat', labelEn: 'Care', title: 'Monthly Care', desc: 'Paket rawat akun satu bulan untuk daily rutin.', descEn: 'One month account care for routine daily tasks.', price: '55 ribu', placeholder: 'Contoh: rawat HSR 1 bulan, daily dan power jangan cap.', placeholderEn: 'Example: care for HSR for 1 month, daily and power must not cap.' },
    ],
  },
  nte: {
    label: '06',
    game: 'Neverness to Everness',
    items: [
      { label: 'Harian', labelEn: 'Daily', title: 'Daily City Run', desc: 'Login, daily task, claim reward, dan stamina/resource rutin.', descEn: 'Login, daily tasks, reward claims, and routine stamina/resources.', price: '7 ribu', placeholder: 'Contoh: daily NTE dan resource dipakai buat upgrade.', placeholderEn: 'Example: NTE daily and spend resources for upgrades.' },
      { label: 'Mingguan', labelEn: 'Weekly', title: 'Weekly Care', desc: 'Rutinitas mingguan, boss, dan target reward reset.', descEn: 'Weekly routine, boss, and reset reward targets.', price: '25 ribu', featured: true, placeholder: 'Contoh: weekly NTE sampai reward utama clear.', placeholderEn: 'Example: NTE weekly until main rewards are cleared.' },
      { label: 'Story', labelEn: 'Story', title: 'Story Progress', desc: 'Progress cerita dan quest utama sesuai chapter target.', descEn: 'Story and main quest progress based on target chapter.', price: '20 ribu/chapter', placeholder: 'Contoh: story chapter 2 sampai selesai.', placeholderEn: 'Example: finish story chapter 2.' },
      { label: 'Explore', labelEn: 'Explore', title: 'City Exploration', desc: 'Explore area, objective, collectible, dan target completion.', descEn: 'Area exploration, objectives, collectibles, and completion targets.', price: 'mulai 60 ribu', placeholder: 'Contoh: explore distrik tertentu sampai target completion.', placeholderEn: 'Example: explore a specific district until target completion.' },
    ],
  },
  request: {
    label: '07',
    game: 'Request Joki Lainnya',
    items: [
      { label: 'Custom', labelEn: 'Custom', title: 'Material Farm', desc: 'Farm material tertentu sesuai kebutuhan upgrade akun.', descEn: 'Farm specific materials based on your upgrade needs.', price: 'Cek via chat', placeholder: 'Contoh: farm material skill/operator tertentu, target 50 item.', placeholderEn: 'Example: farm a specific skill/operator material, target 50 items.' },
      { label: 'Custom', labelEn: 'Custom', title: 'Quest Clear', desc: 'Bantu clear misi, objective, exploration, atau stage yang nyangkut.', descEn: 'Help clear missions, objectives, exploration, or stuck stages.', price: 'Cek via chat', featured: true, placeholder: 'Contoh: stuck di stage tertentu, minta dibantu sampai clear.', placeholderEn: 'Example: stuck on a certain stage, need help until clear.' },
      { label: 'Request', labelEn: 'Request', title: 'Target Bebas', titleEn: 'Any Target', desc: 'Untuk request di luar paket yang sudah ada.', descEn: 'For requests outside the listed packages.', price: 'Cek via chat', placeholder: 'Contoh: tulis nama game, target, deadline, dan kondisi akun.', placeholderEn: 'Example: write game name, target, deadline, and account condition.' },
    ],
  },
}

const otherBoosts = [
  ['Material farm', 'Farm material tertentu sesuai kebutuhan upgrade.'],
  ['Quest clear', 'Bantu beresin misi, exploration, atau objective yang nyangkut.'],
  ['Custom target', 'Target bebas di luar paket, harga dikasih setelah cek detail.'],
]

const t = (idText, enText) => currentLang === 'id' ? idText : enText

const renderPackageCard = (item) => `
  <article class="package-card ${item.featured ? 'package-featured' : ''}" data-placeholder-id="${item.placeholder}" data-placeholder-en="${item.placeholderEn}">
    <span class="package-label">${t(item.label, item.labelEn)}</span>
    <h3>${t(item.title, item.titleEn || item.title)}</h3>
    <p>${t(item.desc, item.descEn)}</p>
    <div class="package-price">${item.price}</div>
    <a href="${telegramLink}" target="_blank" rel="noreferrer">${copy[currentLang].order} <span>↗</span></a>
  </article>
`

const render = () => {
  const c = copy[currentLang]
  document.documentElement.dataset.theme = currentTheme
  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="ShinCatalog home"><img class="brand-mark" src="/logo.png" alt="" /><span>Shin<span>Catalog</span></span></a>
      <nav class="nav-links" aria-label="Navigasi utama"><a href="#layanan">${c.nav[0]}</a><a href="#paket">${c.nav[1]}</a><a href="#proses">${c.nav[2]}</a><a href="#faq">${c.nav[3]}</a></nav>
      <div class="header-actions"><button class="toggle-chip flag-toggle" type="button" data-lang-toggle aria-label="${currentLang === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}" title="${currentLang === 'id' ? 'English' : 'Indonesia'}"><img src="https://flagcdn.com/${currentLang === 'id' ? 'us' : 'id'}.svg" alt="" /></button><button class="toggle-chip" type="button" data-theme-toggle aria-label="${currentTheme === 'light' ? 'Aktifkan dark mode' : 'Aktifkan light mode'}" title="${currentTheme === 'light' ? 'Dark mode' : 'Light mode'}">${currentTheme === 'light' ? '☾' : '☼'}</button><a class="header-cta" href="${telegramLink}" target="_blank" rel="noreferrer">${c.chat} <span>↗</span></a></div>
    </header>
    <main id="top">
      <section class="hero section-wrap"><div class="hero-copy reveal"><p class="eyebrow"><span class="eyebrow-dot"></span> ${c.eyebrow}</p><h1>${c.title}</h1><p class="hero-text">${c.hero}</p><div class="hero-actions"><a class="button button-primary" href="${telegramLink}" target="_blank" rel="noreferrer">${c.start} <span>↗</span></a><a class="text-link" href="#layanan">${c.see} <span>↓</span></a></div><div class="hero-proof"><span class="avatars"><i>✦</i><i>◈</i><i>●</i></span><span><strong>1.200+</strong> ${c.proof}<br /><small>${c.proofSmall}</small></span></div></div><div class="hero-visual reveal reveal-delay"><div class="hero-image"></div><div class="floating-note note-top"><span class="note-icon">↗</span><span><b>Fast delivery</b><small>${t('Progress jalan terus', 'Progress keeps moving')}</small></span></div><div class="floating-note note-bottom"><span class="live-dot"></span><span><b>Operator online</b><small>${t('Balas dalam 5 menit', 'Replies in 5 minutes')}</small></span></div><div class="vertical-label">SHINCATALOG / EST. 2026</div></div></section>
      <section class="ticker" aria-label="Keunggulan ShinCatalog">${c.ticker.map((item) => `<span>${item}</span><b>✳</b>`).join('')}<span>${c.ticker[0]}</span></section>
      <section id="layanan" class="section-wrap services-section"><div class="section-heading reveal"><div><p class="eyebrow">01 / SERVICES</p><h2>${c.servicesTitle}</h2></div><p class="section-intro">${c.servicesIntro}</p></div><div class="game-grid">${games.map((game, index) => `<article class="game-card ${game.className} reveal reveal-delay-${index}"><div class="game-card-overlay"></div><div class="game-card-top"><span>${String(index + 1).padStart(2, '0')}</span><span class="card-arrow">↗</span></div><div class="game-card-bottom"><span class="game-tag">${game.tag}</span><h3>${game.name}</h3><p>${game.desc}</p></div></article>`).join('')}</div></section>
      <section class="section-wrap other-section"><div class="section-heading reveal"><div><p class="eyebrow">02 / EXTRA</p><h2>${c.moreTitle}<br /><em>by request.</em></h2></div><p class="section-intro">${c.moreIntro}</p></div><div class="other-grid">${otherBoosts.map(([title, desc]) => `<article class="other-card"><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div></section>
      <section id="paket" class="packages-section section-wrap"><div class="section-heading reveal"><div><p class="eyebrow">03 / PAKET JOKI</p><h2>${c.packagesTitle}</h2></div><p class="section-intro">${c.packagesIntro}</p></div><div class="package-tabs reveal" role="tablist" aria-label="Pilih daftar paket game">${Object.entries(packages).map(([id, group]) => `<button class="package-tab" type="button" role="tab" aria-selected="false" aria-controls="${id}-panel" data-package-tab="${id}">${group.game}</button>`).join('')}</div><div class="package-empty reveal reveal-delay"><span>↙</span><p>${c.empty}</p></div>${Object.entries(packages).map(([id, group]) => `<div class="package-panel" id="${id}-panel" role="tabpanel" hidden><div class="package-group-heading"><span>${group.label}</span><h3>${group.game}</h3></div><div class="package-grid ${id}-packages">${group.items.map(renderPackageCard).join('')}</div></div>`).join('')}</section>
      <section id="proses" class="process-band"><div class="section-wrap"><div class="section-heading process-heading reveal"><div><p class="eyebrow eyebrow-dark">04 / PROCESS</p><h2>${c.processTitle}</h2></div><p class="section-intro">${c.processIntro}</p></div><div class="steps"><div class="step reveal"><span>01</span><h3>${t('Chat kebutuhanmu', 'Send your needs')}</h3><p>${t('Kirim detail akun, target, dan deadline melalui Telegram.', 'Send account details, targets, and deadline through Telegram.')}</p></div><div class="step reveal reveal-delay-1"><span>02</span><h3>${t('Dapatkan estimasi', 'Get an estimate')}</h3><p>${t('Kami balas dengan harga, durasi, dan rute pengerjaan.', 'We reply with price, timing, and the work route.')}</p></div><div class="step reveal reveal-delay-2"><span>03</span><h3>${t('Duduk manis', 'Relax')}</h3><p>${t('Progress di-update berkala sampai targetmu tercapai.', 'Progress is updated regularly until your target is complete.')}</p></div></div></div></section>
      <section id="faq" class="section-wrap faq-section"><div class="faq-copy reveal"><p class="eyebrow">05 / FAQ</p><h2>${c.faqTitle}</h2><a class="text-link" href="${telegramLink}" target="_blank" rel="noreferrer">${c.ask} <span>↗</span></a></div><div class="faq-list reveal reveal-delay"><details open><summary>${t('Apakah akun saya aman?', 'Is my account safe?')}</summary><p>${t('Prioritas kami adalah keamanan akun. Kami tidak mengubah data sensitif dan selalu memberi update selama proses berjalan.', 'Account safety is our priority. We do not change sensitive data and keep you updated during the process.')}</p></details><details><summary>${t('Berapa lama prosesnya?', 'How long does it take?')}</summary><p>${t('Durasi tergantung target dan antrean. Estimasi pasti kami berikan sebelum order dikonfirmasi.', 'Timing depends on target and queue. We give an estimate before confirming the order.')}</p></details><details><summary>${t('Bisa request game lain?', 'Can I request another game?')}</summary><p>${t('Bisa. Kirimkan game dan targetmu lewat Telegram, lalu kami cek apakah bisa kami handle.', 'Yes. Send the game and target through Telegram, then we will check if we can handle it.')}</p></details></div></section>
      <section class="cta-section section-wrap reveal"><div><p class="eyebrow eyebrow-dark">READY WHEN YOU ARE</p><h2>${c.ctaTitle}</h2></div><a class="button button-light" href="${telegramLink}" target="_blank" rel="noreferrer"><span class="telegram-symbol">➤</span> ${c.telegram} <span>↗</span></a></section>
    </main>
    <footer class="site-footer section-wrap"><a class="brand" href="#top"><img class="brand-mark" src="/logo.png" alt="" /><span>Shin<span>Catalog</span></span></a><p>${c.footer}</p><span class="footer-note">© 2026 ShinCatalog</span></footer>
  `
  bindHeroImageCycle()
  bindInteractions()
}

const setHeroImage = (image) => {
  const heroImage = document.querySelector('.hero-image')
  if (!heroImage) return

  heroImage.style.setProperty('--hero-image', `url("${image}")`)
  heroImage.classList.remove('is-warping')
  void heroImage.offsetWidth
  heroImage.classList.add('is-warping')
}

const bindHeroImageCycle = () => {
  window.clearInterval(heroImageTimer)
  setHeroImage(heroImages[heroImageIndex])
  heroImageTimer = window.setInterval(() => {
    heroImageIndex = (heroImageIndex + 1) % heroImages.length
    setHeroImage(heroImages[heroImageIndex])
  }, 1000)
}

const buildOrderLink = (card, quantity, note) => {
  const c = copy[currentLang]
  const game = card.closest('.package-panel').querySelector('.package-group-heading h3').textContent.trim()
  const packageName = card.querySelector('h3').textContent.trim()
  const packageType = card.querySelector('.package-label').textContent.trim()
  const price = card.querySelector('.package-price').textContent.trim()
  const message = [
    c.orderMessage,
    `${c.fields.game}: ${game}`,
    `${c.fields.package}: ${packageName} (${packageType})`,
    `${c.fields.price}: ${price}`,
    `${c.fields.qty}: ${quantity} ${c.qtyUnit}`,
    note ? `${c.fields.note}: ${note}` : '',
  ].filter(Boolean).join('\n')

  return `${telegramLink}?text=${encodeURIComponent(message)}`
}

const bindInteractions = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'))
      if (target) {
        event.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })

  document.querySelector('[data-lang-toggle]').addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id'
    render()
  })

  document.querySelector('[data-theme-toggle]').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light'
    render()
  })

  const packageTabs = document.querySelectorAll('[data-package-tab]')
  const packagePanels = document.querySelectorAll('.package-panel')
  const packageEmpty = document.querySelector('.package-empty')

  packageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedGame = tab.dataset.packageTab
      packageTabs.forEach((item) => {
        item.classList.toggle('is-active', item === tab)
        item.setAttribute('aria-selected', String(item === tab))
      })
      packagePanels.forEach((panel) => {
        panel.hidden = panel.id !== `${selectedGame}-panel`
      })
      packageEmpty.hidden = true
    })
  })

  document.querySelectorAll('.package-card').forEach((card) => {
    const orderLink = card.querySelector('a')
    const controls = document.createElement('div')
    controls.className = 'package-order'
    controls.innerHTML = `
      <label>
        <span>${copy[currentLang].messageLabel}</span>
        <textarea rows="3" placeholder="${currentLang === 'id' ? card.dataset.placeholderId : card.dataset.placeholderEn}"></textarea>
      </label>
      <div class="package-qty" aria-label="${copy[currentLang].qtyLabel}">
        <button type="button" data-qty-action="minus" aria-label="Minus">−</button>
        <output>1</output>
        <button type="button" data-qty-action="plus" aria-label="Plus">+</button>
      </div>
    `

    orderLink.before(controls)

    const noteInput = controls.querySelector('textarea')
    const quantityOutput = controls.querySelector('output')
    let quantity = 1

    const syncOrderLink = () => {
      quantityOutput.textContent = quantity
      orderLink.href = buildOrderLink(card, quantity, noteInput.value.trim())
    }

    controls.querySelectorAll('[data-qty-action]').forEach((button) => {
      button.addEventListener('click', () => {
        quantity += button.dataset.qtyAction === 'plus' ? 1 : -1
        quantity = Math.max(1, Math.min(quantity, 30))
        syncOrderLink()
      })
    })

    noteInput.addEventListener('input', syncOrderLink)
    syncOrderLink()
  })
}

render()

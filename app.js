const API_BASE = "api/";
let currentAudio=null,currentLang='id',score=0,lives=3,currentQuestionIndex=0,activeQuizQuestions=[],currentUser=null,currentDetailText='';

const appTexts = {
    id:{subtitle:"Gerbang Digital Budaya Nusantara",searchPlace:"Cari Provinsi...",searchBtn:"Cari",backBtn:"← Kembali ke Daftar Provinsi",closeBtn:"✕ Tutup",quizBtn:"🧩 Quiz Budaya",noImg:"Gambar tidak tersedia"},
    en:{subtitle:"The Digital Gateway to Archipelago Culture",searchPlace:"Search Province...",searchBtn:"Search",backBtn:"← Back to Province List",closeBtn:"✕ Close",quizBtn:"🧩 Cultural Quiz",noImg:"Image not available"}
};

// ===== INIT =====
window.onload = function(){
    const saved = localStorage.getItem('nusapedia-theme')||'light';
    document.documentElement.setAttribute('data-theme',saved);
    document.getElementById('darkModeBtn').innerText = saved==='dark'?'☀️':'🌙';
    generateParticles();
    checkSessionState();
    renderHome(provinces);
    document.getElementById('searchBtnText').addEventListener('click',searchProvinsi);
    setTimeout(()=>{ document.getElementById('pageLoader').classList.add('loader-hidden'); },1200);
};

// ===== PARTICLES =====
function generateParticles(){
    const c = document.getElementById('heroParticles');
    if(!c) return;
    const symbols = ['🏛️','🎭','🥁','🗺️','🎋','🏮','🎪','🌺','🪘','🎑'];
    for(let i=0;i<15;i++){
        const el = document.createElement('div');
        el.className='particle';
        el.innerText=symbols[Math.floor(Math.random()*symbols.length)];
        el.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*5}s;animation-duration:${8+Math.random()*6}s;font-size:${1+Math.random()*1.5}rem;`;
        c.appendChild(el);
    }
}

// ===== DARK MODE =====
function toggleDarkMode(){
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',next);
    localStorage.setItem('nusapedia-theme',next);
    document.getElementById('darkModeBtn').innerText=next==='dark'?'☀️':'🌙';
    showToast(next==='dark'?'🌙 Mode Malam aktif':'☀️ Mode Terang aktif','info');
}

// ===== TOAST =====
function showToast(message,type='success'){
    const c=document.getElementById('toastContainer');
    const t=document.createElement('div');
    t.className=`toast toast-${type}`;
    t.innerHTML=message;
    c.appendChild(t);
    requestAnimationFrame(()=>{ t.classList.add('toast-show'); });
    setTimeout(()=>{ t.classList.remove('toast-show'); setTimeout(()=>t.remove(),400); },3500);
}

// ===== CONFETTI =====
function launchConfetti(){
    const c=document.getElementById('confettiContainer');
    const cols=['#ECC94B','#E97451','#102A43','#48BB78','#FC8181','#76E4F7','#B794F4','#F6E05E'];
    for(let i=0;i<120;i++){
        setTimeout(()=>{
            const p=document.createElement('div');
            p.className='confetti-piece';
            const size=Math.random()*10+5;
            p.style.cssText=`left:${Math.random()*100}vw;background:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${Math.random()*2+1.5}s;animation-delay:${Math.random()*0.5}s;width:${size}px;height:${size}px;border-radius:${Math.random()>.5?'50%':'3px'};`;
            c.appendChild(p);
            setTimeout(()=>p.remove(),3500);
        },i*12);
    }
}

// ===== TTS =====
function speakDetail(){
    if(!('speechSynthesis' in window)){ showToast('Browser tidak mendukung TTS','error'); return; }
    window.speechSynthesis.cancel();
    if(!currentDetailText) return;
    const u=new SpeechSynthesisUtterance(currentDetailText);
    u.lang=currentLang==='id'?'id-ID':'en-US'; u.rate=0.9;
    window.speechSynthesis.speak(u);
    showToast('🔊 Membacakan deskripsi...','info');
}

// ===== PASSWORD TOGGLE =====
function togglePassword(inputId, iconId){
    const inp=document.getElementById(inputId);
    const ico=document.getElementById(iconId);
    if(inp.type==='password'){ inp.type='text'; ico.innerText='🙈'; }
    else { inp.type='password'; ico.innerText='👁️'; }
}

// ===== NAV =====
function switchPage(pageId){
    document.querySelectorAll('.page-section').forEach(p=>p.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(l=>l.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');
    const nav=document.getElementById(`nav-${pageId}`);
    if(nav) nav.classList.add('active');
    if(pageId==='profile')     checkSessionState();
    if(pageId==='leaderboard') loadLeaderboard();
    window.scrollTo({top:0,behavior:'smooth'});
}

// ===== AUTH HELPERS =====
function showAuthMsg(elId,msg,ok){
    const el=document.getElementById(elId); if(!el) return;
    el.innerHTML=msg; el.className='auth-msg '+(ok?'show-success':'show-error');
}
function clearAuthMsg(elId){ const el=document.getElementById(elId); if(!el) return; el.innerHTML=''; el.className='auth-msg'; }
function toggleAuthForm(showReg){
    document.getElementById('loginFormContainer').style.display=showReg?'none':'block';
    document.getElementById('registerFormContainer').style.display=showReg?'block':'none';
    clearAuthMsg('loginMsg'); clearAuthMsg('regMsg');
}

// ===== REGISTER =====
function handleRegister(){
    const u=document.getElementById('regUser').value.trim();
    const e=document.getElementById('regEmail').value.trim();
    const p=document.getElementById('regPass').value.trim();
    if(!u||!e||!p) return showAuthMsg('regMsg','❌ Isi form secara lengkap!',false);
    const btn=document.getElementById('regBtn');
    btn.disabled=true; btn.innerHTML='⏳ Memproses...';
    clearAuthMsg('regMsg');
    fetch(API_BASE+'register.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:u,email:e,password:p})})
    .then(r=>r.json())
    .then(data=>{ showAuthMsg('regMsg',data.message,data.success); if(data.success){ document.getElementById('regUser').value=''; document.getElementById('regEmail').value=''; document.getElementById('regPass').value=''; setTimeout(()=>toggleAuthForm(false),1500); } })
    .catch(()=>showAuthMsg('regMsg','❌ Gagal terhubung ke server!',false))
    .finally(()=>{ btn.disabled=false; btn.innerHTML='✨ Daftar'; });
}

// ===== LOGIN =====
function handleLogin(){
    const u=document.getElementById('loginUser').value.trim();
    const p=document.getElementById('loginPass').value.trim();
    if(!u||!p) return showAuthMsg('loginMsg','❌ Isi username dan password!',false);
    const btn=document.getElementById('loginBtn');
    btn.disabled=true; btn.innerHTML='⏳ Memeriksa...';
    clearAuthMsg('loginMsg');
    fetch(API_BASE+'login.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:u,password:p})})
    .then(r=>r.json())
    .then(data=>{ if(data.success){ document.getElementById('loginUser').value=''; document.getElementById('loginPass').value=''; checkSessionState(); showToast(`👋 Selamat datang, ${data.user.username}!`,'success'); } else showAuthMsg('loginMsg',data.message,false); })
    .catch(()=>showAuthMsg('loginMsg','❌ Gagal terhubung ke server!',false))
    .finally(()=>{ btn.disabled=false; btn.innerHTML='Masuk'; });
}

// ===== LOGOUT =====
function handleLogout(){
    const btn=document.getElementById('logoutBtn')||document.getElementById('adminLogoutBtn');
    if(btn){ btn.disabled=true; btn.innerHTML='⏳ Keluar...'; }
    if(window.speechSynthesis) window.speechSynthesis.cancel();
    fetch(API_BASE+'logout.php')
    .then(()=>{ currentUser=null; checkSessionState(); showToast('👋 Sampai jumpa!','info'); })
    .catch(()=>checkSessionState())
    .finally(()=>{ if(btn){ btn.disabled=false; btn.innerHTML='Log Out'; } });
}

// ===== CHECK SESSION =====
function checkSessionState(){
    const authBox=document.getElementById('authPage');
    const dashBox=document.getElementById('profileDashboard');
    const adminBox=document.getElementById('adminDashboard');
    fetch(API_BASE+'check_session.php')
    .then(r=>r.json())
    .then(data=>{
        if(data.loggedIn){
            currentUser=data.user.username;
            authBox.style.display='none';
            const sb=document.getElementById('streakBadge');
            const sn=document.getElementById('streakNum');
            if(data.user.streak>0){ sb.style.display='inline-flex'; sn.innerText=data.user.streak; }
            if(data.user.role==='admin'){
                dashBox.style.display='none';
                adminBox.style.display='block';
                document.getElementById('adminDisplayName').innerText=data.user.username;
                loadAdminDashboard();
            } else {
                adminBox.style.display='none';
                dashBox.style.display='block';
                document.getElementById('displayUsername').innerText=data.user.username;
                document.getElementById('displayEmail').innerText=data.user.email||'-';
                document.getElementById('displayJoinDate').innerText=data.user.joinDate||'-';
                document.getElementById('displayStreak').innerText=data.user.streak;
                document.getElementById('statStreak').innerText=data.user.streak;
                const av=document.getElementById('userAvatar');
                av.src=(data.user.avatar&&data.user.avatar!=='')?data.user.avatar+'?t='+Date.now():'https://placehold.co/150x150?text='+data.user.username;
                renderHistoryChart();
                updateStreak();
                loadDailyQuest();
                loadPassport();
                renderFavoriteProvinces();
            }
        } else {
            currentUser=null;
            document.getElementById('streakBadge').style.display='none';
            if(authBox) authBox.style.display='flex';
            if(dashBox) dashBox.style.display='none';
            if(adminBox) adminBox.style.display='none';
        }
    })
    .catch(()=>{ if(authBox) authBox.style.display='flex'; if(dashBox) dashBox.style.display='none'; if(adminBox) adminBox.style.display='none'; });
}

// ===== STREAK =====
function updateStreak(){
    fetch(API_BASE+'streak.php')
    .then(r=>r.json())
    .then(data=>{
        if(!data.success) return;
        document.getElementById('displayStreak').innerText=data.streak;
        document.getElementById('statStreak').innerText=data.streak;
        document.getElementById('streakNum').innerText=data.streak;
        document.getElementById('streakBadge').style.display=data.streak>0?'inline-flex':'none';
        if(data.isNew){ showToast(`🔥 Streak ${data.streak} hari! Keren banget!`,'success'); if(data.newBadge){ setTimeout(()=>{ showToast(`🏅 Badge baru: ${data.newBadge}`,'badge'); launchConfetti(); },1000); } }
    }).catch(()=>{});
}

// ===== DAILY QUEST =====
function loadDailyQuest(){
    fetch(API_BASE+'daily_quest.php')
    .then(r=>r.json())
    .then(data=>{
        if(!data.success) return;
        document.getElementById('questProvince').innerText=data.province;
        const s=document.getElementById('questStatus');
        const f=document.getElementById('questProgressFill');
        if(data.completed){ s.innerHTML='✅ Selesai!'; s.className='quest-status quest-done'; if(f) f.style.width='100%'; }
        else { s.innerHTML='⏳ Belum Selesai'; s.className='quest-status quest-pending'; if(f) f.style.width='0%'; }
    }).catch(()=>{});
}

// ===== VISIT PROVINCE =====
function visitProvince(name){
    if(!currentUser) return;
    fetch(API_BASE+'visit_province.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({province:name})})
    .then(r=>r.json())
    .then(data=>{
        if(!data.success) return;
        if(data.newBadge){ setTimeout(()=>{ showToast(`🏅 Badge baru: ${data.newBadge}`,'badge'); launchConfetti(); loadPassport(); },500); }
        if(data.questCompleted){ setTimeout(()=>{ showToast('🎉 Misi Harian Selesai! Luar biasa!','success'); launchConfetti(); loadDailyQuest(); },1200); }
        loadPassport();
    }).catch(()=>{});
}

// ===== PASSPORT & BADGE =====
function loadPassport(){
    fetch(API_BASE+'get_passport.php')
    .then(r=>r.json())
    .then(data=>{
        if(!data.success) return;
        document.getElementById('statVisited').innerText=data.provinces.length;
        document.getElementById('statBadges').innerText=data.badges.length;
        const stamps=document.getElementById('passportStamps');
        stamps.innerHTML=data.provinces.length===0?'<p class="empty-hint">Belum ada provinsi dijelajahi. Mulai eksplorasi! 🗺️</p>':data.provinces.map(p=>`<span class="passport-stamp">${p}</span>`).join('');
        const badges=document.getElementById('badgeCollection');
        badges.innerHTML=data.badges.length===0?'<p class="empty-hint">Belum ada badge. Selesaikan misi untuk mendapatkan badge! 🏅</p>':data.badges.map(b=>`<div class="badge-item">${b}</div>`).join('');
    }).catch(()=>{});
}

// ===== EDIT PROFIL =====
function toggleEditProfile(){
    const f=document.getElementById('editProfileForm');
    const a=document.getElementById('editArrow');
    const open=f.style.display!=='none';
    f.style.display=open?'none':'block';
    a.innerText=open?'▼':'▲';
}
function handleEditProfile(){
    const email=document.getElementById('editEmail').value.trim();
    const pass=document.getElementById('editPass').value.trim();
    if(!email&&!pass) return showAuthMsg('editMsg','❌ Isi minimal satu field!',false);
    clearAuthMsg('editMsg');
    fetch(API_BASE+'edit_profile.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password:pass})})
    .then(r=>r.json())
    .then(data=>{
        showAuthMsg('editMsg',data.message,data.success);
        if(data.success){ document.getElementById('editEmail').value=''; document.getElementById('editPass').value=''; if(email) document.getElementById('displayEmail').innerText=email; showToast('✅ Profil berhasil diupdate!','success'); }
    }).catch(()=>showAuthMsg('editMsg','❌ Gagal terhubung ke server!',false));
}

// ===== LEADERBOARD =====
function loadLeaderboard(){
    const c=document.getElementById('leaderboardList');
    c.innerHTML='<p class="loading-text">⏳ Memuat data...</p>';
    fetch(API_BASE+'leaderboard.php')
    .then(r=>r.json())
    .then(data=>{
        if(!data.success||data.leaderboard.length===0){ c.innerHTML='<p class="empty-hint" style="text-align:center;">Belum ada data. Jadilah yang pertama! 🏆</p>'; return; }
        const medals=['🥇','🥈','🥉'];
        c.innerHTML=data.leaderboard.map((u,i)=>`
            <div class="leaderboard-row ${i<3?'top-three':''}">
                <span class="lb-rank">${medals[i]||(i+1)}</span>
                <div class="lb-info"><span class="lb-name">${u.username}</span><span class="lb-games">${u.total_games}x main</span></div>
                <span class="lb-score">${u.best_score} <small>pts</small></span>
            </div>`).join('');
    }).catch(()=>{ c.innerHTML='<p style="color:red;text-align:center;">Gagal memuat data.</p>'; });
}

// ===== UPLOAD AVATAR =====
function uploadAvatar(){
    const file=document.getElementById('avatarInput').files[0];
    if(!file||!currentUser) return;
    const fd=new FormData(); fd.append('avatar',file);
    showToast('📤 Mengupload foto...','info');
    fetch(API_BASE+'upload_avatar.php',{method:'POST',body:fd})
    .then(r=>r.json())
    .then(data=>{ if(data.success){ document.getElementById('userAvatar').src=data.avatar+'?t='+Date.now(); showToast('✅ Foto profil berhasil diupdate!','success'); } else showToast(data.message,'error'); })
    .catch(()=>showToast('❌ Gagal upload foto!','error'));
}

// ===== KUIS =====
function saveQuizAttempt(finalScore){
    if(!currentUser) return;
    fetch(API_BASE+'save_quiz.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({score:finalScore})})
    .then(r=>r.json())
    .then(data=>{ if(data.newBadge){ setTimeout(()=>{ showToast(`🏅 Badge baru: ${data.newBadge}`,'badge'); launchConfetti(); loadPassport(); },500); } }).catch(()=>{});
}

function renderHistoryChart(){
    const ca=document.getElementById('historyChartArea');
    if(!ca||!currentUser) return;
    ca.innerHTML='<p class="loading-text">⏳ Memuat...</p>';
    fetch(API_BASE+'get_history.php')
    .then(r=>r.json())
    .then(data=>{
        ca.innerHTML='';
        const h=data.history||[];
        if(h.length===0){ ca.innerHTML='<p class="empty-hint">Belum ada riwayat kuis. Mulai bermain!</p>'; return; }
        h.forEach((val,idx)=>{
            const w=document.createElement('div'); w.className='bar-wrapper';
            w.innerHTML=`<div class="bar-label">Quiz #${idx+1}</div><div class="bar-track"><div class="bar-fill" style="width:${val}%"></div></div><div class="bar-value">${val}</div>`;
            ca.appendChild(w);
        });
    }).catch(()=>{ ca.innerHTML='<p style="color:red;">Gagal memuat riwayat.</p>'; });
}

// ===== ADMIN =====
function loadAdminDashboard(){
    fetch(API_BASE+'admin_stats.php')
    .then(r=>r.json())
    .then(data=>{
        if(!data.success) return;
        document.getElementById('statTotalUser').innerText=data.totalUser;
        document.getElementById('statTotalKuis').innerText=data.totalKuis;
        const c=document.getElementById('userTableContainer');
        if(data.userList.length===0){ c.innerHTML='<p class="empty-hint">Belum ada user.</p>'; return; }
        c.innerHTML=`<div class="admin-table-wrap"><table class="admin-table">
            <thead><tr><th>Username</th><th>Email</th><th>Bergabung</th><th>Streak</th><th>Total Kuis</th><th>Skor Max</th></tr></thead>
            <tbody>${data.userList.map((u,i)=>`<tr class="${i%2===0?'even':''}"><td><strong>${u.username}</strong></td><td>${u.email}</td><td>${u.join_date}</td><td>🔥${u.streak}</td><td>${u.total_kuis}</td><td>${u.skor_tertinggi!==null?`<strong class="accent-text">${u.skor_tertinggi}</strong>`:'-'}</td></tr>`).join('')}</tbody>
        </table></div>`;
    }).catch(()=>{});
}

// ===== BAHASA =====
function setLanguage(lang){
    currentLang=lang;
    document.getElementById('btnId').classList.toggle('active',lang==='id');
    document.getElementById('btnEn').classList.toggle('active',lang==='en');
    ['subTitleText','searchInput','searchBtnText','backToHomeBtn','closeDetailBtn','quizFloatingBtn'].forEach((id,i)=>{
        const el=document.getElementById(id); if(!el) return;
        const keys=['subtitle','searchPlace','searchBtn','backBtn','closeBtn','quizBtn'];
        if(id==='searchInput') el.placeholder=appTexts[lang][keys[i]];
        else el.innerText=appTexts[lang][keys[i]];
    });
    searchProvinsi();
}

// ===== PROVINSI =====
function renderHome(data){
    const list=document.getElementById('provinsiList'); list.innerHTML='';
    data.forEach(p=>{
        const div=document.createElement('div'); div.className='card';
        div.innerHTML=`<div class="card-inner"><img src="${p.logo}" class="prov-logo" onerror="this.src='https://placehold.co/60x60?text=Logo'"><h3>${p.name}</h3><span class="explore-hint">Klik untuk eksplorasi →</span></div>`;
        div.onclick=()=>showKategori(p);
        list.appendChild(div);
    });
}

function searchProvinsi(){
    const q=document.getElementById('searchInput').value.toLowerCase();
    renderHome(provinces.filter(p=>p.name.toLowerCase().includes(q)));
}

function showKategori(p){
    document.getElementById('mainView').style.display='none';
    document.getElementById('kategoriView').style.display='block';
    document.getElementById('detail').style.display='none';
    document.getElementById('breadcrumb').innerHTML=`Home > 📍 ${p.name}`;
    

    const favorites = JSON.parse(localStorage.getItem('nusapedia-favs') || '[]');
    const isFav = favorites.includes(p.name);
    
    
    const provNameEl = document.getElementById('currentProvName');
    provNameEl.innerHTML = `📍 ${p.name} <span id="favBtn" onclick="toggleFavorite('${p.name}')" style="cursor:pointer; margin-left:10px; color:#E97451;">${isFav ? '♥' : '♡'}</span>`;
  

    visitProvince(p.name);
    const list=document.getElementById('kategoriList'); list.innerHTML='';
    const cats={makananKhas:{id:'🍜 Makanan Khas',en:'🍜 Traditional Food'},tarianDaerah:{id:'💃 Tarian Daerah',en:'💃 Traditional Dance'},rumahAdat:{id:'🏠 Rumah Adat',en:'🏠 Traditional House'},pakaianAdat:{id:'👘 Pakaian Adat',en:'👘 Traditional Attire'},senjataTradisional:{id:'⚔️ Senjata Tradisional',en:'⚔️ Traditional Weapon'},alatMusikTradisional:{id:'🎵 Alat Musik',en:'🎵 Traditional Instrument'},bahasaDaerah:{id:'🗣️ Bahasa Daerah',en:'🗣️ Local Language'},laguDaerah:{id:'🎶 Lagu Daerah',en:'🎶 Folk Song'}};
    Object.keys(p.budaya).forEach(key=>{
        if(!cats[key]) return;
        const btn=document.createElement('button'); btn.className='category-btn';
        btn.innerHTML=currentLang==='id'?cats[key].id:cats[key].en;
        btn.onclick=()=>showDetail(p.budaya[key],p.name);
        list.appendChild(btn);
    });

    // flashcard 
    const flashBtn = document.createElement('button');
    flashBtn.className = 'category-btn flashcard-theme'; // kamu bisa beri class khusus warna gelap seperti di screenshot
    flashBtn.style.backgroundColor = '#102A43'; // Warna navy gelap sesuai screenshot
    flashBtn.style.color = '#fff';
    flashBtn.innerHTML = currentLang === 'id' ? 'Flashcard Belajar' : 'Study Flashcard';
    flashBtn.onclick = () => startFlashcard(p);
    list.appendChild(flashBtn);
    if(p.audio) playAudio(p.audio);
}

function showDetail(item,provName){
    document.getElementById('detail').style.display='block';
    document.getElementById('detailTitle').innerText=item.name;
    const desc=currentLang==='id'?item.desc_id:item.desc_en;
    document.getElementById('detailDesc').innerText=desc;
    document.getElementById('breadcrumb').innerHTML=`Home > 📍 ${provName} > 📖 ${item.name}`;
    currentDetailText=desc;
    const img=document.getElementById('imageContainer');
    img.innerHTML=item.image&&item.image.trim()!==''?`<img src="${item.image}" alt="${item.name}" class="budaya-img-detail" onclick="openLightbox('${item.image}')" onerror="this.parentElement.innerHTML='<em>${appTexts[currentLang].noImg}</em>';">`:`<em class="no-img-text">${appTexts[currentLang].noImg}</em>`;
    document.getElementById('detail').scrollIntoView({behavior:'smooth'});
}

function backToHome(){
    document.getElementById('mainView').style.display='block';
    document.getElementById('kategoriView').style.display='none';
    document.getElementById('detail').style.display='none';
    document.getElementById('breadcrumb').innerHTML='Beranda';
    if(currentAudio){ currentAudio.pause(); document.getElementById('audioStatus').style.display='none'; }
    if(window.speechSynthesis) window.speechSynthesis.cancel();
}
function closeDetail(){
    document.getElementById('detail').style.display='none';
    document.getElementById('kategoriView').scrollIntoView({behavior:'smooth'});
    if(window.speechSynthesis) window.speechSynthesis.cancel();
}
function openLightbox(src){ document.getElementById('lightbox').style.display='flex'; document.getElementById('lightboxImg').src=src; }
function closeLightbox(){ document.getElementById('lightbox').style.display='none'; }

function playAudio(src){
    if(currentAudio) currentAudio.pause();
    currentAudio=new Audio(src);
    currentAudio.play().then(()=>{ document.getElementById('audioStatus').style.display='flex'; document.getElementById('audioControlBtn').innerText='⏸'; }).catch(()=>{});
}
function toggleAudio(){
    if(!currentAudio) return;
    const btn=document.getElementById('audioControlBtn');
    if(currentAudio.paused){ currentAudio.play(); btn.innerText='⏸'; } else { currentAudio.pause(); btn.innerText='▶'; }
}

// ===== QUIZ =====
function startQuizPlatform(){
    if(!currentUser){ showToast('🔒 Silakan Login untuk bermain kuis!','error'); return; }
    score=0; lives=3; currentQuestionIndex=0;
    const pool=[
        {q:"Senjata tradisional Kujang berasal dari provinsi?",o:["Jawa Barat","Bali","Papua","Sumatera Barat"],a:"Jawa Barat"},
        {q:"Nama rumah adat utama dari daerah Papua?",o:["Honai","Gadang","Betang","Kasepuhan"],a:"Honai"},
        {q:"Alat musik Sape dimainkan suku Dayak dengan cara?",o:["Dipetik","Ditiup","Dipukul","Digoyang"],a:"Dipetik"},
        {q:"Tari Piring berasal dari daerah?",o:["Sumatera Barat","Bali","Jawa Barat","Papua"],a:"Sumatera Barat"},
        {q:"Kuliner Ayam Betutu khas dari?",o:["Bali","Papua","Jawa Barat","Kalimantan Tengah"],a:"Bali"},
        {q:"Lagu daerah khas Provinsi Aceh yang populer mendunia?",o:["Bungong Jeumpa","Bubuy Bulan","Ampar Ampar Pisang","Apuse"],a:"Bungong Jeumpa"},
        {q:"Senjata Rencong merupakan simbol keberanian rakyat?",o:["Aceh","Jawa Barat","Bali","Papua"],a:"Aceh"},
        {q:"Tari Saman yang diakui UNESCO berasal dari?",o:["Aceh","Sumatera Barat","Jawa Tengah","Sulawesi"],a:"Aceh"},
        {q:"Mie Aceh punya ciri khas kuah kental beraroma?",o:["Kari Rempah","Soto Santan","Kecap Manis","Asam Pedas"],a:"Kari Rempah"},
        {q:"Serune Kalee adalah instrumen dari?",o:["Aceh","Papua","Bali","Nusa Tenggara"],a:"Aceh"},
        {q:"Alat musik perkusi pengiring upacara adat Bali?",o:["Gamelan Bali","Sangkha","Angklung","Kolintang"],a:"Gamelan Bali"},
        {q:"Senjata Bali berlekuk spiritual bernama?",o:["Keris","Kujang","Rencong","Mandau"],a:"Keris"},
        {q:"Tari penyambutan tamu di Bali menggunakan mangkok bunga?",o:["Tari Pendet","Tari Saman","Tari Jaipong","Tari Piring"],a:"Tari Pendet"},
        {q:"Rumah adat Bali berarsitektur gapura terbelah disebut?",o:["Gapura Candi Bentar","Rumah Krong Bade","Rumah Honai","Rumah Gadang"],a:"Gapura Candi Bentar"},
        {q:"Penutup kepala khas pria Bali bernama?",o:["Udeng","Kopiah","Tanjak","Blangkon"],a:"Udeng"},
        {q:"Lagu daerah legendaris asal Papua?",o:["Yamko Rambe Yamko","Bungong Jeumpa","Bubuy Bulan","Manuk Dadali"],a:"Yamko Rambe Yamko"},
        {q:"Alat musik tabung kayu khas Papua?",o:["Tifa","Sape","Gamelan","Angklung"],a:"Tifa"},
        {q:"Pakaian adat Papua dari anyaman serat tanaman?",o:["Sali","Ulee Balang","Kebaya Bali","Baju Bedahan"],a:"Sali"},
        {q:"Senjata berburu tradisional penduduk asli Papua?",o:["Busur dan Panah","Rencong","Keris","Kujang"],a:"Busur dan Panah"},
        {q:"Tari Jaipong merupakan tarian kreasi khas dari?",o:["Jawa Barat","Bali","Aceh","Papua"],a:"Jawa Barat"}
    ];
    activeQuizQuestions=pool.sort(()=>0.5-Math.random()).slice(0,5);
    document.getElementById('quizModal').style.display='flex';
    loadQuizQuestion();
}

function loadQuizQuestion(){
    document.getElementById('quizFeedback').style.display='none';
    document.getElementById('quizNextBtn').style.display='none';
    document.getElementById('quizExitBtn').style.display='inline-block';
    if(lives<=0){ showQuizFinalResult('💔 Game Over! Nyawa habis.'); return; }
    if(currentQuestionIndex>=activeQuizQuestions.length){ showQuizFinalResult('🎉 Selamat! Semua terjawab.'); return; }
    document.getElementById('quizScore').innerText=score;
    document.getElementById('quizLives').innerText='❤️'.repeat(lives);
    document.getElementById('quizProgress').innerText=`Soal ${currentQuestionIndex+1}/5`;
    document.getElementById('quizProgressBar').style.width=`${(currentQuestionIndex/5)*100}%`;
    const q=activeQuizQuestions[currentQuestionIndex];
    document.getElementById('quizQuestion').innerText=q.q;
    const opt=document.getElementById('quizOptions'); opt.innerHTML='';
    [...q.o].sort(()=>0.5-Math.random()).forEach(o=>{
        const b=document.createElement('button'); b.className='option-btn'; b.innerText=o;
        b.onclick=()=>checkQuizAnswer(o,q.a); opt.appendChild(b);
    });
}

function checkQuizAnswer(sel,corr){
    document.querySelectorAll('.option-btn').forEach(b=>b.disabled=true);
    const fb=document.getElementById('quizFeedback'); fb.style.display='block';
    if(sel===corr){ score+=20; fb.className='feedback-correct'; fb.innerHTML='✅ Benar! Jawaban tepat.'; document.querySelectorAll('.option-btn').forEach(b=>{ if(b.innerText===corr) b.classList.add('correct'); }); }
    else { lives--; fb.className='feedback-wrong'; fb.innerHTML=`❌ Salah! Jawaban: <strong>${corr}</strong>`; document.querySelectorAll('.option-btn').forEach(b=>{ if(b.innerText===corr) b.classList.add('correct'); if(b.innerText===sel) b.classList.add('wrong'); }); }
    currentQuestionIndex++;
    document.getElementById('quizScore').innerText=score;
    document.getElementById('quizNextBtn').style.display='inline-block';
    document.getElementById('quizExitBtn').style.display='none';
}

function showQuizFinalResult(msg){
    saveQuizAttempt(score);
    document.getElementById('quizProgressBar').style.width='100%';
    document.getElementById('quizQuestion').innerText=`${msg}\nSkor Akhir: ${score}/100`;
    document.getElementById('quizOptions').innerHTML='';
    document.getElementById('quizLives').innerText='';
    document.getElementById('quizProgress').innerText='Selesai!';
    document.getElementById('quizNextBtn').style.display='none';
    document.getElementById('quizExitBtn').style.display='inline-block';
    if(score===100){ launchConfetti(); showToast('🌟 SKOR SEMPURNA! Luar biasa!','success'); }
    else if(score>=60) showToast(`🎯 Bagus! Skor kamu ${score}!`,'success');
    else showToast(`📚 Skor ${score}. Coba lagi ya!`,'info');
    if(document.getElementById('page-profile').classList.contains('active')) renderHistoryChart();
}

function closeQuiz(){ document.getElementById('quizModal').style.display='none'; switchPage('profile'); }

function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = '🙈';
    } else {
        input.type = 'password';
        icon.textContent = '👁️';
    }
}

// ===== FLASHCARD =====
function startFlashcard(p) {

    const budayaKeys = Object.keys(p.budaya);
    if (budayaKeys.length === 0) {
        showToast('❌ Tidak ada data budaya untuk flashcard!', 'error');
        return;
    }

    const randomKey = budayaKeys[Math.floor(Math.random() * budayaKeys.length)];
    const item = p.budaya[randomKey];

    document.getElementById('detail').style.display = 'block';
    document.getElementById('breadcrumb').innerHTML = `Home > 📍 ${p.name} > Flashcard`;
    document.getElementById('detailTitle').innerText = `Flashcard Belajar: ${p.name}`;

    const desc = currentLang === 'id' ? item.desc_id : item.desc_en;
    const detailDescEl = document.getElementById('detailDesc');
    
    detailDescEl.innerHTML = `
        <div class="flashcard-box" id="flashcardBox" onclick="flipCard()" style="border: 2px dashed #ECC94B; padding: 20px; border-radius: 10px; cursor: pointer; text-align: center; background: var(--card-bg, #fff); margin: 15px 0;">
            <div id="flashcardFront">
                <p style="font-size: 1.1rem; color: #718096;">🤔 Apakah nama elemen budaya ini?</p>
                <p style="font-size: 1.2rem; font-weight: bold; margin: 15px 0;">"${desc.substring(0, 120)}..."</p>
                <small style="color: #ECC94B;">👉 Klik kartu untuk melihat jawaban</small>
            </div>
            <div id="flashcardBack" style="display: none;">
                <p style="font-size: 1.1rem; color: #48BB78; font-weight: bold;">✅ Jawabannya adalah:</p>
                <h3 style="font-size: 1.8rem; margin: 10px 0; color: #102A43;">${item.name}</h3>
                ${item.image ? `<img src="${item.image}" style="max-width: 150px; border-radius: 5px; margin-top: 10px;">` : ''}
                <br><small style="color: #718096; display: inline-block; margin-top: 10px;">👉 Klik lagi untuk melihat soal</small>
            </div>
        </div>
    `;


    document.getElementById('imageContainer').innerHTML = '';
    document.getElementById('detail').scrollIntoView({ behavior: 'smooth' });
}

function flipCard() {
    const front = document.getElementById('flashcardFront');
    const back = document.getElementById('flashcardBack');
    if (front.style.display === 'none') {
        front.style.display = 'block';
        back.style.display = 'none';
    } else {
        front.style.display = 'none';
        back.style.display = 'block';
    }
}

// ===== FAVORIT PROVINSI =====
function toggleFavorite(provName) {
    let favorites = JSON.parse(localStorage.getItem('nusapedia-favs') || '[]');
    const index = favorites.indexOf(provName);

    if (index > -1) {

        favorites.splice(index, 1);
        document.getElementById('favBtn').innerText = '♡';
        showToast(`💔 ${provName} dihapus dari favorit`, 'info');
    } else {

        favorites.push(provName);
        document.getElementById('favBtn').innerText = '♥';
        showToast(`❤️ ${provName} berhasil masuk favorit!`, 'success');
        launchConfetti(); 
    }

    localStorage.setItem('nusapedia-favs', JSON.stringify(favorites));
    

    if (document.getElementById('page-profile').classList.contains('active')) {
        renderFavoriteProvinces();
    }
}

function renderFavoriteProvinces() {

    const favorites = JSON.parse(localStorage.getItem('nusapedia-favs') || '[]');
    

    const favContainer = document.getElementById('favoriteProvincesList');
    if (!favContainer) return; 

    if (favorites.length === 0) {
        favContainer.innerHTML = '<p class="empty-hint">Belum ada provinsi favorit. Klik ikon ♡ di halaman provinsi! ❤️</p>';
    } else {
        favContainer.innerHTML = favorites.map(p => `<span class="passport-stamp" style="background:#E97451; color:#fff; border-color:#E97451;">❤️ ${p}</span>`).join('');
    }
}
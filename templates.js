// ============================================
// 🎨 20 MODÈLES AVEC PRIX INDIVIDUELS
// ============================================
const templates = [
    // ============================================
    // ✨ MINIMALISTES - 0.99€ chacun
    // ============================================
    { id: 'minimal', name: 'Minimaliste', desc: 'Épuré centré', color: '#333333', cat: 'minimal', emoji: '✨', layout: 'minimal', price: '0.99€', priceValue: 0.99 },
    { id: 'compact', name: 'Compact', desc: 'Deux colonnes serrées', color: '#991b1b', cat: 'minimal', emoji: '📋', layout: 'compact', price: '0.99€', priceValue: 0.99 },
    { id: 'clean', name: 'Clean', desc: 'Aéré avec icônes', color: '#4a5568', cat: 'minimal', emoji: '🧹', layout: 'clean', price: '0.99€', priceValue: 0.99 },
    { id: 'simple', name: 'Simple', desc: 'Lignes fines épurées', color: '#718096', cat: 'minimal', emoji: '📝', layout: 'simple', price: '0.99€', priceValue: 0.99 },
    { id: 'zen', name: 'Zen', desc: 'Grands espaces blancs', color: '#2d3748', cat: 'minimal', emoji: '🧘', layout: 'zen', price: '0.99€', priceValue: 0.99 },

    // ============================================
    // 🏛️ CLASSIQUES - 1.99€ chacun
    // ============================================
    { id: 'classic', name: 'Classique Pro', desc: 'Traditionnel structuré', color: '#1e3a8a', cat: 'classic', emoji: '🏛️', layout: 'classic', price: '1.99€', priceValue: 1.99 },
    { id: 'elegant', name: 'Élégant', desc: 'Luxe avec bordures or', color: '#b8860b', cat: 'classic', emoji: '💎', layout: 'elegant', price: '1.99€', priceValue: 1.99 },
    { id: 'executive', name: 'Executive', desc: 'Double colonne sobre', color: '#2c3e50', cat: 'classic', emoji: '👔', layout: 'executive', price: '1.99€', priceValue: 1.99 },
    { id: 'corporate', name: 'Corporate', desc: 'Header large pro', color: '#1a5276', cat: 'classic', emoji: '🏢', layout: 'corporate', price: '1.99€', priceValue: 1.99 },
    { id: 'traditional', name: 'Traditionnel', desc: 'Séparations horizontales', color: '#5d4037', cat: 'classic', emoji: '📜', layout: 'traditional', price: '1.99€', priceValue: 1.99 },

    // ============================================
    // 🎨 CRÉATIFS - 1.99€ chacun
    // ============================================
    { id: 'creative', name: 'Créatif', desc: 'Dégradé violet', color: '#667eea', cat: 'creative', emoji: '🎨', layout: 'gradient-circle', gradient: 'linear-gradient(135deg,#667eea,#764ba2)', price: '1.99€', priceValue: 1.99 },
    { id: 'timeline', name: 'Chronologique', desc: 'Ligne du temps', color: '#2563eb', cat: 'creative', emoji: '📅', layout: 'timeline', price: '1.99€', priceValue: 1.99 },
    { id: 'nature', name: 'Nature', desc: 'Cartes arrondies vertes', color: '#065f46', cat: 'creative', emoji: '🌿', layout: 'cards', price: '1.99€', priceValue: 1.99 },
    { id: 'artist', name: 'Artistique', desc: 'Sidebar droite rose', color: '#e11d48', cat: 'creative', emoji: '🎭', layout: 'sidebar-right', price: '1.99€', priceValue: 1.99 },
    { id: 'bold', name: 'Bold', desc: 'Plein écran violet', color: '#7c3aed', cat: 'creative', emoji: '💜', layout: 'bold', price: '1.99€', priceValue: 1.99 },

    // ============================================
    // 🚀 MODERNES - 2.99€ chacun
    // ============================================
    { id: 'modern', name: 'Moderne', desc: 'Sidebar gauche colorée', color: '#3498db', cat: 'modern', emoji: '🚀', layout: 'sidebar-left', price: '2.99€', priceValue: 2.99 },
    { id: 'tech', name: 'Tech', desc: 'Dark mode terminal', color: '#10b981', cat: 'modern', emoji: '💻', layout: 'dark', price: '2.99€', priceValue: 2.99 },
    { id: 'futurist', name: 'Futuriste', desc: 'Dark mode néon', color: '#4f46e5', cat: 'modern', emoji: '🔮', layout: 'dark-neon', price: '2.99€', priceValue: 2.99 },
    { id: 'gradient', name: 'Gradient', desc: 'Dégradé orange', color: '#f97316', cat: 'modern', emoji: '🔥', layout: 'gradient', gradient: 'linear-gradient(135deg,#f97316,#ea580c)', price: '2.99€', priceValue: 2.99 },
    { id: 'startup', name: 'Startup', desc: 'Dégradé rose', color: '#ec4899', cat: 'modern', emoji: '💡', layout: 'gradient', gradient: 'linear-gradient(135deg,#ec4899,#be185d)', price: '2.99€', priceValue: 2.99 },
];

// ============================================
// 🏗️ LES 19 LAYOUTS DISPONIBLES
// ============================================
const layouts = {
    // 1. CLASSIQUE
    'classic': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Georgia',serif;background:#fff;color:#222;padding:40px;max-width:210mm;margin:0 auto}
.header{text-align:center;border-bottom:3px solid ${t.color};padding-bottom:20px;margin-bottom:25px}
.header h1{font-size:30px;color:${t.color};text-transform:uppercase;letter-spacing:2px;margin-bottom:5px}
.header .cvtitle{font-size:16px;font-weight:700;color:#333;margin-bottom:3px}
.header .subtitle{font-size:15px;color:#555}
.contact{font-size:13px;color:#777;margin-top:8px}.contact span{margin:0 8px}
.section{margin-bottom:20px}.section h2{font-size:17px;color:${t.color};border-bottom:2px solid ${t.color};padding-bottom:4px;margin-bottom:12px;text-transform:uppercase}
.profile{font-size:14px;line-height:1.6;color:#444}
.exp{margin-bottom:14px}.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap;margin-bottom:3px}
.exp-title{font-weight:700;font-size:15px}.exp-company{color:#555;font-style:italic}.exp-date{font-size:13px;color:#888}
.exp-desc{margin-top:5px;font-size:13px;color:#555}
.skills-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px}
.skill-tag{background:${t.color}15;color:${t.color};padding:5px 14px;border-radius:20px;font-size:13px;border:1px solid ${t.color}40}
@media print{body{padding:20px}}
</style></head><body>${generateContent(d,t,C)}</body></html>`;
    },

    // 2. ÉLÉGANT
    'elegant': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Georgia',serif;background:#fdfcf8;color:#3a3a3a;padding:30px;max-width:210mm;margin:0 auto}
.cv-box{border:2px solid ${t.color};padding:40px;background:#fff}
.header{text-align:center;border-bottom:1px solid ${t.color};padding-bottom:15px;margin-bottom:20px}
.header h1{font-size:32px;color:${t.color};letter-spacing:3px;font-weight:400;margin-bottom:5px}
.header .cvtitle{font-size:14px;color:#8b7355;letter-spacing:2px;text-transform:uppercase}
.header .subtitle{font-size:13px;color:#999;margin-top:3px}
.contact{font-size:12px;color:#aaa;margin-top:8px}.contact span{margin:0 10px}
.section{margin-bottom:18px}.section h2{font-size:15px;color:${t.color};text-transform:uppercase;letter-spacing:2px;border-bottom:1px dotted ${t.color};padding-bottom:3px;margin-bottom:10px}
.profile{font-size:13px;line-height:1.7;color:#555;font-style:italic;text-align:justify}
.exp{margin-bottom:12px;padding-left:12px;border-left:2px solid ${t.color}40}
.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:700;font-size:14px}.exp-company{color:${t.color};font-style:italic}.exp-date{font-size:12px;color:#aaa}
.exp-desc{margin-top:4px;font-size:12px;color:#666}
.skills-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}
.skill-tag{background:${t.color}10;color:#8b7355;border:1px solid ${t.color};padding:4px 12px;font-size:11px}
</style></head><body><div class="cv-box">${generateContent(d,t,C)}</div></body></html>`;
    },

    // 3. EXECUTIVE
    'executive': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fff;color:#333;padding:30px;max-width:210mm;margin:0 auto;font-size:12px}
.header{margin-bottom:20px}.header h1{font-size:26px;color:${t.color};text-transform:uppercase;letter-spacing:2px;margin-bottom:3px}
.header .cvtitle{font-size:13px;font-weight:700;color:#555}.header .subtitle{font-size:12px;color:#888}
.contact{font-size:11px;color:#999;margin-top:5px}
.two-col{display:grid;grid-template-columns:2fr 1fr;gap:25px}
.main-col{border-right:2px solid ${t.color};padding-right:25px}
.side-col{padding-left:5px}
.section{margin-bottom:16px}.section h2{font-size:14px;color:${t.color};text-transform:uppercase;letter-spacing:1px;border-bottom:1px solid #ddd;padding-bottom:3px;margin-bottom:8px}
.profile{font-size:12px;line-height:1.5;color:#555}
.exp{margin-bottom:10px}.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:600;font-size:12px}.exp-company{color:#555;font-size:11px}.exp-date{color:#888;font-size:11px}
.exp-desc{font-size:11px;color:#666;margin-top:3px}
.skills-list{font-size:11px;color:#555;line-height:1.6}
@media print{body{padding:15px}}
</style></head><body>
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.phone),C(d.personalInfo.email),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' | ')}</div></div>
<div class="two-col"><div class="main-col">${generateContentSimple(d,t,C)}</div><div class="side-col">
${d.hardSkills?`<div class="section"><h2>Hard Skills</h2><div class="skills-list">${d.hardSkills.split(',').map(s=>`• ${s.trim()}<br>`).join('')}</div></div>`:''}
${d.softSkills?`<div class="section"><h2>Soft Skills</h2><div class="skills-list">${d.softSkills.split(',').map(s=>`• ${s.trim()}<br>`).join('')}</div></div>`:''}
${d.languages&&d.languages.length>0?`<div class="section"><h2>Langues</h2><div class="skills-list">${d.languages.map(l=>`• ${C(l.language)}${l.level?' ('+l.level+')':''}<br>`).join('')}</div></div>`:''}
${d.interests?`<div class="section"><h2>Intérêts</h2><p class="skills-list">${d.interests}</p></div>`:''}
</div></div></body></html>`;
    },

    // 4. CORPORATE
    'corporate': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fff;color:#333;max-width:210mm;margin:0 auto}
.top-bar{background:${t.color};height:15px}
.header{background:#f8fafc;padding:30px 40px;text-align:center;border-bottom:1px solid ${t.color}30}
.header h1{font-size:28px;color:${t.color};margin-bottom:5px}.header .cvtitle{font-size:15px;font-weight:600;color:#333}.header .subtitle{font-size:14px;color:#666}
.contact{font-size:13px;color:#888;margin-top:8px}.contact span{margin:0 10px}
.content{padding:30px 40px}
.section{margin-bottom:20px}.section h2{font-size:16px;color:${t.color};border-left:4px solid ${t.color};padding-left:10px;margin-bottom:10px}
.profile{font-size:14px;line-height:1.6;color:#555}
.exp{margin-bottom:14px;padding:12px;background:#f8fafc;border-radius:4px;border-left:3px solid ${t.color}}
.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:600;font-size:14px}.exp-company{color:${t.color};font-size:13px}.exp-date{font-size:12px;color:#888}
.exp-desc{margin-top:5px;font-size:13px;color:#555}
.skills-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
.skill-tag{background:${t.color}15;color:${t.color};padding:4px 12px;border-radius:4px;font-size:12px;border:1px solid ${t.color}40}
@media print{.top-bar{display:none}}
</style></head><body><div class="top-bar"></div>
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.phone),C(d.personalInfo.email),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' <span>|</span> ')}</div></div>
<div class="content">${generateContentSimple(d,t,C)}</div></body></html>`;
    },

    // 5. TRADITIONNEL
    'traditional': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Times New Roman',serif;background:#fff;color:#333;padding:35px;max-width:210mm;margin:0 auto}
.header{text-align:center;padding-bottom:15px;margin-bottom:15px;border-bottom:1px solid ${t.color}}
.header h1{font-size:26px;color:${t.color};text-transform:uppercase;letter-spacing:1px}.header .cvtitle{font-size:14px;font-weight:700}.header .subtitle{font-size:13px;color:#666}
.contact{font-size:12px;color:#888;margin-top:5px}.contact span{margin:0 6px}
.section{margin-bottom:16px;padding-bottom:10px;border-bottom:1px dotted #ccc}.section:last-child{border-bottom:none}
.section h2{font-size:15px;color:${t.color};text-transform:uppercase;margin-bottom:8px}
.profile{font-size:13px;line-height:1.6;color:#444}
.exp{margin-bottom:10px}.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:700;font-size:13px}.exp-company{color:${t.color};font-style:italic;font-size:12px}.exp-date{font-size:12px;color:#888}
.exp-desc{font-size:12px;color:#555;margin-top:3px}
.skills-row{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:5px}
.skill-tag{background:${t.color}15;color:${t.color};padding:3px 10px;font-size:11px;border:1px solid ${t.color}40}
@media print{body{padding:20px}}
</style></head><body>${generateContent(d,t,C)}</body></html>`;
    },

    // 6. SIDEBAR GAUCHE
    'sidebar-left': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;display:flex;min-height:297mm;max-width:210mm;margin:0 auto}
.sidebar{background:${t.color};color:#fff;width:35%;padding:35px 25px}
.sidebar h1{font-size:24px;font-weight:600;margin-bottom:5px}.sidebar .cvtitle{font-size:13px;opacity:0.9;font-weight:600}.sidebar .subtitle{font-size:14px;opacity:0.8;margin-bottom:20px}
.side-contacts{margin:20px 0;padding:15px 0;border-top:1px solid rgba(255,255,255,0.3);border-bottom:1px solid rgba(255,255,255,0.3);font-size:12px}
.side-contacts div{margin-bottom:6px}
.side-section{margin-top:18px}.side-section h3{font-size:14px;margin-bottom:10px;font-weight:600}
.skill-bar{margin-bottom:8px}.skill-name{font-size:11px;margin-bottom:2px}.skill-level{height:4px;background:rgba(255,255,255,0.3);border-radius:2px}.skill-fill{height:100%;background:#fff;border-radius:2px}
.main{flex:1;padding:35px 30px}
.main h2{font-size:18px;color:${t.color};border-bottom:2px solid ${t.color};padding-bottom:5px;margin-bottom:12px}
.profile{font-size:13px;line-height:1.6;color:#555;font-style:italic;margin-bottom:20px}
.exp{margin-bottom:16px}.exp-title{font-weight:600;font-size:14px}.exp-sub{color:#666;font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{margin-top:4px;font-size:12px;color:#555}
@media print{body{-webkit-print-color-adjust:exact}}
</style></head><body>
<div class="sidebar"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}
<div class="side-contacts">${[d.personalInfo.email,d.personalInfo.phone,d.personalInfo.location,d.personalInfo.linkedin].filter(Boolean).map(c=>`<div>${c}</div>`).join('')}</div>
${d.hardSkills?`<div class="side-section"><h3>Hard Skills</h3>${d.hardSkills.split(',').map(s=>`<div class="skill-bar"><div class="skill-name">${s.trim()}</div><div class="skill-level"><div class="skill-fill" style="width:${Math.floor(Math.random()*25)+75}%"></div></div></div>`).join('')}</div>`:''}
${d.softSkills?`<div class="side-section"><h3>Soft Skills</h3>${d.softSkills.split(',').map(s=>`<div class="skill-bar"><div class="skill-name">${s.trim()}</div><div class="skill-level"><div class="skill-fill" style="width:${Math.floor(Math.random()*25)+75}%"></div></div></div>`).join('')}</div>`:''}
${d.languages&&d.languages.length>0?`<div class="side-section"><h3>Langues</h3>${d.languages.map(l=>`<div class="skill-bar"><div class="skill-name">${C(l.language)}${l.level?' - '+l.level:''}</div><div class="skill-level"><div class="skill-fill" style="width:${l.level&&(l.level.includes('maternelle')||l.level.includes('Bilingue'))?'100':'75'}%"></div></div></div>`).join('')}</div>`:''}
</div>
<div class="main">${generateContentSimple(d,t,C)}${d.interests?`<div style="margin-top:20px"><h2>Centres d'intérêt</h2><p style="font-size:13px;color:#555">${d.interests}</p></div>`:''}</div></body></html>`;
    },

    // 7. DARK
    'dark': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Courier New',monospace;background:#0d1117;color:#c9d1d9;padding:30px;max-width:210mm;margin:0 auto}
.container{background:#161b22;border:1px solid #30363d;border-radius:6px;padding:35px}
.header{border-bottom:1px solid #30363d;padding-bottom:15px;margin-bottom:20px}
.header .prompt{color:#58a6ff;font-size:14px}.header .prompt span{color:${t.color}}
.header h1{color:#58a6ff;font-size:26px;margin:5px 0}
.header .cvtitle{color:${t.color};font-size:14px}.header .subtitle{color:#8b949e;font-size:13px}
.contact{color:#8b949e;font-size:11px;margin-top:5px}
.section{margin-bottom:18px}.section h2{color:#f0883e;font-size:14px;border-bottom:1px solid #21262d;padding-bottom:3px;margin-bottom:8px}
.profile{color:#c9d1d9;font-size:12px;line-height:1.6}
.exp{background:#0d1117;border:1px solid #21262d;padding:10px;border-radius:4px;margin-bottom:10px}
.exp-title{color:#58a6ff;font-weight:700;font-size:13px}.exp-company{color:${t.color};font-size:12px}.exp-date{color:#8b949e;font-size:11px}.exp-desc{color:#c9d1d9;font-size:12px;margin-top:4px}
.skills-row{display:flex;flex-wrap:wrap;gap:4px}.skill-tag{background:#1f6feb22;border:1px solid #1f6feb;color:#58a6ff;padding:2px 8px;border-radius:12px;font-size:10px}
.skill-tag-soft{background:${t.color}22;border:1px solid ${t.color};color:${t.color};padding:2px 8px;border-radius:12px;font-size:10px}
@media print{body{background:#fff;color:#333}.container{background:#fff;border-color:#ccc}}
</style></head><body><div class="container">
<div class="header"><div class="prompt">&gt; <span>$</span> whoami</div><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">$ ${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.email),C(d.personalInfo.phone),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' | ')}</div></div>
${generateContent(d,t,C)}</div></body></html>`;
    },

    // 8. DARK NEON
    'dark-neon': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;background:#0a0a1a;color:#e0e0ff;padding:30px;max-width:210mm;margin:0 auto}
.container{background:#12122a;border:1px solid #2a2a5a;border-radius:12px;padding:35px;position:relative;overflow:hidden}
.container::before{content:'';position:absolute;top:-50px;right:-50px;width:200px;height:200px;background:radial-gradient(circle,${t.color}20,transparent 70%)}
.header{text-align:center;margin-bottom:25px;position:relative}
.header h1{font-size:30px;background:linear-gradient(135deg,#818cf8,${t.color});-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:700}
.header .cvtitle{color:#a5b4fc;font-size:14px}.header .subtitle{color:#94a3b8;font-size:13px}
.contact{color:#94a3b8;font-size:11px;margin-top:5px}.contact span{margin:0 8px}
.section{margin-bottom:18px;position:relative}.section h2{color:#818cf8;font-size:15px;text-transform:uppercase;letter-spacing:2px;border-bottom:1px solid #1e1e4a;padding-bottom:3px;margin-bottom:10px}
.profile{color:#cbd5e1;font-size:13px;line-height:1.6}
.exp{background:#1a1a3a;border:1px solid #2a2a5a;border-radius:6px;padding:12px;margin-bottom:10px}
.exp-title{color:#e0e0ff;font-weight:600;font-size:13px}.exp-company{color:#818cf8;font-size:12px}.exp-date{color:#94a3b8;font-size:11px}.exp-desc{color:#cbd5e1;font-size:12px;margin-top:4px}
.skills-row{display:flex;flex-wrap:wrap;gap:5px}.skill-tag{background:${t.color}22;border:1px solid ${t.color};color:#818cf8;padding:3px 10px;border-radius:15px;font-size:10px}
@media print{body{background:#fff;color:#333}.container{background:#fff;border-color:#ccc}.header h1{-webkit-text-fill-color:${t.color}}}
</style></head><body><div class="container">${generateContent(d,t,C)}</div></body></html>`;
    },

    // 9. GRADIENT
    'gradient': function(d, t) {
        const C = (v, def) => v || def;
        const grad = t.gradient || 'linear-gradient(135deg,'+t.color+',#333)';
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Poppins',sans-serif;max-width:210mm;margin:0 auto;background:#fff}
.hero{background:${grad};color:#fff;padding:40px;text-align:center;position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);width:60px;height:60px;background:#fff;border-radius:50%}
.hero h1{font-size:32px;font-weight:700}.hero .cvtitle{font-size:14px;opacity:0.9;font-weight:600}.hero .subtitle{font-size:15px;opacity:0.8}
.contact-bar{display:flex;justify-content:center;gap:15px;margin-top:12px;font-size:12px;flex-wrap:wrap}
.content{padding:30px 35px}
.section{margin-bottom:20px}.section h2{font-size:16px;color:${t.color};padding-left:12px;border-left:3px solid ${t.color};margin-bottom:10px}
.profile{font-size:13px;line-height:1.6;color:#555;font-style:italic}
.exp-card{background:#f8f9fa;padding:12px;border-radius:6px;margin-bottom:10px;border-left:3px solid ${t.color}}
.exp-title{font-weight:600;font-size:13px}.exp-company{color:${t.color};font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{color:#555;font-size:12px;margin-top:4px}
.skills-cloud{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px}
.skill-pill{background:${grad};color:#fff;padding:5px 12px;border-radius:15px;font-size:11px}
@media print{body{-webkit-print-color-adjust:exact}}
</style></head><body>
<div class="hero"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact-bar">${[d.personalInfo.email,d.personalInfo.phone,d.personalInfo.location,d.personalInfo.linkedin].filter(Boolean).map(c=>`<span>${c}</span>`).join('')}</div></div>
<div class="content">${generateContent(d,t,C)}</div></body></html>`;
    },

    // 10. GRADIENT CIRCLE
    'gradient-circle': function(d, t) {
        const C = (v, def) => v || def;
        const grad = t.gradient || 'linear-gradient(135deg,'+t.color+',#333)';
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Poppins',sans-serif;max-width:210mm;margin:0 auto;background:#fff}
.hero{background:${grad};color:#fff;padding:40px;position:relative;overflow:hidden}
.hero::after{content:'';position:absolute;top:-40px;right:-40px;width:150px;height:150px;border:4px solid rgba(255,255,255,0.2);border-radius:50%}
.hero h1{font-size:34px;font-weight:700;position:relative}.hero .cvtitle{font-size:13px;font-weight:600;opacity:0.9;position:relative}.hero .subtitle{font-size:15px;opacity:0.8;position:relative}
.contact-bar{display:flex;gap:15px;margin-top:12px;font-size:12px;flex-wrap:wrap;position:relative}
.content{padding:30px 35px}
.section{margin-bottom:20px}.section h2{font-size:16px;color:${t.color};padding-left:10px;border-left:3px solid ${t.color};margin-bottom:10px}
.profile{font-size:13px;line-height:1.7;color:#555;font-style:italic}
.exp-card{background:#f8f9fa;padding:12px;border-radius:6px;margin-bottom:10px;border-left:3px solid ${t.color}}
.exp-title{font-weight:600;font-size:13px}.exp-company{color:${t.color};font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{color:#555;font-size:12px;margin-top:4px}
.skills-cloud{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px}
.skill-pill{background:${t.color};color:#fff;padding:5px 12px;border-radius:15px;font-size:11px}
@media print{body{-webkit-print-color-adjust:exact}}
</style></head><body>
<div class="hero"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact-bar">${[d.personalInfo.email,d.personalInfo.phone,d.personalInfo.location,d.personalInfo.linkedin].filter(Boolean).map(c=>`<span>${c}</span>`).join('')}</div></div>
<div class="content">${generateContent(d,t,C)}</div></body></html>`;
    },

    // 11. MINIMAL
    'minimal': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Helvetica Neue',sans-serif;background:#fff;color:#333;padding:50px;max-width:210mm;margin:0 auto;text-align:center}
.header h1{font-size:34px;font-weight:300;letter-spacing:4px;margin-bottom:5px}
.header .cvtitle{font-size:13px;font-weight:600;color:#555}.header .subtitle{font-size:14px;color:#999;margin-bottom:15px}
.contact-line{font-size:12px;color:#aaa;margin-bottom:30px}
hr{border:none;border-top:1px solid #eee;margin:20px 0}
.section{text-align:left;margin-bottom:18px}.section h2{font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#999;margin-bottom:8px}
.profile{font-size:13px;line-height:1.6;color:#666;font-style:italic;text-align:center}
.exp{margin-bottom:12px}.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:500;font-size:13px}.exp-sub{color:#999;font-size:12px}.exp-date{color:#bbb;font-size:11px}
.exp-desc{font-size:12px;color:#777;margin-top:3px}
.tags{display:flex;flex-wrap:wrap;gap:5px}.tag{border:1px solid #ddd;padding:3px 10px;font-size:11px;color:#777}
@media print{body{padding:25px}}
</style></head><body>
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact-line">${[C(d.personalInfo.email),C(d.personalInfo.phone),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' • ')}</div></div>
${generateContentSimple(d,t,C)}</body></html>`;
    },

    // 12. COMPACT
    'compact': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;font-size:10px;color:#333;padding:20px;max-width:210mm;margin:0 auto;line-height:1.3}
h1{font-size:20px;color:${t.color};text-transform:uppercase;margin-bottom:3px}
.cvtitle{font-size:11px;font-weight:600;color:#666}.subtitle{font-size:10px;color:#888}
.contact{font-size:9px;color:#999;margin:3px 0 10px}
.cols{display:grid;grid-template-columns:1fr 1fr;gap:15px}
.left{border-right:2px solid ${t.color};padding-right:15px}.right{padding-left:15px}
.section{margin-bottom:10px}h2{font-size:12px;color:${t.color};text-transform:uppercase;border-bottom:1px solid #ddd;padding-bottom:1px;margin-bottom:5px}
.profile{font-size:10px;color:#555}
.exp{margin-bottom:6px}.exp-title{font-weight:600;font-size:10px}.exp-sub{color:${t.color};font-size:9px}.exp-date{color:#888;font-size:9px}.exp-desc{font-size:9px;color:#666;margin-top:1px}
.skills{font-size:10px;color:#555}
@media print{body{padding:10px}}
</style></head><body>
<h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.phone),C(d.personalInfo.email),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' | ')}</div>
<div class="cols"><div class="left">
${d.personalInfo.summary?`<div class="section"><h2>Profil</h2><p class="profile">${d.personalInfo.summary}</p></div>`:''}
${d.hardSkills?`<div class="section"><h2>Hard Skills</h2><p class="skills">${d.hardSkills}</p></div>`:''}
${d.softSkills?`<div class="section"><h2>Soft Skills</h2><p class="skills">${d.softSkills}</p></div>`:''}
${d.languages&&d.languages.length>0?`<div class="section"><h2>Langues</h2><p class="skills">${d.languages.map(l=>`${C(l.language)}${l.level?' ('+l.level+')':''}`).join(', ')}</p></div>`:''}
${d.interests?`<div class="section"><h2>Intérêts</h2><p class="skills">${d.interests}</p></div>`:''}
</div><div class="right">
${d.experiences&&d.experiences.length>0?`<div class="section"><h2>Expérience</h2>${d.experiences.map(e=>`<div class="exp"><div class="exp-title">${C(e.title)}</div><div class="exp-sub">${C(e.company)}${e.location?', '+e.location:''}</div><div class="exp-date">${C(e.period)}</div>${e.description?`<p class="exp-desc">${e.description}</p>`:''}</div>`).join('')}</div>`:''}
${d.education&&d.education.length>0?`<div class="section"><h2>Formation</h2>${d.education.map(e=>`<div class="exp"><div class="exp-title">${C(e.degree)}</div><div class="exp-sub">${C(e.school)}</div><div class="exp-date">${C(e.year)}</div></div>`).join('')}</div>`:''}
</div></div></body></html>`;
    },

    // 13. CLEAN
    'clean': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fff;color:#333;padding:40px;max-width:210mm;margin:0 auto}
.header{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;margin-bottom:25px;padding-bottom:15px;border-bottom:2px solid #e2e8f0}
.header h1{font-size:28px;color:${t.color};font-weight:600}.header .cvtitle{font-size:13px;color:#666;font-weight:600}.header .subtitle{font-size:12px;color:#888}
.contact-box{text-align:right;font-size:11px;color:#888;line-height:1.6}
.section{margin-bottom:18px}.section h2{font-size:14px;color:${t.color};margin-bottom:8px;display:flex;align-items:center;gap:8px}
.section h2 .icon{width:8px;height:8px;background:${t.color};border-radius:50%;display:inline-block}
.profile{font-size:13px;line-height:1.6;color:#555;background:#f7fafc;padding:15px;border-radius:6px}
.exp{margin-bottom:12px;padding-left:12px;border-left:2px solid #e2e8f0}.exp-title{font-weight:600;font-size:13px}.exp-sub{color:${t.color};font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{font-size:12px;color:#666;margin-top:3px}
.skills-row{display:flex;flex-wrap:wrap;gap:5px}.skill-tag{background:#f7fafc;color:${t.color};padding:3px 10px;font-size:11px;border:1px solid #e2e8f0;border-radius:4px}
@media print{body{padding:20px}}
</style></head><body>
<div class="header"><div><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}</div><div class="contact-box">${[d.personalInfo.email,d.personalInfo.phone,d.personalInfo.location,d.personalInfo.linkedin].filter(Boolean).map(c=>`<div>${c}</div>`).join('')}</div></div>
${generateContentSimple(d,t,C)}</body></html>`;
    },

    // 14. SIMPLE
    'simple': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fff;color:#444;padding:40px;max-width:210mm;margin:0 auto}
h1{font-size:24px;font-weight:400;color:#333;margin-bottom:2px}
.cvtitle{font-size:12px;color:#888;font-weight:600}.subtitle{font-size:12px;color:#aaa}
.contact{font-size:11px;color:#bbb;margin:8px 0 20px}
.section{margin-bottom:16px}.section h2{font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#aaa;margin-bottom:6px}
.profile{font-size:12px;line-height:1.5;color:#666}
.exp{margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #f5f5f5}.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:500;font-size:12px}.exp-company{color:#888;font-size:11px}.exp-date{color:#bbb;font-size:11px}.exp-desc{font-size:11px;color:#999;margin-top:2px}
.skills{font-size:11px;color:#888}
@media print{body{padding:20px}}
</style></head><body>
<h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.email),C(d.personalInfo.phone),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' | ')}</div>
${generateContentSimple(d,t,C)}</body></html>`;
    },

    // 15. ZEN
    'zen': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fff;color:#333;padding:60px;max-width:210mm;margin:0 auto}
.header{margin-bottom:40px;text-align:center}.header h1{font-size:36px;font-weight:200;letter-spacing:6px;color:#2d3748;margin-bottom:10px}
.header .cvtitle{font-size:13px;color:#666;font-weight:500}.header .subtitle{font-size:13px;color:#999}
.contact{font-size:11px;color:#bbb;margin-top:8px}
.section{margin-bottom:30px;max-width:400px;margin-left:auto;margin-right:auto}.section h2{font-size:11px;text-transform:uppercase;letter-spacing:3px;color:#bbb;margin-bottom:10px;text-align:center}
.profile{font-size:14px;line-height:1.8;color:#666;text-align:center;font-style:italic}
.exp{margin-bottom:15px;text-align:center}.exp-title{font-weight:500;font-size:13px}.exp-sub{color:#999;font-size:12px}.exp-date{color:#bbb;font-size:11px}.exp-desc{color:#888;font-size:12px;margin-top:3px}
.skills{text-align:center;font-size:12px;color:#999}
@media print{body{padding:30px}}
</style></head><body>
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.email),C(d.personalInfo.phone),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' • ')}</div></div>
${generateContentSimple(d,t,C)}</body></html>`;
    },

    // 16. TIMELINE
    'timeline': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fff;color:#333;padding:35px;max-width:210mm;margin:0 auto}
.header{text-align:center;margin-bottom:25px}.header h1{font-size:26px;color:${t.color};font-weight:700}.header .cvtitle{font-size:14px;color:#3b82f6;font-weight:600}.header .subtitle{font-size:13px;color:#666}
.contact{font-size:11px;color:#888;margin-top:5px}.contact span{margin:0 8px}
.section{margin-bottom:20px}.section h2{font-size:15px;color:${t.color};margin-bottom:10px;padding-bottom:3px;border-bottom:2px solid ${t.color}30}
.profile{font-size:13px;line-height:1.6;color:#555}
.timeline{position:relative;padding-left:25px}
.timeline::before{content:'';position:absolute;left:7px;top:0;bottom:0;width:2px;background:${t.color}30}
.tl-item{position:relative;margin-bottom:14px}
.tl-item::before{content:'';position:absolute;left:-22px;top:5px;width:8px;height:8px;background:${t.color};border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 2px ${t.color}}
.tl-header{display:flex;justify-content:space-between;flex-wrap:wrap}.tl-title{font-weight:600;font-size:13px}.tl-company{color:${t.color};font-size:12px}.tl-date{font-size:11px;color:#888}.tl-desc{font-size:12px;color:#666;margin-top:3px}
.skills-row{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px}
.skill-tag{background:${t.color}15;color:${t.color};padding:3px 10px;border-radius:10px;font-size:11px;border:1px solid ${t.color}40}
</style></head><body>
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.phone),C(d.personalInfo.email),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' <span>|</span> ')}</div></div>
${generateContentSimple(d,t,C)}</body></html>`;
    },

    // 17. CARDS (Nature)
    'cards': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:#fafcf8;color:#333;padding:30px;max-width:210mm;margin:0 auto}
.header{text-align:center;margin-bottom:20px}.header h1{font-size:26px;color:${t.color}}.header .cvtitle{font-size:13px;color:#047857;font-weight:600}.header .subtitle{font-size:12px;color:#888}
.contact{font-size:11px;color:#999;margin-top:4px}.contact span{margin:0 8px}
.section{margin-bottom:16px}.section h2{font-size:14px;color:${t.color};border-left:4px solid ${t.color};padding-left:8px;margin-bottom:8px}
.profile{font-size:13px;line-height:1.6;color:#555;background:#fff;padding:12px;border-radius:8px;border:1px solid ${t.color}30}
.exp-card{background:#fff;padding:12px;border-radius:8px;margin-bottom:8px;border:1px solid ${t.color}30;border-left:3px solid ${t.color}}
.exp-title{font-weight:600;font-size:13px}.exp-company{color:${t.color};font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{font-size:12px;color:#666;margin-top:3px}
.skills-row{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px}
.skill-tag{background:${t.color}15;color:${t.color};padding:3px 10px;border-radius:10px;font-size:11px;border:1px solid ${t.color}40}
@media print{body{background:#fff;padding:20px}}
</style></head><body>
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.phone),C(d.personalInfo.email),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' <span>|</span> ')}</div></div>
${generateContentSimple(d,t,C)}</body></html>`;
    },

    // 18. SIDEBAR RIGHT
    'sidebar-right': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Poppins',sans-serif;display:flex;min-height:297mm;max-width:210mm;margin:0 auto}
.main{flex:1;padding:35px 30px}
.main h2{font-size:16px;color:${t.color};border-bottom:2px solid ${t.color};padding-bottom:4px;margin-bottom:10px}
.profile{font-size:13px;line-height:1.6;color:#555;margin-bottom:18px}
.exp{margin-bottom:14px}.exp-title{font-weight:600;font-size:13px}.exp-sub{color:${t.color};font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{font-size:12px;color:#666;margin-top:3px}
.sidebar{background:${t.color};color:#fff;width:32%;padding:35px 22px}
.sidebar h1{font-size:22px;font-weight:600;margin-bottom:5px}.sidebar .cvtitle{font-size:12px;opacity:0.9}.sidebar .subtitle{font-size:13px;opacity:0.8;margin-bottom:18px}
.side-contacts{font-size:11px;margin:18px 0;padding:12px 0;border-top:1px solid rgba(255,255,255,0.3);border-bottom:1px solid rgba(255,255,255,0.3)}.side-contacts div{margin-bottom:5px}
.side-section{margin-top:15px}.side-section h3{font-size:13px;margin-bottom:8px}.side-section p{font-size:11px;opacity:0.9;line-height:1.5}
@media print{body{-webkit-print-color-adjust:exact}}
</style></head><body>
<div class="main">${generateContentSimple(d,t,C)}</div>
<div class="sidebar"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}
<div class="side-contacts">${[d.personalInfo.email,d.personalInfo.phone,d.personalInfo.location,d.personalInfo.linkedin].filter(Boolean).map(c=>`<div>${c}</div>`).join('')}</div>
${d.hardSkills?`<div class="side-section"><h3>Hard Skills</h3><p>${d.hardSkills}</p></div>`:''}
${d.softSkills?`<div class="side-section"><h3>Soft Skills</h3><p>${d.softSkills}</p></div>`:''}
${d.languages&&d.languages.length>0?`<div class="side-section"><h3>Langues</h3><p>${d.languages.map(l=>`${C(l.language)}${l.level?' ('+l.level+')':''}`).join(', ')}</p></div>`:''}
${d.interests?`<div class="side-section"><h3>Intérêts</h3><p>${d.interests}</p></div>`:''}
</div></body></html>`;
    },

    // 19. BOLD
    'bold': function(d, t) {
        const C = (v, def) => v || def;
        return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Inter',sans-serif;background:${t.color};color:#fff;padding:0;max-width:210mm;margin:0 auto}
.container{background:#fff;color:#333;margin:20px;border-radius:12px;padding:35px;box-shadow:0 20px 60px rgba(0,0,0,0.3)}
.header{background:${t.color};color:#fff;margin:-35px -35px 25px;padding:30px 35px;border-radius:12px 12px 0 0}
.header h1{font-size:30px;font-weight:700;margin-bottom:3px}.header .cvtitle{font-size:13px;opacity:0.9;font-weight:600}.header .subtitle{font-size:14px;opacity:0.8}
.contact{font-size:11px;opacity:0.8;margin-top:6px;display:flex;gap:12px;flex-wrap:wrap}
.section{margin-bottom:16px}.section h2{font-size:14px;color:${t.color};text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid ${t.color}20;padding-bottom:3px;margin-bottom:8px}
.profile{font-size:13px;line-height:1.6;color:#555}
.exp{margin-bottom:10px}.exp-header{display:flex;justify-content:space-between;flex-wrap:wrap}.exp-title{font-weight:600;font-size:13px}.exp-company{color:${t.color};font-size:12px}.exp-date{color:#999;font-size:11px}.exp-desc{font-size:12px;color:#666;margin-top:3px}
.skills-row{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px}
.skill-tag{background:${t.color}15;color:${t.color};padding:4px 10px;border-radius:6px;font-size:11px}
@media print{body{background:#fff}.container{margin:0;box-shadow:none;border-radius:0}.header{border-radius:0}}
</style></head><body><div class="container">
<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[d.personalInfo.email,d.personalInfo.phone,d.personalInfo.location,d.personalInfo.linkedin].filter(Boolean).map(c=>`<span>${c}</span>`).join('')}</div></div>
${generateContent(d,t,C)}</div></body></html>`;
    }
};

// ============================================
// 🧩 GÉNÉRATEUR DE CONTENU SANS HEADER
// ============================================
function generateContentSimple(d, t, C) {
    return `${d.personalInfo.summary?`<div class="section"><h2>Profil</h2><p class="profile">${d.personalInfo.summary}</p></div>`:''}
${d.experiences&&d.experiences.length>0?`<div class="section"><h2>Expérience</h2>${d.experiences.map(e=>`<div class="exp"><div class="exp-header"><span class="exp-title">${C(e.title)}</span><span class="exp-date">${C(e.period)}</span></div><div class="exp-company">${C(e.company)}${e.location?', '+e.location:''}</div>${e.description?`<p class="exp-desc">${e.description}</p>`:''}</div>`).join('')}</div>`:''}
${d.education&&d.education.length>0?`<div class="section"><h2>Formation</h2>${d.education.map(e=>`<div class="exp"><div class="exp-header"><span class="exp-title">${C(e.degree)}</span><span class="exp-date">${C(e.year)}</span></div><div class="exp-company">${C(e.school)}</div></div>`).join('')}</div>`:''}
<div class="section"><h2>Compétences & Langues</h2>
${d.hardSkills?`<div class="skills-row">${d.hardSkills.split(',').map(s=>`<span class="skill-tag">${s.trim()}</span>`).join('')}</div>`:''}
${d.softSkills?`<div class="skills-row">${d.softSkills.split(',').map(s=>`<span class="skill-tag">${s.trim()}</span>`).join('')}</div>`:''}
${d.languages&&d.languages.length>0?`<p style="font-size:12px;color:#555;margin-top:5px"><strong>Langues :</strong> ${d.languages.map(l=>`${C(l.language)}${l.level?' ('+l.level+')':''}`).join(', ')}</p>`:''}
${d.interests?`<p style="font-size:12px;color:#555;margin-top:5px"><strong>Intérêts :</strong> ${d.interests}</p>`:''}
</div>`;
}

// ============================================
// 🧩 GÉNÉRATEUR DE CONTENU AVEC HEADER
// ============================================
function generateContent(d, t, C) {
    return `<div class="header"><h1>${C(d.personalInfo.name)}</h1>${d.personalInfo.cvTitle?`<div class="cvtitle">${d.personalInfo.cvTitle}</div>`:''}${d.personalInfo.title?`<div class="subtitle">${d.personalInfo.title}</div>`:''}<div class="contact">${[C(d.personalInfo.phone),C(d.personalInfo.email),C(d.personalInfo.location),C(d.personalInfo.linkedin)].filter(Boolean).join(' <span>|</span> ')}</div></div>
${generateContentSimple(d, t, C)}`;
}

// ============================================
// 🎯 FONCTION PRINCIPALE
// ============================================
function generateCVHTML(data) {
    const t = templates.find(function(tpl) { return tpl.id === data.template; });
    if (!t) t = templates[0];
    const layoutFn = layouts[t.layout] || layouts['classic'];
    return layoutFn(data, t);
}
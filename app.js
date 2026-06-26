// ============================================
// ÉTAT DE L'APPLICATION
// ============================================
let selectedTemplate = 'classic';
let experienceCount = 0;
let educationCount = 0;
let languageCount = 0;
let currentLang = 'fr';

// ============================================
// SYSTÈME PREMIUM
// ============================================
let isPremium = false;
let unlockedCategories = [];

function checkPremium() {
    var premiumKey = localStorage.getItem('cvPremiumKey');
    if (premiumKey) {
        isPremium = true;
        if (premiumKey === 'UNLOCKED_ALL') {
            unlockedCategories = ['minimal', 'classic', 'creative', 'modern'];
        } else if (premiumKey === 'UNLOCKED_MINIMAL') {
            unlockedCategories = ['minimal'];
        } else if (premiumKey === 'UNLOCKED_CLASSIC') {
            unlockedCategories = ['classic'];
        } else if (premiumKey === 'UNLOCKED_CREATIVE') {
            unlockedCategories = ['creative'];
        } else if (premiumKey === 'UNLOCKED_MODERN') {
            unlockedCategories = ['modern'];
        }
    }
}

function canDownload() {
    // Vérifier si le modèle actuel est dans une catégorie débloquée
    var currentTemplate = templates.find(function(t) { return t.id === selectedTemplate; });
    if (!currentTemplate) return false;
    
    if (isPremium && unlockedCategories.indexOf(currentTemplate.cat) !== -1) {
        return true;
    }
    if (isPremium && unlockedCategories.length >= 4) return true; // ALL
    
    // Vérifier si ce modèle spécifique a été acheté
    var purchasedModels = JSON.parse(localStorage.getItem('cvPurchasedModels') || '[]');
    if (purchasedModels.indexOf(selectedTemplate) !== -1) return true;
    
    return false;
}

function getCurrentModelPrice() {
    var currentTemplate = templates.find(function(t) { return t.id === selectedTemplate; });
    if (currentTemplate) {
        return { price: currentTemplate.price || '4.99€', priceValue: currentTemplate.priceValue || 4.99, emoji: currentTemplate.emoji || '📄', name: currentTemplate.name || 'Modèle' };
    }
    return { price: '4.99€', priceValue: 4.99, emoji: '📄', name: 'Modèle' };
}

// Vérifier au démarrage
checkPremium();

// ============================================
// TRADUCTIONS
// ============================================
const translations = {
    fr: {
        info: 'Informations', name: 'Nom et Prénom', cvtitle: 'Titre du CV (poste visé)',
        currentTitle: 'Titre actuel', phone: 'Téléphone', city: 'Ville',
        summary: 'Profil Professionnel', aiSuggest: 'Améliorer avec l\'IA',
        experience: 'Expérience', addExp: 'Ajouter une expérience',
        education: 'Formation', addEdu: 'Ajouter une formation',
        languages: 'Langues', addLang: 'Ajouter une langue',
        interests: 'Centres d\'intérêt',
        changeModel: 'Changer de modèle', downloadPDF: 'Télécharger PDF',
        generatingPDF: '📄 Génération du PDF en cours...',
        pdfReady: '✅ PDF téléchargé avec succès !',
        pdfError: '❌ Erreur PDF - Réessayez',
        aiNeedText: '⚠️ Écrivez d\'abord un résumé d\'au moins 20 caractères',
        aiDone: '✅ Résumé amélioré !',
        premiumActivated: '✅ Premium activé ! Téléchargement en cours...',
        invalidCode: '❌ Code invalide. Vérifiez votre code.',
        enterCode: '💰 Entrez votre code premium ou achetez ce modèle.'
    },
    en: {
        info: 'Information', name: 'Full Name', cvtitle: 'CV Title (target position)',
        currentTitle: 'Current Title', phone: 'Phone', city: 'City',
        summary: 'Professional Profile', aiSuggest: 'Improve with AI',
        experience: 'Experience', addExp: 'Add Experience',
        education: 'Education', addEdu: 'Add Education',
        languages: 'Languages', addLang: 'Add Language',
        interests: 'Interests',
        changeModel: 'Change Model', downloadPDF: 'Download PDF',
        generatingPDF: '📄 Generating PDF...',
        pdfReady: '✅ PDF downloaded successfully!',
        pdfError: '❌ PDF Error - Try again',
        aiNeedText: '⚠️ Please write a summary of at least 20 characters first',
        aiDone: '✅ Summary improved!',
        premiumActivated: '✅ Premium activated! Downloading...',
        invalidCode: '❌ Invalid code. Check your code.',
        enterCode: '💰 Enter your premium code or buy this model.'
    }
};

function t(key) {
    if (translations[currentLang] && translations[currentLang][key]) return translations[currentLang][key];
    if (translations['fr'][key]) return translations['fr'][key];
    return key;
}

// ============================================
// INITIALISATION
// ============================================
// Vérifier si l'utilisateur vient de payer
function checkPaidAccess() {
    var urlParams = new URLSearchParams(window.location.search);
    var downloadParam = urlParams.get('download');
    var codeParam = urlParams.get('code');
    
    if (downloadParam === 'yes' && codeParam) {
        var storedCode = localStorage.getItem('cvDownloadCode');
        if (codeParam === storedCode) {
            // Débloquer le téléchargement
            localStorage.setItem('cvPremiumKey', 'UNLOCKED_PAID');
            checkPremium();
            // Télécharger automatiquement
            setTimeout(function() {
                downloadPDFDirect();
            }, 1000);
        }
    }
}
function init() {
    var savedLang = localStorage.getItem('cvLang');
    if (savedLang) currentLang = savedLang;
    document.getElementById('langSelect').value = currentLang;

    var urlParams = new URLSearchParams(window.location.search);
    var templateParam = urlParams.get('template');
    var templateFromURL = false;
    
    if (templateParam) {
        var found = templates.find(function(t) { return t.id === templateParam; });
        if (found) {
            selectedTemplate = templateParam;
            templateFromURL = true;
        }
    }
    
    if (!templateFromURL) {
        var savedData = localStorage.getItem('cvBuilderData');
        if (savedData) {
            try {
                var data = JSON.parse(savedData);
                if (data.template) selectedTemplate = data.template;
            } catch(e) {}
        }
    }

    checkPremium();
    applyDarkMode();
    addExperience();
    addEducation();
    addLanguage();
    loadAllSavedData();
    initDragAndDrop();
    applyLanguage();
    checkPaidAccess(); // ← Ajouter cette ligne
    
    if (templateFromURL) {
        saveData();
    }
    
    updatePreview();
    updateModelPriceDisplay();
}

// ============================================
// AFFICHAGE DU PRIX
// ============================================
function updateModelPriceDisplay() {
    var currentTemplate = templates.find(function(t) { return t.id === selectedTemplate; });
    if (currentTemplate) {
        var price = currentTemplate.price || '4.99€';
        var priceValue = currentTemplate.priceValue || 4.99;
        var emoji = currentTemplate.emoji || '📄';
        var name = currentTemplate.name || 'Modèle';
        
        var modelEmoji = document.getElementById('modelEmoji');
        var modelName = document.getElementById('modelName');
        var modelPriceTag = document.getElementById('modelPriceTag');
        var btnPrice = document.getElementById('btnPrice');
        
        if (modelEmoji) modelEmoji.textContent = emoji;
        if (modelName) modelName.textContent = name;
        if (modelPriceTag) modelPriceTag.textContent = price;
        if (btnPrice) btnPrice.textContent = price;
        
        // Mettre à jour les liens du modal
        var linkPayPal = document.getElementById('linkPayPal');
        var linkStripe = document.getElementById('linkStripe');
        var modalPrice = document.getElementById('modalPrice');
        var modalEmoji = document.getElementById('modalEmoji');
        var modalModelName = document.getElementById('modalModelName');
        if (linkPayPal) linkPayPal.href = 'https://paypal.me/cvbuild/' + priceValue.toFixed(2) + 
            '?return=' + encodeURIComponent(window.location.origin + '/telechargement.html?paid=yes&price=' + priceValue.toFixed(2));
//linkPayPal.href = 'https://paypal.me/cvbuild/' + priceValue.toFixed(2);
        if (linkStripe) linkStripe.href = 'https://buy.stripe.com/VOTRE_LIEN_' + currentTemplate.id.toUpperCase();
        if (modalPrice) modalPrice.textContent = price;
        if (modalEmoji) modalEmoji.textContent = emoji;
        if (modalModelName) modalModelName.textContent = name;
    }
}

// ============================================
// MULTI-LANGUES
// ============================================
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cvLang', lang);
    applyLanguage();
}

function applyLanguage() {
    document.getElementById('langSelect').value = currentLang;
    var elements = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < elements.length; i++) {
        var key = elements[i].getAttribute('data-lang');
        var translated = t(key);
        if (translated) elements[i].textContent = translated;
    }
}

// ============================================
// MODE SOMBRE
// ============================================
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('cvDarkMode', isDark ? '1' : '0');
    document.getElementById('darkModeBtn').textContent = isDark ? '☀️' : '🌙';
}

function applyDarkMode() {
    if (localStorage.getItem('cvDarkMode') === '1') {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeBtn').textContent = '☀️';
    }
}

// ============================================
// MODAL DE PAIEMENT
// ============================================
function showPaymentModal() {
    updateModelPriceDisplay();
    document.getElementById('paymentModal').style.display = 'flex';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function activateAndDownload() {
    var code = document.getElementById('premiumCodeInput').value.toUpperCase().trim();
    
    // Codes valides
    var validCodes = {
        'MINIMAL-2024-A1B2': 'minimal',
        'MINIMAL-2024-C3D4': 'minimal',
        'CLASSIC-2024-G7H8': 'classic',
        'CLASSIC-2024-I9J0': 'classic',
        'CREATIVE-2024-M3N4': 'creative',
        'CREATIVE-2024-O5P6': 'creative',
        'MODERN-2024-S9T0': 'modern',
        'MODERN-2024-U1V2': 'modern',
        'ALL-2024-Y5Z6': 'all',
        'ALL-2024-A7B8': 'all',
        'PRO2024-UNLOCK-ALL': 'all',
        'DEMO2024-FREE': 'all'
    };
    
    if (code && validCodes[code]) {
        var pack = validCodes[code];
        if (pack === 'all') {
            localStorage.setItem('cvPremiumKey', 'UNLOCKED_ALL');
        } else {
            localStorage.setItem('cvPremiumKey', 'UNLOCKED_' + pack.toUpperCase());
        }
        localStorage.setItem('cvPremiumCode', code);
        checkPremium();
        closePaymentModal();
        showNotification('✅ ' + t('premiumActivated'));
        setTimeout(function() { downloadPDFDirect(); }, 1000);
    } else if (code) {
        showNotification('❌ ' + t('invalidCode'));
    } else {
        showNotification('💰 ' + t('enterCode'));
    }
}

// ============================================
// DRAG & DROP
// ============================================
function initDragAndDrop() {
    var containers = ['experiencesContainer', 'educationContainer', 'languagesContainer'];
    for (var i = 0; i < containers.length; i++) {
        var el = document.getElementById(containers[i]);
        if (el && !el.sortableInstance) {
            el.sortableInstance = new Sortable(el, {
                animation: 150,
                handle: '.drag-handle',
                ghostClass: 'sortable-ghost',
                chosenClass: 'sortable-chosen',
                onEnd: function() { updatePreview(); saveData(); }
            });
        }
    }
}

// ============================================
// IA SUGGESTIONS
// ============================================
function aiSuggest() {
    var summary = document.getElementById('summary').value;
    if (!summary || summary.length < 20) {
        showNotification('⚠️ ' + t('aiNeedText'));
        return;
    }
    var improvements = [
        summary.replace(/je suis/gi, 'Professionnel').replace(/j'ai/gi, 'Ayant').trim(),
        summary.charAt(0).toUpperCase() + summary.slice(1).replace(/\.$/, '') + ', avec une expertise reconnue dans le domaine.',
        summary.replace(/expérience/gi, 'solide expérience').replace(/compétence/gi, 'compétence avérée').trim(),
        'Expert ' + summary.toLowerCase().replace(/je suis |j'ai /gi, '').trim() + '. Orienté résultats et force de proposition.'
    ];
    var best = improvements[Math.floor(Math.random() * improvements.length)];
    document.getElementById('summary').value = best;
    updatePreview();
    saveData();
    showNotification('✅ ' + t('aiDone'));
}

// ============================================
// GESTION DYNAMIQUE DES SECTIONS
// ============================================
function addExperience() {
    experienceCount++;
    var container = document.getElementById('experiencesContainer');
    var expDiv = document.createElement('div');
    expDiv.className = 'dynamic-section';
    expDiv.id = 'exp-' + experienceCount;
    expDiv.innerHTML = '<span class="drag-handle" title="Déplacer">⋮⋮</span>' +
        '<button type="button" class="remove-btn" onclick="removeSection(\'exp-' + experienceCount + '\')" title="Supprimer">×</button>' +
        '<div class="form-group"><label>Intitulé du poste</label><input type="text" placeholder="Ex: Développeur Senior" oninput="updatePreview(); saveData();"></div>' +
        '<div class="form-group"><label>Entreprise</label><input type="text" placeholder="Ex: TechCorp" oninput="updatePreview(); saveData();"></div>' +
        '<div class="form-row"><div class="form-group"><label>Période</label><input type="text" placeholder="Ex: 2022 - Présent" oninput="updatePreview(); saveData();"></div><div class="form-group"><label>Ville</label><input type="text" placeholder="Ex: Paris" oninput="updatePreview(); saveData();"></div></div>' +
        '<div class="form-group"><label>Description</label><textarea placeholder="Décrivez vos missions..." oninput="updatePreview(); saveData();" rows="2"></textarea></div>';
    container.appendChild(expDiv);
    expDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    initDragAndDrop();
    var firstInput = expDiv.querySelector('input');
    if (firstInput) setTimeout(function() { firstInput.focus(); }, 300);
}

function addEducation() {
    educationCount++;
    var container = document.getElementById('educationContainer');
    var eduDiv = document.createElement('div');
    eduDiv.className = 'dynamic-section';
    eduDiv.id = 'edu-' + educationCount;
    eduDiv.innerHTML = '<span class="drag-handle" title="Déplacer">⋮⋮</span>' +
        '<button type="button" class="remove-btn" onclick="removeSection(\'edu-' + educationCount + '\')" title="Supprimer">×</button>' +
        '<div class="form-group"><label>Diplôme / Certification</label><input type="text" placeholder="Ex: Master Logistique" oninput="updatePreview(); saveData();"></div>' +
        '<div class="form-group"><label>Établissement</label><input type="text" placeholder="Ex: Université" oninput="updatePreview(); saveData();"></div>' +
        '<div class="form-group"><label>Année</label><input type="text" placeholder="Ex: 2024" oninput="updatePreview(); saveData();"></div>';
    container.appendChild(eduDiv);
    initDragAndDrop();
}

function addLanguage() {
    languageCount++;
    var container = document.getElementById('languagesContainer');
    var langDiv = document.createElement('div');
    langDiv.className = 'dynamic-section';
    langDiv.id = 'lang-' + languageCount;
    langDiv.innerHTML = '<span class="drag-handle" title="Déplacer">⋮⋮</span>' +
        '<button type="button" class="remove-btn" onclick="removeSection(\'lang-' + languageCount + '\')" title="Supprimer">×</button>' +
        '<div class="form-row"><div class="form-group"><label>Langue</label><input type="text" placeholder="Ex: Anglais" oninput="updatePreview(); saveData();"></div><div class="form-group"><label>Niveau</label><select onchange="updatePreview(); saveData();"><option value="">Niveau...</option><option>Langue maternelle</option><option>Bilingue</option><option>Professionnel (C1)</option><option>Avancé (B2)</option><option>Intermédiaire (B1)</option></select></div></div>';
    container.appendChild(langDiv);
    initDragAndDrop();
}

function removeSection(id) {
    var section = document.getElementById(id);
    if (section) {
        section.style.opacity = '0';
        section.style.transform = 'translateX(20px)';
        section.style.transition = 'all 0.3s ease';
        setTimeout(function() { section.remove(); updatePreview(); saveData(); }, 300);
    }
}

// ============================================
// COLLECTE DES DONNÉES
// ============================================
function collectFormData() {
    var experiences = [];
    document.querySelectorAll('#experiencesContainer .dynamic-section').forEach(function(exp) {
        var inputs = exp.querySelectorAll('input, textarea');
        experiences.push({ title: inputs[0]?.value || '', company: inputs[1]?.value || '', period: inputs[2]?.value || '', location: inputs[3]?.value || '', description: inputs[4]?.value || '' });
    });
    var education = [];
    document.querySelectorAll('#educationContainer .dynamic-section').forEach(function(edu) {
        var inputs = edu.querySelectorAll('input');
        education.push({ degree: inputs[0]?.value || '', school: inputs[1]?.value || '', year: inputs[2]?.value || '' });
    });
    var languages = [];
    document.querySelectorAll('#languagesContainer .dynamic-section').forEach(function(lang) {
        var input = lang.querySelector('input');
        var select = lang.querySelector('select');
        languages.push({ language: input?.value || '', level: select?.value || '' });
    });
    return {
        template: selectedTemplate,
        personalInfo: {
            name: document.getElementById('fullName')?.value || 'Votre Nom',
            cvTitle: document.getElementById('cvTitle')?.value || '',
            title: document.getElementById('title')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            location: document.getElementById('location')?.value || '',
            linkedin: document.getElementById('linkedin')?.value || '',
            summary: document.getElementById('summary')?.value || ''
        },
        experiences: experiences,
        education: education,
        hardSkills: document.getElementById('hardSkills')?.value || '',
        softSkills: document.getElementById('softSkills')?.value || '',
        languages: languages,
        interests: document.getElementById('interests')?.value || ''
    };
}

// ============================================
// PRÉVISUALISATION
// ============================================
function updatePreview() {
    var data = collectFormData();
    var previewFrame = document.getElementById('previewFrame');
    if (!previewFrame) return;
    var cvHTML = generateCVHTML(data);
    var iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(cvHTML);
    iframeDoc.close();
}

// ============================================
// SAUVEGARDE
// ============================================
function saveData() {
    var data = collectFormData();
    try { localStorage.setItem('cvBuilderData', JSON.stringify(data)); } catch(e) {}
}

function loadAllSavedData() {
    var savedData = localStorage.getItem('cvBuilderData');
    if (!savedData) return;
    try {
        var data = JSON.parse(savedData);
        if (data.personalInfo) {
            document.getElementById('fullName').value = data.personalInfo.name || '';
            document.getElementById('cvTitle').value = data.personalInfo.cvTitle || '';
            document.getElementById('title').value = data.personalInfo.title || '';
            document.getElementById('email').value = data.personalInfo.email || '';
            document.getElementById('phone').value = data.personalInfo.phone || '';
            document.getElementById('location').value = data.personalInfo.location || '';
            document.getElementById('linkedin').value = data.personalInfo.linkedin || '';
            document.getElementById('summary').value = data.personalInfo.summary || '';
        }
        if (data.hardSkills) document.getElementById('hardSkills').value = data.hardSkills;
        if (data.softSkills) document.getElementById('softSkills').value = data.softSkills;
        if (data.interests) document.getElementById('interests').value = data.interests;
        if (data.experiences) {
            document.getElementById('experiencesContainer').innerHTML = ''; experienceCount = 0;
            data.experiences.forEach(function(exp) {
                addExperience();
                var sections = document.querySelectorAll('#experiencesContainer .dynamic-section');
                var last = sections[sections.length - 1];
                var inputs = last.querySelectorAll('input, textarea');
                if (inputs[0]) inputs[0].value = exp.title || '';
                if (inputs[1]) inputs[1].value = exp.company || '';
                if (inputs[2]) inputs[2].value = exp.period || '';
                if (inputs[3]) inputs[3].value = exp.location || '';
                if (inputs[4]) inputs[4].value = exp.description || '';
            });
        }
        if (data.education) {
            document.getElementById('educationContainer').innerHTML = ''; educationCount = 0;
            data.education.forEach(function(edu) {
                addEducation();
                var sections = document.querySelectorAll('#educationContainer .dynamic-section');
                var last = sections[sections.length - 1];
                var inputs = last.querySelectorAll('input');
                if (inputs[0]) inputs[0].value = edu.degree || '';
                if (inputs[1]) inputs[1].value = edu.school || '';
                if (inputs[2]) inputs[2].value = edu.year || '';
            });
        }
        if (data.languages) {
            document.getElementById('languagesContainer').innerHTML = ''; languageCount = 0;
            data.languages.forEach(function(lang) {
                addLanguage();
                var sections = document.querySelectorAll('#languagesContainer .dynamic-section');
                var last = sections[sections.length - 1];
                var input = last.querySelector('input');
                var select = last.querySelector('select');
                if (input) input.value = lang.language || '';
                if (select) select.value = lang.level || '';
            });
        }
        updatePreview();
        updateModelPriceDisplay();
    } catch(e) { localStorage.removeItem('cvBuilderData'); }
}

// ============================================
// TÉLÉCHARGEMENT PDF
// ============================================
function downloadPDF() {
    if (canDownload()) {
        downloadPDFDirect();
    } else {
        updateModelPriceDisplay();
        showPaymentModal();
    }
}

function downloadPDFDirect() {
    var previewFrame = document.getElementById('previewFrame');
    if (!previewFrame) return;
    showNotification(t('generatingPDF'));
    var iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    var cvContent = iframeDoc.body;
    html2canvas(cvContent, { scale: 2, useCORS: true, allowTaint: true, backgroundColor: '#ffffff' }).then(function(canvas) {
        var imgData = canvas.toDataURL('image/png');
        var imgWidth = 210, pageHeight = 297;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        var { jsPDF } = window.jspdf;
        var pdf = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        var data = collectFormData();
        pdf.save((data.personalInfo.name || 'CV').replace(/\s+/g, '_') + '.pdf');
        showNotification('✅ ' + t('pdfReady'));
    }).catch(function() {
        showNotification('❌ ' + t('pdfError'));
    });
}

// ============================================
// NOTIFICATION
// ============================================
function showNotification(msg) {
    var exist = document.querySelector('.notification-toast');
    if (exist) exist.remove();
    var n = document.createElement('div');
    n.className = 'notification-toast';
    n.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#28a745;color:white;padding:12px 25px;border-radius:50px;font-weight:600;font-size:14px;z-index:10000;box-shadow:0 8px 25px rgba(0,0,0,0.3);animation:slideUp 0.3s ease;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;';
    n.textContent = msg;
    document.body.appendChild(n);
    setTimeout(function() { n.style.animation = 'slideDown 0.3s ease forwards'; setTimeout(function() { n.remove(); }, 300); }, 3000);
}

(function() {
    var style = document.createElement('style');
    style.textContent = '@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}@keyframes slideDown{from{opacity:1;transform:translateX(-50%) translateY(0)}to{opacity:0;transform:translateX(-50%) translateY(20px)}}';
    document.head.appendChild(style);
})();

// ============================================
// DÉMARRAGE
// ============================================
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('beforeunload', saveData);
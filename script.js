// GÜNCELLENMİŞ VE DAHA KAPSAMLI RASTGELE SİTELER LİSTESİ
// NOT: Bu liste, butonun artık sabit bir adrese yönlendirilmesi istendiği için geçersizdir, ancak kodun bütünlüğü için tutulmuştur.
const eğlenceSiteleri = [
    "https://store.steampowered.com/",      
    "https://itch.io/",                     
    "https://9gag.com/trending",            
    "https://theuselessweb.com/",           
    "https://neal.fun/",                    
    "https://www.youtube.com/feed/trending",
    "https://www.sporcle.com/",             
    "https://www.chess.com/",               
    "https://www.geoguessr.com/",           
    "https://www.boredpanda.com/",          
];

// Sabit olarak yönlendirilecek URL (Sizin İsteğiniz)
const SABIT_EGLENCE_URL = "https://user23654896.github.io/funbutton/";

// HTML elementlerini seçiyoruz
const buton = document.getElementById('rastgeleButon');
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body; 

// --- KARANLIK MOD FONKSİYONLARI ---

/** Sayfanın dark-mode sınıfını değiştirir ve kullanıcı tercihini kaydeder. */
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode); // Tercihi kaydet
}

/** Sayfa yüklendiğinde localStorage'daki tercihi kontrol edip uygular. */
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        // Anahtarın durumunu ayarlama (Sadece index.html'de çalışır)
        if (darkModeToggle) {
             darkModeToggle.checked = true; 
        }
    }
}

// Anahtara olay dinleyicisi ekle (Anahtar varsa)
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', toggleDarkMode);
}

// Sayfa yüklendiğinde Karanlık Modu yükle
loadDarkModePreference();


// --- RASTGELE BUTON FONKSİYONU (SABİT URL'YE YÖNLENDİRİLDİ) ---

// Butona tıklandığında çalışacak fonksiyon (Buton varsa)
if (buton) {
    buton.addEventListener('click', function() {
        
        // 1. Doğrudan sabit URL'yi kullanıyoruz
        const hedefURL = SABIT_EGLENCE_URL; 

        // 2. Kullanıcıyı yeni sekmeye yönlendiriyoruz
        window.open(hedefURL, '_blank');
    });
}
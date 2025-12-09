const posts = [
    {
        title: "Hoş Geldiniz!",
        text: "Bu benim yeni blog sitem. Burada günlük düşüncelerimi, projelerimi ve eğlenceli içerikleri paylaşacağım."
    },
    {
        title: "FunButton Projesi",
        text: "Yeni oyun projem üzerinde çalışıyorum! Yakında detayları burada paylaşacağım."
    },
    {
        title: "Kişisel Gelişim Notlarım",
        text: "Son zamanlarda okuduğum kitaplar ve öğrendiklerim hakkında yazmak istiyorum."
    }
];

// blog.html'deki <section id="blog-container"> elementini seçiyoruz
const container = document.getElementById("blog-container");

// Eğer konteyner varsa postları yükle
if (container) {
    posts.forEach(post => {
        const box = document.createElement("div");
        box.className = "post";
        box.innerHTML = `<h2>${post.title}</h2><p>${post.text}</p>`;
        container.appendChild(box);
    });
}
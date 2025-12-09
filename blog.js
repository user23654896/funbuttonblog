const posts = [
    {
        title: "Hoş Geldiniz!",
        text: "Bu benim yeni blog sitem. Burada günlük düşüncelerimi, projelerimi ve eğlenceli içerikleri paylaşacağım."
    },
    {
        title: "FunButton Projesi",
        text: "burda bir buton var projede ona tıklayınca eğlenceli siteleye atıyor. önemli burdaki tüm siteler benim değil tıklayınca!!!"
    }
];

// Blog postlarının yerleştirileceği HTML konteynerini seçer.
const container = document.getElementById("blog-container");

// Her bir postu HTML'e ekler.
posts.forEach(post => {
    const box = document.createElement("div");
    box.className = "post";
    box.innerHTML = `<h2>${post.title}</h2><p>${post.text}</p>`;
    container.appendChild(box);
});

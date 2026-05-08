function switchContent(id) {
    document.querySelectorAll('.switcher').forEach(btn => btn.classList.remove('active'));

    document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('visible');
        section.style.display = 'none';
    });

    const target = document.getElementById(id);
    target.style.display = 'block';
    requestAnimationFrame(() => target.classList.add('visible')); // 👈 tiny delay lets the transition trigger

    event.target.classList.add('active');
}

document.getElementById('about').style.display = 'block';
requestAnimationFrame(() => document.getElementById('about').classList.add('visible'));
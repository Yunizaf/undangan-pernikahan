function openInvitation() {
    document.getElementById('cover').style.display = 'none';
    document.getElementById('invitation').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// RSVP Form Submission
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nama: this.elements[0].value,
        status: this.elements[1].value,
        jumlahTamu: this.elements[2].value,
        ucapan: this.elements[3].value
    };
    
    console.log('Data RSVP:', formData);
    alert('Terima kasih! Konfirmasi Anda telah diterima.');
    this.reset();
});

// Smooth scroll untuk gallery
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function() {
        window.open(this.src, '_blank');
    });
});
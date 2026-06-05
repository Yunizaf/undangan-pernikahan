function openInvitation() {
    const cover = document.getElementById('cover');
    const invitation = document.getElementById('invitation');
    
    if (cover && invitation) {
        cover.style.display = 'none';
        invitation.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // RSVP Form Submission
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
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
    }

    // Smooth scroll untuk gallery
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
});

// Pure document loader sequences setup
window.addEventListener('DOMContentLoaded', function() {

    // 1. Automatic Main Page Opener Logic after Intro Animation ends (3.5 Seconds interval)
    setTimeout(function() {
        var mainDashboard = document.getElementById('main-dashboard');
        var footerSection = document.getElementById('website-footer');
        
        if (mainDashboard && footerSection) {
            mainDashboard.style.display = 'block';
            footerSection.style.display = 'block';
        }
    }, 3500);

    // 2. 🌟 FULL RESPONSIBLE: DYNAMIC ITINERARY SCREEN TRACKER LOGIC 🌟
    function setupTourDetailOpener(buttonId, detailsBlockId) {
        var btn = document.getElementById(buttonId);
        if (btn) {
            btn.addEventListener('click', function() {
                // Pehle saare active detail panel sections ko hide karwa dein
                document.getElementById('umrah-details').style.display = 'none';
                document.getElementById('baghdad-details').style.display = 'none';

                // Uske baad selected structural block ko load karein
                var targetBlock = document.getElementById(detailsBlockId);
                if (targetBlock) {
                    targetBlock.style.display = 'block';
                    
                    // Smooth auto scroll logic for visual elements viewport
                    setTimeout(function() {
                        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            });
        }
    }

    // Connect individual action trigger references seamlessly
    setupTourDetailOpener('umrahBtn', 'umrah-details');
    setupTourDetailOpener('baghdadBtn', 'baghdad-details');

});


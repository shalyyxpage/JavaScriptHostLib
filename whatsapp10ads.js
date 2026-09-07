<script>
    // --- මෙතනට ඔයාගේ ඇඩ් 10 ලින්ක්ස් දාන්න ---
    const adLinks = [
        "https://www.profitablecpmrate.com/ad-link-1-here",  // 1 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-2-here",  // 2 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-3-here",  // 3 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-4-here",  // 4 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-5-here",  // 5 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-6-here",  // 6 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-7-here",  // 7 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-8-here",  // 8 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-9-here",  // 9 වෙනි වතාවේදී
        "https://www.profitablecpmrate.com/ad-link-10-here" // 10 වෙනි වතාවේදී
    ];

    // අවසානයට කතාව ඕපන් විය යුතු ඔරිජිනල් ලින්ක් එක
    const storyLink = "https://fsbooknew.blogspot.com/2026/08/game-uncle.html";
    // ---------------------------------------------

    let urlParams = new URLSearchParams(window.location.search);
    let step = parseInt(urlParams.get('step')) || 1;

    // UI update based on step (10 දක්වා සකසා ඇත, එක් පියවරකට 10% බැගින් බාර් එක පිරේ)
    document.getElementById('clickCount').innerText = step;
    document.getElementById('progressBar').style.width = (step * 10) + '%';
    
    if (step >= 10) {
        document.getElementById('actionBtn').style.background = "#ff9800";
        document.getElementById('actionBtn').style.color = "#fff";
    }

    function nextStep() {
        if (step < 10) {
            let nextStepNum = step + 1;
            let currentUrl = window.location.href.split('?')[0];
            let nextTabUrl = currentUrl + "?step=" + nextStepNum;

            // 1. අලුත් ටැබ් එකකින් ඊළඟ ස්ටෙප් එක ඕපන් කිරීම
            window.open(nextTabUrl, '_blank');

            // 2. පරණ ටැබ් එක අදාළ ඇඩ් ලින්ක් එකට මාරු කිරීම
            window.location.href = adLinks[step];

        } else {
            // 10 වැනි වතාව පිරුණු පසු කතාව අලුත් ටැබ් එකකින් ඕපන් වී පරණ එක 10 වන ඇඩ් එකට යයි
            window.open(storyLink, '_blank');
            window.location.href = adLinks[9];
        }
    }
</script>

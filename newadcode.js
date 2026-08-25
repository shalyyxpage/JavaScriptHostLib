<!-- Tailwind CSS (Tailwind නොමැති Blogger තීම් සඳහා) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Pop-up Modal එක -->
<div id="customPopup" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl text-center space-y-4">
        <h3 class="text-xl font-bold text-gray-900">විශේෂ නිවේදනයක්!</h3>
        <p class="text-gray-600 text-sm">ඉස්සරහට යන්න පහත බටන් එක ක්ලික් කරන්න.</p>
        
        <!-- බටන් එක -->
        <button onclick="closePopupAndRedirect()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition duration-200 cursor-pointer">
            ඉස්සරහට යන්න (Continue)
        </button>
    </div>
</div>

<!-- JavaScript කෝඩ් එක -->
<script>
    const targetUrl = "https://example.com"; // මෙතැනට ඔයාට මාරු වෙන්න ඕන ලින්ක් එක දාන්න

    window.addEventListener('DOMContentLoaded', () => {
        // අපි චෙක් කරනවා කලින් වාරයේදී යුසර් පොප්-අප් එකෙන් ගියාද කියලා (skipNextPopup කියන කී එකෙන්)
        let skipNext = localStorage.getItem('skipNextPopup');
        
        if (skipNext === 'true') {
            // මේ පාර පොප්-අප් එක පෙන්වන්නේ නැහැ. 
            // ඒත් ඊළඟ පාර ආපහු පොප්-අප් එක එන්න ඕන නිසා, මේක 'false' කරලා දානවා (Toggle වෙනවා).
            localStorage.setItem('skipNextPopup', 'false');
        } else {
            // මේ පාර පොප්-අප් එක පෙන්වනවා!
            let hasTriggered = false;

            window.addEventListener('scroll', () => {
                if (hasTriggered) return;

                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                
                if (docHeight <= 0) return;
                
                const scrollPercent = (scrollTop / docHeight) * 100;

                if (scrollPercent >= 20) {
                    hasTriggered = true;
                    const popup = document.getElementById('customPopup');
                    if (popup) {
                        popup.classList.remove('hidden');
                    }
                }
            });
        }
    });

    // බටන් එක ක්ලික් කළාම ක්‍රියාත්මක වන ෆන්ක්ෂන් එක
    function closePopupAndRedirect() {
        const popup = document.getElementById('customPopup');
        if (popup) {
            popup.classList.add('hidden'); // පොප්-අප් එක වහාම වසා දැමීම
        }

        // තප්පර 10ක් පසුබිමින් ගෙවී යාමට සැලැස්වීම
        setTimeout(() => {
            // යුසර් සාර්ථකව ලින්ක් එකට යන නිසා, 
            // ඊළඟ වාරයේදී පොප්-අප් එක ස්කිප් (Skip) කිරීමට 'true' ලෙස සේව් කරයි.
            localStorage.setItem('skipNextPopup', 'true');

            // අවසානයේ පේජ් එක අදාළ ලින්ක් එකට මාරු කිරීම
            window.location.href = targetUrl;
        }, 10000); // තප්පර 10යි
    }
</script>

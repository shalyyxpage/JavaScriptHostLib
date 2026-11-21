const links = [
  "https://testcodemeeee.blogspot.com/2026/11/ad-01.html", // 1 වෙනි ක්ලික් එකට යන ලින්ක් එක
  "https://testcodemeeee.blogspot.com/2026/11/ad-02.html",   // 2 වෙනි ක්ලික් එකට යන ලින්ක් එක
  "https://testcodemeeee.blogspot.com/2026/11/ad-03.html",   // 3 වෙනි ක්ලික් එකට යන ලින්ක් එක
  "https://testcodemeeee.blogspot.com/2026/11/ad-04.html"    // 4 වෙනි ක්ලික් එකට යන ලින්ක් එක
];

// දැනට ක්ලික් කරලා තියෙන බටන් ගාණ චෙක් කරනවා
const currentClicks = (JSON.parse(localStorage.getItem("clickedButtons")) || []).length;

// ක්ලික් කරපු ගාණට අදාළ ලින්ක් එක තෝරලා tempLink එකට දෙනවා
const tempLink = links[currentClicks] || links[0];

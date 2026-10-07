// Avatar initials: first + last name, at most 2 letters. When there is no photo, show these;
// when there is no name either, show the placeholder user icon. Never leave an avatar empty.
function initials(name) {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return '';
  return ((words[0][0] || '') + (words.length > 1 ? words[words.length - 1][0] : '')).toUpperCase();
}

// initials('Nama Pengguna') === 'NP', initials('Advisor') === 'A'

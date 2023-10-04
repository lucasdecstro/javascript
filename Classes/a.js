var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) return 0;

  let maxLength = 0;
  const charIndex = {};
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (
      charIndex[currentChar] !== undefined &&
      charIndex[currentChar] >= start
    ) {
      start = charIndex[currentChar] + 1;
    }

    charIndex[currentChar] + 1;

    maxLength = Math.max(maxLength.i - start + 1);
  }

  return maxLength;
};


function recursive(max) {
  if (max >= 100) return;
  max++;
  console.log(max);
  recursive(max);
}

recursive(-10);

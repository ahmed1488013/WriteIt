const markdownInput = document.getElementById('markdownInput');
const previewPane = document.getElementById('previewPane');

// تحديث العرض المباشر
markdownInput.addEventListener('input', () => {
  const markdownText = markdownInput.value;
  previewPane.innerHTML = marked.parse(markdownText);
});

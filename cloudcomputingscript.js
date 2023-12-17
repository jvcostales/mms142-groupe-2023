function highlightText(element, searchText) {
  var content = element.textContent || element.innerText;
  var caseInsensitiveText = searchText.toLowerCase();

  if (content.toLowerCase().includes(caseInsensitiveText)) {
    var regex = new RegExp('(' + escapeRegExp(caseInsensitiveText) + ')', 'gi');
    content = content.replace(regex, '<span class="highlight">$1</span>');
    element.innerHTML = content;
  }
}

function findWord() {
  var searchText = document.getElementById('searchInput').value;
  var texts = document.querySelectorAll('.searchword');

  if (searchText.includes(' ')) {
    alert('Please enter one word only.');
    return;
  }

  texts.forEach(function (element) {
    element.innerHTML = element.textContent || element.innerText;
    highlightText(element, searchText);
  });
}

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsDiv = document.getElementById('results');

async function performSearch() {
  const query = searchInput.value.trim();
  if (!query) {
    resultsDiv.innerHTML = '<p class="status-message">Please enter a book title.</p>';
    return;
  }

  resultsDiv.innerHTML = '<p class="status-message">Searching...</p>';

  // Step 1: Search the Open Library API
  const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&fields=key,title,author_name,has_fulltext`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayApiResults(data.docs, query); // Pass query to the next function
  } catch (error) {
    console.error("API Fetch Error:", error);
    // If API fails, still show the fallback links
    displayApiResults([], query);
  }
}

function displayApiResults(bookList, query) {
  resultsDiv.innerHTML = ''; // Clear loading message

  const availableBooks = bookList.filter(book => book.has_fulltext === true);

  if (availableBooks.length > 0) {
    availableBooks.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.className = 'book-entry';
      const author = book.author_name ? book.author_name.join(', ') : 'Unknown Author';
      const bookUrl = `https://openlibrary.org${book.key}`;
      bookDiv.innerHTML = `
        <a href="${bookUrl}" target="_blank">${book.title}</a>
        <p>by ${author}</p>
      `;
      resultsDiv.appendChild(bookDiv);
    });
  } else {
    resultsDiv.innerHTML = '<p class="status-message">No direct results found on Open Library.</p>';
  }

  // Step 2: ALWAYS show the fallback search links
  displayFallbackLinks(query);
}

function displayFallbackLinks(query) {
  const fallbackDiv = document.createElement('div');
  fallbackDiv.className = 'fallback-searches';

  // Create a URL-friendly version of the query
  const encodedQuery = encodeURIComponent(query);

  // Link for Project Gutenberg
  const gutenbergUrl = `https://www.gutenberg.org/ebooks/search/?query=${encodedQuery}`;

  // Link for Google Books (with the crucial "free e-books" filter)
  const googleBooksUrl = `https://www.google.com/search?tbm=bks&q=${encodedQuery}&tbs=bkv:f`;

  fallbackDiv.innerHTML = `
    <h2>More places to look:</h2>
    <a href="${gutenbergUrl}" target="_blank">Search on Project Gutenberg</a>
    <a href="${googleBooksUrl}" target="_blank">Search for Free Google Books</a>
  `;

  resultsDiv.appendChild(fallbackDiv);
}

// Event Listeners
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
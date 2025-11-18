Public Library Searcher 📚
A lightweight browser extension that helps you find legally free-to-read books by searching multiple public archives at once.

This tool is designed for students, researchers, and avid readers who want to find books in the public domain or those made freely available by authors and publishers, without having to check multiple websites manually.

(This is a placeholder image. You should replace it with a real screenshot of your extension!)

Key Features
Instant API Search: Directly searches the vast Internet Archive (Open Library) for books available to read or borrow online.

Meta-Search Links: Automatically generates one-click search links for other major legal archives like Project Gutenberg and Google Books (Free Only).

Lightweight and Fast: No unnecessary bloat. The extension is small, fast, and does one thing well.

Privacy-Focused: The extension does not track your searches or store any personal data. It simply sends your query to public APIs.

Respects Copyright: This tool is designed exclusively to find books that are legally and ethically available for free.

Installation
Since this extension is not on the Chrome Web Store, you can install it locally in any Chromium-based browser (like Google Chrome, Microsoft Edge, Brave, etc.) by following these steps:

Download the Code:

Click the green <> Code button on this GitHub page.

Select Download ZIP.

Unzip the downloaded file on your computer. You should now have a folder named public-library-searcher-main (or similar).

Open Your Browser's Extensions Page:

In your browser, navigate to chrome://extensions (for Chrome) or edge://extensions (for Edge).

Enable Developer Mode:

Find the "Developer mode" toggle switch, usually in the top-right corner of the page, and turn it ON.

Load the Extension:

Click the "Load unpacked" button that appeared after enabling Developer mode.

A file selection window will open. Navigate to and select the public-library-searcher-main folder that you unzipped earlier.

Click "Select Folder".

The Public Library Searcher icon 📚 should now appear in your browser's toolbar! You may need to click the puzzle piece icon to "pin" it to your toolbar.

How to Use
Click the Icon: Click the 📚 icon in your browser toolbar to open the extension popup.

Enter a Book Title: Type the name of the book or author you are looking for in the search box.

Click Search: Press the "Search" button or hit the Enter key.

View Results:

The extension will first show you any direct results found on the Open Library. These are books you can read or borrow immediately.

Below the direct results, you will always see "More places to look". These are convenient links that will take you directly to the search results for your book on other major free libraries.

How It Works
This extension uses a powerful two-step process:

API Call: It first makes a live API call to the openlibrary.org/search.json endpoint. It filters these results to show only books that are marked as has_fulltext, meaning they are available to read online.

Generated Links: It then uses your search query to create pre-formatted URLs for other search engines (like Project Gutenberg and Google Books), ensuring you can check multiple sources with a single click.

Technology Used
HTML5

CSS3

JavaScript (ES6+)

Chrome Extension Manifest V3

Open Library Search API

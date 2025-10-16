document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-login input");
  const searchButton = document.querySelector(".search-login button");

  // Function to handle search
  const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
      alert("Please enter a product name!");
      return;
    }

    // Mapping search terms to pages
    const pages = {
      "laptop": "index3.html",
      "laptops": "index3.html",
      "mobile": "index1.html",
      "mobiles": "index1.html",
      "phone": "index1.html",
      "smartphone": "index1.html",
      "audio": "audio.html",
      "headphones": "audio.html",
      "earphones": "audio.html",
      "speaker": "audio.html",
      "charger": "index2.html",
      "chargers": "index2.html",
      "power bank": "index2.html",
      "cable": "index2.html"
    };

    // Find matching page
    let found = false;
    for (const key in pages) {
      if (query.includes(key)) {
        window.location.href = pages[key];
        found = true;
        break;
      }
    }

    if (!found) {
      alert("No matching products found! Try searching for laptops, mobiles, audio, or chargers.");
    }
  };

  // Search button click
  searchButton.addEventListener("click", handleSearch);

  // Enter key press
  searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });
});

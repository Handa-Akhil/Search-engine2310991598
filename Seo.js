document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const deleteHistoryButton = document.getElementById('delete-history-button');
    const historyList = document.getElementById('history-list');

    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const renderHistory = () => {
        historyList.innerHTML = '';
        searchHistory.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            historyList.appendChild(li);
        });
    };

    renderHistory();

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {

            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            renderHistory();
            searchInput.value = ''; 
        }
    });
    deleteHistoryButton.addEventListener('click', () => {
        searchHistory = [];
        localStorage.removeItem('searchHistory');
        renderHistory();
    });
});

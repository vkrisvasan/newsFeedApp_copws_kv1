document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    fetch('https://newsapi.org/v2/everything?q=genai&apiKey=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            articles.sort((a, b) => b.popularity - a.popularity);

            articles.forEach(article => {
                const newsTile = document.createElement('div');
                newsTile.className = 'news-tile';

                const title = document.createElement('h2');
                title.textContent = article.title;
                newsTile.appendChild(title);

                const content = document.createElement('p');
                content.textContent = article.description;
                newsTile.appendChild(content);

                newsContainer.appendChild(newsTile);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    // Fetch the latest GenAI news from an API
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

                // Add social media sharing buttons
                const shareButtons = document.createElement('div');
                shareButtons.className = 'share-buttons';
                const twitterButton = document.createElement('button');
                twitterButton.textContent = 'Share on Twitter';
                twitterButton.onclick = () => {
                    window.open(`https://twitter.com/intent/tweet?text=${article.title} ${article.url}`, '_blank');
                };
                shareButtons.appendChild(twitterButton);
                const facebookButton = document.createElement('button');
                facebookButton.textContent = 'Share on Facebook';
                facebookButton.onclick = () => {
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${article.url}`, '_blank');
                };
                shareButtons.appendChild(facebookButton);
                const linkedinButton = document.createElement('button');
                linkedinButton.textContent = 'Share on LinkedIn';
                linkedinButton.onclick = () => {
                    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${article.url}&title=${article.title}`, '_blank');
                };
                shareButtons.appendChild(linkedinButton);
                newsTile.appendChild(shareButtons);

                newsContainer.appendChild(newsTile);
            });
        })
        .catch(error => console.error('Error fetching news:', error));
});

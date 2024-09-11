fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=10")

    .then(Response => Response.json())
    .then(data => {

        const newsGrid = document.getElementById('news-grid');

        //for article looping

        data.forEach(article => {

            //card

            const card = document.createElement('div');
            card.classList.add('card');

            //title

            const title = document.createElement('h2');
            title.innerHTML = article.title.rendered;

            //date

            const date = document.createElement('time');
            const articleDate = new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'

            });

            date.textContent = `Puclished on ${articleDate}`;


            card.appendChild(title);
            card.appendChild(date);

            
           newsGrid.appendChild(card);

        });

        
        //email to zulfahami@asiaquest.my

    })
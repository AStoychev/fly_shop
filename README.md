# fly_shop
This is simple app which I use react

How to start project:

- Open project and start command: `npm i`
- After that start command: `cd fly_shop`
- Again start command: `npm i`
- And after that start the project with command: `npm start`

You can see the application on: [FlyShop](https://flyshop.onrender.com/)

I manage to do about 95% of the task. In my opinion :). I suppose I can refactor some of code if I use a context provider or a state management tool.
The application has been tested on the following browsers: Google Chrome, Firefox, Edge.

**Unfulfilled:**

- I think part of my CSS is wrong.

**Fulfilled:**

- Basically I was able to make most of the content on the page as well as the functionality.
- Filtering mechanism.
- Sorting mechanism.
- Load More Button.
- In the example I saw that there was a search engine. But it was not in the general requirements. However, I made a simple search engine with hint box. If the product is not there, it displays a message: Not found. The idea of the search engine is to demonstrate JS skills. This is the reason why I commented on the search engine and the style isn't very nice, but it works. But if you are still interested in the search engine, you can uncomment the code in:
    - AllProducts.jsx - from line 111 to 113;
    - Wings.jsx - from line 122 to 124;
    - Harnesses.jsx - from line 122 to 124.

For example data I use JSON.

I use useEffect to get the data.

I use useState and prop drilling to get the final results.

The challenge for me was the load more button. That was the first thing I did and I think it worked. One of the hardest challenges for me was making the app desktop and mobile responsive. Also Making the sorting and filtering mechanism was also a bit of a challenge, but it worked.
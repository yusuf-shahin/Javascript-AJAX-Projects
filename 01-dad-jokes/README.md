## Dad Jokes Project

#### HTML Structure

- div.container
  - button.btn
  - p.result(dummy text)

#### External Data

- the main idea the same, just external data

#### What is an API?

[What is an API?](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

- https://www.course-api.com/javascript-store-products
- get store products

- https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog
- get single store product

- https://randomuser.me/api/
- random user

#### Docs

- important
- search engine
- test in the browser

#### Dad Jokes Docs

- [Dad Jokes](https://icanhazdadjoke.com/api)

- random joke
- https://icanhazdadjoke.com/

#### Select Elements

- select btn, result
- check if both elements selected
- listen for click events

#### FetchDadJoke Function

- create async function
- setup fetch
- set result.textContent = joke

```js
const url = "https://icanhazdadjoke.com/";
const wrongUrl = "https://icanhazdadjo.com/";
const extenUrl = "https://icanhazdadjoke.com/fff";

const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  });

  const data = await response.json();
  result.textContent = data.joke;
};
```

#### Loading

- set result equal to - 'Loading...'

#### Error Handling

- try/catch block
- set result equal to - 'There was an error..'

#### Check Status

- Fetch - only throws an error if it cannot be resolve. `const wrongUrl = "https://icanhazdadjo.com/"` in this code url is wrong. So using catch() browser derectly show error.
- Error response still a response. If we fetch extenUrl `const extenUrl = "https://icanhazdadjoke.com/fff"` we also get response. But we must checkout that is that response true or false.
- check response.ok property
- throw new Error('Whoops!')

##### The code is :-

```js
const fetchDadJoke = async () => {
  result.innerHTML = `<h3 style="color: purple;">Loading...</h3>`;
  try {
    const resp = await fetch(extenUrl, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    //* to see our resp status , is that ok:true or ok:false .
    console.log(resp);
    if (!resp.ok) {
      throw new Error(" error");
    }

    const data = await resp.json();
    // console.log(data);
    result.textContent = data.joke;
  } catch (error) {
    //# If the url of API is wrong then it show this meessage...
    // for example "https://icanhazdadjo.com/" this url is wrong
    result.innerHTML = `<h3 style="color: brown;">There is no joke... :)</h3>`;
  }
};
```

- Moral of the story is , using fetch() we get a response. That response will resolve or reject. If response will be resolve we convert this respone into json file _response.json()_ to get the data.

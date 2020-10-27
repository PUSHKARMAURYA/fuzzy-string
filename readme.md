# string-fuzzy

> Compare text in any possible way(string-fuzzy).


[![Rate on Openbase](https://badges.openbase.io/js/rating/string-fuzzy.svg)](https://openbase.io/js/string-fuzzy?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

string-fuzzy is an  package  that let's you compare your text value in any possible way . 
## Get started


### Include
```javascript
var fuzzy=require('string-fuzzy')
```
### Use
```javascript
var result=fuzzy.regex("stringtobesearched");

```
## Example
```javascript
var fuzzy=require('string-fuzzy')
app.get("/search/:id",function(req,res){
var result=fuzzy.regex(req.params.id);
table.find({cat:result},function(err,call){
console.log(call);
})
})


```

# Contribution

Very much appreciate any types of donation and support. 

## Code

`string-fuzzy` follows github convention for contributions. Here are some steps:

1. Fork the repo to your github account
2. Checkout code from your github repo to your local machine.
3. Make code changes and don't forget add related tests.
4. Run `npm test` locally before pushing code back.
5. Create a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) on github.
6. Code review and merge
7. Changes will be published to NPM within next version.

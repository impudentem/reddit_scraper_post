# Scraper specific category posts from Reddit
## Installation

```sh
$ git clone https://github.com/impudentem/reddit_scraper_post.git
$ cd reddit_scraper_post/
$ npm install
```

## Config category name
 - `categoryName` A `String` in `index.ts`
```typescript
const categoryName: string = "funny";
```

## Build
```sh
$ npm run build
```

## Run
```sh
$ node dist/index.js
```

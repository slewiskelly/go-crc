# Go Code Review Comments (Web Extension)

The web extension provides a context menu within editable page elements,
providing quick access to topics listed on the following pages:

*   [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments/)
*   [Go Test Comments](https://github.com/golang/go/wiki/TestComments/)

This is particularly useful for providing extra context during code review.

The extension is available on the
[Chrome Web Store](https://chrome.google.com/webstore/detail/bglpnoejigofhoddabjfjpdnbaofoepp/).

An "unpacked" version can also be used. Instructions follow.

## Developing

1. Clone the repository.

```sh
git clone https://github.com/slewiskelly/go-crc && cd go-crc
```

2. Install dependencies:

```sh
npm install
```

3. Hack. 

4. Build:

```sh
npm run-script build
```

**Note**: Other scripts include: `clean`, `lint`, and `zip`. All of which are
self-explanatory.

5. In a Chrome/Chromium browser, navigate to `chrome://extensions`. Click
   "Load unpacked" in the top left-hand corner; or to update, the refresh button
   in the extension's card.

**Note**: Ensure developer mode is enabled, via the toggle in the top right-hand
corner.

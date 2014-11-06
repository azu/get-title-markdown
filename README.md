# get-title-markdown [![Build Status](https://travis-ci.org/azu/get-title-markdown.svg)](https://travis-ci.org/azu/get-title-markdown) [ ![Codeship Status for azu/get-title-markdown](https://www.codeship.io/projects/4ef13cd0-478e-0132-e3fa-1287ba88ce3a/status)](https://www.codeship.io/projects/45646)

Get `# title` content from Markdown string.

HTML Version : [azu/get-html-title](https://github.com/azu/get-html-title/ "azu/get-html-title")

## Installation

``` console
npm install get-title-markdown
```

## Usage

**test.md**

```html
# Title

test text
```

Get title content from above markdown.

```javascript
var getTitle = require("get-title-markdown");
var content = fs.readFileSync(__dirname + "/test.md", "utf-8");
getTitle(content); // => "Title"
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT

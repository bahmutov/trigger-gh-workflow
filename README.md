# trigger-gh-workflow ![@actions/core version](https://img.shields.io/badge/@actions/core-1.10.1-brightgreen)

> Reusable GH action to trigger a GitHub workflow via dispatch event

## Inputs

See [action.yml](./action.yml)

## Example

```yml
- name: Trigger example workflow
  uses: bahmutov/trigger-gh-workflow@v1
  env:
    GITHUB_TOKEN: ${{ secrets.GH_TRIGGER_TOKEN }}
    DEBUG: trigger-gh-workflow
  with:
    organization: bahmutov
    repository: trigger-gh-workflow
    event-type: trigger-me
    payload: |
      {
        "message": "hello from the release workflow"
      }
```

## Debugging

Run this action with the environment variable `DEBUG=trigger-gh-workflow`

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2024

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Advent 2021](https://cypresstips.substack.com/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/trigger-gh-workflow/issues) on GitHub

## MIT License

Copyright (c) 2024 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

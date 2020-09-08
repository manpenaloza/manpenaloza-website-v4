# Readme
This website is using GatsbyJS in its core in order to generate static pages.

## Implementation Notes
- Form Handling done with a Formspree Form (see `Contact` code section for further implementation details)

## Deploying using Github page

`package.json` has a default script that uses `gh-pages` module to publish on Github pages. Simply running `npm run deploy` would publish the site on github pages.

Additionally, it also has [path-prefix](https://www.gatsbyjs.org/docs/path-prefix/) value set for gatsby config in `config.js`. Change `pathPrefix` to relevant path if your gatsby site is hosted on subpath of a domain, `https://theanubhav.com/somePath/`. If you are hosting it as root site, i.e, `https://theanubhav.com/` , remove the pathPrefix configuration.

## License
This is a Gatsby.js V2 starter template based on Prologue by HTML5 UP.
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)
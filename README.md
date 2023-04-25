# Clientside Download Demo

[**View the demo online**](https://jobyh.github.io/clientside-download-demo/)

If you're interested in the download code check out the code around
[line 41](https://github.com/jobyh/clientside-download-demo/blob/main/pages/index.tsx#L41)
of `/pages/index.tsx`. The `setTimeout` is not necessary; it's there for UX (so the loader
displays for at least 500ms / doesn't just blink - generation is fast).

The demo is built with Next.js using React, TypeScript and TailwindCSS.

Static site is generated under `/docs` as this is a preconfigured Github Pages static site directory (quick & easy).

## TODO
- iOS Safari CSS bug (filename `.txt` not displaying)

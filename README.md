# Applycation

A local-first Chrome extension for carefully filling job application forms. It never submits an application.

## Development

```sh
npm install
npm run check
```

To try the extension, run `npm run build`, then load the `dist/` directory as an unpacked extension at `chrome://extensions`.

## Privacy

Personal profile data and the local build prompt are excluded from Git. The privacy guard checks tracked and staged paths before a commit or CI run. The extension is designed to keep profile and learned-answer data on this device.
# TailSearch Chrome Extension — Agent Instructions

## Project Overview

Chrome extension (Manifest V3) that appends a configured search term to selected text and opens a Google search. The user selects text on a page, then triggers a search via context menu or popup.

## Build & Development

```bash
npm run dev        # webpack --watch + hot reloading via ExtensionReloader on port 9090
npm run build      # production build → dist/
npm run unpack     # copy dist/ to Chrome's unpacked extensions dir (Windows only)
npm run lint       # eslint
```

After `npm run build`, run `npm run unpack`, then reload at `chrome://extensions`.

## Architecture

```
src/runtime/       ← background service worker + content script
src/renderer/      ← React UI (popup, options pages)
src/shared/        ← types/logic shared across both layers
```

**Communication is always through typed messages — never import runtime code from renderer or vice versa.**

### Runtime layer (`src/runtime/`)

- `background.ts` — extension lifecycle entry point; initializes handlers
- `content-script.ts` — captures `mouseup`/`contextmenu` text selection, sends one-shot `chrome.runtime.sendMessage()`
- `event-handlers/` — all background event logic; split by chrome API category

### Renderer layer (`src/renderer/`)

- `popup/` and `options/` — each page has an `index.tsx` that calls `createPage()` from `src/renderer/shared/page.tsx`
- `shared/` — provider wrappers, contexts, hooks, and layout primitives

### Shared layer (`src/shared/`)

- `message-event.ts` — **all message type definitions live here**; extend this when adding new messages
- `storage.ts` — `TailsearchStorage` schema + typed access helpers (`getStorageData`, `updateStorageData`)
- `model.ts` — `createTailSearchQueryUrl()` constructs Google search URLs

## Key Conventions

### Adding a new message type

1. Add the name + payload to `RuntimePortMessagePayloads` in [src/shared/message-event.ts](src/shared/message-event.ts)
2. Add a handler in the appropriate file under `src/runtime/event-handlers/`
3. Send from the renderer using `usePort().postMessage(type, payload)`

### Adding a new UI page

1. Create `src/renderer/<name>/index.html` and `index.tsx`
2. Call `createPage(source, <YourComponent />)` in `index.tsx` — this sets up all providers (Theme, Port, QueryClient, storage change listener)
3. Add the entry point to `webpack.config.ts` and link from `manifest.json`

### Storage access

- Always use the helpers in [src/shared/storage.ts](src/shared/storage.ts), never call `chrome.storage` directly
- Storage changes automatically refetch React Query cache via the listener in `createPage()`

### Styling

- Layout primitives: `FlexBox`, `FlexRow`, `FlexColumn` from `src/renderer/shared/components/`
- Use MUI `createStyled()` (not `styled()`) for new styled components — see existing components for the pattern
- Theme defined in [src/renderer/shared/theme.ts](src/renderer/shared/theme.ts)

### Path alias

`@shared/*` resolves to `src/shared/*` — configured in both `tsconfig.json` and `webpack.config.ts`

## Pitfalls

- **Split chunks are production-only.** In dev, all code lands in a single bundle per entry. Don't rely on chunk names at runtime.
- **`unpack` script is Windows-only.** Path is hardcoded to `AppData/Local/Google/Chrome/Unpacked Extensions`.
- **`ExtensionReloaderWebpackPlugin`** runs on port 9090 in dev mode; only one dev server can run at a time.
- **`StorageContext`** exists in `src/renderer/shared/contexts/storage-context.ts` but is not wired up — use `useStorage()` hook (TanStack React Query) instead.
- **No test framework configured.** Linting (`npm run lint`) is the only automated check.
- **Demo storage data** is injected in dev builds via `EXTENSION_STORAGE_INITIAL_DATA` from [demo-storage-data.json](demo-storage-data.json).

# Deno TODO

An playground app for experimenting with Deno and VS Code remote development
practices.

Order of play:

0. ✅ Set up VS Code Remote Development. All development should be done on a
   deterministic stack.
1. Deno TDD TODO App. Create a basic TODO web application (server-side rendered)
   to understand how Deno works.
2. Containerised 'release' build which uses `docker bundle` to output a final
   build artefact.
3. Dockerfile to host the bundled build

# VS Code Remote Development

Using
[VS Code Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).

Deno Dev container based off
https://github.com/btholt/deno-dev-container-example.

`.devcontainer/Dockerfile` Dockerfile is based on Debian 10.

- Installs Deno to `/deno` and makes available on PATH.
- Installs [Denon](https://github.com/denosaurs/denon) the Deno filesystem
  watcher) as a script to improve development process
- `.devcontainer/devcontainer.json` includes the Deno extension for VS Code

## Deno commands

Execute the App

```
deno run src/App.ts
```

Run unit tests

```
deno test
```

Watch unit tests

```
denon test
```

Run unit test with coverage (profile is named 'coverage')

```
deno test --coverage=coverage && deno coverage coverage
```

# os

Interactive operating‑system simulations written in Node.js.

> A lightweight toolkit that visualises core OS concepts in the terminal and in educational material, with step‑by‑step tracing and a simple API that can be embedded in other projects.

---

## Features

- **Process scheduling** – FCFS, SJF, Round‑Robin (quantum configurable) with live trace output.
- **Memory management** – paging, segmentation, page‑fault handling, and a basic cache model.
- **File‑system operations** – inode‑based directories and files (`create`, `delete`, `read`, `write`).
- **Synchronization primitives** – semaphores, mutexes, deadlock detection, and thread‑safety demonstrations.
- **Verbose logging** – pass `--verbose` to any demo to see detailed system‑call traces.

---

## Prerequisites

- Node.js 16 or newer (recommended LTS).

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install

# Run the default demo
npm run demo

# Or run a specific example
node examples/bankers-algorithm.js --verbose
```

> The `demo` script runs a short interactive session that exercises all core features.

---

## Configuration

Edit `config.js` to override global defaults:

```js
module.exports = {
  cpuSpeed: 1.0,     // Multiplier for simulated CPU cycles
  memorySize: 64,      // Total memory in pages
  quantum: 5           // Round‑Robin quantum (ticks)
};
```

Changes take effect the next time a demo or example is executed.

---

## Examples

| Example file | Demonstration |
| ------------ | ------------- |
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js` | Paging with page‑fault handling |
| `examples/scheduling-rr.js` | Round‑Robin scheduling |
| `examples/file-system.js` | File‑system operations with inodes |

Run any example with:

```bash
node examples/<file-name> [--verbose]
```

---

## API

The core simulation logic is exposed through the `os` module. Import it with:

```js
const os = require('os');
```

(Include brief examples of how to instantiate a scheduler or memory manager if desired.)

---

## Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/your-name`.  
3. Follow the existing code style; add tests for any logic changes.  
4. Push and open a pull request.  

Please open issues for bugs or feature requests.

---

## Changelog

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and verbose logging.

For a full list of changes, see the [CHANGELOG](CHANGELOG.md).

---

## License

MIT © [Shubhya Gami](https://github.com/shubhyagami)

---

## Badges

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)  
![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)  
![GitHub stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)  
![GitHub last commit](https://img.shields.io/github/last-commit/shubhyagami/os)

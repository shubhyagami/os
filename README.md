# os

Interactive operating‑system simulations written in JavaScript for the terminal.  
`os` visualises core OS concepts, offers a lightweight API that can be imported into other projects, and includes a set of demos that illustrate common operating‑system mechanisms.

> **Supported Node version** – 16.x and above

---

## Features

- **Process scheduling** – FCFS, SJF, Round‑Robin (configurable quantum) with real‑time trace output.
- **Memory management** – paging, segmentation, page‑fault handling, and a simple cache model.
- **File system** – inode‑based directories and files (`create`, `delete`, `read`, `write`).
- **Synchronization primitives** – semaphores, mutexes, deadlock detection, and thread‑safety demonstrations.
- **Verbose logging** – add `--verbose` to any demo or example to see detailed system‑call traces.

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm i
```

### Run the bundled interactive demo

```bash
npm run demo
```

### Run a specific example

```bash
node examples/bankers-algorithm.js --verbose
```

---

## Configuration

Global defaults live in `config.js`.  
Edit the file to change the simulation parameters; changes take effect on the next run.

```js
// config.js
module.exports = {
  cpuSpeed:   1.0,  // multiplier for simulated CPU cycles
  memorySize: 64,  // total memory in pages
  quantum:     5   // Round‑Robin quantum (ticks)
};
```

---

## Examples

| File | Description |
|------|-------------|
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js` | Paging with page‑fault handling |
| `examples/scheduling-rr.js` | Round‑Robin scheduling |
| `examples/file-system.js` | Inode‑based file‑system operations |

Run any example with:

```bash
node examples/<file-name> [--verbose]
```

---

## Library API

The simulation logic is exposed through the `os` module.

```js
const { Scheduler, Process } = require('os');

// Simple First‑Come, First‑Served scheduler
const scheduler = new Scheduler('FCFS');

scheduler.addProcess(new Process(1, 5));
scheduler.addProcess(new Process(2, 3));

scheduler.run(); // runs until all processes finish
```

See the source files for full class definitions and method documentation.

---

## Testing

All tests are written with Jest.

```bash
npm test
```

---

## Contributing

1. Fork the repository.  
2. Create a branch: `git checkout -b feature/<your‑name>`.  
3. Follow the existing code style (ESLint).  
4. Add or extend tests for any new or modified logic.  
5. Push the branch and open a pull request.

Please file issues for bugs or feature requests.

---

## Changelog

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and verbose logging.

For a complete history see the [CHANGELOG](CHANGELOG.md).

---

## License

MIT © [Shubhya Gami](https://github.com/shubhyagami)

---

![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![GitHub stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)
![GitHub last commit](https://img.shields.io/github/last-commit/shubhyagami/os)

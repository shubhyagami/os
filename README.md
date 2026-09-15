# os

A terminal‑based, interactive simulator of operating‑system fundamentals written in JavaScript.  
It visualises scheduling, memory management, file‑system operations, and more, and can be imported as a lightweight library.

**Supported Node.js:** 16.x and newer

---

## 🚀 Features

| Category | Details |
| -------- | ------- |
| **Process scheduling** | FCFS, SJF, Round‑Robin (configurable quantum) with live trace output |
| **Memory management** | Paging, segmentation, page‑fault handling, simple cache model |
| **File system** | Inode‑based directories and files – `create`, `delete`, `read`, `write` |
| **Synchronization** | Semaphores, mutexes, deadlock detection, thread‑safety demos |
| **Logging** | `--verbose` flag on demos and examples for detailed system‑call traces |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install
```

The library can be used in your own projects:

```bash
# Link locally (global install)
npm link          # makes `os` available as a global package

# Or add as a normal dependency
npm install os
```

---

## 🎮 Getting Started

```bash
# Launch the bundled interactive demo
npm run demo
```

The demo provides a command‑line interface; use `--help` for a list of commands.

Run a single example directly:

```bash
node examples/bankers-algorithm.js --verbose
```

---

## ⚙️ Configuration

Edit `config.js` to tweak simulation parameters. The changes take effect on the next run.

```js
// config.js
module.exports = {
  cpuSpeed:   1.0,  // multiplier for simulated CPU cycles
  memorySize: 64,  // total memory, in pages
  quantum:    5    // Round‑Robin quantum (ticks)
};
```

---

## 📚 Examples

| File | Description |
|------|-------------|
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js` | Paging with page‑fault handling |
| `examples/scheduling-rr.js` | Round‑Robin scheduling |
| `examples/file-system.js` | Inode‑based file‑system operations |

Run any example:

```bash
node examples/<file-name> [--verbose]
```

---

## 📖 Library API

The simulation logic is exposed via the `os` module. A quick example:

```js
const { Scheduler, Process } = require('os');

// Simple FCFS scheduler
const scheduler = new Scheduler('FCFS');

scheduler.addProcess(new Process(1, 5));
scheduler.addProcess(new Process(2, 3));

scheduler.run(); // runs until all processes finish
```

Full documentation of classes and methods is available in the `src` directory.

---

## 🧪 Testing

All tests are written with Jest.

```bash
npm test
```

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/<your-name>`.  
3. Follow the existing coding style enforced by ESLint.  
4. Add or extend tests for any new or modified logic.  
5. Push the branch and open a pull request.

Please raise issues for bugs or feature requests.

---

## 📅 Changelog

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and verbose logging.

See the full history in the [CHANGELOG](CHANGELOG.md).

---

## 📄 License

MIT © [Shubhya Gami](https://github.com/shubhyagami)

---

## 📌 Badges

![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)
![GitHub last commit](https://img.shields.io/github/last-commit/shubhyagami/os)

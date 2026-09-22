# os

**A terminal‑based interactive simulator** written in JavaScript that visualises core operating‑system concepts such as scheduling, memory management, file‑system operations, and synchronization primitives.  
It can also be imported as a lightweight Node.js library.

---

## 📌 Overview

`os` lets you experiment with operating‑system kernels from the command line. It supports:

* **Scheduling** – First‑Come‑First‑Serve, Round Robin, priority, lottery, etc.  
* **Memory management** – paging, swapping, protection bits.  
* **Dead‑lock avoidance** – Banker’s algorithm.  
* **File‑system** – inode‑based operations and directory trees.  
* **Synchronization** – semaphores, mutexes, barriers.

All logic is written in plain JavaScript, runs on Node.js ≥ 16, and is fully unit‑tested.

---

## 🚀 Features

- Interactive CLI demo with real‑time visual feedback.  
- Modular library API for integration into other projects.  
- Easily tweak simulation parameters via `config.js`.  
- Self‑contained examples in the `examples/` folder.  
- Jest test suite and CI ready.

---

## 🔧 Getting Started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install
```

Run the interactive demo:

```bash
npm run demo
```

Or execute a single example:

```bash
node examples/bankers-algorithm.js --verbose
```

---

## 📦 Installation

`os` can be used locally or installed globally.

```bash
# As a global command
npm link            # makes `os` available as a CLI

# As a regular dependency
npm install os
```

The CLI is bundled with the package, so no extra configuration is needed.

---

## ⚙️ Configuration

Edit `config.js` before starting a demo or an example. The file is reloaded on every run.

```js
module.exports = {
  cpuSpeed:   1.0,   // multiplier for simulated CPU cycles
  memorySize: 64,    // total memory, in pages
  quantum:     5     // Round‑Robin quantum (ticks)
};
```

---

## 📚 Examples

| Example file                 | What it shows                                            |
|-----------------------------|----------------------------------------------------------|
| `examples/bankers-algorithm.js` | Resource allocation and dead‑lock avoidance             |
| `examples/memory-paging.js`    | Paging with page‑fault handling                        |
| `examples/scheduling-rr.js`    | Round‑Robin scheduling                                 |
| `examples/file-system.js`      | Inode‑based file‑system operations                     |

Run an example:

```bash
node examples/<file-name> [--verbose]
```

---

## 📖 Library API

```js
const { Scheduler, Process } = require('os');

// Simple FCFS scheduler
const scheduler = new Scheduler('FCFS');

scheduler.addProcess(new Process(1, 5));
scheduler.addProcess(new Process(2, 3));

scheduler.run(); // runs until all processes finish
```

For full class and method documentation, explore the `src/` directory.

---

## 🧪 Testing

All tests use Jest.

```bash
npm test
```

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/<your-name>`.  
3. Follow the ESLint rules; add tests for any changes.  
4. Push and open a pull request.

Open issues for bugs or feature requests.

---

## 📆 Changelog

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and verbose logging.

See the full history in `CHANGELOG.md`.

---

## 📄 License

MIT © [Shubhya Gami](https://github.com/shubhyagami)

---

## 🎖 Badges

![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)
![MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![CI](https://github.com/shubhyagami/os/actions/workflows/node.js.yml/badge.svg)
![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)
![GitHub Last Commit](https://img.shields.io/github/last-commit/shubhyagami/os)

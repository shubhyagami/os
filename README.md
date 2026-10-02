[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# os – Operating System Concepts Simulator

[![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)
[![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)](#testing)
[![Coverage](https://img.shields.io/codecov/c/github/shubhyagami/os.svg)](https://codecov.io/gh/shubhyagami/os)
[![CI](https://github.com/shubhyagami/os/actions/workflows/node.js.yml/badge.svg)](https://github.com/shubhyagami/os/actions/workflows/node.js.yml)
[![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)](https://github.com/shubhyagami/os)

`os` is a lightweight, pure‑JavaScript simulator that visualises fundamental operating‑system concepts in a terminal. It covers CPU scheduling, memory management, file‑system structure, synchronization primitives and dead‑lock avoidance. The simulator can be run as a stand‑alone CLI demo or imported as a module in your own projects.

> **⚠️ Warning** – The npm package name `os` clashes with Node’s built‑in module. When importing, use a different alias or the full path:
> ```js
> const osSim = require('os'); // ❌ Node’s core module
> const osSim = require('./'); // ✅ Our simulator
> ```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install
```

You can install the package globally to use the `os` command:

```bash
npm link          # creates a global symlink
os demo           # run the interactive demo
```

Or invoke it directly with `npx`:

```bash
npx os demo
```

---

## 🎮 Demo

Launch the interactive simulation from the command line:

```bash
os demo
```

The CLI shows real‑time state updates for processes, memory pages, and file‑system trees.

---

## 📚 Library Usage

Import the simulator as a module:

```js
const osSim = require('./'); // or from the built path

// Start the CLI demo
osSim.demo();

// Or use individual components
const { Scheduler, Memory } = require('./');
```

All public classes are exported for custom simulations. See the source for full API documentation.

---

## ⚙️ Configuration

Simulation behaviour is driven from `config.js`. It is reloaded on each run. Example:

```js
module.exports = {
  cpuSpeed:   1.0,   // Multiplier for simulated CPU cycles
  memorySize: 64,    // Total pages of simulated memory
  quantum:    5      // Time quantum (ticks) for Round‑Robin
};
```

---

## 🚀 Core Modules

| Module          | Features |
|-----------------|----------|
| **Scheduling** | FCFS, Round‑Robin, Priority, Lottery |
| **Memory**     | Paging, swapping, protection bits |
| **File System**| Inode‑based operations, directory trees |
| **Sync**       | Semaphores, mutexes, barriers |
| **Deadlock**   | Banker's Algorithm implementation |

Each module is a plain JavaScript class with no external dependencies.

---

## 📦 Example Scenarios

Run quick demonstrations from the `examples/` folder:

```bash
node examples/bankers-algorithm.js
node examples/memory-paging.js
node examples/scheduling-rr.js
```

| File | Purpose |
|------|---------|
| `examples/bankers-algorithm.js` | Resource allocation & dead‑lock avoidance |
| `examples/memory-paging.js` | Paging and page‑fault handling |
| `examples/scheduling-rr.js` | Round‑Robin CPU scheduling |

---

## 🧪 Testing

All logic is unit‑tested with Jest:

```bash
npm test
```

CI pipelines run the test suite on every push and generate coverage reports.

---

## 📜 Changelog

**v1.0.0** – Initial release with full demo and core modules.

---

## 📄 License

MIT © 2026 Shubh Yagami

---

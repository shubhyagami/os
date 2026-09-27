[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# os

**`os`** is a terminal‑based interactive simulator written in JavaScript that visualises core operating‑system concepts such as scheduling, memory management, file‑system operations, and synchronization primitives.  
It can also be imported as a lightweight Node.js library.

---

## 📌 Overview

`os` lets you experiment with operating‑system kernels from the command line or as a reusable library. It supports:

| Feature | Description |
|---------|-------------|
| **Scheduling** | FCFS, Round‑Robin, Priority, Lottery, etc. |
| **Memory management** | Paging, swapping, protection bits |
| **Dead‑lock avoidance** | Banker's algorithm |
| **File‑system** | Inode‑based operations and directory trees |
| **Synchronization** | Semaphores, mutexes, barriers |

All logic is plain JavaScript, runs on Node.js ≥ 16, and is fully unit‑tested.

---

## 🚀 Features

- Interactive CLI demo with real‑time visual feedback  
- Modular library API – drop it into your project with one line  
- Customisable simulation parameters via `config.js`  
- Self‑contained examples in the `examples/` folder  
- Jest test suite and CI ready

---

## 📦 Installation

`os` can be used locally or installed globally.

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install
```

### Global CLI

```bash
npm link            # makes `os` available as a CLI
```

### Local usage

```bash
npm install os
```

`os` ships with a bundled CLI, so no additional configuration is needed.

---

## ⚙️ Configuration

Edit `config.js` before starting a demo or an example. The file is reloaded on every run.

```js
module.exports = {
  cpuSpeed:   1.0,   // multiplier for simulated CPU cycles
  memorySize: 64,    // total memory, in pages
  quantum:    5     // Round‑Robin quantum in ticks
};
```

---

## ▶️ Getting Started

### Interactive demo

```bash
npm run demo
```

### Run a single example

```bash
node examples/bankers-algorithm.js --verbose
```

---

## 📚 Examples

| Example file                         | What it shows |
|--------------------------------------|---------------|
| `examples/bankers-algorithm.js`      | Resource allocation & dead‑lock avoidance |
| `examples/memory-paging.js`           | Paging with page‑fault handling |
| `examples/scheduling-rr.js`           | Round‑Robin scheduling |
| `examples/file-system.js`             | Inode‑based file‑system operations |

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
2. Create a feature branch: `git checkout -b feature/<your‑name>`.  
3. Follow the ESLint rules and add tests for any changes.  
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
![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![Coverage](https://img.shields.io/codecov/c/github/shubhyagami/os.svg)
![CI](https://github.com/shubhyagami/os/actions/workflows/node.js.yml/badge.svg)
![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)

[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
# os – Operating‑System Concepts Simulator

`os` is a lightweight JavaScript library and a terminal‑based simulator that visualises core operating‑system concepts such as scheduling, memory management, file‑system operations, and synchronization primitives.  
It runs in Node.js ≥ 16 and can be used as a CLI demo or imported into any project.

---

## 📌 Overview

| Feature | Description |
|---------|-------------|
| **Scheduling** | FCFS, Round‑Robin, Priority, Lottery, … |
| **Memory management** | Paging, swapping, protection bits |
| **Dead‑lock avoidance** | Banker's algorithm |
| **File‑system** | In‑ode based operations & directory trees |
| **Synchronization** | Semaphores, mutexes, barriers |

All logic is written in plain JavaScript, fully unit‑tested, and no external runtime is required.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install
```

### Global CLI

```bash
npm link          # Make `os` available as a global command
```

```bash
os demo           # Run the interactive demo
```

### Local usage

```bash
npm install os
node -e "require('os').demo();"   # or require the API in your code
```

> *Tip:* The bundled CLI is automatically installed with the package, so you can call it directly after a local install: `npx os demo`.

---

## ⚙️ Configuration

Edit `config.js` to tailor the simulation parameters. The file is reloaded on each run.

```js
module.exports = {
  cpuSpeed:   1.0,   // multiplier for simulated CPU cycles
  memorySize: 64,    // total memory, in pages
  quantum:    5     // Round‑Robin quantum in ticks
};
```

---

## ▶️ Features

- **Interactive CLI** – real‑time visual feedback in the terminal  
- **Extensible API** – import `Scheduler`, `Process`, `Memory`, etc. into any Node.js project  
- **Modular configuration** – change simulation parameters via `config.js`  
- **Self‑contained examples** – see the `examples/` folder for ready‑to‑run demos  
- **Robust testing** – Jest test suite and CI integration

---

## 📚 Examples

| File | What it demonstrates |
|------|----------------------|
| `examples/bankers-algorithm.js` | Resource allocation and dead‑lock avoidance |
| `examples/memory-paging.js` | Paging with page‑fault handling |
| `examples/scheduling-rr.js` | Round‑Robin scheduling |
| `examples/file-system.js` | In‑ode based file‑system operations |

Run an example:

```bash
node examples/<example-file> [--verbose]
```

---

## 📖 Library API

```js
const { Scheduler, Process } = require('os');

// Simple FCFS scheduler
const scheduler = new Scheduler('FCFS');
scheduler.addProcess(new Process(1, 5));
scheduler.addProcess(new Process(2, 3));

scheduler.run(); // executes until all processes finish
```

For a complete reference, see the `src/` folder. Each class is documented with JSDoc comments.

---

## 🧪 Testing

All tests use Jest.

```bash
npm test
```

Coverage reports are available after running `npm test`.

---

## 🤝 Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/<name>`.  
3. Follow the ESLint guidelines and write unit tests for any new functionality.  
4. Push your branch and open a pull request.  

Please open issues for bugs or feature requests.

---

## 📆 Changelog

- **2026‑08‑26** – Added multiple scheduling algorithms and enhanced error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and verbose logging mode.  

For a full history, see `CHANGELOG.md`.

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

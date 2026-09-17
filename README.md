# os

A terminal‑based interactive simulator written in JavaScript that visualises core operating‑system concepts such as scheduling, memory management, file‑system operations, and synchronization primitives.  
It can also be consumed as a lightweight library from Node.js projects.

Supported Node.js: **>= 16**

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install
```

The CLI is part of the package.  
To use `os` as a global command:

```bash
npm link            # makes `os` available globally
```

Alternatively, add it as a normal dependency:

```bash
npm install os
```

---

## 🚀 Quick Start

### Run the interactive demo

```bash
npm run demo
```

The demo launches a command‑line interface. Use `--help` to see the available commands.

### Run a single example directly

```bash
node examples/bankers-algorithm.js --verbose
```

Replace the file name with any script under `examples/`.

---

## ⚙️ Configuration

Simulation parameters live in `config.js`.  
The file is re‑loaded on every run, so you can tweak the values before starting the demo or an example.

```js
// config.js
module.exports = {
  cpuSpeed:   1.0, // multiplier for simulated CPU cycles
  memorySize: 64,  // total memory, in pages
  quantum:     5   // Round‑Robin quantum (ticks)
};
```

---

## 📚 Examples

| File                     | Description                                 |
|--------------------------|---------------------------------------------|
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js`     | Paging with page‑fault handling           |
| `examples/scheduling-rr.js`     | Round‑Robin scheduling                    |
| `examples/file-system.js`       | Inode‑based file‑system operations        |

Run an example with:

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

For full documentation of classes and methods, see the `src` directory.

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

Please open issues for bugs or feature requests.

---

## 📅 Changelog

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and verbose logging.

See the full history in the [CHANGELOG](CHANGELOG.md).

---

## 📄 License

MIT © [Shubhya Gami](https://github.com/shubhyagami)

---

## 🏷️ Badges

![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)
![GitHub Last Commit](https://img.shields.io/github/last-commit/shubhyagami/os)

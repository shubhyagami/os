[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
# os – Operating System Concepts Simulator

[![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)
[![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)](#testing)
[![Coverage](https://img.shields.io/codecov/c/github/shubhyagami/os.svg)](https://codecov.io/gh/shubhyagami/os)
[![CI](https://github.com/shubhyagami/os/actions/workflows/node.js.yml/badge.svg)](https://github.com/shubhyagami/os/actions/workflows/node.js.yml)
[![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)](https://github.com/shubhyagami/os)

`os` is a lightweight JavaScript library and terminal-based simulator that visualizes core operating-system concepts such as scheduling, memory management, file-system operations, and synchronization primitives. It runs on Node.js 16 or newer and can be used as a CLI demo or imported into another Node.js project.

## 📌 Overview

| Feature | Description |
|---------|-------------|
| **Scheduling** | FCFS, Round-Robin, Priority, Lottery, and more |
| **Memory management** | Paging, swapping, protection bits |
| **Deadlock avoidance** | Banker's algorithm |
| **File system** | Inode-based operations and directory trees |
| **Synchronization** | Semaphores, mutexes, barriers |

All logic is written in plain JavaScript, covered by unit tests, and has no external runtime dependencies.

## 🚀 Getting Started

### Requirements

- Node.js 16 or newer
- npm

### Clone and install

```bash
git clone https://github.com/shubhyagami/os.git
cd os
npm install
```

### Run the demo

```bash
npm link          # make `os` available as a global command
os demo           # run the interactive demo
```

### Local usage

```bash
npm install os
node -e "require('os').demo();"   # or require the API in your code
```

> **Tip:** The bundled CLI is installed with the package, so you can also run it directly after a local install: `npx os demo`.

## ⚙️ Configuration

Edit `config.js` to tailor the simulation parameters. The file is reloaded on each run.

```js
module.exports = {
  cpuSpeed:   1.0,   // multiplier for simulated CPU cycles
  memorySize: 64,    // total memory, in pages
  quantum:    5      // Round-Robin quantum in ticks
};
```

## ▶️ Features

- **Interactive CLI** – real-time visual feedback in the terminal
- **Extensible API** – import `Scheduler`, `Process`, `Memory`, etc. into any Node.js project
- **Modular configuration** – change simulation parameters via `config.js`
- **Self-contained examples** – see the `examples/` folder for ready-to-run demos
- **Robust testing** – Jest test suite and CI integration

## 📚 Examples

| File | What it demonstrates |
|------|----------------------|
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js` | Paging with page-fault handling |
| `examples/scheduling-rr.js` |

[K[2m  [2mmodel z-ai/glm-5.3-flash failed, trying next...[0m[0m
[K[2m  [2mmodel deepseek-ai/deepseek-v4.1-flash failed, trying next...[0m[0m
[K[2m  [2mmodel openai/gpt-oss-20b failed, trying next...[0m[0m
[K[2m  [2mmodel openai/gpt-oss-120b failed, trying next...[0m[0m
# os – Operating System Concepts Simulator

[![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)
[![Tests Passing](https://img.shields.io/badge/tests-passing-brightgreen.svg)](#testing)
[![Coverage](https://img.shields.io/codecov/c/github/shubhyagami/os.svg)](https://codecov.io/gh/shubhyagami/os)
[![CI](https://github.com/shubhyagami/os/actions/workflows/node.js.yml/badge.svg)](https://github.com/shubhyagami/os/actions/workflows/node.js.yml)
[![GitHub Stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)](https://github.com/shubhyagami/os)

`os` is a lightweight JavaScript library and terminal-based simulator designed to visualize core operating system concepts. From CPU scheduling and memory management to file system operations and synchronization primitives, it provides a hands-on way to explore OS internals.

Built for Node.js 16+, it can be used as a standalone CLI demo or integrated as a module into your own Node.js projects.

## 📌 Overview

| Module | Capabilities |
| :--- | :--- |
| **Scheduling** | FCFS, Round-Robin, Priority, and Lottery scheduling |
| **Memory Management** | Paging, swapping, and protection bits |
| **Deadlock Avoidance** | Implementation of the Banker's Algorithm |
| **File System** | Inode-based operations and directory tree structures |
| **Synchronization** | Semaphores, mutexes, and barriers |

The library is written in plain JavaScript with zero external runtime dependencies and is backed by a comprehensive suite of unit tests.

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or newer
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/shubhyagami/os.git
cd os
npm install
```

### Running the Demo

To use `os` as a global command:

```bash
npm link
os demo
```

Alternatively, run it without linking using npx:

```bash
npx os demo
```

### Library Usage

If you want to use the simulator programmatically in your own code:

```javascript
const os = require('os');

// Launch the interactive demo
os.demo();

// Or import specific modules
const { Scheduler, Memory } = require('os');
```

## ⚙️ Configuration

Simulation parameters can be adjusted in `config.js`. These settings are reloaded every time the simulation starts.

```javascript
module.exports = {
  cpuSpeed:   1.0,   // Multiplier for simulated CPU cycles
  memorySize: 64,    // Total memory capacity (in pages)
  quantum:    5      // Time quantum for Round-Robin scheduling (in ticks)
};
```

## ✨ Key Features

- **Interactive CLI**: Real-time visualization of OS state directly in your terminal.
- **Extensible API**: Modular classes (`Scheduler`, `Process`, `Memory`, etc.) for custom simulations.
- **Modular Config**: Easily tune simulation behavior via a central configuration file.
- **Built-in Examples**: A dedicated `examples/` folder containing ready-to-run scenarios.
- **CI/CD Integration**: Fully tested via Jest with automated coverage reports.

## 📚 Examples

Explore the `examples/` directory to see the library in action:

| File | Description |
| :--- | :--- |
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js` | Paging mechanisms and page-fault handling |
| `examples/scheduling-rr.js` | Round-Robin CPU scheduling visualization |

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
npm test

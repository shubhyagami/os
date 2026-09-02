# OS — Interactive Operating‑System Simulations

A lightweight Node.js toolkit for visualizing core operating‑system concepts such as process scheduling, memory management, file‑system structures, and synchronization primitives.  
Run the demos in your terminal or integrate them into your teaching material.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)
[![GitHub](https://img.shields.io/badge/GitHub-shubhyagami%2Fos-blue.svg)](https://github.com/shubhyagami/os)
[![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/os)](https://github.com/shubhyagami/os)

---

## Quick Overview

* **Process Scheduling** – Explore FCFS, SJF, and Round‑Robin with adjustable quantum.  
* **Memory Management** – Simulate paging, segmentation, page‑fault handling, and cache behavior.  
* **File‑System Model** – Work with inodes, directories, and perform basic file operations.  
* **Synchronization** – Understand semaphores and mutexes, detect deadlocks, and observe thread safety.

Each demo is a self‑contained Node.js script that prints a step‑by‑step illustration of the chosen OS concept.

---

## Getting Started

### Prerequisites

* **Node.js** 16.x or newer

### Install

```bash
git clone https://github.com/shubhyagami/os.git
cd os
npm install
```

### Run the main demonstration

```bash
node index.js
```

### Run a specific example

```bash
node examples/bankers-algorithm.js
```

Add the `--verbose` flag to print detailed system‑call logs.

---

## Configuration

Open `config.js` to tweak global settings:

| Setting | Description | Default |
|---------|-------------|---------|
| `cpuSpeed` | Speed multiplier for CPU cycles | `1.0` |
| `memorySize` | Total memory in pages | `64` |
| `quantum` | Round‑Robin quantum in ticks | `5` |

Any change takes effect the next time you run a demo.

---

## Contributing

We welcome contributions!  
* Fork the repository, create a feature branch, and submit a pull request.  
* Follow the existing coding style and add tests where appropriate.  
* Open issues for bugs or feature ideas.

---

## Changelog

* **2026‑08‑26** – Added support for multiple scheduling algorithms; improved error handling.  
* **2026‑07‑15** – Introduced memory‑management visualiser and added verbose logging.

---

## License

This project is licensed under the [MIT License](LICENSE).

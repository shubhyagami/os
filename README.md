# os

Interactive JavaScript simulations that illustrate core operating‑system concepts—process scheduling, memory management, file‑system structures, and synchronization primitives—for learning and visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js >= 16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)
[![GitHub](https://img.shields.io/badge/GitHub-shubhyagami%2Fos-blue.svg)](https://github.com/shubhyagami/os)
[![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/os)](https://github.com/shubhyagami/os)

## Overview

The repository contains a set of visual demos that explore fundamental operating‑system topics, all runnable in a Node.js environment.

## Features

- **Process scheduling** – Visualize FCFS, SJF, and Round‑Robin. Adjust the quantum and inspect performance metrics.  
- **Memory management** – Experiment with paging, segmentation, page‑fault handling, and observe cache behavior.  
- **File‑system model** – Study inodes, directories, and perform basic file operations.  
- **Synchronization** – Demonstrate semaphores and mutexes to understand thread safety and deadlock avoidance.

## Getting Started

### Prerequisites

* Node.js 16 or newer

### Quick start

1. `git clone https://github.com/shubhyagami/os.git`  
2. `cd os`  
3. `npm install`  
4. `node index.js` – launch the main demo  

To run a specific example, for example Banker's algorithm:  
`node examples/bankers-algorithm.js`

Add the `--verbose` flag to enable detailed logging of system calls.

## Configuration

Edit `config.js` to change CPU speed, memory size, or scheduling quantum. Browse the `examples/` directory for ready‑made scenarios.

## Changelog

- **2026‑08‑26** – Performance improvements, enhanced error handling, added support for multiple scheduling algorithms.  
- **2026‑07‑15** – Introduced memory‑management visualiser and logging options.

## License

This project is licensed under the [MIT License](LICENSE).

## Contributing

Pull requests and issue reports are welcome. Follow the standard open‑source contribution workflow.

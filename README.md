# os
---
Interactive JavaScript simulations that illustrate core operating‑system concepts for learning and visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.x-informational.svg)](https://nodejs.org/)
[![GitHub](https://img.shields.io/badge/GitHub-shubhyagami%2Fos-blue.svg)](https://github.com/shubhyagami/os)
[![Last Updated](https://img.shields.io/github/last-commit/shubhyagami/os?date=2026-08-26)](https://github.com/shubhyagami/os)

## Overview
Explore operating‑system concepts through interactive simulations. The library provides visual demos for process scheduling, memory management, file‑system structures, and synchronization primitives, all runnable in a Node.js environment.

## Features
- **Process scheduling** – visualize FCFS, SJF, and Round‑Robin algorithms; adjust quantum and view performance metrics.  
- **Memory management** – experiment with paging, segmentation, and page‑fault handling; inspect cache hierarchies.  
- **File‑system model** – explore inodes, directories, and basic file operations.  
- **Synchronization** – demonstrate semaphores and mutexes to understand thread safety and deadlock avoidance.

## Getting Started
1. Install **Node.js 16+** from https://nodejs.org/.  
2. Clone the repository: `git clone https://github.com/shubhyagami/os.git` (or download the source).  
3. Enter the project directory: `cd os`.  
4. Install dependencies: `npm install`.  
5. Run the demo: `node index.js` or select an example, e.g. `node examples/bankers-algorithm.js`.

## Configuration & Customization
- Add `--verbose` to enable detailed logging of system calls.  
- Edit `config.js` to adjust CPU speed, memory size, or scheduling quantum for a tailored environment.  
- Browse the `examples/` directory for ready‑made scenarios and use‑case specific scripts.

## Changelog
- **2026‑08‑26** – Performance improvements, enhanced error handling, and added support for multiple scheduling algorithms.  
- **2026‑07‑15** – Introduced memory‑management visualiser and logging options.

## License
This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request. Follow the standard open‑source contribution workflow.

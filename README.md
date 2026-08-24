# os
-------------

Interactive Operating System Simulations
=====================================

JavaScript simulations of core operating system concepts, designed for interactive learning and visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-≥16.x-green)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)]()
[![Last Updated](https://img.shields.io/badge/Last%20Updated-2026--08--24-blue)]()

## Features

- **Process Scheduling:** Explore interactive simulations for FCFS, SJF, and Round Robin algorithms with a customizable time quantum.
- **Memory Management:** Visualize paging, segmentation, and real-time page fault handling for effective memory allocation.
- **File System Operations:** Understand inodes and directory structures for efficient data storage and retrieval.
- **Synchronization:** Study concurrency control using semaphores and mutexes to ensure thread safety and prevent deadlocks.

## Getting Started

Quickly get started with the operating system simulations by following these steps:

1. Install Node.js version 16.x or later.
2. Clone the repository: `git clone https://github.com/shubhyagami/os.git`
3. Navigate to the project directory: `cd os`
4. Install dependencies: `npm install`
5. Start the main simulation: `node index.js`

Alternatively, run specific examples directly:

```bash
node examples/bankers-algorithm.js
```

## Usage & Configuration

Customize your simulation experience with the following options:

- **Detailed Logging:** Use the `--verbose` flag to see detailed logs of each system call.
- **Custom Environments:** Modify `config.js` to adjust CPU speed, memory size, or scheduling quantum.
- **Ready Scenarios:** Explore pre-built scenarios in the `examples/` directory for deeper insight into specific scenarios.

## Changelog

Note: The latest changes and updates are reflected in the commit history.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

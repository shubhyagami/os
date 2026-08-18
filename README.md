# os

JavaScript simulations of core operating system concepts, designed for interactive learning and visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-≥16.x-green)](https://nodejs.org/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Last Updated](https://img.shields.io/badge/Last%20Updated-2026--08--19-blue)

## Features

- **Process Scheduling:** Interactive simulations for FCFS, SJF, and Round Robin algorithms.
- **Memory Management:** Visualize paging, segmentation, and real-time page faults.
- **File System Operations:** Understand inodes and directory structures.
- **Synchronization:** Explore concurrency control using semaphores and mutexes.

## Getting Started

To run the simulations locally, you will need Node.js version 16.x or later installed on your machine. Clone the repository, install the necessary dependencies, and start the main simulation:

```bash
git clone https://github.com/shubhyagami/os.git
cd os
npm install
node index.js
```

For a deeper dive into specific scenarios, you can run ready-made examples directly:

```bash
node examples/bankers-algorithm.js
```

## Usage & Configuration

- **Detailed Logging:** Pass the `--verbose` flag when running a simulation to see detailed logs of each system call.
- **Custom Environments:** Modify `config.js` to tweak CPU speed, memory size, or scheduling quantum.
- **Ready Scenarios:** Explore the `examples/` directory for pre-built scenarios like deadlock detection and page replacement.

## Changelog

**2026-07-27**
- Added new round-robin scheduler with configurable time quantum.
- Improved memory paging visualization to display page faults in real time.
- Fixed race condition in semaphore implementation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

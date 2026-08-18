# os

JavaScript simulations of core operating system concepts—process scheduling, memory management, file systems, and synchronization. Designed for students and developers who want to visualize OS internals without compiling C code or running a virtual machine.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A516.x-green)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/shubhyagami/os/pulls)

## Features

- **Process Scheduling**: FCFS, SJF, and Round Robin (configurable quantum)
- **Memory Management**: Paging and segmentation with real-time page fault visualization
- **File Systems**: Inodes and directory operations
- **Synchronization**: Semaphores and mutexes

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16.x or higher

### Installation & Usage

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install

# Run the main simulation
node index.js

# Explore ready-made OS demos
npm run examples
```

### Example: Banker's Algorithm

To see deadlock avoidance in action, run:

```bash
node examples/bankers-algorithm.js
```

## Configuration

You can tweak simulation parameters by modifying `config.js`. Adjust CPU speed, memory size, or scheduling quantum to suit your needs.

## Pro Tips

- Add the `--verbose` flag when running a simulation to see detailed logs of each system call.
- Browse the `examples/` directory for ready-to-run scenarios like deadlock detection and page replacement.

## Changelog

### 2026-08-19
- Refined README structure and documentation for clarity.

### 2026-07-27
- Added Round Robin scheduler with configurable time quantum.
- Improved memory paging visualization to show page faults in real time.
- Fixed race condition in semaphore implementation.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

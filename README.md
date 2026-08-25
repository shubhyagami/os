# os
-----

Interactive Operating System Simulations
=====================================

JavaScript simulations of core operating system concepts, designed for interactive learning and visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js>=16.x-informational)](https://nodejs.org/)
[![GitHub](https://img.shields.io/badge/GitHub-shubhyagami/main-blue)](https://github.com/shubhyagami/os/)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-2026--08--26-blue)]()

## Overview
------------

This repository provides interactive simulations of core operating system concepts in JavaScript, allowing users to visualize and explore different systems and scenarios.

## Features
------------

*   Interactive Process Scheduling simulations with FCFS, SJF, and Round Robin algorithms, customizable time quantum, and performance analysis.
*   Visual Memory Management with paging, segmentation, and real-time page fault handling for understanding cache and memory hierarchy impacts.
*   File System Operations simulations, including inodes and directory structures for efficient data storage and retrieval.
*   Synchronization studies using semaphores and mutexes to ensure thread safety and prevent deadlocks in concurrent systems.

## Getting Started
-------------------

1.  Install Node.js 16.x or later using the installer from [nodejs.org](https://nodejs.org/).
2.  Clone the repository using `git clone https://github.com/shubhyagami/os.git` or download the ZIP file from GitHub.
3.  Navigate to the project directory using `cd os` in your terminal or command prompt.
4.  Install required dependencies using `npm install`.
5.  Start the main simulation using `node index.js` or run specific examples directly using `node examples/bankers-algorithm.js`.

## Configuration and Customization
----------------------------------

Customize your simulation experience with the following features:

*   **Detailed Logging**: Enable detailed logging with the `--verbose` flag to see in-depth system call logs.
*   **Custom Environments**: Modify the `config.js` file to adjust CPU speed, memory size, or scheduling quantum for a tailored simulation.
*   **Ready Scenarios**: Explore pre-built scenarios in the `examples/` directory for deeper insight into specific scenarios and use cases.

## Changelog
------------

*   Improved simulation performance and stability
*   Enhanced logging and error handling
*   Added support for multiple scheduling algorithms

## License
---------

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details on terms and conditions.

## Contributing
--------------

Contributions are welcome and encouraged! Please follow the standard guidelines for contributing to open-source projects.

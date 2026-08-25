# os
-------------

Interactive Operating System Simulations
=====================================

JavaScript simulations of core operating system concepts, designed for interactive learning and visualization.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-≥16.x-green)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)]()
[![Last Updated: 2026-08-24](https://img.shields.io/badge/Last%20Updated-2026--08--24-blue)]()

## Overview
-----------

This repository provides interactive simulations of core operating system concepts in JavaScript, allowing users to visualize and explore different systems and scenarios.

## Features
------------

*   **Process Scheduling:** Simulate FCFS, SJF, and Round Robin algorithms with a customizable time quantum.
*   **Memory Management:** Visualize paging, segmentation, and real-time page fault handling.
*   **File System Operations:** Understand inodes and directory structures for efficient data storage and retrieval.
*   **Synchronization:** Study concurrency control using semaphores and mutexes to ensure thread safety and prevent deadlocks.

## Getting Started
-------------------

1.  Install Node.js version 16.x or later.
2.  Clone the repository using `git clone https://github.com/shubhyagami/os.git`.
3.  Navigate to the project directory using `cd os`.
4.  Install dependencies using `npm install`.
5.  Start the main simulation using `node index.js` or run specific examples directly using `node examples/bankers-algorithm.js`.

## Configuration and Customization
----------------------------------

Customize your simulation experience with the following features:

*   **Detailed Logging:** Enable detailed logging with the `--verbose` flag to see detailed system call logs.
*   **Custom Environments:** Modify the `config.js` file to adjust CPU speed, memory size, or scheduling quantum.
*   **Ready Scenarios:** Explore pre-built scenarios in the `examples/` directory for deeper insight into specific scenarios.

## Changelog
------------

Note: The latest changes and updates are reflected in the commit history.

## License
---------

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

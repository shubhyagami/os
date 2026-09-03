# OS — Interactive Operating‑System Simulations

A lightweight Node.js toolkit that visualizes core operating‑system concepts such as process scheduling, memory management, file‑system structures, and synchronization primitives. Run the demos in your terminal or embed them into your teaching material.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)
[![GitHub](https://img.shields.io/badge/GitHub-shubhyagami%2Fos-blue.svg)](https://github.com/shubhyagami/os)
[![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/os)](https://github.com/shubhyagami/os)

---

## Features

- **Process Scheduling** – Simulate FCFS, SJF, Round‑Robin (configurable quantum) with step‑by‑step output.  
- **Memory Management** – Paging, segmentation, page‑fault handling, and cache behavior.  
- **File‑System Model** – Inodes, directories, basic file operations (create, delete, read, write).  
- **Synchronization** – Semaphores, mutexes, deadlock detection, thread‑safety demonstrations.  
- **Verbose Logging** – Add `--verbose` to see detailed system‑call logs.  

---

## Getting Started

### Prerequisites

- Node.js 16.x or newer

### Clone the repository

```bash
git clone https://github.com/shubhyagami/os.git
cd os
```

### Install dependencies

```bash
npm install
```

### Run the main demonstration

```bash
node index.js
```

### Run a specific example

```bash
node examples/bankers-algorithm.js --verbose
```

---

## Configuration

Edit `config.js` to adjust global settings:

| Setting     | Description                               | Default |
|-------------|---------------------------------------------|---------|
| `cpuSpeed`  | Speed multiplier for CPU cycles            | `1.0`   |
| `memorySize`| Total memory in pages                      | `64`    |
| `quantum`   | Round‑Robin quantum in ticks                | `5`     |

Changes take effect the next time you run a demo.

---

## Contributing

1. Fork the repo and clone it locally.  
2. Create a feature branch (`git checkout -b feature/your-name`).  
3. Write code that follows the existing style.  
4. Add tests if you’re touching logic.  
5. Push, then open a pull request.

Please open issues for bugs or feature suggestions.

---

## Changelog (latest)

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Introduced memory‑management visualiser and added verbose logging.

---

## License

This project is licensed under the [MIT License](LICENSE).

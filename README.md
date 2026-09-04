# OS – Interactive Operating‑System Simulations

A lightweight Node.js toolkit that visualises core operating‑system concepts in the terminal or within teaching materials.

It covers:

- **Process scheduling** – FCFS, SJF, Round‑Robin (configurable quantum) with step‑by‑step trace  
- **Memory management** – paging, segmentation, page‑fault handling, simple cache model  
- **File‑system operations** – inodes, directories, `create`, `delete`, `read`, `write`  
- **Synchronization** – semaphores, mutexes, deadlock detection, thread‑safety demos  
- **Verbose logging** – use `--verbose` to see detailed system‑call traces

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git
cd os

# Install dependencies
npm install

# Run the demo
node index.js
```

Run one of the bundled examples, e.g.:

```bash
node examples/bankers-algorithm.js --verbose
```

---

## Features

| Feature                | Description |
|------------------------|--------------|
| **Scheduling**         | FCFS, SJF, Round‑Robin (quantum configurable) with trace output |
| **Memory Management**  | Paging, segmentation, page‑fault handling, cache simulation |
| **File System**        | Inode‑based directories and file operations (`create`, `delete`, `read`, `write`) |
| **Synchronization**   | Semaphores, mutexes, deadlock detection, thread‑safety demos |
| **Logging**            | `--verbose` flag for detailed traces |

---

## Configuration

Edit `config.js` to override global defaults:

| Setting     | Purpose                               | Default |
|------------|---------------------------------------|---------|
| `cpuSpeed` | Multiplier for simulated CPU cycles   | `1.0`   |
| `memorySize` | Total memory in pages                | `64`    |
| `quantum`  | Round‑Robin quantum (ticks)           | `5`     |

Changes take effect the next time you run a demo.

---

## Examples

| File                            | What it demonstrates |
|---------------------------------|-----------------------|
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js`       | Paging with page‑fault handling |
| `examples/scheduling-rr.js`       | Round‑Robin scheduling |
| `examples/file-system.js`        | File‑system operations with inodes |

---

## Contributing

1. Fork the repo.  
2. Create a feature branch: `git checkout -b feature/your-name`.  
3. Follow the existing code style; add tests if you alter logic.  
4. Push and open a pull request.  

Please open issues for bugs or feature requests.

---

## Changelog (excerpt)

- **2026‑08‑26** – Added support for multiple scheduling algorithms and improved error handling.  
- **2026‑07‑15** – Added memory‑management visualiser and verbose logging.

---

## License

MIT © [Shubhya Gami](https://github.com/shubhyagami)

---

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Node.js ≥16](https://img.shields.io/badge/Node.js-%3E%3D16.x-blue.svg)](https://nodejs.org/)  
[![GitHub stars](https://img.shields.io/github/stars/shubhyagami/os.svg?style=social&label=Stars)](https://github.com/shubhyagami/os)  
[![GitHub last commit](https://img.shields.io/github/last-commit/shubhyagami/os)](https://github.com/shubhyagami/os)

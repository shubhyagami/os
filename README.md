# OS – Interactive Operating‑System Simulations

A lightweight, Node.js‑based toolkit for visualizing core operating‑system concepts.  
It can be run in a terminal or embedded in teaching material, and demonstrates:

- Process scheduling (FCFS, SJF, Round‑Robin)
- Memory management (paging, segmentation, page faults, cache)
- File‑system structure (inodes, directories, basic file ops)
- Synchronization primitives (semaphores, mutexes, deadlock detection)

---

## Quick Start

### Prerequisites

- Node.js **≥ 16.x**

### Installation

``` 
git clone https://github.com/shubhyagami/os.git
cd os
npm install
```

### Run the Demo

``` 
node index.js
```

### Run an Example (e.g., Banker's algorithm)

```
node examples/bankers-algorithm.js --verbose
```

---

## Features

- **Scheduling** – FCFS, SJF, Round‑Robin (configurable quantum) with step‑by‑step trace.  
- **Memory** – Paging, segmentation, page‑fault handling, and simple cache model.  
- **File System** – Inodes, directories, `create`, `delete`, `read`, `write`.  
- **Synchronization** – Semaphores, mutexes, deadlock detection, thread‑safety demos.  
- **Verbose Logging** – Pass `--verbose` to view detailed system‑call traces.

---

## Configuration

Edit `config.js` to override global defaults:

| Setting     | Description                               | Default |
|------------|-------------------------------------------|---------|
| `cpuSpeed` | Multiplier for simulated CPU cycles       | `1.0`   |
| `memorySize` | Total memory in pages                    | `64`    |
| `quantum`  | Round‑Robin quantum (ticks)              | `5`     |

Apply changes the next time you run a demo.

---

## Examples

| File | What it demonstrates |
|------|--------------------------|
| `examples/bankers-algorithm.js` | Resource allocation and deadlock avoidance |
| `examples/memory-paging.js` | Paging with page‑fault handling |
| `examples/scheduling-rr.js` | Round‑Robin scheduling |
| `examples/file-system.js` | File‑system operations with inodes |

---

## Contributing

1. Fork and clone the repo.  
2. Create a feature branch (`git checkout -b feature/your-name`).  
3. Follow existing code style and add tests if you modify logic.  
4. Push changes and open a pull request.  

Please file issues for bugs or feature requests.

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
[![Last Commit](https://img.shields.io/github/last-commit/shubhyagami/os)](https://github.com/shubhyagami/os)

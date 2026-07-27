# os

## 🖥️ ASCII Art Banner

```
   ____  ____
  / __ \/ __/   Operating System Concepts
 / / / / /_     Simulated in JavaScript
/ /_/ / __/     by shubhyagami
\____/_/
```

## 📦 Badges

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Node.js](https://img.shields.io/badge/Node.js-≥16.x-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
![Last Updated](https://img.shields.io/badge/Last%20Updated-2026--07--27-blue)

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/shubhyagami/os.git

# Navigate into the project
cd os

# Install dependencies (if any)
npm install

# Run the main simulation
node index.js
```

> **Pro Tip:** Use `npm run examples` to explore ready-made OS demos.

---

## 🌟 Featured Use Case

**Interactive Learning of Operating System Fundamentals**  
This project provides JavaScript-based simulations for key OS concepts such as:

- Process scheduling (FCFS, SJF, Round Robin)
- Memory management (paging, segmentation)
- File system operations (inodes, directories)
- Synchronization (semaphores, mutexes)

Perfect for students, educators, and hobbyists who want to visualize how an operating system works under the hood — without needing to compile C code or run a virtual machine.

---

## 💡 Pro Tips

- Use the `--verbose` flag to see detailed logs of each system call.
- Modify `config.js` to tweak CPU speed, memory size, or scheduling quantum.
- Check out the `examples/` folder for ready-to-run scenarios like deadlock detection and page replacement.

---

## 📝 Changelog – 2026-07-27

- **Added** new round-robin scheduler with configurable time quantum.
- **Improved** memory paging visualization (now shows page faults in real time).
- **Fixed** race condition in semaphore implementation.
- **Updated** README with badges, quick start, and featured use case.

---

## 🎯 Weekly Highlight

**This week's focus:** *Deadlock Avoidance using the Banker's Algorithm*  
Try the interactive demo by running:

```bash
node examples/bankers-algorithm.js
```

Watch how the system safely allocates resources to multiple processes without entering a deadlock state.

---

## 💬 Motivational Quote

> *"The best way to predict the future is to implement it."* – David Heinemeier Hansson

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
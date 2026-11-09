---
layout: page
title: bareOS
description: A lightweight operating system featuring many modules including TTY support, thread scheduling, and a filesystem
img: assets/img/projects/bareos.png
importance: 4
category: Software Systems & Engineering
---

**bareOS** is a lightweight, educational operating system designed to explore core operating system principles, including thread scheduling, synchronization, memory management, device drivers, and file systems. The system is built from scratch in C and executed using QEMU, emphasizing low-level correctness, modularity, and clear separation of concerns.

The project incrementally implements a full OS stack—from basic console I/O and formatted printing to preemptive multitasking, inter-thread synchronization, dynamic memory allocation, and a functional in-memory file system—mirroring the design challenges of real-world kernels.

bareOS prioritizes clarity and correctness over abstraction, making system behavior explicit and testable while closely aligning with classical OS design literature.

<!-- <br> -->

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid
      loading="eager"
      path="assets/img/projects/bareos.png"
      title="bareos"
      class="img-fluid rounded z-depth-1"
    %}
  </div>
</div>

<div class="caption">
bareOS: Lightweight operating system.
</div>

## Main Contributions

- A fully functional lightweight operating system kernel implemented in C, supporting multitasking, synchronization primitives, device I/O, and a filesystem.
- A modular threading system with support for thread creation, suspension, resumption, joining, sleeping, and priority-based scheduling.
- A preemptive scheduler driven by timer interrupts and ready/sleep queues, enabling responsive and fair task execution.
- A minimal shell environment supporting command execution, process isolation via threads, and return-value propagation.
- A custom dynamic memory allocator implementing a first-fit strategy with block coalescing.
- A functional filesystem supporting file creation, opening, reading, writing, and persistence within a RAM disk.

#### Kernel and System Services

**Formatted Kernel Output**  

- Implemented a custom `printf` function supporting formatted integer output (`%d`, `%x`) using UART-based console I/O.
- Enables structured kernel logging without reliance on external libraries.

**Kernel Initialization and Memory Reporting**  

- Boot-time reporting of kernel layout, including:
  - Kernel start address
  - Kernel size
  - Global data region
  - Heap and stack boundaries
  - Available free memory
- All memory metrics are computed dynamically without modifying underlying kernel variables.

#### Threading and Scheduling

**Thread Lifecycle Management**  

- Full support for thread creation, suspension, resumption, joining, sleeping, and termination.
- Explicit thread states including `TH_READY`, `TH_RUNNING`, `TH_SLEEP`, `TH_WAITING`, and `TH_DEFUNCT`.

**Preemptive Scheduling**  

- Clock-interrupt–driven scheduler selecting runnable threads from a priority-ordered ready queue.
- Relative-delay sleep queue enabling efficient timed suspension and wake-up of threads.

**Context Switching**  

- Cooperative and preemptive context switching implemented via `ctxsw`.
- Correct state transitions enforced during scheduling decisions.

#### Synchronization Primitives

**Semaphores**  

- Complete semaphore lifecycle support including creation, waiting, signaling, and deallocation.
- Semaphore-based blocking ensures safe coordination between concurrent threads.

**Thread Coordination**  

- Thread joining implemented using per-thread semaphores for deterministic parent–child synchronization.
- Proper signaling of waiting threads upon thread termination.

#### Shell and User Interaction

**Interactive Shell**  

- UART-driven shell supporting:
  - Command parsing
  - Argument handling
  - Variable expansion (`$?`)
  - Command execution via separate threads

**Built-in Commands**  

- **hello**  
  Argument-aware greeting command with explicit error handling.

- **echo**  
  Supports both argument-based echoing and interactive line-based input with blocking behavior.

**Process Isolation**  

- Each shell command is executed in its own thread.
- The shell waits for command completion before accepting new input, preserving execution order and return values.

#### Memory Management

**Dynamic Heap Allocation**  

- Custom implementations of `malloc` and `free` using a first-fit allocation strategy.
- Supports block splitting and coalescing to minimize fragmentation.

**Free List Management**  

- Strict ordering of free blocks by address.
- Guaranteed consolidation of adjacent free blocks to preserve allocator correctness.

#### Device Drivers and I/O

**UART Driver**  

- Interrupt-driven UART handling for both transmit and receive paths.
- Circular buffers used for non-blocking data exchange.

**TTY Subsystem**  

- Blocking terminal input and output built atop the UART driver.
- Semaphore-based synchronization ensures correctness under concurrent access.

#### File System

**RAM-Based File System**  

- Lightweight in-memory filesystem supporting:
  - File creation and deletion
  - File open and close operations
  - Sequential read and write access
  - Block allocation and metadata management

**Filesystem Initialization**  

- Boot-time creation, formatting, and mounting of the RAM disk filesystem.
- Persistent metadata stored in memory-backed blocks.

#### Testing and Validation

- Each kernel subsystem underwent extensive unit testing.
- End-to-end integration tests validated correctness under concurrent and preemptive workloads.
- Testing focused on:
  - Scheduler correctness
  - Semaphore safety
  - Memory allocator integrity
  - File system consistency

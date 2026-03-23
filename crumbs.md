## 03/23 - 03/27

### Goals
- [x] Read FlashAttention v2 paper
- [x] Set up local benchmarking environment
- [ ] Implement basic CUDA kernel for matrix multiply
- [ ] Write notes on INT8 quantization tradeoffs
- [ ] Review vLLM paged attention source code

### Notes

**Sunday, March 22**
- Finished reading the FlashAttention v2 paper. The tiling strategy for reducing HBM reads is elegant — the key insight is that you never need to materialize the full N×N attention matrix.
- Set up nvitop for GPU monitoring. First impressions: much better than nvidia-smi for live profiling.

**Saturday, March 21**
- Read through the PagedAttention paper. KV cache fragmentation is the bottleneck they're solving — treating it like virtual memory in an OS is the right mental model.
- Benchmarked llama.cpp vs ollama on M2. llama.cpp wins on throughput, ollama wins on usability.

**Friday, March 20**
- Revisited the roofline model. Most LLM inference ops are memory-bandwidth bound, not compute bound. This changes what optimizations actually matter.

---

## Week of March 10, 2026

### Goals
- [x] Set up CUDA development environment
- [x] Complete first CUDA hello world + vector add
- [x] Read Andrej Karpathy's GPU programming post
- [x] Profile memory usage in a transformer forward pass

### Notes

**Thursday, March 14**
- Got the CUDA environment working. First kernel: vector addition. Embarrassingly parallel but it makes the mental model click.
- Profiled a GPT-2 forward pass with nsight. Attention is not the bottleneck at small batch sizes — it's the linear layers.

**Tuesday, March 12**
- Read through llm.c. Karpathy's comments are worth more than most textbooks.

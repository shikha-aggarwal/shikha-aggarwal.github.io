<!---
- [x] Read FlashAttention v2 paper
- [x] Set up local benchmarking environment
- [ ] Implement basic CUDA kernel for matrix multiply
- [ ] Write notes on INT8 quantization tradeoffs
- [ ] Review vLLM paged attention source code
-->

## 03/23 - 03/27

### Goals
- [ ] Best practices and establish new workflow with Claude
- [ ] Chapter 5 gpu book
- [ ] Test lambda instance with vllm batch + batching code
- [ ] Push work log every day
- [x] Build new website on github
- [ ] One vibe coded project: how to learn local tree species? Location based top 5 tree cards. Test the user in real life and then introduce more trees.

### Notes

**Monday, March 23**
- The new website is live!

<!---
**Saturday, March 21**
- Read through the PagedAttention paper. KV cache fragmentation is the bottleneck they're solving — treating it like virtual memory in an OS is the right mental model.
- Benchmarked llama.cpp vs ollama on M2. llama.cpp wins on throughput, ollama wins on usability.

**Friday, March 20**
- Revisited the roofline model. Most LLM inference ops are memory-bandwidth bound, not compute bound. This changes what optimizations actually matter.
-->
---

## 03/30 - 04/03

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

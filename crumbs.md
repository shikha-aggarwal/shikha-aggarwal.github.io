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
- [x] Decide architecture for vllm + worker node (pull from pub/sub, send for compute, write to mongo)
- [ ] Push work log every day
- [x] Build new website on github
- [x] v1.0 vibe coded project: how to learn local tree species? Location based top 5 tree cards. Test the user in real life and then introduce more trees.

### Notes

**Monday, March 23**
- The new website is live!

**Thursday, March 20**
- Architecture: Keep vllm serve for now (not batch). Introduce concurrency on the worker side. 
- v1.1. 3 major changes:
    - Pulls 500 messages from pubsub (currently fetches 10 - wrongly attributed to uvicorn connection limit),
    - spawn concurrent requests to vllm (serve will batch on its own),
    - bulk write to mongodb.

**Friday, March 20**
- v1.0 of rooted @https://github.com/shikha-aggarwal/rooted

---

## 03/30 - 04/03

### Goals
- [x] Refine browse mode in [Rooted app](https://github.com/shikha-aggarwal/rooted).

### Notes

**Thursday, 04/02**
- Browse mode displays local tree name, more pictures, and roughly templated information about identifying the plant.

---

## 04/06 - 04/10

### Goals
- [ ] test vllm + worker node on test Lambda node
- [ ] Best practices and establish new workflow with Claude
- [ ] Chapter 5 gpu book
- [ ] Test Rooted camera functionality

### Notes

---

## 04/13 - 04/17

### Goals
- [ ] Add auto-curated quiz to Rooted.

### Notes
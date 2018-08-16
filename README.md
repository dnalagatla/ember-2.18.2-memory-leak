# Memory leaks repro

This README outlines the details of Memory leak notice 2.18.2 version

## Repro Steps
* Created a simple component `my-button` and correcponding template.
* Template has click action handler defined.  
* Created integration test for the component.
* run `ember exam --server --filter="Integration | Component | my button"`
* Test pass, expected.
* In chrome Dev tools Memory heapshot notice `Container` object. 
  Not expected, as the container is expected to destroy after the completion of the test.

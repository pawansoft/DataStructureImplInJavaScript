const Stack = require("../StateCensusAnalyser/LearningDataStructure/Stack");

const stack = new Stack();
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.display();

stack.pop();
stack.display();

console.log(stack.size());

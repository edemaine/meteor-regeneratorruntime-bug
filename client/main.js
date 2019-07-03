function* words() {
  yield 'hello';
  yield 'world';
}

for (word of words()) {
  console.log(word);
}

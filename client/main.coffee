words = ->
  yield 'hello'
  yield 'world'

for word from words()
  console.log word

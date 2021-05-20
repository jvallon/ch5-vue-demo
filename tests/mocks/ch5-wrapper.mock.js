function press(join) {
}

function release(join) {
}

function pulse(join) {
  press(join);
  release(join);
}

function subscribe(type, join, func) {
  console.log(`${type},${join},${func}`)
}

export { press, release, pulse, subscribe }
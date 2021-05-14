let lastJoin = ''

function press(join) {
  lastJoin = join;
}

function release(join) {
  lastJoin = join;
}

export { press, release, lastJoin }
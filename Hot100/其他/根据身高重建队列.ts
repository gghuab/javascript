function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    //身高相同按K小的排前面
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      //身高不同，身高大的在前面
      return b[0] - a[0]
    }
  })
  let queen: number[][] = []

  for (const person of people) {
    queen.splice(person[1], 0, person)
  }

  return queen
}

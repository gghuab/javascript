function sortVersionsDesc(versions: string[]): string[] {
  versions.sort((a, b) => {
    const parts1 = a.split('.')
    const parts2 = b.split('.')
    let length1 = parts1.length
    let length2 = parts2.length
    let maxLength = Math.max(length1, length2)
    for (let i = 0; i < maxLength; i++) {
      let num1 = parseInt(parts1[i] || '0')
      let num2 = parseInt(parts2[i] || '0')

      if (num1 > num2) {
        return -1
      } else if (num1 < num2) {
        return 1
      }
    }
    return 0
  })

  return versions
}

export {}

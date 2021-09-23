/**
 * @returns string
 * @example
 * toDefaultDateFormat(new Date("1/1/2000")) // Jan 1, 2000
 */
export function toDefaultDateFormat(date: Date) {
  const monthString = date.toDateString().slice(4, 7) // e.g. Sep, Aug

  return `${monthString} ${date.getDate()}, ${date.getFullYear()}`
}

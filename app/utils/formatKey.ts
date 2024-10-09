export function formatKey(str: string | number): string {
  str = str.toString()
  str = str.replace(/_/g, ' ')
  return str.charAt(0).toUpperCase() + str.slice(1)
}

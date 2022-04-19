/**
 * 
 * @param index index of element which should be removed
 * @param array array from where it's needed to remove element
 * @returns new array without removed element
 */
export function removeElementAtIndex<T>(index: number, array: Array<T>): Array<T> {
    return array.filter((item: T, arrayIndex: number) => { return arrayIndex != index})
  }

/**
* 
* @param lookForValue value which is needed to be found in array
* @param array array where need to find element
* @returns index where first element with such value is placed in array
*/
export function findElementIndex<T>(lookForValue: T, array: Array<T>): number {
    return array.findIndex((item: T) => { return lookForValue === item})
}
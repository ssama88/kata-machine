const recurseSort = (array: number[], low: number, high: number): void => {
    if (low >= high) {
        return;
    }
    const pivotIdx = partition(array, low, high);
    recurseSort(array, low, pivotIdx - 1);
    recurseSort(array, pivotIdx + 1, high);
};
function partition(array: number[], low: number, high: number): number {
    const pivot = array[high];
    let idx = low - 1;
    for (let i = low; i < high; i++) {
        if (array[i] <= pivot) {
            idx++;
            const temp = array[i];
            array[i] = array[idx];
            array[idx] = temp;
        }
    }
    array[high] = array[idx + 1];
    array[idx + 1] = pivot;
    return idx + 1;
}
export default function quick_sort(arr: number[]): void {
    recurseSort(arr, 0, arr.length - 1);
}

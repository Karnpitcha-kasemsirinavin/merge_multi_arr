// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []
// That returns sorted array by ascending.

// given
//      collection_1, collection_3 already sorted from min(0) to max
//      collection_2 already sorted from max to min(0)

// ! Note: Don't allow to use any sort function

export default function merge (collection_1: number[], collection_2: number[], collection_3: number[]) : number[] {
    // * reverse collection_2 to ascending order
    collection_2 = [...collection_2].reverse();

    let combined_list: number[] = []; // result list
    let i = 0, j = 0, k = 0; // index for each list

    // * loop until iterate all elements in longest list
    while (i < collection_1.length || j < collection_2.length || k < collection_3.length) {
        // let initial value can be number or undefined for safety
        let minVal: number | undefined = undefined;

        // * assign value if not the last element then get the min value from comparing
        if (i < collection_1.length) {
            minVal = minVal === undefined ? collection_1[i]: Math.min(minVal, collection_1[i]!);
        }
        if (j < collection_2.length) {
            minVal = minVal === undefined ? collection_2[j]: Math.min(minVal, collection_2[j]!);
        }
        if (k < collection_3.length) {
            minVal = minVal === undefined ? collection_3[k]: Math.min(minVal, collection_3[k]!);
        }
        
        //* push to the result array
        if (minVal !== undefined) combined_list.push(minVal);

        // * check where value is from and increase the index of that array
        if (minVal === collection_1[i]) {i++;} 
        else if (minVal === collection_2[j]) {j++;} 
        else if (minVal === collection_3[k]) {k++;}
    }
    return combined_list;
};

console.log(merge([1, 2, 3], [3, 2, 1], [4, 5]));
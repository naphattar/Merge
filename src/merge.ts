export function merge_sort_arrays(
    collection_1: number[], // sort from smallest to largest
    collection_2: number[], // sort from largest to smallest
    collection_3: number[], // sort from smallest to largest
) : number[] {
    const collection_1_size = collection_1.length;
    const collection_2_size = collection_2.length;

    let collection_1_index = 0;
    let collection_2_index = collection_2_size - 1;

    const merged_collection_1_2 = [];

    while( collection_1_index < collection_1_size && collection_2_index >= 0 ) {
        if( collection_1[collection_1_index] < collection_2[collection_2_index] ) {
            merged_collection_1_2.push( collection_1[collection_1_index] );
            collection_1_index++;
        } else {
            merged_collection_1_2.push( collection_2[collection_2_index] );
            collection_2_index--;
        }
    }

    while( collection_1_index < collection_1_size ) {
        merged_collection_1_2.push( collection_1[collection_1_index] );
        collection_1_index++;
    }

    while( collection_2_index >= 0 ) {
        merged_collection_1_2.push( collection_2[collection_2_index] );
        collection_2_index--;
    }

    const collection_3_size = collection_3.length;
    const merged_collection_1_2_size = merged_collection_1_2.length;
    let collection_3_index = 0;
    let merged_collection_1_2_index = 0;
    const result = [];

    while( collection_3_index < collection_3_size && merged_collection_1_2_index < merged_collection_1_2_size ) {
        if( collection_3[collection_3_index] < merged_collection_1_2[merged_collection_1_2_index] ) {
            result.push( collection_3[collection_3_index] );
            collection_3_index++;
        }
        else {
            result.push( merged_collection_1_2[merged_collection_1_2_index] );
            merged_collection_1_2_index++;
        }
    }
    while( collection_3_index < collection_3_size ) {
        result.push( collection_3[collection_3_index] );
        collection_3_index++;
    }
    while( merged_collection_1_2_index < merged_collection_1_2_size ) {
        result.push( merged_collection_1_2[merged_collection_1_2_index] );
        merged_collection_1_2_index++;
    }
    return result
}

console.log(merge_sort_arrays([1, 3, 5], [10, 8, 4], [6, 7, 9]));
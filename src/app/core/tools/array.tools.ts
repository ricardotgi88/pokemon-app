export class ArrayTools {

    static sort<T>(array: T[], columnName: string): T[] {
        array.sort((array1, array2) => {
            if (array1[columnName] > array2[columnName]) {
                return 1;
            }
            if (array1[columnName] < array2[columnName]) {
                return -1;
            }

            return 0;
        });

        return array;
    }
}

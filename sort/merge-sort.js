/**
 * マージソートを行う
 *
 * @param targetData
 * @returns {Array}
 */
const mergeSort = (targetData) => {

  /**
   * 2つの配列をマージする
   *
   * @param firstList
   * @param secondList
   * @returns {Array.<*>}
   */
  const merge = (firstList, secondList) => {
    let mergeList = [];
    let i = 0;
    let j = 0;

    while (i < firstList.length  && j < secondList.length) {
      mergeList.push(firstList[i] < secondList[j] ? firstList[i++] : secondList[j++]);
    }

    return mergeList.concat(firstList.slice(i, firstList.length)).concat(secondList.slice(j, secondList.length));
  };

  if (targetData.length < 2) {
    return targetData;
  }

  return merge(
    mergeSort(
      targetData.slice(0, 1)
    ),
    mergeSort(
      targetData.slice(1, targetData.length)
    )
  );
};

// 初期データ
const initialData = [5, 3, 8, 2, 4, 6, 1, 7, 10, 9];

// 昇順でソート
const ascResultData = mergeSort(initialData);

// 期待値として [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] が出力されるハズ
console.log(ascResultData);

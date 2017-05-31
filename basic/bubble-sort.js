/**
 * 昇順でソートする
 *
 * @param targetData
 * @returns {*}
 */
const bubbleSortByAsc = (targetData) => {
  let i = 0;

  while (i < targetData.length -1) {
    let j = 0;

    while (j < targetData.length - i - 1) {
      // 現在の値と次の値を比較し、現在の値が大きい場合は入れ替える
      if (targetData[j] > targetData[j + 1]) {
        let tmp = targetData[j];
        targetData[j] = targetData[j + 1];
        targetData[j + 1] = tmp;
      }
      j++;
    }
    i++;
  }

  return targetData;
};

/**
 * 降順でソートする
 *
 * @param targetData
 * @returns {*}
 */
const bubbleSortByDesc = (targetData) => {
  let i = 0;

  while (i < targetData.length -1) {
    let j = 0;

    // 昇順と逆、次の値と現在の値を比較して、次の値が大きい場合は入れ替える
    while (j < targetData.length - i - 1) {
      if (targetData[j + 1] > targetData[j]) {
        let tmp = targetData[j];
        targetData[j]     = targetData[j + 1];
        targetData[j + 1] = tmp;
      }
      j++;
    }
    i++;
  }

  return targetData;
};

// 初期データ
const initialData = [3, 4, 1, 5, 2];

// 昇順でソート
const ascResultData = bubbleSortByAsc(initialData);

// 期待値として [1, 2, 3, 4, 5] が出力されるハズ
console.log(ascResultData);

// 降順でソート
const descResultData = bubbleSortByDesc(initialData);

// 期待値として [5, 4, 3, 2, 1] が出力されるハズ
console.log(descResultData);

/**
 * 昇順でソートする
 *
 * @param targetData
 * @returns {*}
 */
const selectionSortByAsc = (targetData) => {
  // 最小値のindexを表す
  let minIndex;

  // 交換用に一時的に宣言
  let tmp;

  for (let i = 0; i < targetData.length; i++) {
    // 仮の最小値は配列の先頭の値とする
    minIndex = i;

    for (let j = i + 1; j < targetData.length; j++) {
      if (targetData[j] < targetData[minIndex]) {
        minIndex = j;
      }
    }

    // 最小値の要素と先頭の要素を交換
    tmp = targetData[i];
    targetData[i] = targetData[minIndex];
    targetData[minIndex] = tmp;
  }

  return targetData;
};

// 初期データ
const initialData = [3, 4, 1, 5, 2];

// 昇順でソート
const ascResultData = selectionSortByAsc(initialData);

// 期待値として [1, 2, 3, 4, 5] が出力されるハズ
console.log(ascResultData);

/**
 * 昇順でソートする
 *
 * @param targetData
 * @returns {*}
 */
const bubbleSortByAsc = (targetData) => {

  for (let i = 0; i < targetData.length; i++) {
    for (let j = targetData.length - 1; j > i; j--) {
      if (targetData[j] < targetData[j - 1]) {
        let tmp = targetData[j];
        targetData[j] = targetData[j - 1];
        targetData[j - 1] = tmp;
      }
    }
  }

  return targetData;
};

// 初期データ
const initialData = [5, 3, 2, 4, 1];

// 昇順でソート
const ascResultData = bubbleSortByAsc(initialData);

// 期待値として [1, 2, 3, 4, 5] が出力されるハズ
console.log(ascResultData);

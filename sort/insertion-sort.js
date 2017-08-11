/**
 * 昇順でソートする
 *
 * @param targetData
 * @returns {*}
 */
const insertionSort = (targetData) => {
  // 配列の先頭要素を整列済と見なすので i は 1 から始める
  for (let i = 1; i < targetData.length; i++) {
    // 挿入する値を変数に一時的に格納
    let tmp = targetData[i];

    let j;
    for (j = i - 1; j >= 0; j--) {
      // 挿入する値が小さい場合は、調べた値を1つ後ろへずらす
      if (targetData[j] > tmp) {
        targetData[j + 1] = targetData[j];
      } else {
        // 挿入する値が大きい場合はずらす処理を抜ける
        break;
      }
    }

    // ずらす処理が終わったところに「挿入する値」を入れる
    targetData[j + 1] = tmp;
  }

  return targetData;
};

// 初期データ
const initialData = [3, 5, 4, 1, 2];

// 昇順でソート
const ascResultData = insertionSort(initialData);

// 期待値として [1, 2, 3, 4, 5] が出力されるハズ
console.log(ascResultData);

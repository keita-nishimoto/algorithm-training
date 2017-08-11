/**
 * バイナリーサーチ（二分探索）を行う
 *
 * @param targetData
 * @param searchNumber
 * @returns {Number|*}
 */
const binarySearch = (targetData, searchNumber) => {
  // 検索対象のリストの大きさを求める
  const dataSize = targetData.length;
  // 開始位置のindex
  let left = 0;
  // 終了位置のindex
  let right = dataSize;
  // 検証対象のデータの中央値入れる変数
  let mid;

  while (left <= right) {
    // 中央値を求める
    mid = parseInt((left + right) / 2, 10);
    // 1回目の検索はリストの中央値と比較する
    if (targetData[mid] === searchNumber) {
      // データが一致したらreturn
      return mid;
    } else if (targetData[mid] < searchNumber) {
      // 中央値より検索値が大きい場合は開始位置を 中央値 + 1 とする
      left = mid + 1;
    } else {
      // 中央値より検索値が小さい場合は終了位置を 中央値 - 1 とする
      right = mid - 1;
    }
  }

  throw new Error('NotFound');
};

// 検索対象の配列（この配列はソートされている必要がある）
const targetData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3を持つ配列のindexを求める
const resultIndex = binarySearch(targetData, 3);

// 期待値として2が表示されるハズ
// この例の場合は3回目のループで目的のデータを探せるハズである
console.log(resultIndex);

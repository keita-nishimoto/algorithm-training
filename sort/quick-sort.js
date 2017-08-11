/**
 * 昇順でソートする
 *
 * @param targetData 対象の配列
 * @param startNumber 開始位置
 * @param endNumber 終了位置
 * @returns {*}
 */
const quickSortByAsc = (targetData, startNumber, endNumber) => {
  if (targetData.length <= 1) {
    return targetData;
  }

  // 範囲の間にある値をピポットに設定する
  const pivot = targetData[Math.floor((startNumber + endNumber) / 2)];
  // 引数を左端、右端として変数にいれる
  let left = startNumber;
  let right = endNumber;

  while (true) {
    // leftの値がpivotより小さければleftを一つ右へ移動する
    while (targetData[left] < pivot) {
      left++;
    }

    // rightの値がpivotより小さければrightを一つ左へ移動する
    while (pivot < targetData[right]) {
      right--;
    }

    // leftとrightの値がぶつかったらグループ訳の処理を止める
    if (right <= left) {
      break;
    }

    // 値がぶつかっていない場合、leftとrightを交換
    // 交換後、leftを後ろへ、rightを前へ一つ移動する
    const tmp = targetData[left];
    targetData[left] = targetData[right];
    targetData[right] = tmp;
    left++;
    right--;
  }

  // 左側に分割可能なデータがある場合、再帰呼出
  if (startNumber < left -1) {
    quickSortByAsc(targetData, startNumber, left - 1);
  }

  // 右側に分割出来るデータがある場合、再帰呼出
  if (right + 1 < endNumber) {
    quickSortByAsc(targetData, right + 1, endNumber);
  }

  return targetData;
};

// 初期データ
const initialData = [5, 3, 8, 2, 4, 6, 1, 7, 10, 9];

// 昇順でソート
const ascResultData = quickSortByAsc(initialData, 0, initialData.length - 1);

// 期待値として [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] が出力されるハズ
console.log(ascResultData);

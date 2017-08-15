/**
 * 分布数え上げソートを行う
 *
 * @param targetData
 * @param maxNumber
 * @returns {Array}
 */
const countingSort = (targetData, maxNumber) => {
  // 出現回数を入れる配列
  let count = [];
  // 結果を入れる配列
  let result = [];

  // 出現回数を入れる配列の初期化
  for (let i = 0; i <= maxNumber; i++) {
    count[i] = 0;
  }

  // キーの出現回数をcountに入れる
  for (let i = 0; i < targetData.length; i++) {
    count[targetData[i]]++;
  }

  // キーの累積度数分布を求める
  for (let i = 0; i < maxNumber; i++) {
    count[i + 1] += count[i];
  }

  // 度数分布に従ってデータをresultにコピーする
  for (let i = targetData.length -1; i >= 0; i--) {
    result[--count[targetData[i]]] = targetData[i];
  }

  return result;
};

// 初期データ
const initialData = [5, 3, 3, 1, 4];

// 昇順でソート
const ascResultData = countingSort(initialData, 5);

// 期待値として [1, 3, 3, 4, 5] が出力されるハズ
console.log(ascResultData);

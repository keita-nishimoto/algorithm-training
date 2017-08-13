/**
 * バケットソートを行う（昇順）
 *
 * @param targetData 並べ替えの対象データ
 * @param maxNumber データ範囲の最大値
 * @returns {*}
 */
const bucketSort = (targetData, maxNumber) => {
  let buckets = [];

  // データ範囲の最大値分だけバケットを用意する
  for (let i = 0; i < maxNumber; i++) {
    buckets[i] = 0;
  }

  // 元データをそれぞれ対応するキーのバケットに入れる
  for (let i = 0; i < targetData.length; i++) {
    buckets[targetData[i]] = targetData[i];
  }

  // バケットから元の配列にデータを戻す
  let j = 0;
  for (let i = 0; i < maxNumber; i++) {
    if (0 < buckets[i]) {
      targetData[j++] = buckets[i];
    }
  }

  return targetData;
};

// 初期データ
const initialData = [5, 3, 2, 4, 1];

// 昇順でソート
const ascResultData = bucketSort(initialData, 10);

// 期待値として [1, 2, 3, 4, 5] が出力されるハズ
console.log(ascResultData);

/**
 * 基数ソートを行う
 *
 * @param targetData
 * @returns {Array}
 */
const radixSort = (targetData) => {
  let buckets = [];
  let maxDigit = 1;

  // 10進数の整数を扱う前提でバケットを用意する
  for (let i = 0; i < 10; i++) {
    buckets[i] = [];
  }

  // 最大桁数を求める
  for (let i = 0; i < targetData.length; i++) {
    if (maxDigit < targetData[i].toString().length) {
      maxDigit = targetData[i].toString().length;
    }
  }

  // 桁数分実行する
  let r = 1;
  for (let d = 0; d < maxDigit; d++) {
    for (let i = 0; i < targetData.length; i++) {
      buckets[(targetData[i] / r) % 10 | 0].push(targetData[i]);
    }

    for (let i = 0, j = 0; j < buckets.length; j++) {
      if (buckets[j] === undefined) {
        continue;
      }

      // 桁単位で該当するバケットに代入
      for (let n = 0; n < buckets[j].length; n++) {
        targetData[i++] = buckets[j][n];
      }
    }

    for (let i = 0; i < buckets.length; i++) {
      buckets[i] = [];
    }

    r *= 10;
  }

  return targetData;
};

// 初期データ
const initialData = [84, 42, 47, 22, 31, 4, 1, 999];

// 昇順でソート
const ascResultData = radixSort(initialData);

// 期待値として [1, 4, 22, 31, 42, 47, 84, 999] が出力されるハズ
console.log(ascResultData);

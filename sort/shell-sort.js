/**
 * 昇順でソートする
 *
 * @param targetData
 * @returns {*}
 */
const shellSortByAsc = (targetData) => {
  // stepの間隔を半分にしていく
  for (let step = parseInt(targetData.length / 2, 10); step > 0; step = parseInt(step / 2, 10)) {
    // 挿入する値を1つずつ取り出す
    for (let i = step; i < targetData.length; i++) {
      // 一時保存用変数
      let tmp = targetData[i];
      // 取り出した位置から前に向かって比較する
      let j;
      for (j = i; j >= step; j = j - step) {
        if (targetData[j - step] > tmp) {
          // 挿入する値が小さい場合、その値をstepの値だけ後ろへずらす
          targetData[j] = targetData[j - step];
        } else {
          // 挿入する値が小さくなければ処理を抜ける
          break;
        }
      }
      // ずらす処理が終わったところに「挿入する値」を入れる
      targetData[j] = tmp;
    }
  }

  return targetData;
};

// 初期データ
const initialData = [10, 3, 1, 9, 7, 6, 8, 2, 4, 5];

// 昇順でソート
const ascResultData = shellSortByAsc(initialData);

// 期待値として [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] が出力されるハズ
console.log(ascResultData);

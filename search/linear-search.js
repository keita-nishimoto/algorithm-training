/**
 * リニアサーチ（線形探索）を行う（検索対象が存在する配列のindexを返す）
 *
 * @param targetData
 * @param searchNumber
 * @returns {number}
 */
const linearSearch = (targetData, searchNumber) => {
  // 普通に配列を順番にループしておく
  for (let i = 0; i < targetData.length; i++) {
    if (targetData[i] === searchNumber) {
      // 検索対象が存在する配列のindexを返す
      return i;
    }
  }

  throw new Error('NotFound');
};

// 検索対象の配列
const targetData = [1, 2, 3, 4];

// 3を持つ配列のindexを求める
const resultIndex = linearSearch(targetData, 3);

// 期待値として2が表示されるハズ
console.log(resultIndex);

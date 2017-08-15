/**
 * SleepSortを行う
 *
 * @param number
 * @returns {Promise}
 */
const sleepSort = async (number) => {
  return new Promise((resolve, reject) => {
    const seconds = Math.floor(number * 1000);
    if (Number.isNaN(seconds) === true) {
      reject(new Error(`Invalid Argument Is ${number}`));
    }

    // 渡された引数の秒数分だけ待機して処理を終了させる
    setTimeout(() => {
      // 処理されている順番が分かりやすいように標準出力する
      console.log(number);
      // 結果用の配列に格納する
      result.push(number);
      resolve(number);
    }, seconds);
  });
};

// ソート対象の配列
const numbers = [5, 2, 1, 4, 3];

// 結果格納用の配列
const result = [];

(async () => {
  try {
    await Promise.all(numbers.map((number) => {
      return sleepSort(number);
    }));

    console.log('Sorting is completed!');
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();


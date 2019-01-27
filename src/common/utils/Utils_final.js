export function getSumOfOddNumbers(input) {
  return input
    .filter(number => number % 2 !== 0)
    .reduce((acc, value) => acc + value, 0);
}
export async function savePost(postData) {
  await sleep(1000);
  return { data: { post: postData } };
}

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

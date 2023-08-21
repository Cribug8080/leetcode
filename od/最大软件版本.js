function compareVersion(version1, version2) {
  function splitVersion(str) {
    return str.split('.').map(v => Number(v));
  }
  const arr1 = splitVersion(version1);
  const arr2 = splitVersion(version2);

  let len = Math.max(arr1.length, arr2.length);
  for(let i = 0; i < len;i ++) {
    if (arr1[i] > arr2[i] || (arr1[i] && i >= arr2.length)) {
      return 1;
    } else if(arr1[i] < arr2[i] || (arr2[i] && i >= arr1.length)) {
      return -1;
    }
  }

  return 0;
}

// console.log(compareVersion('1.01', '1.001'))
// console.log(compareVersion('1.0', '1.0.0'))
// console.log(compareVersion('0.1', '1.1'))
// console.log(compareVersion('1.0.1', '1'))


function compareVersion2(version1, version2) {
  function splitVersion(str) {
    return str.split('.').map(v => Number(v));
  }
  const arr1 = splitVersion(version1);
  const arr2 = splitVersion(version2);

  let len = Math.max(arr1.length, arr2.length);
  for(let i = 0; i < len;i ++) {
    if (arr1[i] > arr2[i] || (arr1[i] && i >= arr2.length)) {
      return version1;
    } else if(arr1[i] < arr2[i] || (arr2[i] && i >= arr1.length)) {
      return version2;
    }
  }

  return version1;
}

console.log(compareVersion2())
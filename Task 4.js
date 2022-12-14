function nums(initialNum, endSum) {
  const counter = setInterval(() => {
    if(initialNum >= endSum) {
      clearInterval(counter);
    }
    console.log(initialNum++)
  }, 1000);
}
nums(5, 15);
const divideAndSort = (number) => {
  const regex = /[1-8]/g;
  const found = number.match(regex);
  found.sort((a, b)=>{
    return a-b
  })
  console.log(found.join(""));
}

divideAndSort("5463727198544")
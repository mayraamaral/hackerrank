function staircase(n) {
    for(let i = 1; i <=n; i++) {
      let line = " ";
      let hashtag = "#";
      console.log(`${line.repeat(n-i)}${hashtag.repeat(i)}`);
    }
    
}

staircase(6)
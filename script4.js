function showNum(a, b) {
  
    let i = setInterval(() => {
        console.log(a++);
        if (a > b) clearInterval(i);
      }, 1000)
    }
    
    showNum(5, 15);
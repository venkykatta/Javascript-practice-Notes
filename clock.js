let clock = ()=> {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let time = `${hrs}:${mins}:${secs}`

    console.log(time)
}

clock();

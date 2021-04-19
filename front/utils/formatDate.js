const formatDate = (date)=>{
    let [wd, m, d, y, time, tz, a, s, t]= date.split(" ")
    const [nowDate, nowTime] = (new Date()).toJSON().split(".").splice(0,1)[0].split("T")
    const [thenDate, thenTime] = (new Date(date)).toJSON().split(".").splice(0,1)[0].split("T")
    const nH = (nowTime.split(":"))[0]
    const tH = (thenTime.split(":"))[0]
    time = time.substring(0,5) 
    if(nowDate != thenDate) {
        const tM = thenDate.split("-")[1]
        return `${time} - ${d}/${tM}/${y}`
    }
    else if(nH != tH) return `${time} - Hoy`
    else return `Hace unos instantes`
}

export default formatDate
const getStringedDate = (targetDate) => {
    // targetDate객체 -> "2024-12-12" String으로.
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth()+1;
    let date = targetDate.getDate();
    if (month < 10) {
        month = `0${month}`;
    }
    if (date < 10) {
        date = `0${date}`;
    }
    console.log(`getSD: ${year}-${month}-${date}`);
    return `${year}-${month}-${date}`;
}

export default getStringedDate;

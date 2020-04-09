function dateHelper(string) {

    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    };
    
    const date = string.slice(0, 10).split("-");
    const dateShow = months[parseInt(date[1])] + "  " + date[2]
    return dateShow;
}

export default dateHelper;

const commafy = (num: any) => {
    var str = num.toString().split('.');
    if (str[0] == 0) {
        str[0] = str[0].substr(1)
    }

    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    return str.join('.');
};

export default commafy;
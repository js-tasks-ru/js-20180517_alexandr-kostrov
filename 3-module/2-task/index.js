let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let first = calendar['from'];
    let month = first.getMonth();
    
    return {
        next(){
            let year = first.getFullYear();
            let newMonth = first.getMonth();
            let date = first.getDate();
            ++date;
            let day = first.getDay();
            if(month===newMonth) {
                first = new Date(year, newMonth, date);
                return {
                    done: false,
                    value: day === 0 || day === 6 ? `["${day}"]` : `"${day}"`,
                }
            } else {
                return {
                    done: true,
                }
            }
        } 
    }
};



const isoToDate = iso => {
    let 
        newFormat = '';
    
    if(iso) {
        let 
            inter = iso.split("T"),
            newStr = inter[0].split("-").join("/") + " " + inter[1].split(".")[0] + " GMT",
            newDate = new Date(newStr);
            newFormat = (1 + newDate.getUTCMonth()) + "/" + newDate.getUTCDate() + "/" + newDate.getFullYear();
    }
    
    return newFormat;
};

export default isoToDate;
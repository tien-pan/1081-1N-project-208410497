var birth = '1993-06-01';
birth = Date.parse(birth.replace('/-/g', "/"));
if (birth) {
    var minute = 1000 * 60;
    var hour = 1000 * 60 * 60;
    var day = 1000 * 60 * 60 * 24;
    var year = 1000 * 60 * 60 * 24 * 365;
    var now = new Date();
    var birthday = new Date(birth);
    var minage = parseInt((now - birthday) / minute)
    var hourage = parseInt((now - birthday) / hour)
    var dayage = parseInt((now - birthday) / day)
    var yearage = parseInt((now - birthday) / year);
    document.getElementById("minage").innerHTML = minage;
    document.getElementById("hourage").innerHTML = hourage;
    document.getElementById("dayage").innerHTML = dayage;
    document.getElementById("yearage").innerHTML = yearage;
}

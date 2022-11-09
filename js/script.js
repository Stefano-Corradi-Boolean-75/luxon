
// prima di tutto inizializzare l'oggetto DateTame
const DateTime = luxon.DateTime;

// serve se si fanno i calcoli fra date
const Interval = luxon.Interval;

console.log(DateTime);

const now = DateTime.now();

// info data attuale
console.log(now);
console.log(now.year);
console.log(now.month);
console.log(now.day);
console.log(now.second);


// formattazione data
console.log(now.setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS));
console.log(now.setLocale('it').toLocaleString(DateTime.DATE_HUGE));

// intervallo ffra date
const born = DateTime.local(1964, 11, 6);
const i = Interval.fromDateTimes(born, now);
console.log(i.length('days'))
console.log(i.length('years'))
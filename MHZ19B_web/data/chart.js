var chart;
var ms = 0;

Highcharts.setOptions({
	global : {
		timezone : "Europe/Berlin"
	},
	lang : {
		months : [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli",
				"August", "September", "Oktober", "November", "Dezember" ],
		weekdays : [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag",
				"Freitag", "Samstag" ]
	}
});

function parseFrame(data) {
	f = parseBayEOSFrame(data);
	if (typeof f.data === undefined)
		return;
	x = f.ts;
	var i=0;
	for ( var ch in f.data) {
		shift = chart.series[i].data.length > 200;
		chart.series[i].addPoint([ x, f.data[ch] ], !0, shift, !1)
		i++;
	}

}

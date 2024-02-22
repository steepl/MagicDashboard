/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8090,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "nl",
	locale: "nl-NL",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://webcal.guru/nl-NL/kalender_downloaden?calendar_instance_id=76"
					},
					{
						symbol: "",
						url: "webcal://webcal.guru/nl-NL/kalender_downloaden?calendar_instance_id=204"
					}
				],
				maximumEntries: 5,
				fade: false
			}
		},
		// {
		// 	module: "weather",
		// 	position: "top_right",
		// 	config: {
		// 		weatherProvider: "openweathermap",
		// 		type: "current",
		// 		location: "New York",
		// 		locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
		// 		apiKey: "YOUR_OPENWEATHER_API_KEY"
		// 	}
		// },
		// {
		{
			module: "newsfeed",
			position: "bottom_left",
			header: "📢💻 Het laatste tech nieuws",
			config: {
				feeds: [
					{
						title: "Tweakers",
						url: "http://feeds.feedburner.com/tweakers/nieuws",
						useCorsProxy: false
					},
					{
						title: "AG Connect",
						url: "https://www.agconnect.nl/rssfeeds/nieuws.xml",
						useCorsProxy: false
					},
					{
						title: "NU - Techniek",
						url: "https://www.nu.nl/rss/tech",
						useCorsProxy: false
					},
					{
						title: "Computable",
						url: "https://www.computable.nl/rss",
						useCorsProxy: false
					},
					{
						title: "Security.nl",
						url: "https://www.security.nl/rss/headlines.xml",
						useCorsProxy: false
					},
					{
						title: "NOS Tech",
						url: "https://feeds.nos.nl/nosnieuwstech",
						useCorsProxy: false
					}
				],
				updateInterval: 25000,
				showSourceTitle: true,
				showDescription: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-News-QR',
			position: 'bottom_right',
			config: {
				// Size of the Code
				imageSize: 150
			}
		},
		{
			module: "MMM-DailyAlarm",
			header: "Blokken",
			position: "top_right",
			config: {
				alarms: [
					{
						humanize: true,
						showAt: "09:00",
						time: "09:30",
						hideAt: "10:45",
						beforeText: "Blok 1",
					},
					{
						humanize: true,
						showAt: "09:00",
						time: "10:45",
						hideAt: "11:00",
						beforeText: "Kleine Pauze",
					},
					{
						humanize: true,
						showAt: "10:45",
						time: "11:00",
						hideAt: "12:30",
						beforeText: "Blok 2",
					},
					{
						humanize: true,
						showAt: "11:00",
						time: "12:30",
						hideAt: "13:00",
						beforeText: "Grote Pauze",
					},
					{
						humanize: true,
						showAt: "12:30",
						time: "13:00",
						hideAt: "14:30",
						beforeText: "Blok 3",
					},
					{
						humanize: true,
						showAt: "13:00",
						time: "14:30",
						hideAt: "14:45",
						beforeText: "Kleine Pauze",
					},
					{
						humanize: true,
						showAt: "14:30",
						time: "14:45",
						hideAt: "16:00",
						beforeText: "Blok 4",
					},
				]
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

const COUNTRIES = [
    {
        "Country": "Namibia",
        "Slug": "namibia",
        "ISO2": "NA"
    },
    {
        "Country": "Cayman Islands",
        "Slug": "cayman-islands",
        "ISO2": "KY"
    },
    {
        "Country": "Kiribati",
        "Slug": "kiribati",
        "ISO2": "KI"
    },
    {
        "Country": "Nicaragua",
        "Slug": "nicaragua",
        "ISO2": "NI"
    },
    {
        "Country": "Saint Pierre and Miquelon",
        "Slug": "saint-pierre-and-miquelon",
        "ISO2": "PM"
    },
    {
        "Country": "Bulgaria",
        "Slug": "bulgaria",
        "ISO2": "BG"
    },
    {
        "Country": "Czech Republic",
        "Slug": "czech-republic",
        "ISO2": "CZ"
    },
    {
        "Country": "Martinique",
        "Slug": "martinique",
        "ISO2": "MQ"
    },
    {
        "Country": "Mauritania",
        "Slug": "mauritania",
        "ISO2": "MR"
    },
    {
        "Country": "New Caledonia",
        "Slug": "new-caledonia",
        "ISO2": "NC"
    },
    {
        "Country": "Viet Nam",
        "Slug": "vietnam",
        "ISO2": "VN"
    },
    {
        "Country": "Senegal",
        "Slug": "senegal",
        "ISO2": "SN"
    },
    {
        "Country": "South Sudan",
        "Slug": "south-sudan",
        "ISO2": "SS"
    },
    {
        "Country": "Republic of Kosovo",
        "Slug": "kosovo",
        "ISO2": "XK"
    },
    {
        "Country": "Canada",
        "Slug": "canada",
        "ISO2": "CA"
    },
    {
        "Country": "Niger",
        "Slug": "niger",
        "ISO2": "NE"
    },
    {
        "Country": "ALA Aland Islands",
        "Slug": "ala-aland-islands",
        "ISO2": "AX"
    },
    {
        "Country": "Egypt",
        "Slug": "egypt",
        "ISO2": "EG"
    },
    {
        "Country": "Ethiopia",
        "Slug": "ethiopia",
        "ISO2": "ET"
    },
    {
        "Country": "Honduras",
        "Slug": "honduras",
        "ISO2": "HN"
    },
    {
        "Country": "Pitcairn",
        "Slug": "pitcairn",
        "ISO2": "PN"
    },
    {
        "Country": "Equatorial Guinea",
        "Slug": "equatorial-guinea",
        "ISO2": "GQ"
    },
    {
        "Country": "French Southern Territories",
        "Slug": "french-southern-territories",
        "ISO2": "TF"
    },
    {
        "Country": "Guinea",
        "Slug": "guinea",
        "ISO2": "GN"
    },
    {
        "Country": "Uzbekistan",
        "Slug": "uzbekistan",
        "ISO2": "UZ"
    },
    {
        "Country": "Austria",
        "Slug": "austria",
        "ISO2": "AT"
    },
    {
        "Country": "Italy",
        "Slug": "italy",
        "ISO2": "IT"
    },
    {
        "Country": "Christmas Island",
        "Slug": "christmas-island",
        "ISO2": "CX"
    },
    {
        "Country": "Guyana",
        "Slug": "guyana",
        "ISO2": "GY"
    },
    {
        "Country": "Guernsey",
        "Slug": "guernsey",
        "ISO2": "GG"
    },
    {
        "Country": "Sudan",
        "Slug": "sudan",
        "ISO2": "SD"
    },
    {
        "Country": "Ghana",
        "Slug": "ghana",
        "ISO2": "GH"
    },
    {
        "Country": "Mozambique",
        "Slug": "mozambique",
        "ISO2": "MZ"
    },
    {
        "Country": "Somalia",
        "Slug": "somalia",
        "ISO2": "SO"
    },
    {
        "Country": "Israel",
        "Slug": "israel",
        "ISO2": "IL"
    },
    {
        "Country": "Mali",
        "Slug": "mali",
        "ISO2": "ML"
    },
    {
        "Country": "Mayotte",
        "Slug": "mayotte",
        "ISO2": "YT"
    },
    {
        "Country": "Albania",
        "Slug": "albania",
        "ISO2": "AL"
    },
    {
        "Country": "Angola",
        "Slug": "angola",
        "ISO2": "AO"
    },
    {
        "Country": "Cocos (Keeling) Islands",
        "Slug": "cocos-keeling-islands",
        "ISO2": "CC"
    },
    {
        "Country": "Georgia",
        "Slug": "georgia",
        "ISO2": "GE"
    },
    {
        "Country": "Kazakhstan",
        "Slug": "kazakhstan",
        "ISO2": "KZ"
    },
    {
        "Country": "Korea (North)",
        "Slug": "korea-north",
        "ISO2": "KP"
    },
    {
        "Country": "Mongolia",
        "Slug": "mongolia",
        "ISO2": "MN"
    },
    {
        "Country": "Thailand",
        "Slug": "thailand",
        "ISO2": "TH"
    },
    {
        "Country": "Belgium",
        "Slug": "belgium",
        "ISO2": "BE"
    },
    {
        "Country": "Pakistan",
        "Slug": "pakistan",
        "ISO2": "PK"
    },
    {
        "Country": "Samoa",
        "Slug": "samoa",
        "ISO2": "WS"
    },
    {
        "Country": "Guatemala",
        "Slug": "guatemala",
        "ISO2": "GT"
    },
    {
        "Country": "Central African Republic",
        "Slug": "central-african-republic",
        "ISO2": "CF"
    },
    {
        "Country": "Malaysia",
        "Slug": "malaysia",
        "ISO2": "MY"
    },
    {
        "Country": "Zimbabwe",
        "Slug": "zimbabwe",
        "ISO2": "ZW"
    },
    {
        "Country": "Belize",
        "Slug": "belize",
        "ISO2": "BZ"
    },
    {
        "Country": "France",
        "Slug": "france",
        "ISO2": "FR"
    },
    {
        "Country": "Germany",
        "Slug": "germany",
        "ISO2": "DE"
    },
    {
        "Country": "Uruguay",
        "Slug": "uruguay",
        "ISO2": "UY"
    },
    {
        "Country": "British Virgin Islands",
        "Slug": "british-virgin-islands",
        "ISO2": "VG"
    },
    {
        "Country": "Gambia",
        "Slug": "gambia",
        "ISO2": "GM"
    },
    {
        "Country": "Grenada",
        "Slug": "grenada",
        "ISO2": "GD"
    },
    {
        "Country": "Iran, Islamic Republic of",
        "Slug": "iran",
        "ISO2": "IR"
    },
    {
        "Country": "Portugal",
        "Slug": "portugal",
        "ISO2": "PT"
    },
    {
        "Country": "Togo",
        "Slug": "togo",
        "ISO2": "TG"
    },
    {
        "Country": "French Guiana",
        "Slug": "french-guiana",
        "ISO2": "GF"
    },
    {
        "Country": "French Polynesia",
        "Slug": "french-polynesia",
        "ISO2": "PF"
    },
    {
        "Country": "Saudi Arabia",
        "Slug": "saudi-arabia",
        "ISO2": "SA"
    },
    {
        "Country": "Argentina",
        "Slug": "argentina",
        "ISO2": "AR"
    },
    {
        "Country": "Aruba",
        "Slug": "aruba",
        "ISO2": "AW"
    },
    {
        "Country": "Malawi",
        "Slug": "malawi",
        "ISO2": "MW"
    },
    {
        "Country": "American Samoa",
        "Slug": "american-samoa",
        "ISO2": "AS"
    },
    {
        "Country": "Bangladesh",
        "Slug": "bangladesh",
        "ISO2": "BD"
    },
    {
        "Country": "Macao, SAR China",
        "Slug": "macao-sar-china",
        "ISO2": "MO"
    },
    {
        "Country": "Puerto Rico",
        "Slug": "puerto-rico",
        "ISO2": "PR"
    },
    {
        "Country": "Tajikistan",
        "Slug": "tajikistan",
        "ISO2": "TJ"
    },
    {
        "Country": "Barbados",
        "Slug": "barbados",
        "ISO2": "BB"
    },
    {
        "Country": "Antigua and Barbuda",
        "Slug": "antigua-and-barbuda",
        "ISO2": "AG"
    },
    {
        "Country": "Burundi",
        "Slug": "burundi",
        "ISO2": "BI"
    },
    {
        "Country": "Lao PDR",
        "Slug": "lao-pdr",
        "ISO2": "LA"
    },
    {
        "Country": "Taiwan, Republic of China",
        "Slug": "taiwan",
        "ISO2": "TW"
    },
    {
        "Country": "Vanuatu",
        "Slug": "vanuatu",
        "ISO2": "VU"
    },
    {
        "Country": "Nauru",
        "Slug": "nauru",
        "ISO2": "NR"
    },
    {
        "Country": "Tunisia",
        "Slug": "tunisia",
        "ISO2": "TN"
    },
    {
        "Country": "Bosnia and Herzegovina",
        "Slug": "bosnia-and-herzegovina",
        "ISO2": "BA"
    },
    {
        "Country": "Chile",
        "Slug": "chile",
        "ISO2": "CL"
    },
    {
        "Country": "Costa Rica",
        "Slug": "costa-rica",
        "ISO2": "CR"
    },
    {
        "Country": "Latvia",
        "Slug": "latvia",
        "ISO2": "LV"
    },
    {
        "Country": "Lithuania",
        "Slug": "lithuania",
        "ISO2": "LT"
    },
    {
        "Country": "Oman",
        "Slug": "oman",
        "ISO2": "OM"
    },
    {
        "Country": "Turkmenistan",
        "Slug": "turkmenistan",
        "ISO2": "TM"
    },
    {
        "Country": "Bolivia",
        "Slug": "bolivia",
        "ISO2": "BO"
    },
    {
        "Country": "Kyrgyzstan",
        "Slug": "kyrgyzstan",
        "ISO2": "KG"
    },
    {
        "Country": "Slovakia",
        "Slug": "slovakia",
        "ISO2": "SK"
    },
    {
        "Country": "Tuvalu",
        "Slug": "tuvalu",
        "ISO2": "TV"
    },
    {
        "Country": "Colombia",
        "Slug": "colombia",
        "ISO2": "CO"
    },
    {
        "Country": "Saint-Barthélemy",
        "Slug": "saint-barthélemy",
        "ISO2": "BL"
    },
    {
        "Country": "Spain",
        "Slug": "spain",
        "ISO2": "ES"
    },
    {
        "Country": "Belarus",
        "Slug": "belarus",
        "ISO2": "BY"
    },
    {
        "Country": "Liberia",
        "Slug": "liberia",
        "ISO2": "LR"
    },
    {
        "Country": "Mauritius",
        "Slug": "mauritius",
        "ISO2": "MU"
    },
    {
        "Country": "Niue",
        "Slug": "niue",
        "ISO2": "NU"
    },
    {
        "Country": "Afghanistan",
        "Slug": "afghanistan",
        "ISO2": "AF"
    },
    {
        "Country": "Botswana",
        "Slug": "botswana",
        "ISO2": "BW"
    },
    {
        "Country": "Libya",
        "Slug": "libya",
        "ISO2": "LY"
    },
    {
        "Country": "Syrian Arab Republic (Syria)",
        "Slug": "syria",
        "ISO2": "SY"
    },
    {
        "Country": "Hungary",
        "Slug": "hungary",
        "ISO2": "HU"
    },
    {
        "Country": "Jamaica",
        "Slug": "jamaica",
        "ISO2": "JM"
    },
    {
        "Country": "Moldova",
        "Slug": "moldova",
        "ISO2": "MD"
    },
    {
        "Country": "Poland",
        "Slug": "poland",
        "ISO2": "PL"
    },
    {
        "Country": "Benin",
        "Slug": "benin",
        "ISO2": "BJ"
    },
    {
        "Country": "Gabon",
        "Slug": "gabon",
        "ISO2": "GA"
    },
    {
        "Country": "Macedonia, Republic of",
        "Slug": "macedonia",
        "ISO2": "MK"
    },
    {
        "Country": "New Zealand",
        "Slug": "new-zealand",
        "ISO2": "NZ"
    },
    {
        "Country": "Montserrat",
        "Slug": "montserrat",
        "ISO2": "MS"
    },
    {
        "Country": "Saint Kitts and Nevis",
        "Slug": "saint-kitts-and-nevis",
        "ISO2": "KN"
    },
    {
        "Country": "Sri Lanka",
        "Slug": "sri-lanka",
        "ISO2": "LK"
    },
    {
        "Country": "Wallis and Futuna Islands",
        "Slug": "wallis-and-futuna-islands",
        "ISO2": "WF"
    },
    {
        "Country": "Cyprus",
        "Slug": "cyprus",
        "ISO2": "CY"
    },
    {
        "Country": "Luxembourg",
        "Slug": "luxembourg",
        "ISO2": "LU"
    },
    {
        "Country": "Panama",
        "Slug": "panama",
        "ISO2": "PA"
    },
    {
        "Country": "Zambia",
        "Slug": "zambia",
        "ISO2": "ZM"
    },
    {
        "Country": "British Indian Ocean Territory",
        "Slug": "british-indian-ocean-territory",
        "ISO2": "IO"
    },
    {
        "Country": "Denmark",
        "Slug": "denmark",
        "ISO2": "DK"
    },
    {
        "Country": "Holy See (Vatican City State)",
        "Slug": "holy-see-vatican-city-state",
        "ISO2": "VA"
    },
    {
        "Country": "Nigeria",
        "Slug": "nigeria",
        "ISO2": "NG"
    },
    {
        "Country": "India",
        "Slug": "india",
        "ISO2": "IN"
    },
    {
        "Country": "Norfolk Island",
        "Slug": "norfolk-island",
        "ISO2": "NF"
    },
    {
        "Country": "San Marino",
        "Slug": "san-marino",
        "ISO2": "SM"
    },
    {
        "Country": "El Salvador",
        "Slug": "el-salvador",
        "ISO2": "SV"
    },
    {
        "Country": "Eritrea",
        "Slug": "eritrea",
        "ISO2": "ER"
    },
    {
        "Country": "Korea (South)",
        "Slug": "korea-south",
        "ISO2": "KR"
    },
    {
        "Country": "Mexico",
        "Slug": "mexico",
        "ISO2": "MX"
    },
    {
        "Country": "South Africa",
        "Slug": "south-africa",
        "ISO2": "ZA"
    },
    {
        "Country": "Haiti",
        "Slug": "haiti",
        "ISO2": "HT"
    },
    {
        "Country": "Slovenia",
        "Slug": "slovenia",
        "ISO2": "SI"
    },
    {
        "Country": "Saint Helena",
        "Slug": "saint-helena",
        "ISO2": "SH"
    },
    {
        "Country": "Chad",
        "Slug": "chad",
        "ISO2": "TD"
    },
    {
        "Country": "Isle of Man",
        "Slug": "isle-of-man",
        "ISO2": "IM"
    },
    {
        "Country": "Netherlands",
        "Slug": "netherlands",
        "ISO2": "NL"
    },
    {
        "Country": "Northern Mariana Islands",
        "Slug": "northern-mariana-islands",
        "ISO2": "MP"
    },
    {
        "Country": "Timor-Leste",
        "Slug": "timor-leste",
        "ISO2": "TL"
    },
    {
        "Country": "Yemen",
        "Slug": "yemen",
        "ISO2": "YE"
    },
    {
        "Country": "Bermuda",
        "Slug": "bermuda",
        "ISO2": "BM"
    },
    {
        "Country": "Cook Islands",
        "Slug": "cook-islands",
        "ISO2": "CK"
    },
    {
        "Country": "Dominica",
        "Slug": "dominica",
        "ISO2": "DM"
    },
    {
        "Country": "Maldives",
        "Slug": "maldives",
        "ISO2": "MV"
    },
    {
        "Country": "Malta",
        "Slug": "malta",
        "ISO2": "MT"
    },
    {
        "Country": "Sierra Leone",
        "Slug": "sierra-leone",
        "ISO2": "SL"
    },
    {
        "Country": "Cape Verde",
        "Slug": "cape-verde",
        "ISO2": "CV"
    },
    {
        "Country": "Comoros",
        "Slug": "comoros",
        "ISO2": "KM"
    },
    {
        "Country": "Tokelau",
        "Slug": "tokelau",
        "ISO2": "TK"
    },
    {
        "Country": "Suriname",
        "Slug": "suriname",
        "ISO2": "SR"
    },
    {
        "Country": "Tanzania, United Republic of",
        "Slug": "tanzania",
        "ISO2": "TZ"
    },
    {
        "Country": "Dominican Republic",
        "Slug": "dominican-republic",
        "ISO2": "DO"
    },
    {
        "Country": "Finland",
        "Slug": "finland",
        "ISO2": "FI"
    },
    {
        "Country": "Liechtenstein",
        "Slug": "liechtenstein",
        "ISO2": "LI"
    },
    {
        "Country": "Saint Vincent and Grenadines",
        "Slug": "saint-vincent-and-the-grenadines",
        "ISO2": "VC"
    },
    {
        "Country": "Virgin Islands, US",
        "Slug": "virgin-islands",
        "ISO2": "VI"
    },
    {
        "Country": "Uganda",
        "Slug": "uganda",
        "ISO2": "UG"
    },
    {
        "Country": "Azerbaijan",
        "Slug": "azerbaijan",
        "ISO2": "AZ"
    },
    {
        "Country": "Cameroon",
        "Slug": "cameroon",
        "ISO2": "CM"
    },
    {
        "Country": "Heard and Mcdonald Islands",
        "Slug": "heard-and-mcdonald-islands",
        "ISO2": "HM"
    },
    {
        "Country": "Lesotho",
        "Slug": "lesotho",
        "ISO2": "LS"
    },
    {
        "Country": "Madagascar",
        "Slug": "madagascar",
        "ISO2": "MG"
    },
    {
        "Country": "Netherlands Antilles",
        "Slug": "netherlands-antilles",
        "ISO2": "AN"
    },
    {
        "Country": "Andorra",
        "Slug": "andorra",
        "ISO2": "AD"
    },
    {
        "Country": "Cambodia",
        "Slug": "cambodia",
        "ISO2": "KH"
    },
    {
        "Country": "Fiji",
        "Slug": "fiji",
        "ISO2": "FJ"
    },
    {
        "Country": "Montenegro",
        "Slug": "montenegro",
        "ISO2": "ME"
    },
    {
        "Country": "United Kingdom",
        "Slug": "united-kingdom",
        "ISO2": "GB"
    },
    {
        "Country": "Marshall Islands",
        "Slug": "marshall-islands",
        "ISO2": "MH"
    },
    {
        "Country": "Turks and Caicos Islands",
        "Slug": "turks-and-caicos-islands",
        "ISO2": "TC"
    },
    {
        "Country": "Iceland",
        "Slug": "iceland",
        "ISO2": "IS"
    },
    {
        "Country": "US Minor Outlying Islands",
        "Slug": "us-minor-outlying-islands",
        "ISO2": "UM"
    },
    {
        "Country": "Bouvet Island",
        "Slug": "bouvet-island",
        "ISO2": "BV"
    },
    {
        "Country": "Burkina Faso",
        "Slug": "burkina-faso",
        "ISO2": "BF"
    },
    {
        "Country": "Congo (Kinshasa)",
        "Slug": "congo-kinshasa",
        "ISO2": "CD"
    },
    {
        "Country": "Djibouti",
        "Slug": "djibouti",
        "ISO2": "DJ"
    },
    {
        "Country": "South Georgia and the South Sandwich Islands",
        "Slug": "south-georgia-and-the-south-sandwich-islands",
        "ISO2": "GS"
    },
    {
        "Country": "Trinidad and Tobago",
        "Slug": "trinidad-and-tobago",
        "ISO2": "TT"
    },
    {
        "Country": "Bahamas",
        "Slug": "bahamas",
        "ISO2": "BS"
    },
    {
        "Country": "Bhutan",
        "Slug": "bhutan",
        "ISO2": "BT"
    },
    {
        "Country": "Gibraltar",
        "Slug": "gibraltar",
        "ISO2": "GI"
    },
    {
        "Country": "Hong Kong, SAR China",
        "Slug": "hong-kong-sar-china",
        "ISO2": "HK"
    },
    {
        "Country": "Ireland",
        "Slug": "ireland",
        "ISO2": "IE"
    },
    {
        "Country": "Paraguay",
        "Slug": "paraguay",
        "ISO2": "PY"
    },
    {
        "Country": "United States of America",
        "Slug": "united-states",
        "ISO2": "US"
    },
    {
        "Country": "Guinea-Bissau",
        "Slug": "guinea-bissau",
        "ISO2": "GW"
    },
    {
        "Country": "Iraq",
        "Slug": "iraq",
        "ISO2": "IQ"
    },
    {
        "Country": "Qatar",
        "Slug": "qatar",
        "ISO2": "QA"
    },
    {
        "Country": "Lebanon",
        "Slug": "lebanon",
        "ISO2": "LB"
    },
    {
        "Country": "Nepal",
        "Slug": "nepal",
        "ISO2": "NP"
    },
    {
        "Country": "Solomon Islands",
        "Slug": "solomon-islands",
        "ISO2": "SB"
    },
    {
        "Country": "Estonia",
        "Slug": "estonia",
        "ISO2": "EE"
    },
    {
        "Country": "Singapore",
        "Slug": "singapore",
        "ISO2": "SG"
    },
    {
        "Country": "Sweden",
        "Slug": "sweden",
        "ISO2": "SE"
    },
    {
        "Country": "Turkey",
        "Slug": "turkey",
        "ISO2": "TR"
    },
    {
        "Country": "Cuba",
        "Slug": "cuba",
        "ISO2": "CU"
    },
    {
        "Country": "Morocco",
        "Slug": "morocco",
        "ISO2": "MA"
    },
    {
        "Country": "Papua New Guinea",
        "Slug": "papua-new-guinea",
        "ISO2": "PG"
    },
    {
        "Country": "Anguilla",
        "Slug": "anguilla",
        "ISO2": "AI"
    },
    {
        "Country": "Côte d'Ivoire",
        "Slug": "cote-divoire",
        "ISO2": "CI"
    },
    {
        "Country": "Greenland",
        "Slug": "greenland",
        "ISO2": "GL"
    },
    {
        "Country": "Indonesia",
        "Slug": "indonesia",
        "ISO2": "ID"
    },
    {
        "Country": "Jersey",
        "Slug": "jersey",
        "ISO2": "JE"
    },
    {
        "Country": "Palau",
        "Slug": "palau",
        "ISO2": "PW"
    },
    {
        "Country": "Falkland Islands (Malvinas)",
        "Slug": "falkland-islands-malvinas",
        "ISO2": "FK"
    },
    {
        "Country": "Japan",
        "Slug": "japan",
        "ISO2": "JP"
    },
    {
        "Country": "Kuwait",
        "Slug": "kuwait",
        "ISO2": "KW"
    },
    {
        "Country": "Réunion",
        "Slug": "réunion",
        "ISO2": "RE"
    },
    {
        "Country": "Saint Lucia",
        "Slug": "saint-lucia",
        "ISO2": "LC"
    },
    {
        "Country": "Antarctica",
        "Slug": "antarctica",
        "ISO2": "AQ"
    },
    {
        "Country": "Bahrain",
        "Slug": "bahrain",
        "ISO2": "BH"
    },
    {
        "Country": "Guadeloupe",
        "Slug": "guadeloupe",
        "ISO2": "GP"
    },
    {
        "Country": "Monaco",
        "Slug": "monaco",
        "ISO2": "MC"
    },
    {
        "Country": "Armenia",
        "Slug": "armenia",
        "ISO2": "AM"
    },
    {
        "Country": "China",
        "Slug": "china",
        "ISO2": "CN"
    },
    {
        "Country": "Russian Federation",
        "Slug": "russia",
        "ISO2": "RU"
    },
    {
        "Country": "Saint-Martin (French part)",
        "Slug": "saint-martin-french-part",
        "ISO2": "MF"
    },
    {
        "Country": "Tonga",
        "Slug": "tonga",
        "ISO2": "TO"
    },
    {
        "Country": "Switzerland",
        "Slug": "switzerland",
        "ISO2": "CH"
    },
    {
        "Country": "Brazil",
        "Slug": "brazil",
        "ISO2": "BR"
    },
    {
        "Country": "Micronesia, Federated States of",
        "Slug": "micronesia",
        "ISO2": "FM"
    },
    {
        "Country": "Myanmar",
        "Slug": "myanmar",
        "ISO2": "MM"
    },
    {
        "Country": "Palestinian Territory",
        "Slug": "palestine",
        "ISO2": "PS"
    },
    {
        "Country": "Sao Tome and Principe",
        "Slug": "sao-tome-and-principe",
        "ISO2": "ST"
    },
    {
        "Country": "Ukraine",
        "Slug": "ukraine",
        "ISO2": "UA"
    },
    {
        "Country": "Croatia",
        "Slug": "croatia",
        "ISO2": "HR"
    },
    {
        "Country": "Faroe Islands",
        "Slug": "faroe-islands",
        "ISO2": "FO"
    },
    {
        "Country": "Greece",
        "Slug": "greece",
        "ISO2": "GR"
    },
    {
        "Country": "Kenya",
        "Slug": "kenya",
        "ISO2": "KE"
    },
    {
        "Country": "Philippines",
        "Slug": "philippines",
        "ISO2": "PH"
    },
    {
        "Country": "Seychelles",
        "Slug": "seychelles",
        "ISO2": "SC"
    },
    {
        "Country": "Australia",
        "Slug": "australia",
        "ISO2": "AU"
    },
    {
        "Country": "Congo (Brazzaville)",
        "Slug": "congo-brazzaville",
        "ISO2": "CG"
    },
    {
        "Country": "Jordan",
        "Slug": "jordan",
        "ISO2": "JO"
    },
    {
        "Country": "Norway",
        "Slug": "norway",
        "ISO2": "NO"
    },
    {
        "Country": "Romania",
        "Slug": "romania",
        "ISO2": "RO"
    },
    {
        "Country": "Ecuador",
        "Slug": "ecuador",
        "ISO2": "EC"
    },
    {
        "Country": "Guam",
        "Slug": "guam",
        "ISO2": "GU"
    },
    {
        "Country": "Rwanda",
        "Slug": "rwanda",
        "ISO2": "RW"
    },
    {
        "Country": "Swaziland",
        "Slug": "swaziland",
        "ISO2": "SZ"
    },
    {
        "Country": "Algeria",
        "Slug": "algeria",
        "ISO2": "DZ"
    },
    {
        "Country": "Peru",
        "Slug": "peru",
        "ISO2": "PE"
    },
    {
        "Country": "Venezuela (Bolivarian Republic)",
        "Slug": "venezuela",
        "ISO2": "VE"
    },
    {
        "Country": "Brunei Darussalam",
        "Slug": "brunei",
        "ISO2": "BN"
    },
    {
        "Country": "Serbia",
        "Slug": "serbia",
        "ISO2": "RS"
    },
    {
        "Country": "Svalbard and Jan Mayen Islands",
        "Slug": "svalbard-and-jan-mayen-islands",
        "ISO2": "SJ"
    },
    {
        "Country": "United Arab Emirates",
        "Slug": "united-arab-emirates",
        "ISO2": "AE"
    },
    {
        "Country": "Western Sahara",
        "Slug": "western-sahara",
        "ISO2": "EH"
    }
]

export default COUNTRIES

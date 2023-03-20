{"index": { "_index": county_name, "_id": offense_id }} // select count(DISTINCT incident_id), count(incident_id) from nibrs_incident is equal, incident_id is unique!
{
  "inc_time":
  {
      "inc_hour":    int,
      "inc_day":     int,
      "inc_month":   int,
      "inc_year":    int,  // makes things easier to have this when more years are added
  },
  "crime_desc":        string,  // mapping in NIBRS_CRIMINAL_ACT_TYPE.csv,
  "off_code":          string,  // mapping in NIBRS_OFFSENSE_TYPE.csv - homicide, stealing, purse snatching etc
  "gun_violence":      boolean, // will be determined by me during processing, if handgun is involved in incident it will count
  "sex_crime":         boolean, // ^^
  "hate_crime":        boolean, // ^^
  "loc_id":            string,  // standardized in NIBRS_LOCATION_TYPE - amusement park, industrial site, home, etc
}
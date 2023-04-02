# crime-data
Processes NIBRS crime data from local Postgres db, preparing it for OpenSearch on AWS 
## Quirks
- Has a "2021" mode because the schema changed - how lovely!
- If a city has a space in it, it gets replaced by a _ because Opensearch does NOT LIKE spaces :)
- All cities became lowercase
- Uploading data is arbitrarily limited by Opensearch to ~200 records at a time - there are 2.55 million records which took a while to upload...
- If a police agency belongs to two counties (i.e. DOUGLAS/ADAMS) then it duplicates (ON PURPOSE) so that each county will have a record of it. In this case, the same offense id
will show up under two indexes (i.e. counties).
## Usage
1. Follow NIBRS setup/load instructions (download from [here](https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/downloads))
2. Run the cells of the notebook in order (easily accomplished by Jupytr's "Run all")
3. Fill in the credentials within upload.sh
4. Run upload.sh and be prepared to wait a while depending on how much data you downloaded.

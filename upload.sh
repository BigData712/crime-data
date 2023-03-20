for file in data/*
do
  curl -XPOST -u '<redacted>:<redacted>' 'https://search-crimesearch2ad9-q7cnd4taraup-lon7amfupvzamt45h7gjtdk7c4.us-east-1.es.amazonaws.com/_bulk' --data-binary @"$file" -H 'Content-Type: application/json'
done

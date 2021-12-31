curl -s https://ip-ranges.amazonaws.com/ip-ranges.json |  jq ".prefixes[] | select(.region==\"us-east-1\") | .ip_prefix" > heroku_ips.txt

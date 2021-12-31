#!/bin/bash
curl -X GET localhost:4000/tea
echo
curl -d "@teaSample.json" -H "Content-Type: application/json" -X POST localhost:4000/tea
echo
# curl -X DELETE localhost:4000/tea
echo
curl -X GET localhost:4000/tea/Jasmine%20Tea
echo
curl -d '{ "comment": "this is a comment" }' -H "Content-Type: application/json" -X POST localhost:4000/tea/Jasmine%20Tea
echo
# curl -X DELETE localhost:4000/tea/Black%20Tea

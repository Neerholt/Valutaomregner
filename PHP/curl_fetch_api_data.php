<?php

$apiWorker = curl_init();//Start

curl_setopt_array(
    $apiWorker,
    array(
        CURLOPT_URL => 'https://api.exchangeratesapi.io/latest', //API Url
        CURLOPT_RETURNTRANSFER => true, //true to return the transfer as a string of the return value of curl_exec() instead of outputting it directly.
    )
);


$respones = curl_exec($apiWorker);
curl_close($apiWorker);


print_r($respones);//Print the josn data

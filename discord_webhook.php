<?php

$data = json_decode(file_get_contents('php://input'), true);

$response = $data['response'];

$webhook_url = 'https://discord.com/api/webhooks/1206690909282893834/2d1kLBCflHN1vFkyjyehWPVHA1gEuAbRNUTc5c4yshvCOph-cG_PnJV_rJdmToK2F8A0';

$data = array('content' => "Amaya responded: $response");

$curl = curl_init($webhook_url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

$result = curl_exec($curl);

curl_close($curl);

echo $result;
?>

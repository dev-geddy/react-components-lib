<?php

/* PHP version of API on Apache or similar server in case hosting does not provide NodeJS */

$fileName = $_REQUEST['css_file_name'];
$filePath = dirname(__FILE__) . '/../static/css/' . $fileName; // when placed to the root dir of project.

header('Content-Type: application/json');

if (file_exists($filePath)) {
    $cssSource = file_get_contents($filePath);
    $responseObject = Array(
        'data' => Array('css' => $cssSource),
        'message' => 'OK'
    );
    echo json_encode($responseObject);
} else {
    $responseObject = Array(
        'data' => Array(),
        'message' => 'CSS file not found'
    );
    echo json_encode($responseObject);
}

exit;
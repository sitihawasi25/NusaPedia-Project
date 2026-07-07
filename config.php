<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'nusapedia_db');
define('DB_USER', 'root');
define('DB_PASS', '');
if (session_status() === PHP_SESSION_NONE) session_start();
try {
    $pdo = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8mb4", DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    die(json_encode(['success'=>false,'message'=>'Koneksi gagal: '.$e->getMessage()]));
}
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false]); exit; }
$userId = $_SESSION['user_id'];
$today  = date('Y-m-d');
$stmt = $pdo->prepare("SELECT * FROM daily_quests WHERE user_id=? AND quest_date=?");
$stmt->execute([$userId,$today]);
$quest = $stmt->fetch();
if (!$quest) {
    $provinces = ['Aceh','Sumatera Utara','Sumatera Barat','Riau','Jambi','Sumatera Selatan','Bengkulu','Lampung','Jawa Barat','Jawa Tengah','Jawa Timur','Bali','Papua','Kalimantan Tengah','Sulawesi Selatan','Maluku','Nusa Tenggara Barat'];
    $province = $provinces[array_rand($provinces)];
    $pdo->prepare("INSERT INTO daily_quests (user_id,quest_date,quest_province) VALUES (?,?,?)")->execute([$userId,$today,$province]);
    echo json_encode(['success'=>true,'province'=>$province,'completed'=>false]);
} else {
    echo json_encode(['success'=>true,'province'=>$quest['quest_province'],'completed'=>(bool)$quest['completed']]);
}
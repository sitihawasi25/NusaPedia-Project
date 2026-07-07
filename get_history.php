<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false,'history'=>[]]); exit; }
$stmt = $pdo->prepare("SELECT score FROM quiz_scores WHERE user_id=? ORDER BY created_at DESC LIMIT 5");
$stmt->execute([$_SESSION['user_id']]);
$history = array_map(fn($r)=>intval($r['score']), array_reverse($stmt->fetchAll()));
echo json_encode(['success'=>true,'history'=>$history]);
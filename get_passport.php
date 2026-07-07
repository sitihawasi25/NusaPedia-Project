<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false,'provinces'=>[],'badges'=>[]]); exit; }
$userId = $_SESSION['user_id'];
$sp = $pdo->prepare("SELECT province_name FROM user_provinces WHERE user_id=? ORDER BY visited_at ASC");
$sp->execute([$userId]);
$sb = $pdo->prepare("SELECT badge_name FROM user_badges WHERE user_id=? ORDER BY earned_at ASC");
$sb->execute([$userId]);
echo json_encode(['success'=>true,'provinces'=>array_column($sp->fetchAll(),'province_name'),'badges'=>array_column($sb->fetchAll(),'badge_name')]);
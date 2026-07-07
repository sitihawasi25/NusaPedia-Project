<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false]); exit; }
$input = json_decode(file_get_contents('php://input'), true);
$score = intval($input['score'] ?? -1);
if ($score < 0) { echo json_encode(['success'=>false]); exit; }
$userId = $_SESSION['user_id'];
$pdo->prepare("INSERT INTO quiz_scores (user_id, score) VALUES (?,?)")->execute([$userId, $score]);

$newBadge = null;
$total = intval($pdo->prepare("SELECT COUNT(*) as c FROM quiz_scores WHERE user_id=?")->execute([$userId]) ? $pdo->query("SELECT COUNT(*) as c FROM quiz_scores WHERE user_id=$userId")->fetch()['c'] : 0);

$checks = [];
if ($score === 100) $checks[] = ['perfect_score','⭐ Skor Sempurna!'];
if ($total === 1)   $checks[] = ['first_quiz','🎯 Petualang Kuis Pertama'];
if ($total === 5)   $checks[] = ['quiz_5','🎮 Petarung Tangguh'];
if ($total === 10)  $checks[] = ['quiz_10','🏆 Master Kuis'];
foreach ($checks as [$key,$name]) {
    $ins = $pdo->prepare("INSERT IGNORE INTO user_badges (user_id,badge_key,badge_name) VALUES (?,?,?)");
    $ins->execute([$userId,$key,$name]);
    if ($ins->rowCount() > 0 && !$newBadge) $newBadge = $name;
}
echo json_encode(['success'=>true,'newBadge'=>$newBadge]);
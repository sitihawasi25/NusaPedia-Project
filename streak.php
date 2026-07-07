<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false,'streak'=>0]); exit; }
$userId = $_SESSION['user_id'];
$today  = date('Y-m-d');
$yesterday = date('Y-m-d', strtotime('-1 day'));
$stmt = $pdo->prepare("SELECT COALESCE(streak_count,0) as streak_count, last_active FROM users WHERE id=?");
$stmt->execute([$userId]);
$user = $stmt->fetch();
$streak     = intval($user['streak_count']);
$lastActive = $user['last_active'];
if ($lastActive === $today) { echo json_encode(['success'=>true,'streak'=>$streak,'isNew'=>false]); exit; }
$streak = ($lastActive === $yesterday) ? $streak + 1 : 1;
$pdo->prepare("UPDATE users SET streak_count=?, last_active=? WHERE id=?")->execute([$streak,$today,$userId]);
$newBadge = null;
foreach ([3=>['streak_3','🔥 Streak 3 Hari!'],7=>['streak_7','⚡ Pejuang Mingguan!'],30=>['streak_30','💎 Legenda Nusantara!']] as $n=>[$k,$name]) {
    if ($streak === $n) {
        $ins = $pdo->prepare("INSERT IGNORE INTO user_badges (user_id,badge_key,badge_name) VALUES (?,?,?)");
        $ins->execute([$userId,$k,$name]);
        if ($ins->rowCount() > 0) $newBadge = $name;
    }
}
echo json_encode(['success'=>true,'streak'=>$streak,'isNew'=>true,'newBadge'=>$newBadge]);
<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false]); exit; }
$input    = json_decode(file_get_contents('php://input'), true);
$province = trim($input['province'] ?? '');
$province = str_replace(['-', '_'], ' ', $province);
$province = ucwords(strtolower($province));
if (!$province) { echo json_encode(['success'=>false]); exit; }
$userId = $_SESSION['user_id'];
$ins = $pdo->prepare("INSERT IGNORE INTO user_provinces (user_id,province_name) VALUES (?,?)");
$ins->execute([$userId,$province]);
$count = intval($pdo->query("SELECT COUNT(*) as c FROM user_provinces WHERE user_id=$userId")->fetch()['c']);
$newBadge = null;
foreach ([1=>['prov_1','🗺️ Penjelajah Pemula'],5=>['prov_5','⚔️ Ksatria Nusantara'],10=>['prov_10','🏆 Penjelajah Sejati'],17=>['prov_17','👑 Master Budaya Indonesia']] as $n=>[$k,$name]) {
    if ($count === $n) {
        $b = $pdo->prepare("INSERT IGNORE INTO user_badges (user_id,badge_key,badge_name) VALUES (?,?,?)");
        $b->execute([$userId,$k,$name]);
        if ($b->rowCount() > 0) $newBadge = $name;
    }
}
$today = date('Y-m-d');
$q = $pdo->prepare("SELECT id FROM daily_quests WHERE user_id=? AND quest_date=? AND quest_province=? AND completed=0");
$q->execute([$userId,$today,$province]);
$questCompleted = false;
if ($q->fetch()) {
    $pdo->prepare("UPDATE daily_quests SET completed=1,completed_at=NOW() WHERE user_id=? AND quest_date=?")->execute([$userId,$today]);
    $questCompleted = true;
}
echo json_encode(['success'=>true,'total'=>$count,'newBadge'=>$newBadge,'questCompleted'=>$questCompleted]);
<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['loggedIn'=>false]); exit; }
$stmt = $pdo->prepare("SELECT username, email, avatar, join_date, role, COALESCE(streak_count,0) as streak_count FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();
if (!$user) { session_destroy(); echo json_encode(['loggedIn'=>false]); exit; }
echo json_encode(['loggedIn'=>true,'user'=>[
    'username' => $user['username'],
    'email'    => $user['email'],
    'avatar'   => $user['avatar'] ?? '',
    'joinDate' => $user['join_date'],
    'role'     => $user['role'],
    'streak'   => intval($user['streak_count']),
]]);
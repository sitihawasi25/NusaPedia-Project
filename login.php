<?php
require_once 'config.php';
$input    = json_decode(file_get_contents('php://input'), true);
$username = trim($input['username'] ?? '');
$password = trim($input['password'] ?? '');
if (!$username || !$password) { echo json_encode(['success'=>false,'message'=>'❌ Isi username dan password!']); exit; }
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();
if (!$user || !password_verify($password, $user['password'])) { echo json_encode(['success'=>false,'message'=>'❌ Username atau Password salah!']); exit; }
$_SESSION['user_id']  = $user['id'];
$_SESSION['username'] = $user['username'];
$_SESSION['role']     = $user['role'];
echo json_encode(['success'=>true,'message'=>'✅ Login berhasil!','user'=>[
    'username' => $user['username'],
    'email'    => $user['email'],
    'avatar'   => $user['avatar'] ?? '',
    'joinDate' => $user['join_date'],
    'role'     => $user['role'],
    'streak'   => intval($user['streak_count'] ?? 0),
]]);
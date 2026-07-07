<?php
require_once 'config.php';
$input    = json_decode(file_get_contents('php://input'), true);
$username = trim($input['username'] ?? '');
$email    = trim($input['email']    ?? '');
$password = trim($input['password'] ?? '');
if (!$username || !$email || !$password) { echo json_encode(['success'=>false,'message'=>'❌ Isi form secara lengkap!']); exit; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { echo json_encode(['success'=>false,'message'=>'❌ Format email tidak valid!']); exit; }
if (strlen($password) < 6) { echo json_encode(['success'=>false,'message'=>'❌ Password minimal 6 karakter!']); exit; }
$stmt = $pdo->prepare("SELECT id FROM users WHERE username = ?");
$stmt->execute([$username]);
if ($stmt->fetch()) { echo json_encode(['success'=>false,'message'=>'❌ Username sudah digunakan!']); exit; }
$pdo->prepare("INSERT INTO users (username, email, password, role, join_date) VALUES (?, ?, ?, 'user', ?)")
    ->execute([$username, $email, password_hash($password, PASSWORD_BCRYPT), date('Y-m-d')]);
echo json_encode(['success'=>true,'message'=>'✅ Registrasi berhasil! Silakan login.']);
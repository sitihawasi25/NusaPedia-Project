<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false,'message'=>'❌ Belum login!']); exit; }
$input   = json_decode(file_get_contents('php://input'), true);
$email   = trim($input['email']    ?? '');
$newPass = trim($input['password'] ?? '');
if (!$email && !$newPass) { echo json_encode(['success'=>false,'message'=>'❌ Isi minimal satu field!']); exit; }
if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) { echo json_encode(['success'=>false,'message'=>'❌ Format email tidak valid!']); exit; }
if ($newPass && strlen($newPass) < 6) { echo json_encode(['success'=>false,'message'=>'❌ Password minimal 6 karakter!']); exit; }
if ($email)   $pdo->prepare("UPDATE users SET email=? WHERE id=?")->execute([$email,$_SESSION['user_id']]);
if ($newPass) $pdo->prepare("UPDATE users SET password=? WHERE id=?")->execute([password_hash($newPass,PASSWORD_BCRYPT),$_SESSION['user_id']]);
echo json_encode(['success'=>true,'message'=>'✅ Profil berhasil diupdate!']);
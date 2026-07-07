<?php
require_once 'config.php';
if (!isset($_SESSION['user_id'])) { echo json_encode(['success'=>false,'message'=>'❌ Belum login!']); exit; }
if (!isset($_FILES['avatar']) || $_FILES['avatar']['error'] !== UPLOAD_ERR_OK) { echo json_encode(['success'=>false,'message'=>'❌ Tidak ada file!']); exit; }
$allowedTypes = ['image/jpeg','image/png','image/webp','image/gif'];
if (!in_array(mime_content_type($_FILES['avatar']['tmp_name']), $allowedTypes)) { echo json_encode(['success'=>false,'message'=>'❌ Format tidak didukung!']); exit; }
if ($_FILES['avatar']['size'] > 2*1024*1024) { echo json_encode(['success'=>false,'message'=>'❌ Maksimal 2MB!']); exit; }
$ext = pathinfo($_FILES['avatar']['name'], PATHINFO_EXTENSION);
$newFileName = 'avatar_'.$_SESSION['user_id'].'_'.time().'.'.$ext;
$dest = '../uploads/avatars/'.$newFileName;
if (!move_uploaded_file($_FILES['avatar']['tmp_name'], $dest)) { echo json_encode(['success'=>false,'message'=>'❌ Gagal simpan file!']); exit; }
$path = 'uploads/avatars/'.$newFileName;
$pdo->prepare("UPDATE users SET avatar = ? WHERE id = ?")->execute([$path, $_SESSION['user_id']]);
echo json_encode(['success'=>true,'avatar'=>$path]);
<?php
require_once 'config.php';
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') { echo json_encode(['success'=>false,'message'=>'❌ Akses ditolak!']); exit; }
$totalUser = intval($pdo->query("SELECT COUNT(*) as c FROM users WHERE role='user'")->fetch()['c']);
$totalKuis = intval($pdo->query("SELECT COUNT(*) as c FROM quiz_scores")->fetch()['c']);
$stmt = $pdo->query("SELECT u.username,u.email,u.join_date,COALESCE(u.streak_count,0) as streak,COUNT(q.id) as total_kuis,MAX(q.score) as skor_tertinggi FROM users u LEFT JOIN quiz_scores q ON u.id=q.user_id WHERE u.role='user' GROUP BY u.id ORDER BY u.created_at DESC");
echo json_encode(['success'=>true,'totalUser'=>$totalUser,'totalKuis'=>$totalKuis,'userList'=>$stmt->fetchAll()]);
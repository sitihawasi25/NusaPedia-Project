<?php
require_once 'config.php';
$stmt = $pdo->query("SELECT u.username, u.avatar, MAX(q.score) as best_score, COUNT(q.id) as total_games FROM users u JOIN quiz_scores q ON u.id=q.user_id WHERE u.role='user' GROUP BY u.id ORDER BY best_score DESC LIMIT 10");
echo json_encode(['success'=>true,'leaderboard'=>$stmt->fetchAll()]);
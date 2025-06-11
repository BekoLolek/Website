<?php
# VotingPlugin API
# Version 1.0
# Created by Craftnet
# Support: https://discord.craftnet.cz

# Fill in the details for your database here.
$db_host = '';
# Default port is 3306
$db_port = 3306;
$db_name = '';
$db_user = '';
$db_password = '';

# Fill in this value only if you use it in the VotingPlugin config.
$db_tablePrefix = '';

# Fill in the address where you will host your website.
$corsAllowedOrigin = 'http://localhost:3000';

# End of configuration

$conn = new mysqli($db_host, $db_user, $db_password, $db_name, $db_port);

if ($conn->connect_error) {
    die("Connection error: " . $conn->connect_error);
}

$table = $db_tablePrefix . 'VotingPlugin_Users';

$period = isset($_GET['period']) && $_GET['period'] === 'weekly' ? 'WeeklyTotal' : 'MonthTotal';

$sql = "SELECT PlayerName, $period AS votes 
        FROM $table 
        ORDER BY votes DESC 
        LIMIT 5";

$result = $conn->query($sql);

$players = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $players[] = [
            'name' => $row['PlayerName'],
            'votes' => (int)$row['votes']
        ];
    }
}

$conn->close();

header("Access-Control-Allow-Origin: " . $corsAllowedOrigin);
header('Content-Type: application/json');

echo json_encode($players);
?>

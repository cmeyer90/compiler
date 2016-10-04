<?php
//set up post data
$post_data = 'client_secret=' . $_POST['client_secret'] . '&lang=' . $_POST['lang'] . '&source=' . urlencode($_POST['source']);

//initiate CURL request
$ch = curl_init('http://api.hackerearth.com/code/compile/');                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                                                                                        

//echo result for AJAX call
$result = curl_exec($ch);
echo $result;
?>

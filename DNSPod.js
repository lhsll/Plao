/*
Appstore Speed up download (By langkhach)
[Host]
*.itunes.apple.com = script:Dnspod
[Script]
DNSPod = type=dns,script-path=https://raw.githubusercontent.com/XOS/Config/Her/Surge/Script/DNSPod.js,script-update-interval=-1
*/

const url = 'http://43.138.154.151:777/d?dn=' + $domain;
if ($network.v4.primaryInterface === 'en0') {
  $httpClient.get(url, function (error, response, data) {
    if (error) {
      $done({ server: 'https://east.lele233.pro/cdn' });
    } else {
      $done({ addresses: data.split(';'), ttl: 600 });
    }
  });
} else {
  $done({ server: 'https://east.lele233.pro/cdn' });
}

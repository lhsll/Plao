let ipv1 = "220.181.135.228"
let ipv2 = "220.181.135.229"
let ipv3 = "220.181.135.225"
let ipv4 = "220.181.135.227"
let ipv5 = "220.181.135.226"
let ipv6 = "220.181.135.224"
let ipv7 = "220.181.135.231"
let ipv8 = "220.181.135.230"

if ($domain = 'tvax1.sinaimg.cn','tvax2.sinaimg.cn','tvax3.sinaimg.cn') {
    $done({addresses: [ipv1,ipv2,ipv3,ipv4,ipv5,ipv6,ipv7,ipv8]})
}
$done()
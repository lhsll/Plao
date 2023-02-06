let ipv1 = "125.64.128.248"
let ipv2 = "125.64.128.240"
let ipv3 = "125.64.128.241"
let ipv4 = "125.64.128.242"
let ipv5 = "125.64.128.243"
let ipv6 = "125.64.128.244"
let ipv7 = "125.64.128.239"
let ipv8 = "125.64.128.238"

if ($domain = 'tvax1.sinaimg.cn','tvax2.sinaimg.cn','tvax3.sinaimg.cn') {
    $done({addresses: [ipv1,ipv2,ipv3,ipv4,ipv5,ipv6,ipv7,ipv8]})
}
$done()
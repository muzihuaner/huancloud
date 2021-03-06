!function (a, b) {
    a.DeviceOrientationEvent && a.addEventListener("deviceorientation", function (a) {
        a.beta && a.gamma && (b.onmousemove = null);
        var d = (a.beta - 20) / 3, e = -a.gamma / 3;
        d = Math.min(d, 20), d = Math.max(d, -20), e = Math.min(e, 20), e = Math.max(e, -20), c(d, e)
    }, !1);
    var c = function (a, b) {
        test.style.cssText = "-webkit-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);-ms-transform:rotateX(" + a + "deg) rotateY(" + b + "deg);transform:rotateX(" + a + "deg) rotateY(" + b + "deg);"
    }, d = b.documentElement;
    BODY = b.body, b.onmousemove = function (a) {
        var b = a.clientX - BODY.offsetWidth / 2;
        b /= 100;
        var e = a.clientY - d.clientHeight / 2;
        e /= 100, e = -e, c(e, b)
    };
    var e = [0, 700, 2e3, 3100, 3800];
    setTimeout(function () {
        a.onscroll = function () {
            for (var a, b = 0; b < e.length; b++) if (a = e[b], a > Math.max(d.scrollTop, BODY.scrollTop) + d.clientHeight / 2) return d.setAttribute("step", b)
        }, a.onscroll()
    }, 1e3)
}(this, document);

var selectDatacenter = function (a) {
    "la" == a ? (document.getElementById("span-2").classList.add("active"), document.getElementById("span-3").classList.remove("active"), document.getElementById("price-1").innerHTML = "<big>0.05元/小时</big><small>≈ 36元/月</small>", document.getElementById("price-2").innerHTML = "<big>0.11元/小时</big><small>≈ 79元/月</small>", document.getElementById("price-3").innerHTML = "<big>0.24元/小时</big><small>≈ 172元/月</small>", document.getElementById("price-4").innerHTML = "<big>0.52元/小时</big><small>≈ 374元/月</small>", document.getElementById("price-note").innerHTML = "<p>※ 数据两份副本，洛杉矶 CN2 电信联通高速双向直连，500M 超高公网适合高带宽需求的应用，千兆内网提供开源镜像站加速</p>") : "hk" == a ? (document.getElementById("span-2").classList.remove("active"), document.getElementById("span-3").classList.add("active"), document.getElementById("price-1").innerHTML = "<big>0.09元/小时</big><small>≈ 64元/月</small>", document.getElementById("price-2").innerHTML = "<big>0.18元/小时</big><small>≈ 128元/月</small>", document.getElementById("price-3").innerHTML = "<big>0.36元/小时</big><small>≈ 256元/月</small>", document.getElementById("price-4").innerHTML = "<big>0.72元/小时</big><small>≈ 512元/月</small>", document.getElementById("price-note").innerHTML = "<p>※ 数据两份副本，电信联通移动三网高速直连，提供比 SATA 更高的 IOPS，适合低延迟运算型应用，千兆内网开源镜像站加速</p>") : (document.getElementById("span-1").classList.add("active"), document.getElementById("span-2").classList.remove("active"), document.getElementById("span-3").classList.remove("active"), document.getElementById("price-1").innerHTML = "<big>0.07元/小时</big><small>≈ 49元/月</small>", document.getElementById("price-2").innerHTML = "<big>0.15元/小时</big><small>≈ 108元/月</small>", document.getElementById("price-3").innerHTML = "<big>0.32元/小时</big><small>≈ 230元/月</small>", document.getElementById("price-4").innerHTML = "<big>0.62元/小时</big><small>≈ 446元/月</small>", document.getElementById("price-note").innerHTML = '<p>※ 数据两份副本，俄罗斯新西伯利亚节点冷门线路全天候稳定，电信联通移动三网单线程速度优异适合大多数应用，<a href="http://speedtest-ov.hostker.net/forum.php?mod=viewthread&tid=1" target="_blank" style="color:#FFF;text-decoration:underline;">速度演示</a></p>')
};


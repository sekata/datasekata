<script type='text/javascript'>
//<![CDATA[
!function(e,t){var n="getSelection",o="removeAllRanges",i="addRange",l="parentNode",a="firstChild",d="appendChild",r="removeChild",s="test",c="innerHTML";if(e[n]){var p,g,f,h,u,y;t.addEventListener("copy",function(C){for(g=C.target;3===g.nodeType;)g=g[l];if(h=t.createElement("div"),(p=e[n]())&&p.rangeCount&&(p=p.getRangeAt(0))&&(f=p.cloneRange(),p=p.cloneContents())){for(;u=p[a];)h[d](u);if(!/^(pre|code)$/i[s](g.nodeName||"")&&!/(^|s)no-attribution(s|$)/i[s](g.className||"")){var v=e.location.href;h[c]+="<br><br>&copy; "+t.title+'<br>Sumber: <a href="'+v+'">'+v+"</a>"}y=t.createRange(),t.body[d](h),y.selectNodeContents(h),p=e[n](),p[o](),p[i](y),setTimeout(function(){h[l][r](h),p[o](),p[i](f)})}},!1)}}(window,document);
//]]>
</script>

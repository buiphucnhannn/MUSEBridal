/**
 * Lỗi phát sinh từ tiện ích mở rộng của trình duyệt (chrome-extension://...) không liên quan tới site,
 * nhưng overlay dev của Next.js vẫn bắt và hiện "Unhandled Runtime Error".
 * Script này chạy inline trong <head> (trước mọi script của Next) nên bắt được sự kiện ở pha capture
 * trước overlay; chỉ chặn lỗi có nguồn từ extension, lỗi thật của site vẫn hiện bình thường.
 */
const code = `(function(){
  var re=/(chrome|moz|safari|edge)-extension:\/\//;
  function fromExt(e){
    try{
      if(re.test(e.filename||''))return true;
      var st=(e.error&&e.error.stack)||(e.reason&&e.reason.stack)||'';
      return re.test(st);
    }catch(_){return false}
  }
  window.addEventListener('error',function(e){if(fromExt(e)){e.stopImmediatePropagation();e.preventDefault();}},true);
  window.addEventListener('unhandledrejection',function(e){if(fromExt(e)){e.stopImmediatePropagation();e.preventDefault();}},true);
  var ce=console.error;
  console.error=function(){try{var s=Array.prototype.map.call(arguments,function(a){return a&&a.stack?a.stack:String(a)}).join(' ');if(re.test(s))return;}catch(_){ } return ce.apply(console,arguments);};
})();`;

export default function ExtensionErrorGuard() {
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

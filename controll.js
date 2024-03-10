
        $(document).ready(function() {
alert(7);
  
  function bytesToSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return 'n/a'
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) return `${bytes} ${sizes[i]}`
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}
  
  function msToTime(duration) {
var milliseconds = parseInt((duration%1000))
    , seconds = parseInt((duration/1000)%60)
    , minutes = parseInt((duration/(1000*60))%60)
    , hours = parseInt((duration/(1000*60*60))%24);

hours = (hours < 10) ? "0" + hours : hours;
minutes = (minutes < 10) ? "0" + minutes : minutes;
seconds = (seconds < 10) ? "0" + seconds : seconds;

return hours + ":" + minutes + ":" + seconds /*+ "." + milliseconds*/ ;
}
  
  
  
  
  
  
            $("#btnSubmit").on("click", () => {
            const url = $("input:text").val();
            
            alert(8);
            
                                                                     
                     
                     function isURL(str) { var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/; var pattern = new RegExp(regex); return pattern.test(str); }
                     
                     
         if(isURL(url)){
         document.getElementById("imgAnalyzer").style.display="block";
         
         
            var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://tame-tuna-sweatshirt.cyclic.app/download/",
        "method": "GET",
        "headers": {
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "username": url,
            "password": "12345678"
        }
    }
alert(7);
    $.ajax(settings).done(function (data) {
      // alert(data.thumb[1].url);
      // alert(data.items.mimetype);
       
       alert(data);
       
       
       
       
      try{
      let millis = data.items[1].approxDurationMs;
      
      const videoMS ="160357"; //alert(data.items[1].approxDurationMs);
      const date = new Date(videoMS);
       document.getElementById("videoTitle").innerHTML = `<span> ${data.videoTitle} <br >Duration: ${ msToTime(millis) }:${date.getSeconds()} minutes</span>`;
       
       $("#thumbnail").attr("src", data.thumb[1].url);
       }catch(err){alert(err);}
       
           data.items.forEach((obj, i) => {      
           
          //alert(obj.approxDurationMs);
           document.getElementById("fetchData").innerHTML += `<tr><td>${obj.mimeType}</td><td> ${ bytesToSize(obj.contentLength) } </td><td id="btn137140"><button class="btn" style="background-color:#EE0BFF;"><span class="glyphicon glyphicon-film"></span> <a href=${obj.url}> Download </a> </button> </td> </tr>`;
         
           });
       document.getElementById("imgAnalyzer").style.display="none";
        
    });
            }else{alert("put youtube video link!")}
            });
            
        });
    

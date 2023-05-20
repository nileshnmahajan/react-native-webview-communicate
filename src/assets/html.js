export default `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body >
<div style="
height:100vh;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
align-content:center;
background-color:#EDEEF3;
margin:0;padding:0;
">

<span style="
padding:10px 20px;
background-color:#01B99F;
color:white;
border-radius:20px;
"
onclick="sendDataToReactNativeApp()"

>
Native alert
</span>

</div>


<script> 
const sendDataToReactNativeApp = async () => {
    window.ReactNativeWebView.postMessage(JSON.stringify({type:'alert',data:'Native alert'}));
};
</script>

<script>
    window.addEventListener('message',function(obj){
        const { type = null, data = null } = JSON.parse(obj.data); 
        if(type == "alert")
         alert(data)
      },false);

      document.addEventListener('message',function(obj){
        const { type = null, data = null } = JSON.parse(obj.data); 
        if(type == "alert")
            alert(data)
      },false);

  </script>



</body>
</html>`;

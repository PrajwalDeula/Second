var w;
function startWorker(){
       if(typeof(Worker) !== "undefined"){
        if(typeof(w) == "undefined"){
        w = new Worker("demo_worker.js");
       }       
        w.onmessage =  function(event){
        document.getElementById("result").innerHTML = event.data;
}
       }
      
       else{
        document.getElementById("result").innerHTML = "this is clear";
       }

}
function stopWorker(){
w.terminate();
w = undefined;
}
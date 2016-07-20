var data = [
    {
        machine: 'cutter',
        cert: 1
    },
    {
        machine: 'laser',
        cert: 4
    },
    {
        machine: 'coffee',
        cert: 5
    }
];

function addItems() {
    for (var i = 0; i < data.length; i++) {
        
        var id = data[i].machine + '-row';
        
        document.getElementById('bar_container').innerHTML += '<div class="panel panel-default row"><div class="panel-body row-box" id="' + id + '"></div></div>';
        
        document.getElementById(id).innerHTML += '<div class="machine"><img src="icon.png"><p>' + data[i].machine + '</p></div>';
        
        
        
        for (var j = 0; j < data[i].cert; j++) {
            document.getElementById(id).innerHTML += '<div style="background-color: green" class="green"></div>';
        }
        
        for (var j = 0; j < 5 - data[i].cert; j++) {
            document.getElementById(id).innerHTML += '<div class="green"></div>';
        }
        
        
        document.getElementById(id).innerHTML += '<a class="btn btn-lrg btn-primary">More info...</a>';
    
    }
}
addItems();
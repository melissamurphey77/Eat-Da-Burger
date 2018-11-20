var connection =require('./connection.js');

var orm = {
    
    //GETTING BURGER DATA//
    all: function (tableInput , cb) {
        connection.query('SELECT * FROM '+tableInput+';', function(err, result) {
            if(err) throw err;
            cb(result)
        })
    },

    //UPDATING STATUS NOT DEVOURED/DEVOURED //
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';',
        function(err, result) {
            if(err) throw err;
            cb(result);
        })
    },

    //INSERTING NEW BURGER INTO TABLE//
    create: function(tableInput, val, cb) {
        connection.query('INSERT INTO '+tableInput+' (burger.name) VALUES("+val+");',
        function(err, result){
            if(err)throw err;
            cb(result);
        })
    }

}

module.exports=orm;
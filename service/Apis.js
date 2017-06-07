var httpServiceURL = "https://raw.githubusercontent.com/cinoliu/ceshi";


var Apis = {
    
    getData: function (data) {
        data = data || {};
        return $.ajax({
            method: 'POST',
            dataType: 'json',
            data: data,
      
			url:httpServiceURL + "/master/data1.json"
        });
    },

   

  

};

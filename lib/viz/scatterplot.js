var jade = require('jade')

module.exports = function(data,options) {

	var pts = []
	var x_scale = options
	var colors = [ "red", "black"]
	
	// data.forEach(function(d, i){
	// 	var pt = {
	// 		x: d[0]*x_scale,
	// 		y: d[1]*30
	// 		stroke: colors[i%3]
	// 	}
	// 	pts.push(pt);
	// })

	for(var i=0; i<data.length; i++){
		d = data[i]
      var pt = {
            x: d[0]*x_scale,
            y: d[1]*x_scale,
            stroke: colors[i%2]
        }
        pts.push(pt);
	}

	console.log(pts)
    
	 var html = jade.renderFile(__dirname + '/templates/scatterplot.jade', {
        data: pts,
		  h: 300,
		  w: 400
    })
    // console.log(html)
    
    return html
}

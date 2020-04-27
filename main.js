AFRAME.registerComponent('change-color-on-tap', {
	schema: {
		color: {default: "#27ef18"}
	},

	init: function () {

		var data = this.data;
		var el = this.el;  // <a-box>
		var self = this;
		self.trees = [];
		//var defaultColor = el.getAttribute('material').color;
		console.log("el:");
		console.dir(el);

		el.addEventListener("model-loaded", e =>{
			let tree3D = el.getObject3D('mesh'); // get the THREEjs group
			if (!tree3D){return;}
			console.log('tree3D', tree3D); // log the THREEjs group so you can look at all of its contents and parameters.
			tree3D.traverse(function(node){ // this is how you loop through (traverse) the models
				if (node.isMesh){
					console.log(node);
					self.trees.push(node);
					if(node.name == "Trunk_A"){
						self.treeMat = node.material; // store a reference to the material you want to modify later
					}
					node.material.map = null; // removes the texture so we can see color clearly
				}
			});
		});

		el.addEventListener('touchstart', this.changeColor);
		el.addEventListener('mousedown', this.changeColor);
	},
	changeColor: function () {
		console.log("tap!");
		let colorHex = Number("#EF2D5E");
		let color3D = new THREE.Color(colorHex);
		self.treeMat.color = color3D;
		/*
			if (el.getAttribute('color') === defaultColor) {
				el.setAttribute('color', data.color);
			} else {
				el.setAttribute('color', defaultColor);
			}
			*/
	}
});
AFRAME.registerComponent('change-color-on-tap', {
	schema: {
		color: {default: "#ff3133"}
	},

	init: function () {
		var data = this.data;
		var el = this.el;  // <a-box>
		let defaultMaterial;
		var self = this;
		self.trees = [];

		el.addEventListener("model-loaded", e =>{
			let tree3D = el.getObject3D('mesh'); // get the THREEjs group
			if (!tree3D){return;}
			tree3D.traverse(function(node){ // this is how you loop through (traverse) the models
				if (node.isMesh){
					self.trees.push(node);
					console.log(node.name);
					if(node.name == "element"){
						defaultMaterial = node.material; // store a reference to the material you want to modify later
					}
				}
			});
		});

		el.addEventListener('click', function() {
			let tree3D = el.getObject3D('mesh'); // get the THREEjs group
			if (!tree3D){return;}// log the THREEjs group so you can look at all of its contents and parameters.
			tree3D.traverse(function(node){ // this is how you loop through (traverse) the models
				if (node.isMesh){
					let oldColor = node.material.color;
					if ("#" + oldColor.getHexString() === data.color) {
						node.material = defaultMaterial;
					} else {
						var newMaterial = new THREE.MeshStandardMaterial({color: data.color}); //pink
						node.material = newMaterial;
					}
				}
			});
		});
	}
});
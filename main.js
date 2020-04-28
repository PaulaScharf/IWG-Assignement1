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

		el.addEventListener('click', function() {
			alert("tap!");
			let tree3D = el.getObject3D('mesh'); // get the THREEjs group
			if (!tree3D){return;}// log the THREEjs group so you can look at all of its contents and parameters.
			tree3D.traverse(function(node){ // this is how you loop through (traverse) the models
				if (node.isMesh){
					node.material.map = null; // removes the texture so we can see color clearly
					var newMaterial = new THREE.MeshStandardMaterial({color: 0xFF00FF}); //pink
					node.material = newMaterial;
				}
			});
		});
	}
});
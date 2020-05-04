AFRAME.registerComponent('change-color-on-tap', {
	schema: {
		color: {default: "#ff3133"}
	},

	init: function () {
		let data = this.data;
		let el = this.el;
		let defaultMaterial;
		let self = this;
		self.trees = [];
		let popup = document.getElementById("myPopup");
/*
		el.addEventListener("model-loaded", e =>{
			let tree3D = el.getObject3D('mesh'); // get the THREEjs group
			if (!tree3D){return;}
			tree3D.traverse(function(node){ // this is how you loop through (traverse) the models
				if (node.isMesh){
					self.trees.push(node);
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
		*/

		el.addEventListener('mouseenter', function () {
			if(!popup.classList.contains("show")) {
				popup.classList.toggle("show");
			}
		});

		el.addEventListener('mouseleave', function () {
			popup.classList.toggle("show");
		});
	}
});
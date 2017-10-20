var positions = {'Schwinn AC Sportcycle':{'x':772,'y':598,'width':158,'height':158},
						'Schwinn AC Sportcycle Carbonblue':{'x':900,'y':700,'width':192,'height':192},
						'Schwinn ACPP Carbonblue':{'x':775,'y':705,'width':187,'height':187},
						'Schwinn ACPP':{'x':775,'y':705,'width':187,'height':187},
						'Schwinn IC Pro 20':{'x':760,'y':535,'width':246,'height':255},
						'Star Trac Studio 7':{'x':667,'y':452,'width':258,'height':248},
						'Schwinn IC Pro Cycle':{'x':891,'y':605,'width':328,'height':320},
						'Star Trac Blade':{'x':793,'y':715,'width':344,'height':344},
						'Star Trac NXT':{'x':795,'y':731,'width':319,'height':319},
						'Star Trac Studio3':{'x':834,'y':654,'width':302,'height':301},
						'Star Trac Studio5':{'x':806,'y':712,'width':326,'height':326},
					};
		var this_wheel_position = {'x':0,'y':0,'width':0, 'height':0};
		var screenheight = Math.min(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);
		document.getElementById("main_panel").style.height = (document.body.scrollHeight-270) +"px";
		var frame_img, seat_img, mark_img, text_img,wheel_img, wheel_img1, chain_guard, mockup_img, cover_img;
		var set_flag = true, hide_wheelflag = true;
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		console.log(c);
		c.width = c.parentNode.offsetWidth;
		c.height = c.width;
		var mockup_rate;
		var canvas = new fabric.Canvas('myCanvas');
		var f = fabric.Image.filters;
		$("#seat-url").val('');
		$("#mark-url").val('');
		$("#text-url").val('');
		$("#wheel-url").val('');
		bike_load();

		// fabric.Image.fromURL('images/stock-bike.jpg', function(img) {
		// 	mockup_rate = ((canvas.width))/img.width;
		// 	mockup_img = img.set({ left: ((canvas.width))/2-img.width*mockup_rate/2, top: canvas.height/2-img.height*mockup_rate/2, angle: 0, scaleX:mockup_rate, scaleY:mockup_rate, style:'opacity: 1;', selectable: false })
		// 	canvas.add(mockup_img);
		// 	canvas.renderAll();
		// 	fabric.Image.fromURL('images/Frame.png', function(img) {
		// 		var sss=img.width*mockup_rate;
		// 		var sss1 = img.height*mockup_rate;
		// 		frame_img = img.set({ left: ((canvas.width))/2-sss/2, top: canvas.height/2-sss1/2, scaleX:mockup_rate, scaleY:mockup_rate, angle: 0, selectable: false})
		// 		// console.log(frame_img.left+","+frame_img.top);
		// 		canvas.add(frame_img);
		// 		canvas.renderAll();
		// 	});
		// 	// fabric.Image.fromURL('images/wheel.png', function(img) {
		// 	// 	var sss=img.width*mockup_rate;
		// 	// 	var sss1 = img.height*mockup_rate;
		// 	// 	wheel_img = img.set({ left: ((canvas.width))/2-sss/2, top: canvas.height/2-sss1/2, scaleX:mockup_rate, scaleY:mockup_rate, angle: 0, selectable: false})
		// 	// 	// console.log(frame_img.left+","+frame_img.top);
		// 	// 	canvas.add(wheel_img);
		// 	// 	canvas.renderAll();
		// 	// });
			
		// });
		var sss, sss1;
		
		function reload_bike() {
			bike_load();
		}
		function bike_load() {
			var val = $("#bike_type option:selected").text();
			var val1=val.split(' ').join('-');
			this_wheel_position.x = positions[val].x;
			this_wheel_position.y = positions[val].y;
			this_wheel_position.width = positions[val].width;
			this_wheel_position.height = positions[val].height;
			canvas.remove(wheel_img);
			canvas.remove(wheel_img1);
			canvas.remove(frame_img);
			canvas.remove(text_img);
			canvas.remove(seat_img);
			canvas.remove(mark_img);
			canvas.remove(mockup_img);
			$("#bike_title").text(val);
			fabric.Image.fromURL('images/'+val+'/'+val1+'.png', function(img) {
				mockup_rate = ((canvas.width))/img.width<canvas.height/img.height?((canvas.width))/img.width:canvas.height/img.height;
				rate11 = ((canvas.width))/img.width;
				rate12 = canvas.height/img.height;
				console.log(((canvas.width))/img.width);
				console.log(canvas.height/img.height);
				console.log(mockup_rate);
				mockup_img = img.set({ left: ((canvas.width))/2-img.width*mockup_rate/2, top: canvas.height/2-img.height*mockup_rate/2, angle: 0, scaleX:mockup_rate, scaleY:mockup_rate, style:'opacity: 1;', selectable: false })
				canvas.add(mockup_img);
				canvas.renderAll();
				

				fabric.Image.fromURL('images/'+val+'/'+val1+'-Flywheel.png', function(img) {
					var sss=img.width*mockup_rate;
					var sss1 = img.height*mockup_rate;
					// wheel_img = img.set({ left: ((canvas.width))/2-wheel_offset_x*(((canvas.width))/2/488), top: canvas.height/2-wheel_offset_y*(canvas.height/2/309), scaleX:mockup_img.scaleX, scaleY:mockup_img.scaleY, angle: 0, selectable:false})
					// left: (this_wheel_position.x)*mockup_rate+mockup_img.left+100,

					var wheel_x_rate = this_wheel_position.width*mockup_img.scaleX/img.width ;
					var wheel_y_rate = this_wheel_position.height*mockup_img.scaleY/img.height;

					var img1 = img;
					var img1 = jQuery.extend(true, {}, img);
					wheel_img = img.set({ left: (this_wheel_position.x)*mockup_img.scaleX+mockup_img.left, top: (this_wheel_position.y)*mockup_img.scaleY+mockup_img.top, scaleX:wheel_x_rate, scaleY:wheel_y_rate, angle: 0, selectable:false});
					canvas.add(wheel_img);
					wheel_img1 = img1.set({ left: canvas.width - this_wheel_position.width*mockup_img.scaleX, top: mockup_img.top+mockup_img.height*mockup_img.scaleY/4, scaleX:wheel_x_rate, scaleY:wheel_y_rate, angle: 0, selectable:true});
					if(!hide_wheelflag)
						canvas.add(wheel_img1);
					canvas.renderAll();
					// canvas.setActiveObject(wheel_img);
				});

				
				fabric.Image.fromURL('images/'+val+'/'+val1+'-Cover.png', function(img) {
					sss=img.width*mockup_rate;
					sss1 = img.height*mockup_rate;
					cover_img = img.set({ left: mockup_img.left, top: mockup_img.top, scaleX:mockup_rate, scaleY:mockup_rate, angle: 0, selectable: false})
					// console.log(frame_img.left+","+frame_img.top);
					canvas.add(cover_img);
					canvas.renderAll();
				});
				fabric.Image.fromURL('images/'+val+'/'+val1+'-Frame.png', function(img) {
					sss=img.width*mockup_rate;
					sss1 = img.height*mockup_rate;
					frame_img = img.set({ left: mockup_img.left, top: mockup_img.top, scaleX:mockup_rate, scaleY:mockup_rate, angle: 0, selectable: false})
					// console.log(frame_img.left+","+frame_img.top);
					canvas.add(frame_img);
					canvas.renderAll();
				});
				fabric.Image.fromURL('images/'+val+'/'+val1+'-Chain-Guard.png', function(img) {
					sss=img.width*mockup_rate;
					sss1 = img.height*mockup_rate;
					chain_guard = img.set({ left: mockup_img.left, top: mockup_img.top, scaleX:mockup_rate, scaleY:mockup_rate, angle: 0, selectable: false})
					// console.log(frame_img.left+","+frame_img.top);
					canvas.add(chain_guard);
					canvas.renderAll();
				});
			});
			
		}
		var touch_down_y=0,touch_down_y1=0;
		var current_scroll_pos=0,current_scroll_pos1 = 0;
		var canvas_touch_flag = false;
		var main_panel = document.getElementById("main_panel");
		
		
		$(".tab_container").on('touchstart',function(e) {

			touch_down_y1 = e.originalEvent.touches[0].clientY;
			canvas_touch_flag1 = true;
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
			
		});
		$(".tab_container").on('touchmove', function(e) {
			
			

				// document.getElementById("myCanvas").scrollTop += -(e.e.touches[0].clientY-touch_down_y);
				
				
				if(current_scroll_pos >=0) {
					$("#main_panel").scrollTop(current_scroll_pos-e.originalEvent.touches[0].clientY+touch_down_y1);
					current_scroll_pos = current_scroll_pos-e.originalEvent.touches[0].clientY+touch_down_y1;
					touch_down_y1 = e.originalEvent.touches[0].clientY;
				} else {
					$("#main_panel").scrollTop(0);
					current_scroll_pos = 0;
				}
				console.log(current_scroll_pos);
				// document.getElementById("myCanvas").scrollTop = 100;
				// $("#main_panel").scrollTop(200);
		
			
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
		});

		$(".tab_container").on('touchend', function(e) {
				canvas_touch_flag1 = false;
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
			
		});

		$(".tab_container").on('mouseout', function(e) {

			canvas_touch_flag1 = false;

			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
		});

		canvas.on('mouse:down', function(e) {

			if(e.e.type=="touchstart") {
				touch_down_y = e.e.touches[0].clientY;
				canvas_touch_flag = true;
			}
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
			
		});
		canvas.on('mouse:move', function(e) {
			
			if(e.e.type=="touchmove" && canvas_touch_flag == true) {

				// document.getElementById("myCanvas").scrollTop += -(e.e.touches[0].clientY-touch_down_y);
				
				
				if(current_scroll_pos >=0) {
					$("#main_panel").scrollTop(current_scroll_pos-e.e.touches[0].clientY+touch_down_y);
					current_scroll_pos = current_scroll_pos-e.e.touches[0].clientY+touch_down_y;
					touch_down_y = e.e.touches[0].clientY;
				} else {
					$("#main_panel").scrollTop(0);
					current_scroll_pos = 0;
				}
				console.log(current_scroll_pos);
				// document.getElementById("myCanvas").scrollTop = 100;
				// $("#main_panel").scrollTop(200);
			}
			
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
		});

		canvas.on('mouse:up', function(e) {

			if(e.e.type=="touchend") {
				canvas_touch_flag = false;
			}
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
			
		});

		canvas.on('mouse:out', function(e) {
			console.log(e);
			if(e.e.type=="touchmove") {
				canvas_touch_flag = false;
			}
			// if(e.target !=frame_img && e.target!= wheel_img && e.target!=seat_img && e.target!=mark_img && e.target!=text_img) {
			// 	alert("SDSDF");
			// }
		});

		$('#bike_type').change(function() {
			bike_load();
		});

		$(".swatch-clickable").on('click', function() {
			console.log(frame_img);
			//16, new f.BlendColor({color:'red', mode:'overlay'})
			var color = this.style.backgroundColor;
			frame_img.filters.push(new f.BlendColor({color:color, mode:'tint'}));
			frame_img.applyFilters();
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-upload").on('change', function(){ 
			readURL(this,0);
		});
		$("#mark-upload").on('change', function(){ 
			readURL(this,1);
		});
		$("#text-upload").on('change', function(){ 
			readURL(this,2);
		});
		$("#wheel-upload").on('change', function(){ 
			readURL(this,3);
		});
		$(".browser-button").on('click', function() {
			id = this.id;
			id = id.split('-');	
			$("#"+id[1]+'-upload').click();
		});
		var seat_offset_x = 488-320.3755566551212;
		var seat_offset_y = 309-231.43889163780307;
		var mark_offset_x = 488-632.1316180108856;
		var mark_offset_y = 309-206.25333993072735;
		var text_offset_x = 488-661.1316180108856;
		var text_offset_y = 309-290.25333993072735;
		var wheel_offset_x = 488-597.6922315685304;
		var wheel_offset_y = 309-289.6922315685304;
		
		var readURL = function(input,obj) {
			if (input.files && input.files[0]) {
				var file, img;
				var _URL = window.URL || window.webkitURL;
				if ((file = input.files[0])) {
					console.log(file);
					fabric.Image.fromURL(_URL.createObjectURL(file), function(img) {
						var val1=file.name.split('-').join(' ');
						switch (obj) {
							case 0:
								// $("#seat-url").val(file.name);
								canvas.remove(seat_img);
								seat_img = img.set({ left: ((canvas.width))/2-seat_offset_x*(((canvas.width))/2/488), top: canvas.height/2-seat_offset_y*(canvas.height/2/309), scaleX:20/img.width, scaleY:20/img.width, angle: 0})
								canvas.add(seat_img);
								canvas.setActiveObject(seat_img);
								break;
							case 1:
								// $("#mark-url").val(file.name);
								canvas.remove(mark_img);
								mark_img = img.set({ left:((canvas.width))/2-mark_offset_x*(((canvas.width))/2/488), top: canvas.height/2-mark_offset_y*(canvas.height/2/309), scaleX:20/img.width, scaleY:20/img.width, angle: 0})
								canvas.add(mark_img);
								canvas.setActiveObject(mark_img);
								break;
							case 2:
								// $("#text-url").val(file.name);
								canvas.remove(text_img);
								text_img = img.set({ left: ((canvas.width))/2-text_offset_x*(((canvas.width))/2/488), top: canvas.height/2-text_offset_y*(canvas.height/2/309), scaleX:37/img.width, scaleY:37/img.width, angle: 0})
								canvas.add(text_img);
								canvas.setActiveObject(text_img);
								break;
							case 3:
								// $("#wheel-url").val(file.name);
								canvas.remove(wheel_img);
								canvas.remove(wheel_img1);
								var img1 = jQuery.extend(true, {}, img);

								var wheel_x_rate = this_wheel_position.width*mockup_img.scaleX/img.width ;
								var wheel_y_rate = this_wheel_position.height*mockup_img.scaleY/img.height;
								// wheel_img = img.set({ left: ((canvas.width))/2-wheel_offset_x*(((canvas.width))/2/488), top: canvas.height/2-wheel_offset_y*(canvas.height/2/309), scaleX:mockup_img.scaleX, scaleY:mockup_img.scaleY, angle: 0, selectable:false})
								wheel_img = img.set({ left: (this_wheel_position.x)*mockup_img.scaleX+mockup_img.left, top: (this_wheel_position.y)*mockup_img.scaleY+mockup_img.top, scaleX:wheel_x_rate, scaleY:wheel_y_rate, angle: 0, selectable:false});
								wheel_img1 = img1.set({ left: canvas.width - this_wheel_position.width*mockup_img.scaleX-20, top: mockup_img.top+mockup_img.height*mockup_img.scaleY/4, scaleX:wheel_x_rate, scaleY:wheel_y_rate, angle: 0, selectable:true});
								// wheel_img = img.set({ left: (this_wheel_position.x)*mockup_img.scaleX+mockup_img.left, top: (this_wheel_position.y)*mockup_img.scaleY+mockup_img.top, scaleX:mockup_img.scaleX, scaleY:mockup_img.scaleY, angle: 0, selectable:true});
								// wheel_img1 = img.set({ left: mockup_img.width*mockup_img.scaleX-150, top: (this_wheel_position.y)*mockup_rate+mockup_img.top, scaleX:mockup_img.scaleX, scaleY:mockup_img.scaleY, angle: 0, selectable:true});
								canvas.add(wheel_img);
								canvas.add(wheel_img1);
								canvas.bringToFront(frame_img);
								canvas.bringToFront(chain_guard);
								canvas.bringToFront(text_img);
								canvas.bringToFront(seat_img);
								canvas.bringToFront(mark_img);
								if(cover_img)
									canvas.bringToFront(cover_img);
								// canvas.setActiveObject(wheel_img1);
								break;
						}
						set_flag = true;
					});
					$("#image64").val(canvas.toDataURL());
				}
			}
		}
		function go(id){
			$("#"+id+"atab").click();
		}
		$( "#seat-url" ).keyup(function() {
			var left = ((canvas.width))/2-seat_offset_x*(((canvas.width))/2/488);
			var top = canvas.height/2-seat_offset_y*(canvas.height/2/309);
			var font_size = 34;
			var angle = 0;
			if(seat_img) {
				left = seat_img.left;
				top = seat_img.top;
				angle = seat_img.angle;
				font_size = seat_img.fontSize;
				canvas.remove(seat_img);
			}
			seat_img = new fabric.IText($("#seat-url").val(), { 
							fontFamily: 'arial black',
							fontSize: font_size,
							left: left, 
							top: top ,
							angle: angle
						});
			canvas.add(seat_img);
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnYplus").on('click', function(e){
			seat_img.set({top: seat_img.top-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnYminus").on('click', function(e){
			seat_img.set({top: seat_img.top+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnXplus").on('click', function(e){
			seat_img.set({left: seat_img.left+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnXminus").on('click', function(e){
			seat_img.set({left: seat_img.left-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnFSminus").on('click', function(e){
			seat_img.set({fontSize: seat_img.fontSize-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnFSplus").on('click', function(e){
			seat_img.set({fontSize: seat_img.fontSize+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnASminus").on('click', function(e){
			seat_img.set({angle: seat_img.angle-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#seat-btnASplus").on('click', function(e){
			seat_img.set({angle: seat_img.angle+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});

		$( "#mark-url" ).keyup(function() {
			var left = ((canvas.width))/2-mark_offset_x*(((canvas.width))/2/488);
			var top = canvas.height/2-mark_offset_y*(canvas.height/2/309);
			var font_size = 34;
			var angle = 0;
			if(mark_img) {
				left = mark_img.left;
				top = mark_img.top;
				angle = mark_img.angle;
				font_size = mark_img.fontSize;
				canvas.remove(mark_img);
			}
			mark_img = new fabric.IText($("#mark-url").val(), { 
							fontFamily: 'arial black',
							fontSize: font_size,
							left: left, 
							top: top ,
							angle: angle
						});
			canvas.add(mark_img);
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnYplus").on('click', function(e){
			mark_img.set({top: mark_img.top-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnYminus").on('click', function(e){
			mark_img.set({top: mark_img.top+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnXplus").on('click', function(e){
			mark_img.set({left: mark_img.left+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnXminus").on('click', function(e){
			mark_img.set({left: mark_img.left-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnFSminus").on('click', function(e){
			mark_img.set({fontSize: mark_img.fontSize-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnFSplus").on('click', function(e){
			mark_img.set({fontSize: mark_img.fontSize+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnASminus").on('click', function(e){
			mark_img.set({angle: mark_img.angle-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#mark-btnASplus").on('click', function(e){
			mark_img.set({angle: mark_img.angle+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});

		$( "#text-url" ).keyup(function() {
			var left = ((canvas.width))/2-text_offset_x*(((canvas.width))/2/488);
			var top = canvas.height/2-text_offset_y*(canvas.height/2/309);
			var font_size = 34;
			var angle = 0;
			if(text_img) {
				left = text_img.left;
				top = text_img.top;
				angle = text_img.angle;
				font_size = text_img.fontSize;
				canvas.remove(text_img);
			}
			text_img = new fabric.IText($("#text-url").val(), { 
							fontFamily: 'arial black',
							fontSize: font_size,
							left: left, 
							top: top ,
							angle: angle
						});
			canvas.add(text_img);
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnYplus").on('click', function(e){
			text_img.set({top: text_img.top-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnYminus").on('click', function(e){
			text_img.set({top: text_img.top+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnXplus").on('click', function(e){
			text_img.set({left: text_img.left+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnXminus").on('click', function(e){
			text_img.set({left: text_img.left-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnFSminus").on('click', function(e){
			text_img.set({fontSize: text_img.fontSize-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnFSplus").on('click', function(e){
			text_img.set({fontSize: text_img.fontSize+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnASminus").on('click', function(e){
			text_img.set({angle: text_img.angle-1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});
		$("#text-btnASplus").on('click', function(e){
			text_img.set({angle: text_img.angle+1});
			canvas.renderAll();
			$("#image64").val(canvas.toDataURL());
		});

		var base64ToByteArray = function(encStr){
            var base64s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var decOut = new air.ByteArray();  
            var bits;

            for(var i = 0, j = 0; i<encStr.length; i += 4, j += 3){
                bits = (base64s.indexOf(encStr.charAt(i)) & 0xff) <<18 | (base64s.indexOf(encStr.charAt(i +1)) & 0xff) <<12 | (base64s.indexOf(encStr.charAt(i +2)) & 0xff) << 6 | base64s.indexOf(encStr.charAt(i +3)) & 0xff;
                decOut[j+0] = ((bits & 0xff0000) >> 16);
                  if(i+4 != encStr.length || encStr.charCodeAt(encStr.length - 2) != 61){
                       decOut[j+1] = ((bits & 0xff00) >> 8);
                  }
                  if(i+4 != encStr.length || encStr.charCodeAt(encStr.length - 1) != 61){
                       decOut[j+2] = (bits & 0xff);
                  }
            }
            return decOut;
		};
		
		function sendmail() {
			// var link = "mailto:akmksi211@gmail.com"
			// 			+ "?cc=aoto.daiki@yandex.com"
			// 			+ "&subject=" + escape("This is my subject")
			// 			+ "&body=" + escape("body")
			// 	;

			// window.location.href = link;
			// c.toBlob(function(blob) {
			// 	saveAs(blob, "pretty image.png");
			// });
			// var content = canvas.toDataURL();
			// console.log(content);
			// var imgss = document.createElement("img");
			// $("#image64").val(canvas.toDataURL());
			// imgss.src = content;
			// document.getElementById("main_panel").appendChild(imgss);
			$("#do_modal_crop").click();
			
			// emailjs.send("gmail","mytemplate1",{content: content})
			// .then(
			// 	function(response) {
			// 		console.log("SUCCESS", response);
			// 	}, 
			// 	function(error) {
			// 		console.log("FAILED", error);
			// 	}
			// );

		}
		function sendmail_click() {
			if($("#username").val() != "" && $("#usermail").val() != "" && $("#phonenumber").val() != "") {
				$("#modal_crop").modal('hide');
				$.post('/send',
				{
					img : c.toDataURL("image/png"),
					special1: $("#special1").val(),
					special2: $("#special2").val(),
					special3: $("#special3").val(),
					username: $("#username").val(),
					usermail: $("#useremail").val(),
					phonenumber: $("#phonenumber").val()
				}, function(data) {
					console.log(data);
				});
			} else {
				alert("Please all of the information");
			}
		}
		function hide_rightwheel() {
			hide_wheelflag = true;
			canvas.remove(wheel_img1);
		}

		function show_rightwheel() {
			hide_wheelflag = false;
			canvas.add(wheel_img1);
		}
(function () {		
		if(typeof zooomyWish == 'undefined'){
			window.zooomyWish={};
		}

		let shop = window.zooomyWish?.shop ?? window.Shopify?.shop;
		if(shop=="kkiuke-yw.myshopify.com" || shop=="zooomyjames.myshopify.com"){
		    const script = document.createElement('script');
		    script.src = "https://zooomyapps.com/wishlist/updatedjs/zooomycoll.js";
		    script.defer = true;

		    document.head.appendChild(script);
		   
		    return; 
		}
			
		if (Shopify && Shopify.shop === "house-ofchikankari.myshopify.com") {
		  throw new Error("Script stopped for this shop.");
		}
		window.zoomyCollIndex=1
		window.zooomyWishPlan="paid";
		window.zooomyCollectionRequestMade = false;
		// Zooomy Coll js
		var zooomyColl= function(jQuery) {
			window.$=jQuery
			var getwishselector = document.querySelectorAll(".zoomywishid");
		  
			var getwishselectorlength = getwishselector.length;

			var ifruncode = getwishselectorlength;
			var myurlcheck = document.location.href;

			var checktrue = myurlcheck.includes("login");
			if (checktrue == false) {
				checktrue = myurlcheck.includes("register");
			}
			if (checktrue == false) { 
				checktrue = myurlcheck.includes("challenge");
			}
			if (checktrue == false) {
				checktrue = myurlcheck.includes("account");
			}
			if (checktrue == false) {
				checktrue = myurlcheck.includes("cart");
			}
		   if (checktrue == false) {
				checktrue = myurlcheck.includes("pages");
			}
		   if (checktrue == false) {
				checktrue = myurlcheck.includes("blog");
			}	
		   if (checktrue == false) {
				checktrue = myurlcheck.includes("policies");
			}	

				if ($('#zooomy-wishlist-counter').length){
						getwishselectorlength = 1;
				}	
			if (checktrue) {
				getwishselectorlength = 1;
			}
		    var sendurl ="";
			//console.log(myurlcheck);
					getwishselectorlength = 1;
			if (getwishselectorlength == 0) {} else {
		        
		        let callAjax=1;
				function wishlist(callAjaxLen) {
		    		var WishIdsArray = [];
					var WishIds = "";
					let getwishselector = $(".zoomywishid");
					$(getwishselector).each(function() {
						if ($(this).html().trim() == '') {
							WishIds = $(this).attr("data-product-id");
							WishIdsArray.push(WishIds);
						}
					});

					var shop = zooomyWish.shop??Shopify.shop;
					var customerid = "";
					var scripts = document.getElementsByTagName("script");
					for (var i = 0, l = scripts.length; i < l; i++) {
						if (scripts[i].getAttribute("data-shop-id") != null) {
							
							customername = scripts[i].getAttribute("data-cus-name");
							customer_email = scripts[i].getAttribute("data-cus-email");
						}
					}
					customer_email=zooomyWish.customerEmail??customer_email;
		      customerid= zooomyWish.customerId??(meta.page.customerId??'')
		      
		      var cvalforcust = btoa(customer_email);
		              
					
					sendurl = "/apps/wishlist/api/frontend/collection?customerid=" + customerid + "&WishIdsArray=" + WishIdsArray + "&ifruncode=" + ifruncode;
					if(customerid=="")
					{
						var WishIdsArrayempty = "";
					sendurl = "/apps/wishlist/api/frontend/collection?customerid=" + customerid + "&WishIdsArray=" + WishIdsArrayempty + "&ifruncode=" + ifruncode;

					}
					
					window.zooomyCollectionRequestMade = true;
					$.ajax({
						url: sendurl,
						type:'post',
						data: {},
						dataType: "json",
						async: "true",
						success: function(jsonData) {
							if(jsonData.app_plan=="free"){
								zooomyWishPlan="free";
								console.log(
								  "%c🚀 Please upgrade your plan",
								  "color: white; background: #FF5533; padding: 4px 8px; border-radius: 4px;"
								);
								return false;
							}
							var usercss = jsonData.custom_css;
							var useraddedcss = jsonData.user_added_css;
							var empty = jsonData.empty;
							var itemadded = jsonData.itemadded;
							var coll_f_color = jsonData.coll_f_color;
							var coll_e_color = jsonData.coll_e_color;
							var login_text = jsonData.login_text;
							var shop = jsonData.shop;
							var totalv = jsonData.totalv;
							var wish_icon= jsonData.wish_icon;
							if (jsonData.l_f_color == undefined) {
								jsonData.l_f_color = "#000";
								jsonData.l_b_color = "#a4dfc7";
								jsonData.l_br_color = "#277f4e";

							}
							if ($('#zooomy-wishlist-counter').length){
								$("#zooomy-wishlist-counter span").replaceWith("<span>"+totalv+"</span>"); 

							
							}
							/*if ($('.zooomyIconval').length) {
								if (totalv > 0) {
									$('.zooomyIconval i.fa').addClass('fa-heart').removeClass('fa-heart-o');
								} 
							}*/

							$('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">').appendTo("body");

							if (jsonData.w_login == "yes") {
								$("body").append(
									'<a class="zooomy__hhrt" href="/pages/' +
									jsonData.p_link +
									'" style="position:fixed;bottom:100px;right:10px;width:48px; height:48px; line-height: 52px; border-radius: 100px; text-align: center; font-size: 20px;"><i class="fa fa-'+wish_icon+'" aria-hidden="true" ></i></a>'
								);
								$("<style>.zooomy__hhrt{z-index:9999;background:" + coll_f_color + "!important;color:" + jsonData.add_font_color + "!important;}</style>").appendTo("body");
							}
							$(
								"<style>body{position:relative;}.zoomywishid { width:100%;float: left;  padding: 0; }.zoomywishidheart { float: left; width: 100%; }.zooomywishmsg:hover .collnoitem {  }.zooomywishmsg .fa{margin-right:3px;}.zoomywishid .fa { font-size: 18px; }.zoomycheck{position:absolute;visibility:hidden;}p.zooomywishmsg .fa{margin:0; padding:2px 10px;margin:0;}p.collnoitem { float: left; width: 100%; padding: 10px 0; margin:0; }p.zooomywishmsg.zrmvbg{color:" +
								coll_e_color +
								"}p.zooomywishmsg.zadbg{color:" +
								coll_f_color +
								"}.zwishoverlay { z-index:99999;position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.7); transition: opacity 500ms; display: none; opacity: 0; } .zwishoverlay:target { display: block; opacity: 1; } .zwishlistmodal {  padding: 20px; border-radius: 5px; width: 30%; position: relative; transition: all 5s ease-in-out; } .zwishlistmodal h2 { margin-top: 0; color: #333; font-family: Tahoma, Arial, sans-serif; } .zwishlistmodal .close { position: absolute; top: 20px; right: 30px; transition: all 200ms; font-size: 30px; font-weight: bold; text-decoration: none; color: #333; } .zwishlistmodal .close:hover { color: #06D85F; } .zwishlistmodal .content { max-height: 30%; overflow: auto; } @media screen and (max-width: 700px){ .zwishlistmodal{ width: 70%; } }</style>"
							).appendTo("body");

							$(".zoomywishid").attr({
								 'role':"button",
							     'tabindex':"0",
							     'aria-pressed':"false",
							     'aria-label':"Add to wishlist",
							})

							$("<style>.card-wrapper .zoomywishid { width: auto; float: left; padding: 0; top: -10px; z-index: 9; position: absolute; right: 0; }</style>").appendTo("body");
							$("<style>").text(usercss == null ? "" : String(usercss)).appendTo("body");
							$("<style>").text(useraddedcss == null ? "" : String(useraddedcss)).appendTo("body");


							var alldata = {};
							if (jsonData.app_plan != "free") {
								if (getwishselector.length == 0) {} else {
									$(getwishselector).each(function() {
										var productid = $(this).attr("data-product-id");
										
										if (jsonData.itemadded[productid] == "yes") {
											var hearticon =
												"<div class='zoomywishidheart' style='position:relative;'><input type='checkbox' data-id='" +
												productid +
												"' class='zoomycheck checkbox-" +
												productid +
												"'   id='checkbox-" +
												productid +
												"'/><label for ='checkbox-" +
												productid +
												"'><p class='zooomywishmsg zooomywishmsg-" +
												productid +
												"'><i class='fa fa-"+wish_icon+"' aria-hidden='true'  aria-hidden='true' style='color: " +
												coll_f_color +
												";'></i></p></label></div>";
												$(".zoomywishid-" + productid).html(hearticon);
										}else{
												if($(".zoomywishid-" + productid).text().trim()===""){
				                  var hearticon =
													"<div class='zoomywishidheart' style='position:relative;'><input type='checkbox' data-id='" +
													productid +
													"' class='zoomycheck checkbox-" +
													productid +
													"' id='checkbox-" +
													productid +
													"'/><label for ='checkbox-" +
													productid +
													"'><p class='zooomywishmsg zooomywishmsg-" +
													productid +
													"'><i class='fa  fa-"+wish_icon+"-o'  aria-hidden='true' style='color: " +
													coll_e_color +
													";'></i></p></label></div>";
													$(".zoomywishid-" + productid).html(hearticon);
												}
			              }

											
											
									});
								}
							}

							if (customerid == "") {
							
								if (jsonData.w_login == "yes") {
									var myallwishlist = "";
									let data = [];
		               				if(callAjaxLen==1){
		    							$("body").on("click", ".zoomywishid", function(e) {
		    								
		    								e.preventDefault()
		    								let productid = $(this).attr("data-product-id");
		    								let handle = $(".zoomywishid-" + productid).attr("data-handle")??$(this).attr("data-product-id");
		    								let  vid = "";//$(".zoomywishid-" + productid).attr("data-variant")??$(this).attr("data-variant");
		    								let  vname = $(".zoomywishid-" + productid).attr("data-variantname")??$(this).attr("data-variantname");
		    								let  proprice = $(".zoomywishid-" + productid).attr("data-price")??$(this).attr("data-price");
		    								let  protitle = $(".zoomywishid-" + productid).attr("data-title")??$(this).attr("data-title");
		    								let  proimage = $(".zoomywishid-" + productid).attr("data-image")??$(this).attr("data-image");
		    
		    								alldata = {
		    									product_id: productid,
		    									product_handle: handle,
		    									vid: vid,
		    									vname: vname,
		    									proprice: proprice,
		    									protitle: protitle,
		    									proimage: proimage
		    								};
		    
		    								if (localStorage.getItem("myzooomy__wishlist") == undefined) {} else {
		    									let item = localStorage.getItem("myzooomy__wishlist");
		    									data = JSON.parse(item);
		    
		    								}
		    
		    								if ($(this).find("p.zadbg").length == 0) {
		    									$("#checkbox-" + productid).prop('checked',true)

		    									$(".zooomywishmsg-" + productid).replaceWith('<p class="zooomywishmsg zadbg zooomywishmsg-' + productid + '" style="cursor:pointer;"><i class="fa  fa-'+wish_icon+'" aria-hidden="true"  ></i></p>');
		    									var whiProductInfo = data.filter(function(hero) {
		    										return hero.product_id == productid;
		    									});
		    									if (whiProductInfo.length == 0) {
		    
		    										data.push(alldata);
		    									}
		    									$(".zwishfixed").append(
		    										"<div class='" +
		    										productid +
		    										"' style='width:25%;float:left;padding:10px;box-sizing:border-box;'><a class='rfw' data-id='" +
		    										productid +
		    										"'>x</a><div class='' style=''><a href='https://" +
		    										shop +
		    										"/products/" +
		    										handle +
		    										"?utm_source=zooomyWishlistApp' target='_blank'><img src='" +
		    										proimage +
		    										"' width='100'/</a><div class='zall_details'><p><a href='https://" +
		    										shop +
		    										"/products/" +
		    										handle +
		    										"' target='_blank'>" +
		    										protitle +
		    										"</a></p><span class='wish_price money' >" +
		    										proprice +
		    										"</span><div class='zbtn'><a href='https://" +
		    										shop +
		    										"/products/" +
		    										handle +
		    										"?utm_source=zooomyWishlistApp' target='_blank'>View Product</a></div></div></div></div>"
		    									);
		    									if (shop != "happily-ever-a.myshopify.com") {
		    										$.ajax({
														url: "/apps/wishlist/api/frontend/guest-wishlist",
														type:'post',
		    											data: {
		    												shop: shop,
		    												productid: productid,
		    												title: protitle,
		    												handle: handle,
		    												proimage: proimage,
		    												price: proprice,
		    												vname: vname,
		                            						vid: vid,
		    											},
		    											dataType: "json",
		    											async: "true",
		    											success: function(gjsonData) {},
		    										});
		    									}
		    								} else if ($(this).find("p.zadbg").length>0) {
		    									$("#checkbox-" + productid).prop('checked',false)
		    									$(".zooomywishmsg-" + productid).replaceWith('<p class="zooomywishmsg zrmvbg zooomywishmsg-' + productid + '" style="cursor:pointer;"><i class="fa  fa-'+wish_icon+'-o" aria-hidden="true"  ></i></p>');
		    									data = data.filter((product) => {
		    										return product.product_id != productid;
		    									});
		    									$("." + productid).remove();
		    								}
		    
		    								var myJSON = JSON.stringify(data);
		    
		    								localStorage.setItem("myzooomy__wishlist", myJSON);
		    
		    			                     if ($('#zooomy-wishlist-counter').length){
		    			                 
		    
		    								 document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>"+data.length+"</span>";  
		    
		    		                        }
		    		                        callAdsWishlist()
		    		                       if ($('.zooomyIconval').length) {
											    if (data.length > 0) {
											        $('.zooomyIconval i.fa').addClass('fa-heart').removeClass('fa-heart-o');
											    } else {
											        $('.zooomyIconval i.fa').addClass('fa-heart-o').removeClass('fa-heart');

											    }
											}
											    
		    							});
		                            }
									if (localStorage.getItem("myzooomy__wishlist") == undefined) {} else {
										let nnitem = localStorage.getItem("myzooomy__wishlist");
										let nndata = JSON.parse(nnitem);
										$.each(nndata, function(key, value) {
											var pidsall = value.product_id;
											hearticon =
												"<div class='zoomywishidheart' style='position:relative;'><input type='checkbox' data-id='" +
												pidsall +
												"' class='zoomycheck checkbox-" +
												pidsall +
												"'   id='checkbox-" +
												pidsall +
												"' checked='true'/><label for ='checkbox-" +
												pidsall +
												"'><p class='zooomywishmsg zadbg zooomywishmsg-" +
												pidsall +
												"'><i class='fa fa-"+wish_icon+"' aria-hidden='true' style='color: " +
												coll_f_color +
												";'></i></p></label</div>";
											$(".zoomywishid-" + pidsall).html(hearticon);
											$(".zwishfixed").append(
												"<div class='" +
												pidsall +
												"' style='width:25%;float:left;padding:10px;box-sizing:border-box;'><a class='rfw' data-id='" +
												pidsall +
												"'>x</a><div class='' style=''><a href='https://" +
												shop +
												"/products/" +
												value.product_handle +
												"?utm_source=zooomyWishlistApp' target='_blank'><img src='" +
												value.proimage +
												"' width='100'/</a><div class='zall_details'><p><a href='https://" +
												shop +
												"/products/" +
												value.product_handle +
												"?utm_source=zooomyWishlistApp' target='_blank'>" +
												value.protitle +
												"</a></p><span class='wish_price money' >" +
												value.proprice +
												"</span><div class='zbtn'><a href='https://" +
												shop +
												"/products/" +
												value.product_handle +
												"?utm_source=zooomyWishlistApp' target='_blank'>View Product</a></div></div></div></div>"
											);
										});
									}
									if ($('#zooomy-wishlist-counter').length){
								
				                       if (localStorage.getItem("myzooomy__wishlist") !== null || localStorage.getItem("myzooomy__wishlist") != null || localStorage.getItem("myzooomy__wishlist") != undefined) 
									      {
											var y = JSON.parse(localStorage.getItem("myzooomy__wishlist")).length;
									
											document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>"+y+"</span>";
										}
									}
									if ($('.zooomyIconval').length) {
										var y = JSON.parse(localStorage.getItem("myzooomy__wishlist")).length;

									    if (y > 0) {
									        $('.zooomyIconval i.fa').addClass('fa-heart').removeClass('fa-heart-o');
									    } else {
									        $('.zooomyIconval i.fa').addClass('fa-heart-o').removeClass('fa-heart');

									    }
									}

								} else {
									$("body").append(
										"<div class='zooomyloginrequest' id='zooomyloginrequestonce'><span style='margin-right:1rem; font-size:20px'><i class='fa fa-info-circle' aria-hidden='true'></i></span><a href='https://" + shop + "/account/login'>" + login_text + "</a> <span id='zloginrequestclose'><i class='fa fa-close' aria-hidden='true' ></i></span> </div>"
									);
									$("#zooomyloginrequestonce").each(function() {
										$('[id="' + this.id + '"]:gt(0)').remove();
									});
									$("body").on("click", ".zoomywishid", function(e) {
										var productid = $(this).attr("data-product-id");

										

										$(`<style>.zooomyloginrequest a{color:${ jsonData.l_f_color };text-decoration:none;}.zooomyloginrequest { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 99999; display: flex; align-items: center; gap: 10px; width: min(90%, 420px); padding: 18px 20px; background: ${jsonData.l_b_color}; color:${jsonData.l_f_color}; border-left: 4px solid ${jsonData.l_br_color}; border-radius: 10px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2); font-family: Arial, sans-serif; font-size: 15px; line-height: 1.5; animation: zooomyCenterIn 0.3s ease-out; } /* Info icon */ .zooomyloginrequest > span:first-child { flex-shrink: 0; margin-right: 0 !important; font-size: 20px !important; color:${jsonData.l_f_color}; } /* Login link */ .zooomyloginrequest a { flex: 1; color: ${jsonData.l_f_color}; text-decoration: none; font-weight: 500; } /* Close button */ #zloginrequestclose { flex-shrink: 0; margin-left: 5px; cursor: pointer; color: #777; font-size: 17px !important; } /* Center animation */ @keyframes zooomyCenterIn { from { opacity: 0; transform: translate(-50%, -45%); } to { opacity: 1; transform: translate(-50%, -50%); } } /* Mobile */ @media (max-width: 600px) { .zooomyloginrequest { width: calc(100% - 30px); padding: 16px; } }</style>`
										).appendTo("body");
										const $notification = $('#zooomyloginrequestonce');	

									
										 $notification.stop(true, true).fadeIn(100);

										// Automatically hide after 4 seconds
										setTimeout(function () {
											$notification.stop(true, true).fadeOut(1500);
										}, 5000);

										$("#zloginrequestclose").click(function() {
											$notification.stop(true, true).fadeOut(1500);
										});
										
									});
								}
							}

							if (customerid != "") {
								if (localStorage.getItem("myzooomy__wishlist") !== null) {
									if (localStorage.getItem("myzooomy__wishlist") == undefined) {} else {
										let nnitem = localStorage.getItem("myzooomy__wishlist");
										let nndata = JSON.parse(nnitem);

										$.each(nndata, function(key, value) {
											$.ajax({
											    url: "/apps/wishlist/api/frontend/save-data",
		                                        type:'post',
												data: {
													shop: Shopify.shop,
													productid: value.product_id,
													title: value.protitle,
													handle: value.product_handle,
													img: value.proimage,
													price: value.proprice,
													customerid: customerid,
													customername: customername,
													customer_email: customer_email,
												},
												dataType: "json",
												
												async: "true",
												success: function(ajsonData) {
													data = data.filter((product) => {
														return product.product_id != ajsonData.productid;
													});
												},
											});
										});
										localStorage.removeItem("myzooomy__wishlist");
									}
								}
		            if(callAjaxLen==1){
		    						$("body").on("click", ".zoomywishid", function(e) {
		    							var productid = $(this).attr("data-product-id");
		    								var handle = $(".zoomywishid-" + productid).attr("data-handle");
		    								var vid =  "";//$(".zoomywishid-" + productid).attr("data-variant");
		    								var vname = $(".zoomywishid-" + productid).attr("data-variantname");
		    								var proprice = $(".zoomywishid-" + productid).attr("data-price");
		    								var protitle = $(".zoomywishid-" + productid).attr("data-title");
		    								var proimage = $(".zoomywishid-" + productid).attr("data-image");

		    							if ($(".zooomywishmsg-" + productid + " i").is(".fa-"+wish_icon)) {
		                                
		    								$(".zooomywishmsg-" + productid).replaceWith('<p class="zooomywishmsg zrmvbg zooomywishmsg-' + productid + '" style="cursor:pointer;"><i class="fa fa-'+wish_icon+'-o" aria-hidden="true"  ></i></p>');
		    							}
		    							if ($(".zooomywishmsg-" + productid + " i").is(".fa-"+wish_icon+"-o")) {
		    								$(".zooomywishmsg-" + productid).replaceWith('<p class="zooomywishmsg  zooomywishmsg-' + productid + '" style="cursor:pointer;"><i class="fa fa-'+wish_icon+'" aria-hidden="true"  ></i></p>');
		    							}
		    							$.ajax({
		    								url: "/apps/wishlist/api/frontend/collecion-check",
											type: "POST",
		    								data: {
		    									shop: Shopify.shop,
		    									productid: productid,
		    									customerid: customerid,
		    									title: protitle,
												handle: handle,
												img: proimage,
												price: proprice,
												cval: cvalforcust,
												customer_name: customername,

		    								},
		    								dataType: "json",
		    								async: "true",
		    								success: function(njsonData) {
		    									var status = njsonData.done;
		    									var productid = njsonData.productid;
		    
		    
		    									if (status == "done") {
		    										$(".checkbox-" + productid).prop("checked", true);
		    										$(".zooomywishmsg-" + productid).replaceWith('<p class="zooomywishmsg zadbg zooomywishmsg-' + productid + '" style="cursor:pointer;"><i class="fa  fa-'+wish_icon+'" aria-hidden="true"  ></i></p>');
		    													if ($('#zooomy-wishlist-counter').length){
		    									     const container = document.getElementById('zooomy-wishlist-counter');
		    									     var newvalint = parseInt(container.innerText);
		    									     newvalint=newvalint+1;

		    
		    										document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>"+newvalint+"</span>";
		    									}
		    
		    
		    									}
		    									if (status == "ndone") {
		    										$(".checkbox-" + productid).prop("checked", false);
		    										$(".zooomywishmsg-" + productid).replaceWith('<p class="zooomywishmsg zrmvbg zooomywishmsg-' + productid + '" ><i class="fa  fa-'+wish_icon+'-o" aria-hidden="true" ></i> </p>');
		    										if ($('#zooomy-wishlist-counter').length){
		    									     	const container = document.getElementById('zooomy-wishlist-counter');
		    									     	     var newvalintnegative = parseInt(container.innerText);
		    									     newvalintnegative=newvalintnegative-1;
		    
		    											document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>"+newvalintnegative+"</span>";
		    										}
		    
		    									}
												if ($('.zooomyIconval').length) {
												    if (newtotalval > 0) {
												            $('.zooomyIconval i.fa').addClass('fa-'+wish_icon).removeClass('fa-'+wish_icon+'-o');
		                                                } 
		                                             else {
		                                                 $('.zooomyIconval i.fa').addClass('fa-'+wish_icon+'-o').removeClass('fa-'+wish_icon);
		                                              }
												}
		    								},
		    							});
		    							 callAdsWishlist()
		    							e.stopPropagation();
		    							return false;
		    						});
		                         } 
							} else {
								$("body").on("click", ".zoomywishid", function(e) {
									var productid = $(this).attr("data-product-id");
								});
							}

							callAdsWishlist(jsonData)

						},
					});



				}
				wishlist(callAjax);
				setTimeout(function() {
		    let checkWishList = [];
		    let getwishselectorLoad = $(".zoomywishid");

		    $(getwishselectorLoad).each(function() {
		        if ($(this).html().trim() == '') {
		            let WishIds = $(this).attr("data-product-id");
		            checkWishList.push(WishIds);
		        }
		    });

		    if (checkWishList.length > 0 && zooomyWishPlan != "free") {
		        callAjax++;
		        wishlist(callAjax);
		    }
		}, 1000);
		        if ($('#zooomy-wishlist-counter').length){
		          setTimeout(function() { 
		            var text = document.getElementById("zooomy-wishlist-counter").innerHTML;

		                        if(text == "00" || text=="")
		                        {
		                        document.getElementById("zooomy-wishlist-counter").innerHTML = "<span>0</span>"; 

		                        }

		           }, 300);
		 
		           }
				$(window).scroll(function() {
		  		 // console.log('..getwishselector....',getwishselector)
					if (getwishselector.length > 0) {
		               
						clearTimeout($.data(this, 'scrollTimer'));
						$.data(this, 'scrollTimer', setTimeout(function() {
							let checkWishList = [];
							let WishIds = ''
							let getwishselectorScroll = $(".zoomywishid");
							$(getwishselectorScroll).each(function() {
		                      
								if ($(this).html().trim() == '') {
		                         
									WishIds = $(this).attr("data-product-id");
		              console.log('..WishIds....',WishIds)
									checkWishList.push(WishIds);
								}
							});
							if (checkWishList.length > 0 && zooomyWishPlan!="free") {
		                      callAjax++;

								wishlist(callAjax);
							}

						}, 300));
					}
				});

				const intervalId = setInterval(() => {
			    	// console.log('..getwishselector....',getwishselector.length)
				    if (getwishselector.length > 0) {
		               
							
								let checkWishList = [];
								let WishIds = ''
								let getwishselectorScroll = $(".zoomywishid");
								$(getwishselectorScroll).each(function() {
			                      
									if ($(this).html().trim() == '') {
			                         
										WishIds = $(this).attr("data-product-id");
			              // console.log('..WishIds....',WishIds)
										checkWishList.push(WishIds);
									}
								});
								if (checkWishList.length > 0 && zooomyWishPlan!="free") {
			                      callAjax++;

									wishlist(callAjax);
								}

							
						}
				}, 5000);

				setTimeout(() => clearInterval(intervalId), 50000);

				function callAdsWishlist(callAdsWishlist=null){
					let iconsWishlist=$(".zoomywishidheart")

				    $.each(iconsWishlist, function() {
				        let  isSr0nly=$(this).find(".is-sr0nly");
				        if($(this).find(".fa-heart").length>0){
				            if(isSr0nly.length>0){
				                isSr0nly.text('Remove from Wishlist')
				            }else{
				                
				                $(this).find("label").append('<span class="is-sr0nly" style="display:none">Remove from Wishlist</span>')
				            }
				        }else{
				            if(isSr0nly.length>0){
				                isSr0nly.text('Add to Wishlist')
				            }else{
				                
				                $(this).find("label").append('<span class="is-sr0nly" style="display:none">Add to Wishlist</span>')
				            }
				        }
				       
				    });
				}
			}

			document.addEventListener('keydown', function (e) {
			  const button = e.target.closest('.zoomywishid');
			  if (button && (e.key === 'Enter' || e.key === ' ')) {
			    e.preventDefault();
			    button.click();
			  }
			});
		};
		var callAllfunctionC= function (jQuery) {
		    let shop= zooomyWish.shop??Shopify.shop;;


		    let customerid = zooomyWish.customerId??(meta.page.customerId ?? "");
		    let totalv = 0; 
		    let customeremail=""
		    if(jQuery(".zoomywishid").length>0){
		    	let pageName= zooomyWish.page??(meta.page.pageType??'')
		     		pageName=='cart'?setTimeout(zooomyColl(jQuery),100):zooomyColl(jQuery)
		    }
		}

		function reqJquery() {
		    if ("undefined" == typeof jQuery || !jQuery || 1 === parseInt(jQuery.fn.jquery) && 11 > parseFloat(jQuery.fn.jquery.replace(/^1\./, ""))) {
		        var o = document.getElementsByTagName("head")[0],
		            t = document.createElement("script");
		        t.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js", t.type = "text/javascript", t.onload = t.onreadystatechange = function() {
		            t.readyState ? "complete" !== t.readyState && "loaded" !== t.readyState || (t.onreadystatechange = null, callAllfunctionC(jQuery.noConflict(!0))) : callAllfunctionC(jQuery.noConflict(!0))
		        }, o.appendChild(t)
		    } else{  callAllfunctionC(jQuery) }
		}
		// "product" == meta.page.pageType ? setTimeout(reqJquery, 2000) : reqJquery();
		/*const myIntervalZooomyColl = setInterval(() => {
		  const stopElement = document.querySelector('.zoomywishid');
		  if(localStorage.getItem('ZWWproEmail')=='\x9Eée'){
		  	localStorage.removeItem("ZWWproEmail")
		  }
		  if (stopElement) {
		  	reqJquery()
		    // If the element is found, clear the interval to stop the timer
		    clearInterval(myIntervalZooomyColl);
		  }
		}, 500);*/



		// const intervalId = setInterval(() => {
		//     const productDivs = document.querySelectorAll('.zoomywishid');

		//     const allEmpty = [...productDivs].every(
		//         div => div.innerHTML.trim() === ''
		//     );

		//     if (allEmpty) {
		//         reqJquery()
		//     }
		// }, 1000);

		// setTimeout(() => clearInterval(intervalId), 2 * 60 * 1000);

		window.zooomyInitAttempts = window.zooomyInitAttempts || 0;

		function zooomyTryInitCollection() {
		    zooomyInitAttempts++;

		    const productDivs = document.querySelectorAll('.zoomywishid');

		    if (
		        productDivs.length > 0 &&
		        window.zooomyCollectionRequestMade === false
		    ) {
		        reqJquery();
		    }

		    if (
		        window.zooomyCollectionRequestMade === false &&
		        zooomyInitAttempts < 30
		    ) {
		        setTimeout(zooomyTryInitCollection, 500);
		    }
		}

		if (document.readyState === 'loading') {
		    document.addEventListener('DOMContentLoaded', function() {
		        setTimeout(zooomyTryInitCollection, 300);
		    });
		} else {
		    setTimeout(zooomyTryInitCollection, 300);
		}

		window.addEventListener('load', function() {
		    if (window.zooomyCollectionRequestMade === false) {
		        setTimeout(zooomyTryInitCollection, 500);
		        setTimeout(zooomyTryInitCollection, 1500);
		        setTimeout(zooomyTryInitCollection, 3000);
		    }
		});
})();		
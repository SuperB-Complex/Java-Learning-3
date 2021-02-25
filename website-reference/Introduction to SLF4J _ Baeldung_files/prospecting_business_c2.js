// Constats
const BANNER_WIDTH = 300;
const BANNER_HEIGHT = 250;

// Global variables.
var product_details_container;
var gwd_page_content;
var instant_ad_vars = {};
var feeds;
var isEnaFeed;
var productFeed;
var enaFeed;
var product_feeds = [];
var fTTracking;
var templateType;
var total_products = 0;

// Product class.
function Product(id, feed_id, is_ena) {
  // Public variables
  this.id = id;
  this.feed_id = feed_id;
  this.imageType;
  this.is_ena = is_ena;
  this.dataStringtoTrack;
  this.url;
  // Animating variables
  this.product_details_container;
  if(id > 0) {
    this.product_details_container = product_details_container.cloneNode(true);
    jQuery(product_details_container).after(this.product_details_container);
  }
  else {
    this.product_details_container = product_details_container;
  }
  this.product_details_container.id = "product_details_container_" + id;
  this.product_text_container = this.product_details_container.querySelector('.product_name_container');
  this.product_desc_container = this.product_details_container.querySelector('.product_header_container');
  this.cta_container = this.product_details_container.querySelector('.cta_container');
  this.mdf_text_container = this.product_details_container.querySelector('.mdf_container_2');
  // Mapping variables
  this.dell_logo_product = {};
  this.dell_logo_product['DELL'] = this.product_details_container.querySelector('#dell_logo_product');
  this.dell_logo_product['DT'] = this.product_details_container.querySelector('#dell_technologies_logo');
  this.dell_logo_product['SB'] = this.product_details_container.querySelector('#dell_small_business_logo');
  this.product_name = this.product_details_container.querySelector('.product_name');
  this.product_price = this.product_details_container.querySelector('.product_price');
  this.product_image = {};
  this.product_image.P = this.product_details_container.querySelector('#product_image_tall');
  this.product_image.L = this.product_details_container.querySelector('#product_image_wide');
  this.product_image.S = this.product_details_container.querySelector('#product_image_square');
  this.product_desc = this.product_details_container.querySelector('.product_header');
  this.cta_text = this.product_details_container.querySelector('.cta_text');
  this.legal = this.product_details_container.querySelector('.legal');
  this.overlay = this.product_details_container.querySelector('.overlay');
  this.overlay_x = this.product_details_container.querySelector('.overlay_x');
  this.overlay_text = this.product_details_container.querySelector('.overlay_text');
  this.mdf_logo = this.product_details_container.querySelector('#intel_badge');
  this.mdf_text = this.product_details_container.querySelector('.mdf_text_2');
}

// Initialize product.
Product.prototype.init = function() {
  var tl = new TimelineLite();
  tl.set(this.product_details_container, {autoAlpha: 0, visibility: 'hidden'});
  // tl.set(this.dell_logo_container, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.dell_logo_product['DELL'], {className: "+=gwd-page-content-display-none"});
  tl.set(this.dell_logo_product['DT'], {className: "+=gwd-page-content-display-none"});
  tl.set(this.dell_logo_product['SB'], {className: "+=gwd-page-content-display-none"});
  if(!this.is_ena) {
		TweenLite.set(this.dell_logo_product[templateType], {autoAlpha: 0, visibility: 'hidden', className: "-=gwd-page-content-display-none"});
	}
  tl.set(this.product_text_container, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.product_image.P, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.product_image.L, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.product_image.S, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.product_desc_container, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.cta_container, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.legal, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.overlay, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.mdf_logo, {autoAlpha: 0, visibility: 'hidden'});
  tl.set(this.mdf_text_container, {autoAlpha: 0, visibility: 'hidden'});
};

// Map products.
Product.prototype.map = function() {
  if(isEnaFeed) {
    feeds = (this.is_ena) ? enaFeed : productFeed;
  }
  this.imageType = ((this.is_ena) ? 'S' : feeds[this.feed_id].image_type2) || 'S';
  this.dell_logo_product[templateType].setAttribute('source', feeds[this.feed_id][instant_ad_vars.customVariable6]);
  this.mdf_logo.setAttribute('source', feeds[this.feed_id].vf_logo);
  this.mdf_text.innerHTML = feeds[this.feed_id].vf_desc;
  this.cta_text.innerHTML = feeds[this.feed_id].cta_txt;
  this.legal.innerHTML = feeds[this.feed_id].clickforlegaltext || "view legal";
  this.overlay_text.innerHTML = feeds[this.feed_id].legaloverlaytext;
  this.overlay_x.querySelector(".x").setAttribute("source", "assets/x.png");
  this.product_desc.innerHTML = feeds[this.feed_id][instant_ad_vars.customVariable10.split('|')[this.id]] || "";
  if(this.is_ena) {
    this.product_text_container.querySelector('.product_name').innerHTML = feeds[this.feed_id][instant_ad_vars.customVariable15] + " ";
    this.product_text_container.querySelector('.product_price').innerHTML = CustomVariableHelper.process(feeds[this.feed_id], instant_ad_vars.customVariable16);
    this.product_image[this.imageType].querySelector('.product_image').setAttribute('source', feeds[this.feed_id][instant_ad_vars.customVariable17]);
    this.url = feeds[this.feed_id][instant_ad_vars.customVariable18];
    this.dataStringtoTrack = "CLICK_DATA_FOR_SLIDE_" + this.id;
  }
  else {
    this.product_text_container.querySelector('.product_name').innerHTML = feeds[this.feed_id][instant_ad_vars.customVariable7] + " ";
    this.product_text_container.querySelector('.product_price').innerHTML = CustomVariableHelper.process(feeds[this.feed_id], instant_ad_vars.customVariable8);
    this.product_image[this.imageType].querySelector('.product_image').setAttribute('source', feeds[this.feed_id][instant_ad_vars.customVariable9]);
    this.url = feeds[this.feed_id][instant_ad_vars.customVariable11];
    this.dataStringtoTrack = feeds[this.feed_id].creative_set || "CLICK_DATA_FOR_SLIDE_" + this.id;
  }
};

// Product animate.
Product.prototype.animate = function(action) {
  var tl;
  switch(action) {
      case "SIFR": tl = this.slideInFromRight(); break;
      case "SOTL": tl = this.slideOutToLeft(); break;
      case "SIFL": tl = this.slideInFromLeft(); break;
      case "SOTR": tl = this.slideOutToRight(); break;
      case "SHOW_OFFER": tl = this.showOffer(); break;
      case "HIDE_OFFER": tl = this.hideOffer(); break;
      default: tl = new TimelineLite();
  }
  return tl;
};

// Slide in from right.
Product.prototype.slideInFromRight = function() {
  var tl = new TimelineLite();
  tl.to(this.product_details_container, 0, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right");
  tl.to(this.product_text_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right+=0.25");
  tl.fromTo(this.product_image[this.imageType], 0.5, {autoAlpha: 0, visibility: 'hidden', left: "+="+BANNER_WIDTH}, {autoAlpha: 1, visibility: 'visible', left: "-="+BANNER_WIDTH}, "slide_in_from_right");
  tl.to(this.product_desc_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right+=0.25");
  tl.to(this.cta_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right+=0.25");
  tl.to(this.legal, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right+=0.25");
  if(!this.is_ena) {
    tl.to(this.dell_logo_product[templateType], 0, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right");
    tl.to(this.mdf_logo, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right+=0.25");
    tl.to(this.mdf_text_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_right+=0.25");
  }
  return tl;
};

// Slide out to left.
Product.prototype.slideOutToLeft = function() {
  var tl = new TimelineLite();
  tl.to(this.product_text_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.product_image[this.imageType], 0.5, {autoAlpha: 0, visibility: 'hidden', left: "-="+BANNER_WIDTH}, "slide_out_to_left");
  tl.to(this.product_image[this.imageType], 0, {left: "+="+BANNER_WIDTH}, "slide_out_to_left+=0.5");
  tl.to(this.product_desc_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.cta_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.legal, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.dell_logo_product[templateType], 0, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.mdf_logo, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.mdf_text_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left");
  tl.to(this.product_details_container, 0, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_left+=0.5");
  return tl;
};

// Slide in from left.
Product.prototype.slideInFromLeft = function() {
  var tl = new TimelineLite();
  tl.to(this.product_details_container, 0, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left");
  tl.to(this.product_text_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left+=0.25");
  tl.fromTo(this.product_image[this.imageType], 0.5, {autoAlpha: 0, visibility: 'hidden', left: "-="+BANNER_WIDTH}, {autoAlpha: 1, visibility: 'visible', left: "+="+BANNER_WIDTH}, "slide_in_from_left");
  tl.to(this.product_desc_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left+=0.25");
  tl.to(this.cta_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left+=0.25");
  tl.to(this.legal, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left+=0.25");
  if(!this.is_ena) {
    tl.to(this.dell_logo_product[templateType], 0, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left");
    tl.to(this.mdf_logo, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left+=0.25");
    tl.to(this.mdf_text_container, 0.25, {autoAlpha: 1, visibility: 'visible'}, "slide_in_from_left+=0.25");
  }
  return tl;
};

// Slide out to right.
Product.prototype.slideOutToRight = function() {
  var tl = new TimelineLite();
  tl.to(this.product_text_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.product_image[this.imageType], 0.5, {autoAlpha: 0, visibility: 'hidden', left: "+="+BANNER_WIDTH}, "slide_out_to_right");
  tl.to(this.product_image[this.imageType], 0, {left: "-="+BANNER_WIDTH}, "slide_out_to_right+=0.5");
  tl.to(this.product_desc_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.cta_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.legal, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.dell_logo_product[templateType], 0, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.mdf_logo, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.mdf_text_container, 0.25, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right");
  tl.to(this.product_details_container, 0, {autoAlpha: 0, visibility: 'hidden'}, "slide_out_to_right+=0.5");
  return tl;
};

// Show offer
Product.prototype.showOffer = function() {
  var tl = new TimelineLite();
  tl.to(this.dell_logo_product[templateType], 0, {autoAlpha: 0, visibility: 'hidden'}, "show_offer");
  // if general offer
  tl.to(this.product_image[this.imageType], 0.5, {className: '+=product_image_offer'}, "show_offer");
    tl.to(this.product_text_container, 0.5, {autoAlpha: 0, visibility: 'hidden'}, "show_offer");
    tl.to(this.product_desc_container, 0.5, {autoAlpha: 0, visibility: 'hidden'}, "show_offer");
  //else
    // tl.to(this.product_text_container, 0.5, {className: '+=product_text_offer_container'})
  return tl;
};

// Hide offer
Product.prototype.hideOffer = function() {
  var tl = new TimelineLite();
  tl.to(this.dell_logo_product[templateType], 0, {autoAlpha: 1, visibility: 'visible'}, "show_offer");
  tl.to(this.product_image[this.imageType], 0, {className: '-=product_image_offer'});
  // tl.to(this.product_desc_container, 0, {autoAlpha: 1, visibility: 'visible'}, "show_offer");
  tl.to(this.product_text_container, 0, {className: '-=product_text_offer_container'}, 0.25);
  return tl;
};

// Product add user interactions.
Product.prototype.addUserInteractions = function() {
  this.legal.addEventListener('click', function() {
    TweenLite.to(this.overlay, 0, {autoAlpha: 1, visibility: 'visible'});
  }.bind(this));

  this.overlay_x.addEventListener('click', function() {
    TweenLite.to(this.overlay, 0, {autoAlpha: 0, visibility: 'hidden'});
  }.bind(this));
};

// Banner class.
function Banner() {
  // Private variables
  var feed_id = 0;
  // Public variables
  this.products = [];
  this.tl;
  this.uIEnable = false;
  this.current = -1;
  // Animating variables
  this.background = document.getElementById('background');
  this.background_2 = document.getElementById('background_2');
  this.intro_headline_container = document.getElementById('intro_headline_container');
  this.product_image_square_intro = document.getElementById('product_image_square_intro');
  this.cta_container = document.getElementById('cta_intro');
  this.mdf_text_container = document.getElementById('mdf_text_intro');
  this.mdf_logo = document.getElementById('intel_badge_intro');
  this.white_logo_box = document.getElementById('white_logo_box');
  this.headline_offer = document.getElementById('banner_headline_container');
  this.circle_and_lines_container = document.getElementById('circle_and_lines_container');
  this.offer_text_container = document.getElementById('offer_text_container');
  this.arrow_left = document.querySelector('.arrow_left');
  this.arrow_right = document.querySelector('.arrow_right');
  // Mapping variables
  this.dell_logo_intro = {};
  this.dell_logo_intro['DELL'] = document.getElementById('dell_logo_intro');
  this.dell_logo_intro['DT'] = document.getElementById('dell_technologies_logo_intro');
  this.dell_logo_intro['SB'] = document.getElementById('dell_small_business_logo_intro');
  this.dell_logo_outro = {};
  this.dell_logo_outro['DELL'] = document.getElementById('dell_logo_outro');
  this.dell_logo_outro['DT'] = document.getElementById('dell_technologies_logo_outro');
  this.dell_logo_outro['SB'] = document.getElementById('dell_small_business_logo_outro');
  this.headline_small = this.intro_headline_container.querySelector('.headline_small');
  this.headline_large = this.intro_headline_container.querySelector('.headline_large');
  this.square_intro = this.product_image_square_intro.querySelector('.square_intro');
  this.cta_text = this.cta_container.querySelector('.cta_text');
  this.mdf_text = this.mdf_text_container.querySelector('.mdf_text_2');
  this.circle_and_lines_image = this.circle_and_lines_container.querySelector('.circle_and_lines_image');
  this.headline = this.headline_offer.querySelector('.headline');
  this.offer_text = this.offer_text_container.querySelector('.offer_text');
  // Products
  for(var i=0; i<3; i++) {
    var is_ena = (instant_ad_vars.enaPosition && instant_ad_vars.enaPosition == (i+1));
    this.products.push(new Product(i, (is_ena ? 0 : feed_id), is_ena));
    if(!is_ena) {
			if(feed_id <= feeds.length-1) {
				product_feeds.push(isEnaFeed ? productFeed[feed_id]: feeds[feed_id]);
			}
      feed_id++;
			total_products++;
    }
  }
}

// Initialize animation.
Banner.prototype.init = function() {
  this.tl = new TimelineLite();
  this.tl.set(this.dell_logo_intro['DELL'], {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.dell_logo_intro['DT'], {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.dell_logo_intro['SB'], {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.dell_logo_intro[templateType], {autoAlpha:1, visibility: 'visible'});
  this.tl.set(this.intro_headline_container, {autoAlpha:0, visibility: 'hidden', left: '-='+(BANNER_WIDTH)});
  this.tl.set(this.product_image_square_intro, {autoAlpha:0, visibility: 'hidden', left: '+='+(BANNER_WIDTH)});
  this.tl.set(this.headline_offer, {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.circle_and_lines_container, {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.dell_logo_outro['DELL'], {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.dell_logo_outro['DT'], {autoAlpha:0, visibility: 'hidden'});
  this.tl.set(this.dell_logo_outro['SB'], {autoAlpha:0, visibility: 'hidden'});
	this.tl.set(this.background_2, {autoAlpha:0, visibility: 'hidden'});
  for(var i=0; i<3; i++) {
    this.products[i].init();
  }
};

// Map banner.
Banner.prototype.map = function() {
  if(instant_ad_vars.backgroundImage1) {
		this.background.setAttribute('source', instant_ad_vars.backgroundImage1);
	}
  if(instant_ad_vars.backgroundImage2) {
		this.background_2.setAttribute('source', instant_ad_vars.backgroundImage2);
	}
  this.dell_logo_intro[templateType].setAttribute('source', feeds[0][instant_ad_vars.customVariable1]);
  this.headline_small.innerHTML = feeds[0][instant_ad_vars.customVariable2];
	this.headline_large.innerHTML = feeds[0][instant_ad_vars.customVariable3];
	if(feeds[0][instant_ad_vars.customVariable4]) {
  	this.square_intro.setAttribute('source', feeds[0][instant_ad_vars.customVariable4]);
	}
  this.dell_logo_outro[templateType].setAttribute('source', feeds[0][instant_ad_vars.customVariable12]);
  this.headline.innerHTML = feeds[0][instant_ad_vars.customVariable14];
  this.offer_text.innerHTML = CustomVariableHelper.process(feeds[0], instant_ad_vars.customVariable13);
    this.cta_text.innerHTML = feeds[0].cta_txt;
  if(!isEnaFeed) {
    var highestScoreMdfIndex = getGenericMdfBadge(feeds);
    this.mdf_logo.setAttribute('source', feeds[highestScoreMdfIndex].vf_logo);
    this.mdf_text.innerHTML = feeds[highestScoreMdfIndex].vf_desc;
  } else {
    var highestScoreMdfIndex = getGenericMdfBadge(productFeed);
    this.mdf_logo.setAttribute('source', productFeed[highestScoreMdfIndex].vf_logo);
    this.mdf_text.innerHTML = productFeed[highestScoreMdfIndex].vf_desc;
}

  this.circle_and_lines_image.setAttribute('source', 'assets/circle_and_lines.png');
  for(var i=0; i<3; i++) {
    this.products[i].map();
  }
};

// Animate banner.
Banner.prototype.animate = function() {
  this.tl = new TimelineLite();
  this.tl.to(this.intro_headline_container, 0.5, {autoAlpha:1, visibility: 'visible', left: '+='+(BANNER_WIDTH)}, "intro_frame");
  this.tl.to(this.product_image_square_intro, 0.5, {autoAlpha:1, visibility: 'visible', left: '-='+(BANNER_WIDTH)}, "intro_frame");
  this.tl.to(this.intro_headline_container, 0.5, {autoAlpha:0, visibility: 'hidden', left: '-='+(BANNER_WIDTH)}, "intro_frame+=2.5");
  this.tl.to(this.product_image_square_intro, 0.5, {autoAlpha:0, visibility: 'hidden', left: '-='+(BANNER_WIDTH)}, "intro_frame+=2.5");
  this.tl.to(this.dell_logo_intro[templateType], 0, {autoAlpha:0, visibility: 'hidden'}, "intro_frame+=2.5");
  this.tl.to(this.cta_container, 0.5, {autoAlpha:0, visibility: 'hidden'}, "intro_frame+=2.5");
  this.tl.to(this.mdf_text_container, 0.5, {autoAlpha:0, visibility: 'hidden'}, "intro_frame+=2.5");
  this.tl.to(this.mdf_logo, 0.5, {autoAlpha:0, visibility: 'hidden'}, "intro_frame+=2.5");
  this.tl.to(this.white_logo_box, 0.5, {autoAlpha:0, visibility: 'hidden'}, "intro_frame+=2.5");
	this.tl.to(this.background, 0, {autoAlpha:0, visibility: 'hidden'}, "intro_frame+=2.5");
	this.tl.to(this.background_2, 0, {autoAlpha:1, visibility: 'visible'}, "intro_frame+=2.5");
  for(var i=0; i<4; i++) {
    this.tl.add(TweenLite.delayedCall((i+1)*2.5, this.moveRight.bind(this)), 0);
  }
};

// Move left
Banner.prototype.moveLeft = function() {
  this.uIEnable = false;
  var tl;
  var prev = this.current;
  this.current = (this.current + 3) % 4;
  var current = this.current;
  if(prev === 3) {
    this.hideOffer();
    var prev = this.current;
    this.current = (this.current + 3) % 4;
    var current = this.current;
    this.products[prev].animate("HIDE_OFFER");
  }
  this.products[prev].animate("SOTR");
  tl = this.products[current].animate("SIFL");
  tl.call(function() {
    this.uIEnable = true;
  }.bind(this));
  return tl;
};

// Move right
Banner.prototype.moveRight = function() {
  this.uIEnable = false;
  var tl;
  var prev = this.current;
  this.current = (this.current + 1) % 4;
  var current = this.current;
  if(current === 3) {
    // outro frame
    tl = this.products[current-1].animate("SHOW_OFFER");
    this.showOffer();
  }
  else {
    if(prev >= 0) {
      this.products[prev].animate("SOTL");
    }
    tl = this.products[current].animate("SIFR");
  }
  tl.call(function() {
    this.uIEnable = true;
  }.bind(this));
  return tl;
};

// Banner show offer.
Banner.prototype.showOffer = function() {
  var tl = new TimelineLite();
  this.tl.set(this.dell_logo_outro[templateType], {autoAlpha:1, visibility: 'visible'});
  tl.fromTo(this.headline_offer, 0.5, {autoAlpha: 0, visibility: 'hidden', left: "+="+BANNER_WIDTH}, {autoAlpha: 1, visibility: 'visible', left: "-="+BANNER_WIDTH}, "show_offer");
  tl.fromTo(this.circle_and_lines_container, 0.5, {autoAlpha: 0, visibility: 'hidden', left: "+="+BANNER_WIDTH}, {autoAlpha: 1, visibility: 'visible', left: "-="+BANNER_WIDTH}, "show_offer");
};

// Banner hide offer.
Banner.prototype.hideOffer = function() {
  var tl = new TimelineLite();
  this.tl.set(this.dell_logo_outro[templateType], {autoAlpha:0, visibility: 'hidden'});
  tl.to(this.headline_offer, 0.5, {autoAlpha: 0, visibility: 'hidden'}, "hide_offer");
  tl.to(this.circle_and_lines_container, 0.5, {autoAlpha: 0, visibility: 'hidden'}, "hide_offer");
};

// Add user interactions.
Banner.prototype.addUserInteractions = function() {
  var arrow_move = false;
  var tl = new TimelineLite();
  gwd_page_content.addEventListener('mouseenter', function() {
    if(this.current < 0 || arrow_move) {
      return;
    }
    arrow_move = true;
    tl.clear();
    if(this.current >= 1) {
      tl.add(TweenLite.fromTo(this.arrow_left, 0.4, {autoAlpha: 0, visibility: 'hidden', top: "+="+(BANNER_HEIGHT/6)}, {autoAlpha: 1, visibility: 'visible', top: "-="+(BANNER_HEIGHT/6), onComplete: function() {
        arrow_move = false;
      }}), "arrow_move");
    }
    if(this.current <= 2) {
      tl.add(TweenLite.fromTo(this.arrow_right, 0.4, {autoAlpha: 0, visibility: 'hidden', top: "+="+(BANNER_HEIGHT/6)}, {autoAlpha: 1, visibility: 'visible', top: "-="+(BANNER_HEIGHT/6), onComplete: function() {
        arrow_move = false;
      }}), "arrow_move");
    }
  }.bind(this));

  gwd_page_content.addEventListener('mouseleave', function() {
    tl.progress(1).play();
    TweenLite.to(this.arrow_left, 0.5, {autoAlpha: 0, visibility: 'hidden'});
    TweenLite.to(this.arrow_right, 0.5, {autoAlpha: 0, visibility: 'hidden'});
  }.bind(this));

  this.arrow_left.addEventListener('click', function() {
    if(!this.uIEnable || this.current <= 0) {
      return;
    }
    this.tl.clear();
    this.moveLeft();
    if(this.current <= 0) {
      TweenLite.to(this.arrow_left, 0.5 , {autoAlpha: 0, visibility: 'hidden'});
    }
    if(this.current <= 1) {
      TweenLite.to(this.arrow_right, 0.5 , {autoAlpha: 1, visibility: 'visible'});
    }
  }.bind(this));

  this.arrow_right.addEventListener('click', function() {
    if(!this.uIEnable || this.current >= 3) {
      return;
    }
    this.tl.clear();
    this.moveRight();
    if(this.current >= 1) {
      TweenLite.to(this.arrow_left, 0.5 , {autoAlpha: 1, visibility: 'visible'});
    }
    if(this.current >= 3) {
      TweenLite.to(this.arrow_right, 0.5 , {autoAlpha: 0, visibility: 'hidden'});
    }
  }.bind(this));

  gwd_page_content.addEventListener('click', function(event) {
    var product_index = (this.current <= -1) ? 0 : Math.min(this.current, 2);
    if(event.target.className === "legal" || event.target.className === "x" || jQuery(event.target).parents(".x").length > 0 || event.target.className.indexOf("arrow_right") > -1  || event.target.className.indexOf("arrow_left") > -1) return;
    // Call click state event.
    var dataStringToTrackOnClick = this.products[product_index].dataStringtoTrack;
    //Tracker.clickTrackEvent(dataStringToTrackOnClick);
    fTTracking.addQueryVarToClickTags("ft_custom", dataStringToTrackOnClick);
    myFT.clickTag(product_index+1, this.products[product_index].url);
  }.bind(this));

  // Add user interactions to products.
  for(var i=0; i<3; i++) {
    this.products[i].addUserInteractions();
  }
};

// Success callback.
function main(feedsIn) {
  if(feedsIn.length === 0) {
    error();
    return;
  }

  setTimeout(function() {
    // gwd_page_content.
    gwd_page_content = document.querySelector('.gwd-page-content');
    // init ft tracking.
    fTTracking = new FTTracking();
    // Initialize instantAds
    instant_ad_vars = myFT.instantAds;
    // insertCSS
    if(instant_ad_vars.insertCSS) {
      myFT.insertCSS(instant_ad_vars.insertCSS);
    }
    // Set templateType
    templateType = instant_ad_vars.templateType.toUpperCase() || "DELL";
        // Set feeds.
    feeds = feedsIn;
    enaFeed = feeds.filter(function(productDetails) {
      return (productDetails.product_type === "ena");
    });
    if(enaFeed.length > 0) {
      isEnaFeed = true;
      productFeed = feeds.filter(function(productDetails) {
        return (productDetails.product_type !== "ena");
      });
    } else {
      isEnaFeed = false;
    }

    // Crete Custom Variables Helper instance
    var customVariableHelper = new CustomVariableHelper({
	    'customVariable1': 'dell_logo1',
	    'customVariable2': 'headertext1',
	    'customVariable3': 'headertext2',
	    'customVariable4': 'image1',
	    'customVariable5': 'url',
	    'customVariable6': 'dell_logo1',
	    'customVariable7': 'model_name',
	    'customVariable8': '[<br>]+currency+price_now',
	    'customVariable9': 'prod_image2',
	    'customVariable10': 'producttext3|producttext4|producttext5',
      'customVariable11': 'url',
	    'customVariable12': 'dell_logo1',
	    'customVariable13': 'producttext1',
	    'customVariable14': 'producttext2',
	    'customVariable15': 'ena_modelnametext',
	    'customVariable16': '[<br>]+ena_currencypricetext',
	    'customVariable17': 'ena_productimage',
	    'customVariable18': 'ena_url'
	  });
    // Clean custom variables.
    customVariableHelper.clean();
    // product container.
    product_details_container = document.getElementById('product_details_container');
    if(!product_details_container) {
      error();
      return;
    }
    // Create banner instance.
    var banner = new Banner();
    // Initialize banner.
    banner.init();
    // banner map
    banner.map();
    // Add user interactions.
    banner.addUserInteractions();
		// track products.
    fTTracking.trackProducts(product_feeds, 'creative_set', 'url');
    // Add image script.
    var script = document.createElement('script');
    script.src = "gwdimage_min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
    // Display content.
    setTimeout(function() {
      gwd_page_content.classList.remove('gwd-page-content-display-none');
    }, 50);
    // Animate banner.
    setTimeout(function() {
      banner.animate();
    }, 50);
  });
}

// Error callback.
function error(error) {
  // Handle error by displaying default banner image.
  document.querySelector('.gwd-page-content').innerHTML = '';
  document.querySelector('.gwd-page-content').style.backgroundImage = 'url('+ myFT.instantAds.backupImage +')';
  document.querySelector('.gwd-page-content').classList.remove('gwd-page-content-display-none');
}

/**
  * Handles the event that is dispatched after the Ad has been
  * initialized and before the default page of the Ad is shown.
  */
function handleAdInitialized(event) {
  setTimeout(function() {
    var ftFeed = new FTFeed(myFT);
    ftFeed.getFeed(main, error);
    // main();
  }, 0);
}
// Event handler.
window.addEventListener('adinitialized', handleAdInitialized, false);
// InstantAds event handler.
var adInit = (function() {
  var execute = false;
  return function() {
    if(execute) {
      var gwdAd = document.getElementById('gwd-ad');
      // Initialize an ad.
      setTimeout(function() {
        gwdAd.initAd();
      }, 0);
    }
    execute = true;
  }
})();
myFT.on('instantads', adInit);
// adInit();
window.addEventListener('WebComponentsReady', adInit, false);

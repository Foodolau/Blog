(window.vcvWebpackJsonp4x=window.vcvWebpackJsonp4x||[]).push([[0],{"./node_modules/raw-loader/index.js!./singleImage/editor.css":function(e,t){e.exports=".vce-single-image-container {\n  min-height: 1em;\n}\n\n.vce-single-image canvas {\n  max-width: 100%;\n  vertical-align: top;\n}\n\n.vce-single-image.vcvhelper {\n  display: inline-block;\n  vertical-align: top;\n}"},"./node_modules/raw-loader/index.js!./singleImage/styles.css":function(e,t){e.exports="a.vce-single-image-inner {\n  color: transparent;\n  border-bottom: 0;\n  text-decoration: none;\n  box-shadow: none;\n}\n\na.vce-single-image-inner:hover,\na.vce-single-image-inner:focus {\n  text-decoration: none;\n  box-shadow: none;\n  border-bottom: 0;\n}\n\n.vce-single-image-inner {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 1;\n  max-width: 100%;\n}\n\n.vce-single-image-wrapper {\n  display: inline-block;\n  max-width: 100%;\n  overflow: hidden;\n  vertical-align: top;\n}\n\n.vce-single-image-wrapper img {\n  vertical-align: top;\n  max-width: 100%;\n}\n\n.vce-single-image--border-rounded {\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.vce-single-image--border-round {\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.vce-single-image--size-custom {\n  background-size: cover;\n  background-position: center;\n  max-width: 100%;\n}\n\n.vce-single-image--size-custom::after {\n  content:'';\n  display: block;\n  padding-bottom: 66.66%;\n}\n\n.vce-single-image--border-round.vce-single-image--size-custom::after {\n  padding-bottom: 100%;\n}\n\n.vce-single-image--size-custom .vce-single-image {\n  opacity: 0;\n  position: absolute;\n  max-width: 100%;\n  height: auto;\n}\n\n.vce-single-image--align-center {\n  text-align: center;\n}\n\n.vce-single-image--align-right {\n  text-align: right;\n}\n\n.vce-single-image--align-left {\n  text-align: left;\n}\n\n.vce-single-image-wrapper figure {\n  margin: 0;\n}\n\n.vce-single-image-wrapper figcaption {\n  font-style: italic;\n  margin-top: 10px;\n}\n\n.vce-single-image {\n  position: relative;\n}\n\n.vce-single-image-container .vce-single-image-inner .vce-single-image {\n  box-shadow: none;\n}\n"},"./singleImage/component.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=d(a("./node_modules/babel-runtime/helpers/extends.js")),n=d(a("./node_modules/babel-runtime/helpers/typeof.js")),l=d(a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js")),s=d(a("./node_modules/babel-runtime/helpers/classCallCheck.js")),o=d(a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js")),r=d(a("./node_modules/babel-runtime/helpers/createClass.js")),c=d(a("./node_modules/babel-runtime/helpers/inherits.js")),u=d(a("./node_modules/react/index.js")),g=d(a("./node_modules/vc-cake/index.js"));function d(e){return e&&e.__esModule?e:{default:e}}var m=g.default.getService("api"),p=g.default.getService("renderProcessor"),v=function(e){function t(e){(0,s.default)(this,t);var a=(0,o.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.promise=null,a.state={imgElement:null,parsedWidth:null,parsedHeight:null,naturalWidth:null,naturalHeight:null},a.setImage=a.setImage.bind(a),a.setImageState=a.setImageState.bind(a),a.setError=a.setError.bind(a),a}return(0,c.default)(t,e),(0,r.default)(t,null,[{key:"drawImageProp",value:function(e,t,a,i,n,l,s,o){2===arguments.length&&(a=i=0,n=e.canvas.width,l=e.canvas.height),s="number"==typeof s?s:.5,o="number"==typeof o?o:.5,s<0&&(s=0),o<0&&(o=0),s>1&&(s=1),o>1&&(o=1);var r=t.width,c=t.height,u=Math.min(n/r,l/c),g=r*u,d=c*u,m=void 0,p=void 0,v=void 0,h=void 0,b=1;Math.round(g)<n&&(b=n/g),Math.round(d)<l&&(b=l/d),p=(c-(h=c/((d*=b)/l)))*o,(m=(r-(v=r/((g*=b)/n)))*s)<0&&(m=0),p<0&&(p=0),v>r&&(v=r),h>c&&(h=c),e.imageSmoothingQuality="high",e.drawImage(t,m,p,v,h,a,i,n,l)}}]),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.promise=new window.Promise(function(t,a){e.resolve=t,e.setImage(e.props)}),p.add(this.promise)}},{key:"componentWillUnmount",value:function(){t.image&&t.image.removeEventListener("load",this.setImageState),t.image&&t.image.removeEventListener("error",this.setError)}},{key:"componentWillReceiveProps",value:function(e){this.setImage(e)}},{key:"parseSize",value:function(e,t,a,i){var l=!0;"string"==typeof e?e=e.replace(/\s/g,"").replace(/px/g,"").toLowerCase().split("x"):"object"===(void 0===e?"undefined":(0,n.default)(e))&&(l=e.crop,e=[e.width,e.height]),a=parseInt(a),i=parseInt(i);var s=parseInt(e[0])<a,o=parseInt(e[1])<i;if(l)e[0]=parseInt(e[0])<a?parseInt(e[0]):a,e[1]=parseInt(e[1])<i?parseInt(e[1]):i;else{if(e[0]=s?parseInt(e[0]):a,e[1]=o?parseInt(e[1]):i,s&&!o){var r=e[0]/a;e[1]=parseInt(i*r)}if(o&&!s){var c=e[1]/i;e[0]=parseInt(a*c)}if(o&&s)if(i<a){var u=e[0]/a;e[1]=parseInt(i*u)}else{var g=e[1]/i;e[0]=parseInt(a*g)}}if(t){var d=e[0]>=e[1]?e[1]:e[0];e={width:d,height:d}}else e={width:e[0],height:e[1]};return e}},{key:"checkRelatedSize",value:function(e){var t=null;return window.vcvImageSizes&&window.vcvImageSizes[e]&&(t=window.vcvImageSizes[e]),t}},{key:"getSizes",value:function(e,t){var a=e.size,i=e.shape,n="";return{width:(n=(a=a.replace(/\s/g,"").replace(/px/g,"").toLowerCase()).match(/\d+(x)\d+/)?this.parseSize(a,"round"===i,t.width,t.height):(n=this.checkRelatedSize(a))?this.parseSize(n,"round"===i,t.width,t.height):this.parseSize({width:t.width,height:t.height},"round"===i,t.width,t.height)).width,height:n.height}}},{key:"setImage",value:function(e){var a=this.getImageUrl(e.atts.image);t.image&&t.image.removeEventListener("load",this.setImageState),t.image&&t.image.removeEventListener("error",this.setError),t.image=new window.Image,t.image.addEventListener("load",this.setImageState),t.image.addEventListener("error",this.setError),a?t.image.src=a:this.setError(),a||this.setState({imgElement:null,parsedWidth:null,parsedHeight:null,naturalWidth:null,naturalHeight:null})}},{key:"setImageState",value:function(e){var t=this,a=e.currentTarget,i=this.getSizes(this.props.atts,a);this.setState({imgElement:e.currentTarget,parsedWidth:i.width,parsedHeight:i.height,naturalWidth:a.width,naturalHeight:a.height},function(){t.resolve&&t.resolve(!0)})}},{key:"setError",value:function(){this.resolve&&this.resolve(!1)}},{key:"resizeImage",value:function(){var e=this.state,a=e.imgElement,i=e.parsedWidth,n=e.parsedHeight,l=e.naturalWidth,s=e.naturalHeight;if(this.canvas){var o=this.canvas.getContext("2d");a?(this.canvas.width=i,this.canvas.height=n,this.canvas.naturalWidth=l,this.canvas.naturalHeight=s,t.drawImageProp(o,a,0,0,i,n,.5,.5)):o.clearRect(0,0,i,n)}}},{key:"getImageShortcode",value:function(e){var t=e.props,a=e.classes,i=e.isDefaultImage,n=e.src,l='[vcvSingleImage class="'+a+'" data-width="'+(this.state.parsedWidth||0)+'" data-height="'+(this.state.parsedHeight||0)+'" src="'+n+'" data-img-src="'+t["data-img-src"]+'" alt="'+t.alt+'" title="'+t.title+'"';return i&&(l+=' data-default-image="true"'),l+="]"}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.atts,l=t.editor,s=n.image,o=n.shape,r=n.clickableOptions,c=n.showCaption,g=n.customClass,d=n.size,m=n.alignment,p=n.metaCustomId,v="vce-single-image-container",h="vce-single-image-inner",b={},f={},w={},I="div",y={},x=this.getImageUrl(s);if(y["data-img-src"]=x,y.alt=s&&s.alt?s.alt:"",y.title=s&&s.title?s.title:"","string"==typeof g&&g&&(v+=" "+g),"url"===r&&s&&s.link&&s.link.url){I="a";var k=s.link,S=k.url,z=k.title,E=k.targetBlank,j=k.relNofollow;b={href:S,title:z,target:E?"_blank":void 0,rel:j?"nofollow":void 0}}else"imageNewTab"===r?(I="a",b={href:x,target:"_blank"}):"lightbox"===r?(I="a",b={href:x,"data-lightbox":"lightbox-"+a}):"zoom"===r?h+=" vce-single-image-zoom-container":"photoswipe"===r&&(I="a",b={href:x,"data-photoswipe-image":a,"data-photoswipe-index":0},w["data-photoswipe-item"]="photoswipe-"+a,c&&(b["data-photoswipe-caption"]=s.caption),f["data-photoswipe-gallery"]=a);m&&(v+=" vce-single-image--align-"+m),"rounded"===o&&(h+=" vce-single-image--border-rounded"),"round"===o&&(h+=" vce-single-image--border-round"),b.key="customProps:"+a+"-"+x+"-"+r+"-"+o+"-"+d,p&&(f.id=p);var _=this.applyDO("all"),C=null;s&&s.caption&&(C=u.default.createElement("figcaption",null,s.caption));var O=s&&s.urls&&s.urls.length?s.urls[0]:s;O&&O.filter&&"normal"!==O.filter&&(h+=" vce-image-filter--"+O.filter);var W="",L={props:y,classes:"vce-single-image",isDefaultImage:!(s&&s.id),src:x};return x&&(W=u.default.createElement("span",(0,i.default)({className:"vce-single-image vcvhelper"},y,{"data-vcvs-html":this.getImageShortcode(L)}),u.default.createElement("canvas",{ref:function(t){e.canvas=t}}))),"full"===d&&"round"!==o&&(W=u.default.createElement("img",(0,i.default)({className:"vce-single-image",src:x},y))),this.resizeImage(),u.default.createElement("div",(0,i.default)({className:v},l,f),u.default.createElement("div",(0,i.default)({className:"vce vce-single-image-wrapper"},w,{id:"el-"+a},_),u.default.createElement("figure",null,u.default.createElement(I,(0,i.default)({},b,{className:h,ref:"imageContainer"}),W),C)))}}]),t}(m.elementComponent);v.image=null,t.default=v},"./singleImage/index.js":function(e,t,a){"use strict";var i=l(a("./node_modules/vc-cake/index.js")),n=l(a("./singleImage/component.js"));function l(e){return e&&e.__esModule?e:{default:e}}(0,i.default.getService("cook").add)(a("./singleImage/settings.json"),function(e){e.add(n.default)},{css:a("./node_modules/raw-loader/index.js!./singleImage/styles.css"),editorCss:a("./node_modules/raw-loader/index.js!./singleImage/editor.css")},"")},"./singleImage/settings.json":function(e){e.exports={image:{type:"attachimage",access:"public",value:"single-image.jpg",options:{label:"Image",multiple:!1,defaultValue:"single-image.jpg",onChange:{rules:{clickableOptions:{rule:"value",options:{value:"url"}}},actions:[{action:"attachImageUrls"}]},url:!1,imageFilter:!0}},shape:{type:"buttonGroup",access:"public",value:"square",options:{label:"Shape",values:[{label:"Square",value:"square",icon:"vcv-ui-icon-attribute-shape-square"},{label:"Rounded",value:"rounded",icon:"vcv-ui-icon-attribute-shape-rounded"},{label:"Round",value:"round",icon:"vcv-ui-icon-attribute-shape-round"}]}},designOptions:{type:"designOptions",access:"public",value:{},options:{label:"Design Options"}},editFormTab1:{type:"group",access:"protected",value:["clickableOptions","showCaption","image","shape","size","alignment","metaCustomId","customClass"],options:{label:"General"}},metaEditFormTabs:{type:"group",access:"protected",value:["editFormTab1","designOptions"]},relatedTo:{type:"group",access:"protected",value:["General"]},metaOrder:{type:"number",access:"protected",value:4},customClass:{type:"string",access:"public",value:"",options:{label:"Extra class name",description:"Add an extra class name to the element and refer to it from Custom CSS option."}},size:{type:"string",access:"public",value:"large",options:{label:"Size",description:"Enter image size (Example: 'thumbnail', 'medium', 'large', 'full' or other sizes defined by theme). Alternatively enter size in pixels (Example: 200x100 (Width x Height))."}},clickableOptions:{type:"dropdown",access:"public",value:"",options:{label:"OnClick action",values:[{label:"None",value:""},{label:"Lightbox",value:"lightbox"},{label:"PhotoSwipe",value:"photoswipe"},{label:"Zoom",value:"zoom"},{label:"Open Image in New Tab",value:"imageNewTab"},{label:"Link selector",value:"url"}]}},showCaption:{type:"toggle",access:"public",value:!1,options:{label:"Show image caption in gallery view",onChange:{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},actions:[{action:"toggleVisibility"}]}}},alignment:{type:"buttonGroup",access:"public",value:"left",options:{label:"Alignment",values:[{label:"Left",value:"left",icon:"vcv-ui-icon-attribute-alignment-left"},{label:"Center",value:"center",icon:"vcv-ui-icon-attribute-alignment-center"},{label:"Right",value:"right",icon:"vcv-ui-icon-attribute-alignment-right"}]}},metaBackendLabels:{type:"group",access:"protected",value:[{value:["clickableOptions"]},{value:["image"]}]},metaCustomId:{type:"customId",access:"public",value:"",options:{label:"Element ID",description:"Apply unique Id to element to link directly to it by using #your_id (for element id use lowercase input only)."}},tag:{access:"protected",type:"string",value:"singleImage"},metaPublicJs:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"zoom"}}},libPaths:["public/dist/singleImage.min.js"]}]}},sharedAssetsLibrary:{access:"protected",type:"string",value:{libraries:[{rules:{clickableOptions:{rule:"value",options:{value:"lightbox"}}},libsNames:["lightbox"]},{rules:{clickableOptions:{rule:"value",options:{value:"zoom"}}},libsNames:["zoom"]},{rules:{clickableOptions:{rule:"value",options:{value:"photoswipe"}}},libsNames:["photoswipe"]}]}}}}},[["./singleImage/index.js"]]]);
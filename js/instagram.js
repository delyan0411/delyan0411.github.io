define([], function (){

	var _collection = [];
	var _count = 0;

	var insData = [{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2317.JPG","text":"大雨之后","y":2015,"m":6},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2316.JPG","text":"一脸无辜的王尼玛大哥，从肚腩来看，果然是正品？","y":2015,"m":6},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2315.JPG","text":"感觉迷上风筝了。有次做梦，想到一根根拉伸向上的线，像是在钓空中的鱼。而一个技术娴熟的“渔夫”，收杆时是这么干净利落。","y":2015,"m":6},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2314.JPG","text":"起飞","y":2015,"m":6},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2313.JPG","text":"小萝莉不愿回家，跟奶奶说：“再让我玩会，明天要学钢琴，后天要学跳舞，就来不了这儿玩了。”","y":2015,"m":6},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2312.JPG","text":"风雨欲来","y":2015,"m":5},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2311.JPG","text":"野生海带","y":2015,"m":5},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2310.JPG","text":"要回去啦，再见北流河","y":2015,"m":4},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2309.JPG","text":"灵芝get√","y":2015,"m":4},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2308.JPG","text":"这里的清明是个很重要的节日，子孙们都会回来，跋山涉水，竹排渡江，荒山寻路，凭集体的记忆寻找列祖列宗的宝地，寄哀思，也求福德。一路上可以听他们唠叨旧事，也有超级靠谱的风水科普","y":2015,"m":4},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2307.JPG","text":"为了部落","y":2015,"m":4},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2306.JPG","text":"在清明的山路遇到了天然松香","y":2015,"m":4},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2001.JPG","text":"如果你飞得像月亮这么高，就不会搁浅在树上","y":2015,"m":3},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2002.JPG","text":"喜欢这个季节的天空，你找个草坪一躺，飞机，风筝，鸟儿就都在上边，天气好时还能看到白天的月亮","y":2015,"m":3},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2003.JPG","text":"很多东西随着慢慢长大，变得不像小时候那样盼望热切，比如巧克力麦当劳薯片雪糕。只有对担子粉的爱永远不变的说…","y":2015,"m":2},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2004.JPG","text":"据说是一年一度考验演技的时候…","y":2015,"m":2},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2005.JPG","text":"锈迹斑斑的香炉","y":2015,"m":2},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2006.JPG","text":"回老家了，小时候跟我打过玻璃珠的小伙伴们呢？你们一个在北京，一个在安徽，一个在澳洲，一个我都不知道了…但你们看到玻璃珠的时候，要想起我来啊","y":2015,"m":2},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2007.JPG","text":"草地上遗落的鞋子","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2008.JPG","text":"有位很久没联系的朋友寄来明信片，说：我很少看到海，正如你没见过几次雪","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2009.JPG","text":"深夜总是灵感乍现的最佳时期，只是几个设计方案都没法使自己满意。累了打开窗看到天上有个大月亮，只想用图章工具把它干掉。","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2010.JPG","text":"面朝大海冬暖花开","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2016.JPG","text":"分享日常不正常生活照一张","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2011.JPG","text":"其实我想，那些古老的渔民们，每天看着海岸线的日落日出，肯定是有人想过地球是圆的。而“想法”与“证明”之间，却跨越了一整条麦哲伦航道","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2014.JPG","text":"鱼山鱼海中，只有你，肯安静的趴在65厘米厚的亚克力板子上与我合影，大丑鱼","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2015.JPG","text":"新年单人旅行走起。其实从九洲港码头开始，珠海并没有给人很惊喜的感觉，包括盛名之下的沿海风光与渔女雕塑。倒是交通不通畅，从轮渡到公交都给我带来了许多麻烦。直到，晚上吃烤生蚝的第一口，我又觉得什么事情都是可以原谅的……","y":2015,"m":1},{"src":"http://7xnb2v.com1.z0.glb.clouddn.com/IMG_2017.JPG","text":"2014年最后的阳光","y":2014,"m":12}];

	var render = function(data){

		var ulTmpl = "";

		for(var em in data){
			var liTmpl = "";
			for(var i=0,len=data[em].srclist.length;i<len;i++){
				
				liTmpl += '<li>\
								<div class="img-box">\
									<a class="img-bg" rel="example_group" href="'+data[em].srclist[i]+'" title="'+data[em].text[i]+'"></a>\
									<img lazy-src="'+data[em].srclist[i]+'" alt="">\
								</div>\
							</li>';
			}
			ulTmpl = '<section class="archives album"><h1 class="year">'+data[em].year+'<em>'+data[em].month+'月</em></h1>\
				<ul class="img-box-ul">'+liTmpl+'</ul>\
				</section>'+ ulTmpl;
		}
		$(ulTmpl).appendTo($(".instagram"));

		$(".instagram").lazyload();
		
		$("a[rel=example_group]").fancybox();
	}

	

	var ctrler = function(data){
		var imgObj = {};
		for(var i=0,len=data.length;i<len;i++){
			var y = data[i].y;
			var m = data[i].m;
			var src = data[i].src;
			var text = data[i].text;
			var key = y+""+((m+"").length == 1?"0"+m : m);
			if(imgObj[key]){
				imgObj[key].srclist.push(src);
				imgObj[key].text.push(text);
			}else{
				imgObj[key] = {
					year:y,
					month:m,
					srclist:[src],
					text:[text]
				}
			}
		}
		render(imgObj);
	}

	var getList = function(){
		//$(".open-ins").html("图片来自instagram，正在加载中…");		
		ctrler(insData);
	}
	

	return {
		init:function(){
			getList();
		}
	}
});
var express = require('express');

var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

	app.engine('handlebars',handlebars.engine);
	app.set('view engine','handlebars');

	var fortunes = [
			'Conquer your fears or they will conquer you.- 战胜你的恐惧，别被你的恐惧击败。',
			'Revers need springs. - 河流需要春天唤醒 ',
			'Do not fear what you don`t know - 不去害怕未知的事物',
			'You will have a pleasant surprise. -你将会获得美好的惊喜 ',
			'Whenever possible, keep it simple.- 保持简单，就能成功.',
		];

app.set('port',process.env.PORT || 3000);

//static中间件加在所有路由之前
app.use(express.static(__dirname + '/public'));

//首页和关于页面加上路由
//由于js是单线程执行  一定要注意将函数顺序写对，先执行的先加载运行
app.get('/',function(req,res){
	// res.type('text/plain');
	// res.send('Meadowlark Travel');
	res.render('home');
});

app.get('/about',function(req,res){
	// res.type('text/plain');
	// res.send('About Meadowlark Travel');
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	res.render('about',{fortune:randomFortune});
});

//定制404页面

app.use(function(req,res,next){
	// res.type('text/plain');
	res.status(404);
	// res.send('404 - Not Found');
	res.render('404');
}); 

//定制 500 页面
app.use(function(err,req,res,next){
	console.error(err.stack);
	// res.type('text/plain');
	res.status(500);
	// res.send('500 - Server Error');
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-C to teminate.');
});



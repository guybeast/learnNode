var fortuneCookies = [
	'Conquer your fears or they will conquer you.- 战胜你的恐惧，别被你的恐惧击败。',
	'Revers need springs. - 河流需要春天唤醒 ',
	'Do not fear what you don`t know - 不去害怕未知的事物',
	'You will have a pleasant surprise. -你将会获得美好的惊喜 ',
	'Whenever possible, keep it simple.- 保持简单，就能成功.',
];

exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx];
};
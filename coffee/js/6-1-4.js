var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/header1.jpg'},
				{ src: './img/header2.jpg'},
				// { src: './img/img_03.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/header1.jpg' },
				{ src: './img/header2.jpg' },
				{ src: './img/img_sp_03.jpg' }
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'fade2',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 5000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'random',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});


	$(function(){
		// 変数に要素を入れる
		var open = $('.modal-open1'),
			close = $('.modal-close1'),
			container = $('.modal-container1');
	
		//開くボタンをクリックしたらモーダルを表示する
		open.on('click',function(){	
			container.addClass('active');
			return false;
		});
	
		//閉じるボタンをクリックしたらモーダルを閉じる
		close.on('click',function(){	
			container.removeClass('active');
		});
	
		//モーダルの外側をクリックしたらモーダルを閉じる
		$(document).on('click',function(e) {
			if(!$(e.target).closest('.modal-body1').length) {
				container.removeClass('active');
			}
		});
	});

	$(function(){
		// 変数に要素を入れる
		var open = $('.modal-open2'),
			close = $('.modal-close2'),
			container = $('.modal-container2');
	
		//開くボタンをクリックしたらモーダルを表示する
		open.on('click',function(){	
			container.addClass('active');
			return false;
		});
	
		//閉じるボタンをクリックしたらモーダルを閉じる
		close.on('click',function(){	
			container.removeClass('active');
		});
	
		//モーダルの外側をクリックしたらモーダルを閉じる
		$(document).on('click',function(e) {
			if(!$(e.target).closest('.modal-body2').length) {
				container.removeClass('active');
			}
		});
	});

	$(function(){
		// 変数に要素を入れる
		var open = $('.modal-open3'),
			close = $('.modal-close3'),
			container = $('.modal-container3');
	
		//開くボタンをクリックしたらモーダルを表示する
		open.on('click',function(){	
			container.addClass('active');
			return false;
		});
	
		//閉じるボタンをクリックしたらモーダルを閉じる
		close.on('click',function(){	
			container.removeClass('active');
		});
	
		//モーダルの外側をクリックしたらモーダルを閉じる
		$(document).on('click',function(e) {
			if(!$(e.target).closest('.modal-body3').length) {
				container.removeClass('active');
			}
		});
	});


	$('#menu-button').click(function(){
		$('.gnav-sp-wrap').fadeToggle(500);
	});
	$(".gnav-sp a").click(function(){
		$('.gnav-sp-wrap').fadeToggle(500);
	});
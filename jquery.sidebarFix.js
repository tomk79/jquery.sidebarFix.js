/**
 * jquery.sidebarFix.js
 * version 1.0.0
 * @author Tomoya Koyanagi <tomk79@gmail.com>
 */
(function($){

	var _sidebars = [];
	var lastScrollTop = 0;
	var scrollDirection = 0;
	var lastScrollDirection = 0;

	/**
	* sidebarFix();
	*/
	$.fn.sidebarFix = function( opt ){
		_sidebars.push(this);
		this.sidebarFixData = opt;
		this
			.css('overflow','hidden')
			.css('position','static')
			.css('left', 0 )
			.css('top', 0 )
			.css('width', 'auto' )
		;
		this.sidebarFixData.apply = true;
		if( this.height() >= opt.frame.height() ){
			// console.log('this と frame が同じ高さ。');
			this.sidebarFixData.apply = false;
		}
		if( this.offset().top != opt.frame.offset().top ){
			// console.log('offsetTop が 等価ではない。');
			this.sidebarFixData.apply = false;
		}

		updateStatus(this);
	}

	/**
	 * update status
	 */
	function updateStatus(_this){
		if( !_this.sidebarFixData.apply ){
			return;
		}

		var frameOffsetScrollTop = _this.sidebarFixData.frame.offset().top + _this.height();
		var scrollUnder = $(window).height() + $(window).scrollTop();
		var areaUnder = _this.offset().top + _this.height()
		var frameUnder = _this.sidebarFixData.frame.offset().top + _this.sidebarFixData.frame.height();


		// if( $(window).scrollTop() >= _this.offset().top && scrollUnder <= areaUnder ){
		// 	console.log('途中にいます。');
		// }
		if( $(window).scrollTop() < _this.sidebarFixData.frame.offset().top ){
			// スクロール位置が frame より上な場合
			_this
				.css('position','static')
				.css('left', 0 )
				.css('top', 0 )
				.css('width', 'auto' )
			;

		}else if( frameUnder <= $(window).scrollTop()+_this.height() && frameUnder <= scrollUnder ){
			// 一番下までスクロールしちゃってる場合
			_this
				.css('position','static')
				.css('left', 0 )
				.css('top', _this.sidebarFixData.frame.height() - _this.height() )
				.css('width', 'auto' )
				.css('width', _this.width() )
				.css('position','relative')
			;

		}else if( $(window).scrollTop() >= _this.offset().top && scrollUnder <= areaUnder && _this.css('position') == 'relative' ){
			// console.log('画面に収まってなくてposition:relative;');

		}else if( scrollDirection < 0 && lastScrollDirection > 0 && $(window).scrollTop() >= _this.offset().top && scrollUnder <= areaUnder ){
			// 上向き(に、切り替わって一発目)
			if( _this.css('position') == 'fixed' ){
				// console.log('上向き(に、切り替わって一発目)');
				var tmpTop = _this.offset().top - _this.sidebarFixData.frame.offset().top;
				_this
					.css('position','static')
					.css('left', 0 )
					.css('top', tmpTop )
					.css('width', 'auto' )
					.css('width', _this.width() )
					.css('position','relative')
				;
			}

		}else if( scrollDirection > 0 && lastScrollDirection < 0 && $(window).scrollTop() >= _this.offset().top && scrollUnder <= areaUnder ){
			// 下向き(に、切り替わって一発目)
			if( _this.css('position') == 'fixed' ){
				// console.log('下向き(に、切り替わって一発目)');
				var tmpTop = _this.offset().top - _this.sidebarFixData.frame.offset().top;
				_this
					.css('position','static')
					.css('left', 0 )
					.css('top', tmpTop )
					.css('width', 'auto' )
					.css('width', _this.width() )
					.css('position','relative')
				;
			}

		}else if( scrollDirection < 0 ){
			// 上向き(継続的)

			if( frameUnder - _this.height() - $(window).scrollTop() >= 0 && $(window).scrollTop() > _this.sidebarFixData.frame.offset().top ){
				if( _this.css('position') != 'fixed' ){
					_this
						.css('position','static')
						.css('left', _this.offset().left )
						.css('top', 0 )
						.css('width', 'auto' )
						.css('width', _this.width() )
						.css('position','fixed')
					;
				}

			}

		}else if( scrollDirection > 0 ){
			// 下向き(継続的)
			if( _this.height() <= $(window).height() ){
				_this
					.css('position','static')
					.css('left', _this.offset().left )
					.css('top', 0 )
					.css('width', 'auto' )
					.css('width', _this.width() )
					.css('position','fixed')
				;

			}else if( frameOffsetScrollTop <= scrollUnder ){
				_this
					.css('position','static')
					.css('left', _this.offset().left )
					.css('top', $(window).height() - _this.height() )
					.css('width', 'auto' )
					.css('width', _this.width() )
					.css('position','fixed')
				;
			}


		}

	}

	/**
	 * update layout
	 */
	function updateLayout(){
		var tmpList = _sidebars;
		_sidebars = [];
		for( var row in tmpList ){
			tmpList[row].sidebarFix( {frame: tmpList[row].sidebarFixData.frame} );
		}
		return true;
	}

	/**
	 * On window resized.
	 */
	$(window).resize(function(e){
		updateLayout();
		return true;
	});

	/**
	 * On window scrolled.
	 */
	$(window).scroll(function(e){
		scrollDirection = $(window).scrollTop()-lastScrollTop;
		for( var row in _sidebars ){
			updateStatus(_sidebars[row]);
		}
		lastScrollTop = $(window).scrollTop();
		lastScrollDirection = scrollDirection;
		return true;
	});

})(jQuery);

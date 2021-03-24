# sidebarFix.js

サイドバーをブラウザの表示エリア内に固定するライブラリです。ブラウザで動作します。
サイドバーが画面の高さよりも長い場合でも、サイドバーの全体が見きれないように自動的に位置を調整します。

jQueryプラグイン版 `jquery.sidebarFix.js` と、jQueryを内蔵したスタンドアローン版 `sidebarFix.js` を同梱しています。


## 使い方 - Usage

### jQuery プラグインとして使う - Using as a jQuery Plugin

```html
<!doctype html>
<html>
	<head>
		<title>jquery.sidebarFix.js SAMPLE</title>
	</head>
	<body>
		<div class="header">
			header
		</div>
		<div class="sidebar-fix-container">
			<div class="column1">
				Contents Area
			</div>
			<div class="column2">
				<div class="sidebar-fix">
					Sidebar
				</div>
			</div>
		</div>
		<div class="footer">
			footer
		</div>

		<!-- jQuery required -->
		<script src="sample_files/jquery-3.6.0.min.js" type="text/javascript"></script>

		<!-- loading jquery.sidebarFix.js -->
		<script src="jquery.sidebarFix.js" type="text/javascript"></script>

		<script type="text/javascript">
			$(window).on('load', function(){
				// .sidebar-fix を固定します
				$('.sidebar-fix').sidebarFix({
					frame: $('.sidebar-fix-container'), // .sidebar-fix-container の上下を基準にフィットさせます
					topBuffer: 100, // スクロールに対して常に上に隙間をとる場合に指定。(固定ヘッダーがある場合など)
					force: true // 強制的に固定します。固定座標がズレる場合に指定すると、矯正的に補正します。
				});
			});
		</script>
	</body>
</html>
```


### スタンドアローンで使う - Using without jQuery

```html
<!doctype html>
<html>
	<head>
		<title>sidebarFix.js SAMPLE</title>
	</head>
	<body>
		<div class="header">
			header
		</div>
		<div class="sidebar-fix-container">
			<div class="column1">
				Contents Area
			</div>
			<div class="column2">
				<div class="sidebar-fix">
					Sidebar
				</div>
			</div>
		</div>
		<div class="footer">
			footer
		</div>

		<!-- loading sidebarFix.js -->
		<script src="sidebarFix.js" type="text/javascript"></script>

		<script type="text/javascript">
			window.addEventListener('load', function(){
				// .sidebar-fix を固定します
				sidebarFix('.sidebar-fix', {
					frame: $('.sidebar-fix-container'),
					topBuffer: 100,
					force: true
				});
			});
		</script>
	</body>
</html>
```


### npm パッケージで使う - Using as a npm package

```js
const sidebarFix = require('@tomk79/sidebar-fix');

// .sidebar-fix を固定します
sidebarFix('.sidebar-fix', {
	frame: $('.sidebar-fix-container'),
	topBuffer: 100,
	force: true
});
```



## 既知の問題 - Known problem

- サイドバーを固定するために、 `position: fixed` が設定されます。サイドバーが `position: fixed` のときの包含ブロックにネストされている場合、固定位置がズレることがあります。\
	- `force` オプションを `true` にすることで解決できる場合があります。
	- 包含ブロックについては [こちら](https://developer.mozilla.org/ja/docs/Web/CSS/Containing_block) を参照してください。


## 変更履歴 - Change log

### sidebarFix.js v1.2.0 (2021-03-24)

- スタンドアローン版(jQuery内蔵)を追加。
- npm でインストールできるようになった。

### jquery.sidebarFix.js v1.1.1 (2021-03-22)

- サイドバーの幅が狭くされることがある問題を修正。
- オプション `force` を追加。
- Firefox で、サイドバーが追従しない場合がある不具合を修正。

### jquery.sidebarFix.js v1.1.0 (2016-12-06)

- オプション `topBuffer` を追加。

### jquery.sidebarFix.js v1.0.2 (2013-07-18)

- サイドバーを固定しないパターンの時に、overflow を visible に戻すようにした。

### jquery.sidebarFix.js v1.0.1 (2013-07-11)

- サイドバーが static の状態(=もとの位置にある状態)のときに、途中までスクロールダウンしてから少し上に戻ると、位置がずれる不具合を修正。


### jquery.sidebarFix.js v1.0.0 (2013-07-11)

- initial release.

## ライセンス - License

MIT License

## 作者 - Author

- Tomoya Koyanagi <tomk79@gmail.com>
- website: <https://www.pxt.jp/>
- Twitter: @tomk79 <https://twitter.com/tomk79/>

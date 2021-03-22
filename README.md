# jquery.sidebarFix.js

このjQueryプラグインは、サイドバーをブラウザの表示エリア内に固定するプラグインです。
サイドバーが画面の高さよりも長い場合でも、下の方のボタンが見きれないように自動的に位置を調整します。

## 使い方 - Usage

```html

<!doctype html>
<html>
	<head>
		<title>jquery.sidebarFix.js SAMPLE</title>
	</head>
	<body>
		<div class="header">
			header
		</div><!-- /.header -->
		<div class="outline">
			<div class="middle">
				<div class="column1">
					<h1>jquery.sidebarFix.js SAMPLE</h1>
					<div id="content" class="contents">

						コンテンツエリア

					</div><!-- /#content -->
				</div><!-- /.column1 -->
				<div class="column2">
					<div class="jq_sidebar_fix">

						<div class="localnavi">
							サイドバー
						</div><!-- /.localnavi -->

					</div><!-- /.jq_sidebar_fix -->
				</div><!-- /.column2 -->
			</div><!-- /.middle -->
		</div><!-- /.outline -->
		<div class="footer">
			footer
		</div><!-- /.footer -->

		<!-- jQuery required -->
		<script src="sample_files/jquery-3.6.0.min.js" type="text/javascript"></script>

		<!-- loading sidebarFix.js -->
		<script src="jquery.sidebarFix.js" type="text/javascript"></script>

		<script type="text/javascript">
			$(window).on('load', function(){
				// .jq_sidebar_fix を固定します
				$('.jq_sidebar_fix').sidebarFix({
					frame: $('.middle'), // .middle の上下を基準にフィットさせます
					topBuffer: 100 // スクロールに対して常に上に隙間をとる場合に指定。(固定ヘッダーがある場合など)
				});
			});
		</script>
	</body>
</html>
```

## 変更履歴 - Change log

### jquery.sidebarFix.js@1.1.1 (リリース日未定)

- Firefox で、サイドバーが追従しない場合がある不具合を修正。

### jquery.sidebarFix.js@1.1.0 (2016-12-06)

- オプション `topBuffer` を追加。

### jquery.sidebarFix.js@1.0.2 (2013-07-18)

- サイドバーを固定しないパターンの時に、overflow を visible に戻すようにした。

### jquery.sidebarFix.js@1.0.1 (2013-07-11)

- サイドバーが static の状態(=もとの位置にある状態)のときに、途中までスクロールダウンしてから少し上に戻ると、位置がずれる不具合を修正。


### jquery.sidebarFix.js@1.0.0 (2013-07-11)

- initial release.

## ライセンス - License

MIT License

## 作者 - Author

- Tomoya Koyanagi <tomk79@gmail.com>
- website: <https://www.pxt.jp/>
- Twitter: @tomk79 <https://twitter.com/tomk79/>

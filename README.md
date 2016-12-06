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
		<script src="sample_files/jquery-1.10.1.min.js" type="text/javascript"></script>

		<!-- loading sidebarFix.js -->
		<script src="jquery.sidebarFix.js" type="text/javascript"></script>

		<script type="text/javascript">
			$(window).load(function(){
				// .jq_sidebar_fix を固定します
				$('.jq_sidebar_fix').sidebarFix({
					frame: $('.middle') // .middle の上下を基準にフィットさせます

				});
			});
		</script>
	</body>
</html>
```

## ライセンス - License

MIT License

## 作者 - Author

- Tomoya Koyanagi <tomk79@gmail.com>
- website: <http://www.pxt.jp/>
- Twitter: @tomk79 <http://twitter.com/tomk79/>

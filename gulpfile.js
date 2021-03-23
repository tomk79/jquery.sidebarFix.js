let gulp = require('gulp');
let sass = require('gulp-sass');//CSSコンパイラ
let plumber = require("gulp-plumber");//コンパイルエラーが起きても watch を抜けないようになる
let concat = require('gulp-concat');//ファイルの結合ツール
let rename = require("gulp-rename");//ファイル名の置き換えを行う
let webpack = require('webpack');
let webpackStream = require('webpack-stream');

// Webpack: sidebarFix.js を処理
gulp.task("webpack:sidebarFix.js", function() {
	return webpackStream({
		mode: 'production',
		entry: "./src/sidebarFix.webpack.js",
		output: {
			filename: "sidebarFix.js"
		},
		module:{
			rules:[
				{
					test:/\.html$/,
					use:['html-loader']
				},
				{
					test: /\.(jpg|png)$/,
					use: ['url-loader']
				}
			]
		}
	}, webpack)
		.pipe(plumber())
		.pipe(gulp.dest( './dist/' ))
		.pipe(concat('sidebarFix.js'))
	;
});

// Webpack: jquery.sidebarFix.js を処理
gulp.task("webpack:jquery.sidebarFix.js", function() {
	return webpackStream({
		mode: 'production',
		entry: "./src/jquery.sidebarFix.webpack.js",
		output: {
			filename: "jquery.sidebarFix.js"
		},
		module:{
			rules:[
				{
					test:/\.html$/,
					use:['html-loader']
				},
				{
					test: /\.(jpg|png)$/,
					use: ['url-loader']
				}
			]
		}
	}, webpack)
		.pipe(plumber())
		.pipe(gulp.dest( './dist/' ))
		.pipe(concat('jquery.sidebarFix.js'))
	;
});



let _tasks = gulp.parallel(
	'webpack:sidebarFix.js',
	'webpack:jquery.sidebarFix.js'
);

// src 中のすべての拡張子を監視して処理
gulp.task("watch", function() {
	return gulp.watch(["src/**/*"], _tasks);
});


// src 中のすべての拡張子を処理(default)
gulp.task("default", _tasks);


module.exports = {
	publicPath: './',
	productionSourceMap: process.env.NODE_ENV === 'production' ? false : true, // 打包后隐藏源码
}
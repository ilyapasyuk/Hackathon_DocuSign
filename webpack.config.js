const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const ENV = {
    PRODUCTION: 'production',
    DEVELOPMENT: 'development',
}

const config = {
    entry: {
        app: './src/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[chunkhash].chunk.js',
        filename: '[name].js',
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'lib',
                    chunks: 'initial',
                    minSize: 1,
                },
            },
        },
        minimizer: [],
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.ejs',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true,
            },
        }),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [path.resolve(__dirname, 'src')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ['@babel/plugin-proposal-decorators', { legacy: true }],
                            ['@babel/plugin-proposal-class-properties', { loose: true }],
                        ],
                    },
                },
            },
            {
                test: /\.html$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true,
                            conservativeCollapse: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: './assets/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'src/Components/'),
        },
    },
}

if (process.env.NODE_ENV === ENV.PRODUCTION) {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
    const TerserPlugin = require('terser-webpack-plugin')
    const Autoprefixer = require('autoprefixer')
    const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

    config.output.filename = '[name]-[chunkhash].js'

    config.plugins.push(
        new MiniCssExtractPlugin({
            filename: 'app-[chunkhash].css',
            chunkFilename: '[id]-[chunkhash].css',
        }),
    )

    config.module.rules.push({
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
            },
            {
                loader: 'postcss-loader',
                options: {
                    autoprefixer: {
                        browsers: ['last 2 versions'],
                    },
                    plugins: () => [Autoprefixer],
                },
            },
        ],
    })

    config.plugins.push(
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, './src/favicon.png'),
            icons: {
                android: false,
                appleIcon: true,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false,
            },
        }),
    )

    config.optimization.minimizer.push(new TerserPlugin())
    config.optimization.minimizer.push(new OptimizeCssAssetsPlugin({}))

    config.optimization.minimize = true
    config.mode = ENV.PRODUCTION
}

if (process.env.NODE_ENV === ENV.DEVELOPMENT) {
    config.module.rules.push({
        test: /\.(scss|css)$/,
        include: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader'],
    })

    config.plugins.push(new webpack.HotModuleReplacementPlugin())

    config.devtool = 'cheap-module-eval-source-map'

    config.mode = ENV.DEVELOPMENT
}

module.exports = config

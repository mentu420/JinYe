const { override, adjustStyleLoaders } = require("customize-cra");

module.exports = override(
    // ...其他配置...
    adjustStyleLoaders(rule => {
        if (rule.test.toString().includes('scss')) {
            rule.use.push({
                loader: require.resolve('sass-resources-loader'),
                options: {
                    resources: './src/assets/styles/variables.scss'
                }
            });
        }
    })
)
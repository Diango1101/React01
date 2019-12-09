/**
 * 默认的一些配置
 * printWidth: 80,
 * tabWidth: 2,
 * useTabs: false
 * quoteProps:as-needed 对象的属性只有需要时才添加引号
 * jsxSingleQuote: false jsx中使用单引号
 * trailingComma: none 数组和对象的尾逗号
 * bracketSpacing: true 对象左右大括号各有一个空格 { foo: bar }
 * jsxBracketSameLine: false jsx中标签多行属性的第一个 > 是单独一行还是在行尾
 * arrowParens: avoid 箭头函数只有一个参数时，尽可能地省略括号
 */
module.exports = {
    singleQuote: true,
    semi: false,
    arrowParens: 'always',
    trailingComma: 'es5', // 是否使用尾逗号，有三个可选值：<none|es5|all>
    tabWidth: 4,
    eslintIntegration: true,
    stylelintIntegration: true,
    tabWidth: 4,
    singleQuote: true,
    semi: false,
}

// 单引号，无分号，箭头函数参数必有括号，尾逗号

module.exports = {
  ignores: [commit => {
    return /init/.test(commit)
  }],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // bug修复
        'docs', // 文档更新
        'style', // 修改样式
        'refactor', // 功能代码重构
        'chore', // 杂事
        'revert', // 恢复回滚
        'build', // 构建
        'perf', // 优化
        'test', // 测试
        'daily' // 日常更新
      ]
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never']
  }
}

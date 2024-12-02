module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['feat', 'fix', 'perf', 'refactor', 'build', 'ci', 'test', 'docs', 'style', 'chore'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    build: {
      description: '影响构建系统或外部依赖关系的更改（示例范围：vite、webpack、npm）',
      emoji: '🔧',
      value: 'build'
    },
    chore: {
      description: '其他不修改src或测试文件的更改',
      emoji: '🤖',
      value: 'chore'
    },
    ci: {
      description: '更改我们的CI配置文件和脚本（示例范围：Github Action、Travis）',
      emoji: '🎡',
      value: 'ci'
    },
    docs: {
      description: '仅文档更改',
      emoji: '📚',
      value: 'docs'
    },
    feat: {
      description: '新功能',
      emoji: '✨️',
      value: 'feat'
    },
    fix: {
      description: '缺陷修复',
      emoji: '🐛',
      value: 'fix'
    },
    perf: {
      description: '提高性能的代码更改',
      emoji: '🚀',
      value: 'perf'
    },
    refactor: {
      description: '既不修复错误也不添加功能的代码重构',
      emoji: '📦',
      value: 'refactor'
    },
    revert: {
      description: '还原之前的提交',
      emoji: '↪️',
      value: 'revert'
    },
    style: {
      description: '不影响代码含义的更改（空格、格式、缺少分号等）',
      emoji: '🎨',
      value: 'style'
    },
    test: {
      description: '添加缺失的测试或更正现有测试',
      emoji: '🚨',
      value: 'test'
    },
    messages: {
      type: '选择你要提交的更改类型:',
      customScope: '选择此组件影响的范围:',
      subject: '编写一个简短的、祈使语气的变更描述:\n',
      body: '提供变更的更长描述:\n ',
      breaking: '列出任何破坏性变更:\n',
      footer: '此提交关闭的问题，例如 #123:',
      confirmCommit: '此提交影响的包\n'
    }
  }
}

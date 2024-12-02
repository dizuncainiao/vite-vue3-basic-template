import { RuleConfigCondition, RuleConfigSeverity, TargetCaseType } from '@commitlint/types'

export default {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
    'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100] as const,
    'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'] as const,
    'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100] as const,
    'header-max-length': [RuleConfigSeverity.Error, 'always', 100] as const,
    'header-trim': [RuleConfigSeverity.Error, 'always'] as const,
    'subject-case': [
      RuleConfigSeverity.Error,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ] as [RuleConfigSeverity, RuleConfigCondition, TargetCaseType[]],
    'subject-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'] as const,
    'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'] as const,
    'type-empty': [RuleConfigSeverity.Error, 'never'] as const,
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
    ] as [RuleConfigSeverity, RuleConfigCondition, string[]]
  },
  prompt: {
    questions: {
      type: {
        description: '选择你要提交的更改类型',
        enum: {
          build: {
            description: '影响构建系统或外部依赖关系的更改（示例作用域：gulp、broccoli、npm）',
            title: 'Builds',
            emoji: '🛠️'
          },
          chore: {
            description: '其他不修改src或测试文件的更改',
            title: 'Chores',
            emoji: '🤖'
          },
          ci: {
            description:
              '更改我们的CI配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）',
            title: 'Continuous Integrations',
            emoji: '🎡'
          },
          docs: {
            description: '仅文档更改',
            title: 'Documentation',
            emoji: '📚'
          },
          feat: {
            description: '新功能',
            title: 'Features',
            emoji: '✨'
          },
          fix: {
            description: '缺陷修复',
            title: 'Bug Fixes',
            emoji: '🐛'
          },
          perf: {
            description: '提高性能的代码更改',
            title: 'Performance Improvements',
            emoji: '🚀'
          },
          refactor: {
            description: '既不修复错误也不添加功能的代码更改',
            title: 'Code Refactoring',
            emoji: '📦'
          },
          revert: {
            description: '还原之前的提交',
            title: 'Reverts',
            emoji: '↪️'
          },
          style: {
            description: '不影响代码含义的更改（空格、格式、缺少分号等）',
            title: 'Styles',
            emoji: '🎨'
          },
          test: {
            description: '添加缺失的测试或更正现有测试',
            title: 'Tests',
            emoji: '🚨'
          }
        }
      },
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）'
      },
      subject: {
        description: '写一篇简短的、祈使时态的变化描述'
      },
      body: {
        description: '提供更详细的变更说明'
      },
      isBreaking: {
        description: '是否有任何破坏性变更？'
      },
      breakingBody: {
        description: '破坏性变更的提交需要正文。请输入关于此次提交的详细描述。'
      },
      breaking: {
        description: '描述破坏性变更'
      },
      isIssueAffected: {
        description: '此变更是否影响任何开放的 issues？'
      },
      issuesBody: {
        description: '如果 issues 已关闭，提交需要正文。请输入关于此次提交的详细描述。'
      },
      issues: {
        description: `添加 issues 引用（例如 'fix #123', 're #123'）`
      }
    }
  }
}

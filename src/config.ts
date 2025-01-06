import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '马小酷の笔记',
  subtitle: '探索、实践、分享每一步成长的足迹！',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th' （语言设置）
  themeColor: {
    hue: 250,         // 主题色的默认色调，从 0 到 360。例如：红色是 0，蓝绿色是 200，青色是 250，粉色是 345
    fixed: false,     // 隐藏主题颜色选择器供访客使用
  },
  banner: {
    enable: true,
    src: 'assets/images/demo-banner.png',   // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
    position: 'center',      // 等同于 object-position，只支持 'top'、'center'、'bottom'，默认为 'center'
    credit: {
      enable: false,         // 是否显示横幅图像的版权信息
      text: '',              // 显示的版权文本
      url: ''                // （可选）原作品或艺术家的页面 URL 链接
    }
  },
  toc: {
    enable: true,           // 是否在文章右侧显示目录
    depth: 2                // 显示目录的最大标题深度，范围从 1 到 3
  },
  favicon: [    // 如果此数组为空，将使用默认的 favicon
    // {
    //   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
    //   theme: 'light',              // （可选）可设置为 'light' 或 'dark'，仅在你为浅色和深色模式设置不同 favicon 时使用
    //   sizes: '32x32',              // （可选）favicon 的大小，仅在有不同尺寸的 favicon 时使用
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: '网盘',
      url: 'https://cloud.maxiaoku.com',     // 内部链接不应包含基础路径，因为它会自动添加
      external: true,                               // 显示外部链接图标，并将在新标签页中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png',  // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
  name: '马小酷',
  bio: '探索、实践、分享每一步成长的足迹！',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',       // 访问 https://icones.js.org/ 获取图标代码
                                        // 如果尚未包含相应的图标集，你需要安装对应的图标集
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'https://twitter.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://store.steampowered.com',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/fuwari',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}

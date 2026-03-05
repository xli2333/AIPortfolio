"use client"

import { useLanguage } from "@/components/language-provider"

const PAGE_COPY = {
  zh: {
    roleLabel: "角色",
    typeLabel: "类型",
    tryLink: "立即试用",
    clickToEnlarge: "点击放大",
    featureDescription: "能力释义",
    sections: {
      core: "[00] 核心能力",
      pain: "[01] 用户痛点",
      journey: "[02] 用户路径与方案",
      features: "[03] 产品能力",
      impact: "[04] 业务影响",
      flow: "[05] 用户流程手册",
      philosophy: "[06] 设计哲学",
    },
    flowTitle: "产品交互与使用流",
    designPhilosophyTitle: "产品设计底层逻辑",
    sceneActionLabel: "场景动作",
    productDesignLabel: "产品设计",
    userActionLabel: "用户动作",
    designLogicLabel: "设计逻辑",
    pathLabel: (index: number) => `路径 ${["A", "B", "C"][index] ?? index + 1}`,
    resultLabel: "结果",
  },
  en: {
    roleLabel: "Role",
    typeLabel: "Type",
    tryLink: "Try Live Project",
    clickToEnlarge: "Click to Enlarge",
    featureDescription: "Feature Description",
    sections: {
      core: "[00] Core Capabilities",
      pain: "[01] User Pain Points",
      journey: "[02] User Journey & Solutions",
      features: "[03] Product Features",
      impact: "[04] Business Impact",
      flow: "[05] User Flow Manual",
      philosophy: "[06] Design Philosophy",
    },
    flowTitle: "Product Interaction Flow",
    designPhilosophyTitle: "Product Design Principles",
    sceneActionLabel: "Scenario Action",
    productDesignLabel: "Design Evidence",
    userActionLabel: "User Action",
    designLogicLabel: "Design Logic",
    pathLabel: (index: number) => `Path ${["A", "B", "C"][index] ?? index + 1}`,
    resultLabel: "Result",
  },
} as const

export function useProjectPageCopy() {
  const { locale } = useLanguage()
  return PAGE_COPY[locale]
}

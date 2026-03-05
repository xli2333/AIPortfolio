"use client"

import { useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { toEnglishSafeText } from "@/lib/localize"

const ATTRIBUTES_TO_SANITIZE = ["aria-label", "title", "placeholder", "alt"]
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT"])

function sanitizeTextNodes(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let node: Node | null = walker.nextNode()

  while (node) {
    const parentTag = node.parentElement?.tagName
    if (parentTag && !SKIP_TAGS.has(parentTag) && node.nodeValue) {
      node.nodeValue = toEnglishSafeText(node.nodeValue)
    }
    node = walker.nextNode()
  }
}

function sanitizeAttributes(root: Element) {
  const elements = [root, ...Array.from(root.querySelectorAll("*"))]
  elements.forEach((element) => {
    ATTRIBUTES_TO_SANITIZE.forEach((attr) => {
      const value = element.getAttribute(attr)
      if (value) {
        element.setAttribute(attr, toEnglishSafeText(value))
      }
    })
  })
}

export function EnglishTextGuard() {
  const { locale } = useLanguage()

  useEffect(() => {
    if (locale !== "en") return

    const root = document.body
    sanitizeTextNodes(root)
    sanitizeAttributes(root)
  }, [locale])

  return null
}

// This code is created by ChatGPT

'use client'

import { useEffect, useState } from "react"

export function ScrambleTextAnimation({
  text,
  duration = 1000,
  ...props
}: {
  text: string
  duration?: number
} & React.ComponentProps<'span'>) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let frameId: number
    let startTime: number | null = null

    const animate = (time: number) => {
      if (startTime === null) startTime = time

      const progress = Math.min((time - startTime) / duration, 1)
      const resolvedCount = Math.floor(progress * text.length)

      const result = [...text].map((char, index) => {
        if (char === " ") return " "
        if (index < resolvedCount) return char

        return characters[
          Math.floor(Math.random() * characters.length)
        ]
      })

      setDisplayText(result.join(""))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setDisplayText(text)
      }
    }

    setDisplayText(
      [...text]
        .map((char) =>
          char === " "
            ? " "
            : characters[Math.floor(Math.random() * characters.length)]
        )
        .join("")
    )

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [text, duration, characters])

  return <span {...props}>{displayText}</span>
}

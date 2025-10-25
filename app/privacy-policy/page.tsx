import fs from 'fs'
import path from 'path'
import { PrivacyPolicyClient } from '@/app/privacy-policy/privacy-policy-client'

export default function PrivacyPolicyPage() {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), '/content/privacy-policy.md'),
    'utf-8'
  )

  return <PrivacyPolicyClient markdown={markdown} />
}


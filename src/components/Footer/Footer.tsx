import { NavLink } from '@/types'
import React from 'react'
import { FooterContainer, GroupContainer, GroupLink } from './Footer.styles'
import Link from 'next/link'

export type FooterGroup = {
  name: string
  links: NavLink[]
}

export type FooterProps = {
  groups: FooterGroup[]
}
export const Footer: React.FC<FooterProps> = ({ groups }) => {
  return (
    <FooterContainer>
      {groups.map(group => (
        <GroupContainer key={`footer-group-${group.name}`}>
          <h2>{group.name}</h2>
          {group.links.map(link => (
            <GroupLink
              key={`footer-link-${group.name}-${link.label}-${link.to}`}
            >
              <Link href={link.to}>{link.label}</Link>
            </GroupLink>
          ))}
        </GroupContainer>
      ))}
    </FooterContainer>
  )
}

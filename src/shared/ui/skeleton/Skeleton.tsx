import { FC } from 'react'
import styles from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
}

export const Skeleton: FC<SkeletonProps> = ({ className = '' }) => {
  return <div className={`${styles.skeleton} ${className}`} aria-hidden="true" />
}

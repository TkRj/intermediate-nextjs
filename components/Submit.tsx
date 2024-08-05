'use client'
import React from 'react'
import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

type Props = {
  label: string
}
const Submit = ({ label, ...btnProps }: Props) => {
  const { pending } = useFormStatus()
  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  )
}

export default Submit

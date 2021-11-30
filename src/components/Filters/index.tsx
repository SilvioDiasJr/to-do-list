import React, { useState } from 'react'

import { Button, Container } from './styles'

type Filter = 'active' | 'all' | 'completed'

interface Props {
  onFilters: (filters: string) => void
}

export const Filters: React.FC<Props> = ({ onFilters }) => {
  const [filters, setFilters] = useState<Filter>('all')

  function handleFilters(value: Filter) {
    setFilters(value)
    onFilters(value)
  }

  return (
    <Container>
      <Button
        active={filters === 'all'}
        onClick={() => handleFilters('all')}
      >
        Todas
      </Button>

      <Button
        active={filters === 'active'}
        onClick={() => handleFilters('active')}
      >
        Ativas
      </Button>

      <Button
        active={filters === 'completed'}
        onClick={() => handleFilters('completed')}
      >
        Completas
      </Button>
    </Container>
  )
}
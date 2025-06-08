'use client'

import { PropertyFilters } from "@/domain/model/property-model"
import { createContext, ReactNode, useContext, useState } from "react"
import { z } from 'zod'
import { filterSchema } from "../utils/schema"

type Props = {
  children: ReactNode
}

type FilterT = z.infer<typeof filterSchema>

const filterDefaultValues = filterSchema.parse({})

type FilterContextT = {
  filter: PropertyFilters
  preFilter: FilterT
  cleanFilter: () => void
  applyFilter: () => void
  applyValue: (key: string, value: any) => void
}

const FilterContext = createContext<FilterContextT | undefined>(undefined)

export function FilterProvider({ children }: Props) {
  const [filter, setFilter] = useState<PropertyFilters>({})
  const [preFilter, setPreFilter] = useState(filterDefaultValues)

  function applyFilter() {
    setFilter(preFilter)
  }

  function applyValue(key: string, value: any) {
    setPreFilter((prev) => ({ ...prev, [key]: value }))
  }

  function cleanFilter() {
    setFilter({})
    setPreFilter(filterDefaultValues)
  }

  return (
    <FilterContext.Provider value={{filter, preFilter, applyFilter, applyValue, cleanFilter}}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilter deve ser usado dentro do FilterProvider')
  }
  return context
}
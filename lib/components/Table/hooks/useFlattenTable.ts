import { useState, useEffect } from 'react'
import { getMetadata, flattenData } from 'utils/pathMap'

function useFlattenTable<T>(data: T, paths: string[]) {
  const [flattened, setFlattened] = useState()
}

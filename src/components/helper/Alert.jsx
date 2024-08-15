import React from 'react'
import { Snackbar } from '@mui/material'
import { useApp } from '@/app/ApolloWrapper'
const Alert = () => {
  const { globalMsg, setGlobalMsg } = useApp()

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'top'
        }}
        open={Boolean(globalMsg)}
        autoHideDuration={3000}
        onClose={() => setGlobalMsg(null)}
        message={globalMsg}
      />
    </div>
  )
}

export default Alert
